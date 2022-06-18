import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Card, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { FC, MouseEvent, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { HistoryRecord } from "../types";

interface HistoryItemProps {
    data: HistoryRecord;
}

const styles = {
    root: {
        display: { xs: "flex" },
        alignItems: "center",
        px: 2,
        "&:hover": {
            cursor: "pointer",
            ".MuiBox-root": {
                display: {
                    xs: "flex",
                },
            },
        },
    },
    info: {
        py: 2,
        flexGrow: 1,
    },
    actions: {
        display: {
            xs: "none",
        },
    },
};

const HistoryItem: FC<HistoryItemProps> = (props) => {
    const { data } = props;

    const navigate = useNavigate();

    const formattedDate = useMemo(
        () => format(data.created_datetime, "yyyy-MM-dd HH:mm:ss"),
        [data.created_datetime],
    );

    const handleOnView = useCallback(() => {
        navigate(`./view/${data.id}`);
    }, [data.id, navigate]);

    const handleOnEdit = useCallback(
        (e: MouseEvent) => {
            e.stopPropagation();
            navigate(`./edit/${data.id}`);
        },
        [data.id, navigate],
    );

    const handleOnDelete = useCallback((e: MouseEvent) => {
        e.stopPropagation();
    }, []);

    return (
        <Card sx={styles.root} onClick={handleOnView}>
            <Box sx={styles.info}>
                <Typography>{formattedDate}</Typography>
            </Box>
            <Box sx={styles.actions}>
                <IconButton onClick={handleOnEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon onClick={handleOnDelete} />
                </IconButton>
            </Box>
        </Card>
    );
};

export default HistoryItem;
