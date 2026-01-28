import { Task, Workflow } from "@514labs/moose-lib";

const notifyComplete = new Task<number, void>("notifyComplete", {
  run: async ({ input }) => {
    console.log(
      `✅ Workflow completed! Finished ${input} records.`,
    );
  },
  retries: 1,
  timeout: "10s",
});

export const ingest = new Task<null, number>("ingest", {
  run: async () => {
    let recordCount = Math.floor(Math.random() * 100) + 1;
    console.log(
      `✅ Workflow ingested! Successfully ingested ${recordCount} records.`,
    );
    return recordCount;
  },
  onComplete: [notifyComplete],
  retries: 1,
  timeout: "30s",
});

export const workflow = new Workflow("generator", {
  startingTask: ingest,
  retries: 1,
  timeout: "30s",
  schedule: "@every 10s",
});
