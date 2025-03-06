import { TaskFunction, TaskDefinition } from "@514labs/moose-lib";

// The initial input data and data passed between tasks can be
// defined in the task function parameter
const task1: TaskFunction = async (input?: any) => {
    // The body of your script goes here
    console.log("Hello world from task1");

    // The return value is the output of the script.
    // The return value should be a dictionary with at least:
    // - task: the task name (e.g., "extract", "transform")
    // - data: the actual data being passed to the next task
    return {
        task: "task1",
        data: {}
    };
};

export default function createTask() {
    return {
        task: task1,
        config: {
            retries: 1,
        }
    } as TaskDefinition;
}
