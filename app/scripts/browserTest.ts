import { Task, Workflow } from "@514labs/moose-lib";
import { chromium } from 'playwright';

export const browsertesttask = new Task<null, void>("browsertesttask", {
  run: async () => {
    try {
      const browser = await chromium.launch({ headless: true });
      console.log('Launched:', await browser.version());
      await browser.close();
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
//   schedule: "@every 10s",
});
