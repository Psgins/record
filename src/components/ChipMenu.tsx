import { Box, Chip, Menu, MenuItem } from "@mui/material";
import { FC, MouseEvent, useCallback, useMemo, useState } from "react";

export interface ChipMenuOption<T> {
    label: string;
    value: T;
}

export interface ChipMenuProp<T = any> {
    options?: ChipMenuOption<T>[];
    value?: T;
    onChange: (value: T) => void;
}

const ChipMenu: FC<ChipMenuProp> = (props) => {
    const { options = [], value, onChange } = props;

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<EventTarget & HTMLSpanElement>();

    const displayLabel = useMemo(() => {
        if (options.length === 0) {
            return "-";
        }
        return options.find((option) => option.value === value)?.label ?? "-";
    }, [options, value]);

    const handleOnMenuClick = useCallback(
        (event: MouseEvent<HTMLSpanElement>) => {
            setAnchorEl(event.currentTarget);
            setOpen(true);
        },
        [],
    );

    const handleOnMenuClose = useCallback(() => {
        setAnchorEl(undefined);
        setOpen(false);
    }, []);

    const handleOnMenuSelect = useCallback(
        (value: any) => () => {
            onChange(value);
            handleOnMenuClose();
        },
        [onChange, handleOnMenuClose],
    );

    return (
        <Box>
            <Chip
                color="primary"
                label={displayLabel}
                variant="outlined"
                onClick={handleOnMenuClick}
            />
            <Menu open={open} anchorEl={anchorEl} onClose={handleOnMenuClose}>
                {options.map((option) => (
                    <MenuItem
                        key={option.value}
                        onClick={handleOnMenuSelect(option.value)}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default ChipMenu;
