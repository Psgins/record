import { Box, Button } from "@mui/material";
import { FC, ReactNode } from "react";

const styles = {
    buttonSocial: {
        justifyContent: "flex-start",
    },
    labelSocial: {
        ml: 2,
        flexGrow: 1,
    },
};

interface OIDCLoginButtonProps {
    img: ReactNode;
    label: string;
}

const OIDCLoginButton: FC<OIDCLoginButtonProps> = (props) => {
    const { img, label } = props;
    return (
        <Button fullWidth variant="outlined" sx={styles.buttonSocial}>
            {img}
            <Box sx={styles.labelSocial}>{label}</Box>
        </Button>
    );
};

export default OIDCLoginButton;
