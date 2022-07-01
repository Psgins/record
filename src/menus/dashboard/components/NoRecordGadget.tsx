import { CardContent } from "@mui/material";
import { FC } from "react";
import GadgetCard from "../../../components/GadgetCard";

const NoRecordGadget: FC = (props) => {
    return (
        <GadgetCard title="No Record">
            <CardContent></CardContent>
        </GadgetCard>
    );
};

export default NoRecordGadget;
