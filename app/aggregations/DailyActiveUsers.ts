
// Here is a sample aggregation query that calculates the number of daily active users
// based on the number of unique users who complete a sign-in activity each day.

import { Aggregation } from "@514labs/moose-lib";

export default {
  select: ` 
    SELECT 
        uniqState(userId) as dailyActiveUsers,
        toStartOfDay(timestamp) as date
    FROM ParsedActivity_0_0
    WHERE activity = 'Login' 
    GROUP BY toStartOfDay(timestamp)
    `,
  orderBy: "date",
} satisfies Aggregation as Aggregation;

