import { TaskFunction, TaskDefinition } from "@514labs/moose-lib";

interface TaskParams {
    name: string;
    age: number;
    city: string;
}

const task1: TaskFunction = async (input: TaskParams) => {
    const id = `${input.name}-${input.age}-${input.city}`;
    console.log(`task1 id: ${id}`);
    console.log(`task1 input: ${JSON.stringify(input)}`);

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
