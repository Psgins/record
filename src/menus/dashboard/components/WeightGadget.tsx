import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    useTheme,
} from "@mui/material";
import { FC } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { HistoryDashboardData } from "../types";
import { useClosetDomain } from "../utils";

interface WeightGadgetProps {
    value?: HistoryDashboardData[];
}

const WeightGadget: FC<WeightGadgetProps> = (props) => {
    const theme = useTheme();
    const { value = [] } = props;

    const yDomain = useClosetDomain<HistoryDashboardData>(value, "weight");

    return (
        <Card>
            <CardContent>
                <Typography variant="overline">Weight</Typography>
            </CardContent>
            <CardMedia>
                <LineChart width={510} height={200} data={value}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis
                        allowDecimals={false}
                        dataKey="weight"
                        domain={yDomain}
                    />
                    <Line
                        type="monotone"
                        dataKey="weight"
                        stroke={theme.palette.primary.main}
                    />
                </LineChart>
            </CardMedia>
        </Card>
    );
};

export default WeightGadget;
