import { tags } from "typia";
import { ConsumptionApi } from "@514labs/moose-lib";

interface QueryParams {
  limit?: number & tags.Type<"int32"> & tags.Minimum<1> & tags.Maximum<1000>;
}

export const TriggerWorkflowEgress = new ConsumptionApi<QueryParams>(
  "triggerWorkflow",
  async ({ limit = 5 }, { client, sql }) => {
    return await client.workflow.execute("browsertestworkflow", undefined);
  }
);
