export interface BodyPartData {
    left_arm: number;
    right_arm: number;
    core: number;
    left_leg: number;
    right_leg: number;
}

export interface BodyCompositeData {
    mass?: BodyPartData;
    percentage?: BodyPartData;
}

export interface HistoryDashboardData extends Omit<HistoryDashboardApiData, "created_date"> {
    created_date: Date;
}

export interface HistoryDashboardApiData {
    weight?: number;
    bmi?: number;
    caleries_burn?: number;
    score?: number;
    muscle?: BodyCompositeData;
    fat?: BodyCompositeData;
    created_date: string;
}

export type BodyPart = keyof BodyPartData;