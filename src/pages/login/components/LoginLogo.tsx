import { Box } from "@mui/material";
import { FC } from "react";

const LoginLogo: FC<{}> = () => {
    return (
        <Box
            width="100%"
            sx={{
                my: 4,
                display: "inline-flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <img
                width={48}
                height={48}
                src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                alt="logo"
            />
            <Box component="h1" sx={{ m: 2, color: "#1976d2" }}>
                RECORD
            </Box>
        </Box>
    );
};

export default LoginLogo;
