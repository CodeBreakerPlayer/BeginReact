import { UnionEnum } from "./BaseEnum";

export const enContentView = {
    NONE: 0,
    MEETING_SCHEDULE: 1,
    MEETING_CATEGORY: 2,
    MEETING_ROOM_MANAGE: 3,
    MEETING_NOTE: 4
} as const;
export type enContentView = UnionEnum<typeof enContentView>;