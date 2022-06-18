import AddIcon from "@mui/icons-material/Add";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import { parse } from "date-fns";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import HistoryItem from "./components/HistoryItem";

const date_format = "yyyy-MM-dd HH:mm:ss";

const items = [
    { id: 3, created_datetime: parse("2022-01-03 00:00:00", date_format, 0) },
    { id: 2, created_datetime: parse("2022-01-02 00:00:00", date_format, 0) },
    { id: 1, created_datetime: parse("2022-01-01 00:00:00", date_format, 0) },
];

const styles = {
    header: {
        display: "flex",
        alignItems: "center",
        my: 2,
    },
    breadcrumbs: {
        flexGrow: 1,
    },
    action: {},
};

const History: FC = () => {
    return (
        <Container maxWidth="md">
            <Box sx={styles.header}>
                <Breadcrumbs
                    separator=">"
                    aria-label="breadcrums"
                    sx={styles.breadcrumbs}
                >
                    <Typography>History</Typography>
                </Breadcrumbs>
                <Box sx={styles.action}>
                    <Button
                        component={RouterLink}
                        to="./create"
                        color="primary"
                        variant="contained"
                        size="small"
                        startIcon={<AddIcon />}
                    >
                        Create
                    </Button>
                </Box>
            </Box>
            <Stack spacing={2}>
                {items.map((item) => (
                    <HistoryItem key={item.id} data={item} />
                ))}
            </Stack>
        </Container>
    );
};

export default History;
