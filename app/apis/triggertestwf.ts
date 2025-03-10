import { createConsumptionApi } from "@514labs/moose-lib";

interface QueryParams {
    name?: string;
    age?: number;
    city?: string;
}

export default createConsumptionApi<QueryParams>(
  async (
    { name = "Alice", age = 30, city = "New York" },
    { client, sql }
  ) => {
    return await client.workflow.execute("testwf", {
        name, age, city
    });
  }
);
