import { Task } from './Task';
import { Job } from './Job';

export class TaskManager {
    private tasks: Task[];
    private jobs: Job[];

    constructor() {
        this.tasks = [];
        this.jobs = [];
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    removeTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    createJob(taskId: string, parameters: any, repeat = false): Job {
        console.log('taskId', taskId)
        const task = this.tasks.find(task => task.id === taskId);
        if (!task) throw new Error("Not Found");
        const job = new Job(task.id, parameters, repeat);
        // Additional job initialization
        return job;
    }
}
