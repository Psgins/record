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
        setData({ ...initData, bmi: "1234", score: "1234" });
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
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    <strong>Weight</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body1">90</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    <strong>Muscle</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body1">40</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    <strong>Fat (kg)</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body1">40</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    <strong>Fat (%)</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body1">40</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    <strong>BMI</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body1">24</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    <strong>Calories Burn</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body1">1500</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1">
                                    <strong>Score</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body1">60</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
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
