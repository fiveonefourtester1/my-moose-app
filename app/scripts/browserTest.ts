import { Task, Workflow } from "@514labs/moose-lib";
import { BarPipeline } from "../ingest/models";
import { chromium } from 'playwright';

export const browsertesttask = new Task<null, void>("browsertesttask", {
  run: async () => {
    try {
      console.log(`Testing browser launch`);
      const browser = await chromium.launch({ headless: true });
      console.log('Launched:', await browser.version());
      await browser.close();

      console.log(`Testing direct insert`);
      await BarPipeline.table!.insert([{
        primaryKey: "test-key",
        utcTimestamp: new Date(),
        hasText: true,
        textLength: 42,
      }]);
    } catch (error) {
      console.error('Error occurred while running browser test:', error);
    }
  },
  retries: 1,
  timeout: "30s",
});

export const browsertestworkflow = new Workflow("browsertestworkflow", {
  startingTask: browsertesttask,
  retries: 1,
  timeout: "30s",
  // schedule: '*/5 * * * *',
});
