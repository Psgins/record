export interface HistoryRecord {
    id: number;
    created_datetime: Date;
}

export interface HistoryFormData {
    weight: string;
    muscle: string;
    generic_fat_m: string;
    generic_fat_p: string;
    bmi: string;
    calories: string;
    score: string;
    muscle_m_l_arm: string;
    muscle_m_r_arm: string;
    muscle_m_core: string;
    muscle_m_l_leg: string;
    muscle_m_r_leg: string;
    muscle_p_l_arm: string;
    muscle_p_r_arm: string;
    muscle_p_core: string;
    muscle_p_l_leg: string;
    muscle_p_r_leg: string;
    fat_m_l_arm: string;
    fat_m_r_arm: string;
    fat_m_core: string;
    fat_m_l_leg: string;
    fat_m_r_leg: string;
    fat_p_l_arm: string;
    fat_p_r_arm: string;
    fat_p_core: string;
    fat_p_l_leg: string;
    fat_p_r_leg: string;
}
