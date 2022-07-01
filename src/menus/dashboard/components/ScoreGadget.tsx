import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    useTheme,
} from "@mui/material";
import { alpha } from "@mui/system";
import { isEmpty, max, min } from "lodash";
import { FC, useEffect, useMemo, useState } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import { Colors } from "../../../constants";
import { HistoryDashboardData } from "../types";

const styles = {
    cardHeader: {
        pt: 1,
        pb: 0,
        color: Colors.boulder,
    },
    cardGraph: {
        display: "flex",
        justifyContent: "center",
    },
    cardFooter: {
        "&:last-child": {
            display: "flex",
            justifyContent: "center",
            pb: 1,
            color: Colors.boulder,
        },
    },
};

interface ScoreGadgetProps {
    value?: HistoryDashboardData[];
}

const ScoreGadget: FC<ScoreGadgetProps> = (props) => {
    const theme = useTheme();
    const { value } = props;

    const [score, setScore] = useState<number>();
    const [maxScore, setMaxScore] = useState<number>();
    const [minScore, setMinScore] = useState<number>();

    useEffect(() => {
        if (!value || isEmpty(value)) {
            setScore(undefined);
            setMaxScore(undefined);
            setMinScore(undefined);
            return;
        }

        const scoreList = value.map((item) => item.score);

        setScore(value[value.length - 1].score);
        setMaxScore(max(scoreList));
        setMinScore(min(scoreList));
    }, [value]);

    const data = useMemo(() => {
        if (!score) {
            return [];
        }
        return [{ score }, { score: 100 - score }];
    }, [score]);

    return (
        <Card>
            <CardContent sx={styles.cardHeader}>
                <Typography variant="overline">Score</Typography>
            </CardContent>
            <CardMedia sx={styles.cardGraph}>
                <PieChart width={185} height={180}>
                    <Pie
                        isAnimationActive={true}
                        cx="50%"
                        cy="50%"
                        data={data}
                        startAngle={450}
                        endAngle={90}
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="score"
                    >
                        <Cell fill={theme.palette.primary.light} />
                        <Cell fill={alpha(theme.palette.primary.light, 0.1)} />
                        <Label
                            position="center"
                            value={score || "-"}
                            fontSize="3rem"
                            fill={theme.palette.primary.main}
                        />
                    </Pie>
                </PieChart>
            </CardMedia>
            <CardContent sx={styles.cardFooter}>
                <Typography variant="caption">
                    Min: {minScore || "-"} Max: {maxScore || "-"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ScoreGadget;
