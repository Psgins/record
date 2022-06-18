import { Box, Container, Grid, Paper } from "@mui/material";
import { FC } from "react";
import LoginLogo from "./components/LoginLogo";
import ManualLoginForm from "./components/ManualLoginForm";
import OIDCLoginForm from "./components/OIDCLoginForm";

const styles = {
    root: {
        minHeight: "100vh",
        backgroundImage: "url(/images/vector/8401.jpg)",
        backgroundSize: 740,
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        opacity: 0.86,
    },
    container: {
        p: 2,
    },
    separator: {
        textAlign: "center",
    },
};

const LoginPage: FC<{}> = () => {
    return (
        <Box sx={styles.root}>
            <Container maxWidth="xs">
                <LoginLogo />
                <Paper sx={styles.container} elevation={1}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <ManualLoginForm />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={styles.separator}>OR</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <OIDCLoginForm />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;
