import { Job } from './Job';

export class Scheduler {
    private jobQueue: Job[];

    constructor() {
        this.jobQueue = [];
    }

    schedule(job: Job): void {
        this.jobQueue.push(job);
    }

    getJobQueue(): Job[] {
        return this.jobQueue;
    }
}