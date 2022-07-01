import { ChipMenuOption } from "../../../components/ChipMenu";
import { BodyPart } from "../types";

export const BODY_PART_OPTIONS: ChipMenuOption<BodyPart>[] = [
    { label: "Left Arm", value: "left_arm" },
    { label: "Right Arm", value: "right_arm" },
    { label: "Core", value: "core" },
    { label: "Left Leg", value: "left_leg" },
    { label: "Right Leg", value: "right_leg" },
];