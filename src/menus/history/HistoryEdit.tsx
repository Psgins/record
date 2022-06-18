import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Breadcrumbs, Button, Container, Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HistoryForm from "./components/HistoryForm";
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
    bottomActions: {
        display: "flex",
        justifyContent: "end",
        mb: 2,
    },
};

const HistoryEdit: FC = () => {
    const nevigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState(initData);

    useEffect(() => {
        setData({ ...initData, bmi: "1234", score: "1234" });
    }, []);

    const handleOnFormChanged = useCallback(
        (fieldname: string, value: string | number | null) => {
            setData({ ...data, [fieldname]: value });
        },
        [data],
    );

    const handleOnCancel = useCallback(() => {
        nevigate("..");
    }, [nevigate]);

    const handleOnDelete = useCallback(() => {
        nevigate("..");
    }, [nevigate]);

    const handleOnSave = useCallback(() => {
        nevigate("..");
    }, [nevigate]);

    return (
        <Container maxWidth="md">
            <Box sx={styles.header}>
                <Breadcrumbs
                    separator=">"
                    aria-label="breadcrums"
                    sx={styles.breadcrumbs}
                >
                    <Typography>History</Typography>
                    <Typography>Edit</Typography>
                    <Typography>{id}</Typography>
                </Breadcrumbs>
                <Box>
                    <Button size="small" onClick={handleOnCancel}>
                        Cancel
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
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<SaveIcon />}
                        sx={styles.actionBtn}
                        onClick={handleOnSave}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
            <HistoryForm data={data} onChange={handleOnFormChanged} />
            <Box sx={styles.bottomActions}>
                <Button size="small" onClick={handleOnCancel}>
                    Cancel
                </Button>
                <Button
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                    sx={styles.actionBtn}
                    variant="contained"
                    onClick={handleOnSave}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<SaveIcon />}
                    sx={styles.actionBtn}
                    onClick={handleOnSave}
                >
                    Save
                </Button>
            </Box>
        </Container>
    );
};

export default HistoryEdit;
