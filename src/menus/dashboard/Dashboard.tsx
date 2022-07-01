import { Container, Grid } from "@mui/material";
import { parse } from "date-fns";
import { FC, useEffect, useState } from "react";
import { API_DATE_FORMAT, BACKUP_DATE } from "../../constants/date";
import BMIGadget from "./components/BMIGadget";
import FatGadget from "./components/FatGadget";
import MuscleGadget from "./components/MuscleGadget";
import NoRecordGadget from "./components/NoRecordGadget";
import ScoreGadget from "./components/ScoreGadget";
import WeightGadget from "./components/WeightGadget";
import { apiData } from "./mock";
import { HistoryDashboardData } from "./types";

const styles = {
    root: {
        pt: 4,
    },
};

const Dashboard: FC = () => {
    const [data, setData] = useState<HistoryDashboardData[]>();

    useEffect(() => {
        setData(
            apiData.map((item) => ({
                ...item,
                created_date: parse(
                    item.created_date,
                    API_DATE_FORMAT,
                    BACKUP_DATE,
                ),
            })),
        );
    }, []);

    return (
        <Container maxWidth="md" sx={styles.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <WeightGadget value={data} />
                </Grid>
                <Grid item xs={4}>
                    <ScoreGadget value={data} />
                </Grid>

                <Grid item xs={4}>
                    <MuscleGadget value={data} />
                </Grid>
                <Grid item xs={4}>
                    <FatGadget value={data} />
                </Grid>
                <Grid item xs={4}>
                    <BMIGadget value={data} />
                </Grid>
                <Grid item xs={3}>
                    <NoRecordGadget />
                </Grid>
                <Grid item xs={3}>
                    <NoRecordGadget />
                </Grid>
                <Grid item xs={3}>
                    <NoRecordGadget />
                </Grid>
                <Grid item xs={3}>
                    <NoRecordGadget />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
