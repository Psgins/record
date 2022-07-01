import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { initData } from "./constants";

const styles = {
    header: {
        display: "flex",
        alignItems: "center",
        my: 2,
    },
    breadcrumbs: {
        flexGrow: 1,
    },
    actionBtn: {
        ml: 1,
    },
    container: {
        p: 3,
        mb: 2,
    },
    containerTitle: {
        mb: 2,
    },
    containerInformationCol1: {
        mr: 4,
    },
    containerInformationCol2: {
        ml: 3,
        mr: 4,
    },
    bottomActions: {
        display: "flex",
        justifyContent: "end",
        mb: 2,
    },
};

const HistoryView: FC = () => {
    const nevigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState(initData);

    useEffect(() => {
        setData({ ...initData, weight: "90", bmi: "1234", score: "20" });
    }, []);

    const handleOnCancel = useCallback(() => {
        nevigate("..");
    }, [nevigate]);

    const handleOnDelete = useCallback(() => {
        nevigate("..");
    }, [nevigate]);

    const handleOnEdit = useCallback(() => {
        nevigate(`../edit/${id}`);
    }, [id, nevigate]);

    return (
        <Container maxWidth="md">
            <Box sx={styles.header}>
                <Breadcrumbs
                    separator=">"
                    aria-label="breadcrums"
                    sx={styles.breadcrumbs}
                >
                    <Typography>History</Typography>
                    <Typography>View</Typography>
                    <Typography>{id}</Typography>
                </Breadcrumbs>
                <Box>
                    <Button size="small" onClick={handleOnCancel}>
                        Back
                    </Button>
                    <Button
                        color="warning"
                        variant="contained"
                        size="small"
                        startIcon={<EditIcon />}
                        sx={styles.actionBtn}
                        onClick={handleOnEdit}
                    >
                        Edit
                    </Button>
                    <Button
                        color="error"
                        size="small"
                        startIcon={<DeleteIcon />}
                        sx={styles.actionBtn}
                        variant="contained"
                        onClick={handleOnDelete}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
            <Paper sx={styles.container}>
                <Typography variant="h5" sx={styles.containerTitle}>
                    Generic Information
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Box sx={styles.containerInformationCol1}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography
                                        fontWeight={700}
                                        variant="body1"
                                    >
                                        Weight
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography align="right" variant="body1">
                                        {data.weight}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography align="left" variant="body1">
                                        Kg
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography
                                        fontWeight={700}
                                        variant="body1"
                                    >
                                        Muscle
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography align="right" variant="body1">
                                        40
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography align="left" variant="body1">
                                        Kg
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography
                                        fontWeight={700}
                                        variant="body1"
                                    >
                                        Fat
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography align="right" variant="body1">
                                        40
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography align="left" variant="body1">
                                        Kg
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={6}></Grid>
                                <Grid item xs={5}>
                                    <Typography align="right" variant="body1">
                                        40
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography align="left" variant="body1">
                                        %
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={styles.containerInformationCol2}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography
                                        fontWeight={700}
                                        variant="body1"
                                    >
                                        Calories Burn
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography align="right" variant="body1">
                                        1500
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant="body1">
                                        Kcal
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography
                                        fontWeight={700}
                                        variant="body1"
                                    >
                                        BMI
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography align="right" variant="body1">
                                        {data.bmi}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography
                                        fontWeight={700}
                                        variant="body1"
                                    >
                                        Score
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography align="right" variant="body1">
                                        {data.score}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper sx={styles.container}>
                        <Typography variant="h5" sx={styles.containerTitle}>
                            Muscle (kg)
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={styles.container}>
                        <Typography variant="h5" sx={styles.containerTitle}>
                            Muscle (%)
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper sx={styles.container}>
                        <Typography variant="h5" sx={styles.containerTitle}>
                            Fat (kg)
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={styles.container}>
                        <Typography variant="h5" sx={styles.containerTitle}>
                            Fat (%)
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Box sx={styles.bottomActions}>
                <Button size="small" onClick={handleOnCancel}>
                    Back
                </Button>
                <Button
                    color="warning"
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                    sx={styles.actionBtn}
                    onClick={handleOnEdit}
                >
                    Edit
                </Button>
                <Button
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                    sx={styles.actionBtn}
                    variant="contained"
                    onClick={handleOnEdit}
                >
                    Delete
                </Button>
            </Box>
        </Container>
    );
};

export default HistoryView;
