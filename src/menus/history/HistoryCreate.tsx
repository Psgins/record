import SaveIcon from "@mui/icons-material/Save";
import { Box, Breadcrumbs, Button, Container, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    saveBtn: {
        ml: 1,
    },
    bottomActions: {
        display: "flex",
        justifyContent: "end",
        mb: 2,
    },
};

const HistoryCreate: FC = () => {
    const nevigate = useNavigate();

    const [data, setData] = useState(initData);

    const handleOnFormChanged = useCallback(
        (fieldname: string, value: string | number | null) => {
            console.log(fieldname, value);
            setData({ ...data, [fieldname]: value });
        },
        [data],
    );

    const handleOnCancel = useCallback(() => {
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
                    <Typography>Create</Typography>
                </Breadcrumbs>
                <Box>
                    <Button size="small" onClick={handleOnCancel}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<SaveIcon />}
                        sx={styles.saveBtn}
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
                    variant="contained"
                    size="small"
                    startIcon={<SaveIcon />}
                    sx={styles.saveBtn}
                    onClick={handleOnSave}
                >
                    Save
                </Button>
            </Box>
        </Container>
    );
};

export default HistoryCreate;
