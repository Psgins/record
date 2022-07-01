import { Card, CardContent, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { Colors } from "../constants";

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        color: Colors.boulder,
    },
};

export interface GadgetCardProps {
    children: ReactElement;
    headerRight?: ReactElement;
    title: string;
}

const GadgetCard: FC<GadgetCardProps> = (props) => {
    const { title, children, headerRight } = props;
    return (
        <Card>
            <CardContent sx={styles.header}>
                <Typography variant="overline">{title}</Typography>
                {headerRight}
            </CardContent>
            {children}
        </Card>
    );
};

export default GadgetCard;
