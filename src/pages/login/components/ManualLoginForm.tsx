import { FC, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../../store/authentication/actions";

const ManualLoginForm: FC<{}> = () => {
    const dispatch = useDispatch();

    const handleOnClick = useCallback(() => {
        dispatch(login());
    }, [dispatch]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth label="Username" variant="standard" />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Password"
                    variant="standard"
                    type="password"
                />
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={handleOnClick}>
                    Login
                </Button>
            </Grid>
        </Grid>
    );
};

export default ManualLoginForm;
