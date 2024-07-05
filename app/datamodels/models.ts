
// This file was auto-generated by the framework. You can add data models or change the existing ones

import { Key } from "@514labs/moose-lib";

export interface UserActivity {
    eventId: Key<string>;
    timestamp: string;
    userId: string;
    activity: string;
}

export interface ParsedActivity {
    eventId: Key<string>;
    timestamp: Date;
    userId: string;
    activity: string;
}

