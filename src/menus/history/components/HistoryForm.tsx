import { Box, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { HistoryFormData } from "../types";

interface HistoryFormProps {
    data: HistoryFormData;
    onChange: (fieldname: string, value: string | number | null) => void;
}

const allowNumberRegex: RegExp = /^-?\d*\.?\d{0,2}$/;

const styles = {
    group: {
        mb: 3,
        p: 3,
    },
    title: {
        mb: 1,
    },
};

const HistoryForm: FC<HistoryFormProps> = (props) => {
    const { data, onChange } = props;

    const handleOnChange =
        (fieldname: string) => (e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            if (allowNumberRegex.test(value)) {
                onChange(fieldname, value);
            }
        };

    return (
        <Box noValidate autoComplete="off" component="form">
            <Paper sx={styles.group}>
                <Typography variant="h6" sx={styles.title}>
                    Generic Information
                </Typography>
                <Stack spacing={3}>
                    <TextField
                        label="Weight"
                        size="small"
                        value={data.weight}
                        variant="standard"
                        onChange={handleOnChange("weight")}
                    />
                    <TextField
                        label="Muscle"
                        size="small"
                        value={data.muscle}
                        variant="standard"
                        onChange={handleOnChange("muscle")}
                    />
                    <TextField
                        label="Fat (kg)"
                        size="small"
                        value={data.generic_fat_m}
                        variant="standard"
                        onChange={handleOnChange("generic_fat_m")}
                    />
                    <TextField
                        label="Fat %"
                        size="small"
                        value={data.generic_fat_p}
                        variant="standard"
                        onChange={handleOnChange("generic_fat_p")}
                    />
                    <TextField
                        label="BMI"
                        size="small"
                        value={data.bmi}
                        variant="standard"
                        onChange={handleOnChange("bmi")}
                    />
                    <TextField
                        label="Calories Burn"
                        size="small"
                        value={data.calories}
                        variant="standard"
                        onChange={handleOnChange("calories")}
                    />
                    <TextField
                        label="Score"
                        size="small"
                        value={data.score}
                        variant="standard"
                        onChange={handleOnChange("score")}
                    />
                </Stack>
            </Paper>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper sx={styles.group}>
                        <Typography variant="h6" sx={styles.title}>
                            Muscle (kg)
                        </Typography>
                        <Stack spacing={3}>
                            <TextField
                                label="Left Arm"
                                size="small"
                                value={data.muscle_m_l_arm}
                                variant="standard"
                                onChange={handleOnChange("muscle_m_l_arm")}
                            />
                            <TextField
                                label="Right Arm"
                                size="small"
                                value={data.muscle_m_r_arm}
                                variant="standard"
                                onChange={handleOnChange("muscle_m_r_arm")}
                            />
                            <TextField
                                label="Core"
                                size="small"
                                value={data.muscle_m_core}
                                variant="standard"
                                onChange={handleOnChange("muscle_m_core")}
                            />
                            <TextField
                                label="Left Leg"
                                size="small"
                                value={data.muscle_m_l_leg}
                                variant="standard"
                                onChange={handleOnChange("muscle_m_l_leg")}
                            />
                            <TextField
                                label="Right Leg"
                                size="small"
                                value={data.muscle_m_r_leg}
                                variant="standard"
                                onChange={handleOnChange("muscle_m_r_leg")}
                            />
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={styles.group}>
                        <Typography variant="h6" sx={styles.title}>
                            Muscle (%)
                        </Typography>
                        <Stack spacing={3}>
                            <TextField
                                label="Left Arm"
                                size="small"
                                value={data.muscle_p_l_arm}
                                variant="standard"
                                onChange={handleOnChange("muscle_p_l_arm")}
                            />
                            <TextField
                                label="Right Arm"
                                size="small"
                                value={data.muscle_p_r_arm}
                                variant="standard"
                                onChange={handleOnChange("muscle_p_r_arm")}
                            />
                            <TextField
                                label="Core"
                                size="small"
                                value={data.muscle_p_core}
                                variant="standard"
                                onChange={handleOnChange("muscle_p_core")}
                            />
                            <TextField
                                label="Left Leg"
                                size="small"
                                value={data.muscle_p_l_leg}
                                variant="standard"
                                onChange={handleOnChange("muscle_p_l_leg")}
                            />
                            <TextField
                                label="Right Leg"
                                size="small"
                                value={data.muscle_p_r_leg}
                                variant="standard"
                                onChange={handleOnChange("muscle_p_r_leg")}
                            />
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper sx={styles.group}>
                        <Typography variant="h6" sx={styles.title}>
                            Fat (kg)
                        </Typography>
                        <Stack spacing={3}>
                            <TextField
                                label="Left Arm"
                                size="small"
                                value={data.fat_m_l_arm}
                                variant="standard"
                                onChange={handleOnChange("fat_m_l_arm")}
                            />
                            <TextField
                                label="Right Arm"
                                size="small"
                                value={data.fat_m_r_arm}
                                variant="standard"
                                onChange={handleOnChange("fat_m_r_arm")}
                            />
                            <TextField
                                label="Core"
                                size="small"
                                value={data.fat_m_core}
                                variant="standard"
                                onChange={handleOnChange("fat_m_core")}
                            />
                            <TextField
                                label="Left Leg"
                                size="small"
                                value={data.fat_m_l_leg}
                                variant="standard"
                                onChange={handleOnChange("fat_m_l_leg")}
                            />
                            <TextField
                                label="Right Leg"
                                size="small"
                                value={data.fat_m_r_leg}
                                variant="standard"
                                onChange={handleOnChange("fat_m_r_leg")}
                            />
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={styles.group}>
                        <Typography variant="h6" sx={styles.title}>
                            Fat (%)
                        </Typography>
                        <Stack spacing={3}>
                            <TextField
                                label="Left Arm"
                                size="small"
                                value={data.fat_p_l_arm}
                                variant="standard"
                                onChange={handleOnChange("fat_p_l_arm")}
                            />
                            <TextField
                                label="Right Arm"
                                size="small"
                                value={data.fat_p_r_arm}
                                variant="standard"
                                onChange={handleOnChange("fat_p_r_arm")}
                            />
                            <TextField
                                label="Core"
                                size="small"
                                value={data.fat_p_core}
                                variant="standard"
                                onChange={handleOnChange("fat_p_core")}
                            />
                            <TextField
                                label="Left Leg"
                                size="small"
                                value={data.fat_p_l_leg}
                                variant="standard"
                                onChange={handleOnChange("fat_p_l_leg")}
                            />
                            <TextField
                                label="Right Leg"
                                size="small"
                                value={data.fat_p_r_leg}
                                variant="standard"
                                onChange={handleOnChange("fat_p_r_leg")}
                            />
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HistoryForm;
