import { parse } from "date-fns";

export const API_DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";

export const BACKUP_DATE = parse("1970-01-01 00:00:00", API_DATE_FORMAT, new Date());