import {
    AppBar,
    Box,
    Button,
    Container,
    Switch,
    Toolbar,
    Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { FC } from "react";
import { Link as RouterLink, Route, Routes } from "react-router-dom";
import History from "../../menus/history";

const styles = {
    toolbarBox: {
        flexGrow: 1,
        display: {
            xs: "flex",
        },
    },
    toolbarMenu: {
        pt: 1,
        display: "block",
        color: "white",
        mx: 1,
    },
};

const LandingPage: FC = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
                        <Typography variant="h6" noWrap sx={{ mr: 2 }}>
                            RECORD
                        </Typography>
                        <Box sx={styles.toolbarBox}>
                            <Button
                                component={RouterLink}
                                sx={styles.toolbarMenu}
                                to="/"
                            >
                                Dashboard
                            </Button>
                            <Button
                                component={RouterLink}
                                sx={styles.toolbarMenu}
                                to="/history"
                            >
                                History
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: "flex" } }}>
                            <Button
                                component={RouterLink}
                                sx={styles.toolbarMenu}
                                to="/about"
                            >
                                About
                            </Button>
                            <Switch inputProps={{ "aria-label": "theme" }} />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Routes>
                <Route path="/history/*" element={<History />} />
            </Routes>
        </>
    );
};

export default LandingPage;
