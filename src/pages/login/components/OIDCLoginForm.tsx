import { Grid } from "@mui/material";
import { FC } from "react";
import OIDCLoginButton from "./OIDCLoginButton";

const FacebookImage: FC<{}> = () => {
    return (
        <img
            width={32}
            height={32}
            src={`${process.env.PUBLIC_URL}/images/icons/facebook.svg`}
            alt="fb"
        />
    );
};

const GoogleImage: FC<{}> = () => {
    return (
        <img
            width={32}
            height={32}
            src={`${process.env.PUBLIC_URL}/images/icons/google.svg`}
            alt="gg"
        />
    );
};

const GitHubImage: FC<{}> = () => {
    return (
        <img
            width={32}
            height={32}
            src={`${process.env.PUBLIC_URL}/images/icons/github.svg`}
            alt="gh"
        />
    );
};

const OIDCLoginForm: FC<{}> = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <OIDCLoginButton
                    img={<FacebookImage />}
                    label="Continue with Facebook"
                />
            </Grid>
            <Grid item xs={12}>
                <OIDCLoginButton
                    img={<GoogleImage />}
                    label="Continue with Google"
                />
            </Grid>
            <Grid item xs={12}>
                <OIDCLoginButton
                    img={<GitHubImage />}
                    label="Continue with GitHub"
                />
            </Grid>
        </Grid>
    );
};

export default OIDCLoginForm;
