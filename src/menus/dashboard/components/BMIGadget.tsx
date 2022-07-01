import { CardMedia, useTheme } from "@mui/material";
import { FC } from "react";
import { LabelList, Line, LineChart, YAxis } from "recharts";
import GadgetCard from "../../../components/GadgetCard";
import { HistoryDashboardData } from "../types";
import { useClosetDomain } from "../utils";

const styles = {
    content: {
        display: "flex",
        justifyContent: "center",
    },
};

interface BMIGadgetProps {
    value?: HistoryDashboardData[];
}

const BMIGadget: FC<BMIGadgetProps> = (props) => {
    const theme = useTheme();
    const { value = [] } = props;

    const yDomain = useClosetDomain<HistoryDashboardData>(value, "bmi");

    return (
        <GadgetCard title="BMI">
            <CardMedia sx={styles.content}>
                <LineChart
                    width={260}
                    height={100}
                    data={value}
                    margin={{
                        top: parseInt(theme.spacing(2)),
                        right: parseInt(theme.spacing(2)),
                        bottom: parseInt(theme.spacing(3)),
                        left: parseInt(theme.spacing(2)),
                    }}
                >
                    <YAxis hide domain={yDomain} />
                    <Line
                        dataKey="bmi"
                        stroke={theme.palette.primary.main}
                        type="monotone"
                    >
                        <LabelList
                            dataKey="bmi"
                            position="insideBottom"
                            fontSize="0.6rem"
                        />
                    </Line>
                </LineChart>
            </CardMedia>
        </GadgetCard>
    );
};

export default BMIGadget;
