import { CardMedia, useTheme } from "@mui/material";
import { isEmpty } from "lodash";
import { FC, useCallback, useMemo, useState } from "react";
import { LabelList, Line, LineChart, YAxis } from "recharts";
import ChipMenu from "../../../components/ChipMenu";
import GadgetCard from "../../../components/GadgetCard";
import { Colors } from "../../../constants";
import { BODY_PART_OPTIONS } from "../constants";
import { BodyPart, BodyPartData, HistoryDashboardData } from "../types";
import { useClosetDomain } from "../utils";

const styles = {
    content: {
        display: "flex",
        justifyContent: "center",
    },
};

interface FatGadgetProps {
    value?: HistoryDashboardData[];
}

const FatGadget: FC<FatGadgetProps> = (props) => {
    const theme = useTheme();
    const { value } = props;

    const [bodyPart, setBodyPart] = useState<BodyPart>("left_arm");

    const data = useMemo(() => {
        if (!value || isEmpty(value)) return [];
        return value.map((item) => item.fat?.mass);
    }, [value]);

    const yDomain = useClosetDomain<BodyPartData | undefined>(data, bodyPart);

    const handleOnBodyPartChange = useCallback((bodyPart: BodyPart) => {
        setBodyPart(bodyPart);
    }, []);

    return (
        <GadgetCard
            title="Fat"
            headerRight={
                <ChipMenu
                    options={BODY_PART_OPTIONS}
                    value={bodyPart}
                    onChange={handleOnBodyPartChange}
                />
            }
        >
            <CardMedia sx={styles.content}>
                <LineChart
                    width={260}
                    height={100}
                    data={data}
                    margin={{
                        top: parseInt(theme.spacing(2)),
                        right: parseInt(theme.spacing(2)),
                        bottom: parseInt(theme.spacing(3)),
                        left: parseInt(theme.spacing(2)),
                    }}
                >
                    <YAxis hide domain={yDomain} />
                    <Line
                        type="monotone"
                        dataKey={bodyPart}
                        stroke={Colors.watermelon}
                    >
                        <LabelList
                            dataKey={bodyPart}
                            position="insideBottom"
                            fontSize="0.6rem"
                        />
                    </Line>
                </LineChart>
            </CardMedia>
        </GadgetCard>
    );
};

export default FatGadget;
