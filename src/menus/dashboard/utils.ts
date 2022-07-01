import { isEmpty, maxBy, minBy } from "lodash";
import { useMemo } from "react";
import { AxisDomain } from "recharts/types/util/types";

export const useClosetDomain = <T> (dataset: T[], fieldname: string): AxisDomain | undefined => {
    return useMemo(() => {
        if (isEmpty(dataset)) return undefined;

        const minDomain = minBy(dataset, fieldname) as unknown as number;
        const maxDomain = maxBy(dataset, fieldname) as unknown as number;
        return [minDomain, maxDomain];
    }, [dataset, fieldname]);
};