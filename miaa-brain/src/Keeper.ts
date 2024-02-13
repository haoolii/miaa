import { JobStatus } from "./core/Job";
import { JobExecutor } from "./core/JobExecutor";
import { Logger } from "./core/Logger";
import { Scheduler } from "./core/Scheduler";
import { Storage } from "./core/Storage";
import { TaskManager } from "./core/TaskManager";
import { TaskTransfer } from "./core/tasks/TaskTransfer";

export class Keeper {
  _logger: Logger;
  _storage: Storage;
  _taskManager: TaskManager;
  _scheduler: Scheduler;
  _jobExecutor: JobExecutor;

  constructor() {
    this._logger = new Logger();
    this._storage = new Storage();
    this._taskManager = new TaskManager();
    this._scheduler = new Scheduler();
    this._jobExecutor = new JobExecutor();
    this._logger.log("Create Keeper");
    this._logger.log("Load Task 1");
    const task1 = new TaskTransfer("1", "Task 1", "This is the first task");
    this._taskManager.addTask(task1);
    // this._logger.log('Load Task 2')
    // const task2 = new TaskTransfer("2", "Task 2", "This is the second task");
    // this._taskManager.addTask(task2)
  }

  work() {
    setInterval(() => {
      this._logger.log("Tick");
      const jobQueue = this._scheduler.getJobQueue();

      jobQueue.forEach((job) => {
        this._logger.log(
          `Job ${job.id}, Status: ${job.status}, Failed: ${job.failedCount}`
        );
        if (job.status === JobStatus.PENDING) {
          this._jobExecutor.executeJob(job, this._taskManager.getTasks());
        } else if (job.status === JobStatus.COMPLETED) {
          job.failedCount = 0;
          if (job.repeat) {
            job.status = JobStatus.PENDING;
          }
        } else if (job.status === JobStatus.FAILED) {
          if (job.failedCount < 5) {
            job.failedCount++;
            job.status = JobStatus.PENDING;
          }
        }
      });
    }, 5000);
  }

  schedule2({
    taskId,
    parameters,
  }: {
    taskId: string;
    parameters?: any;
    repeat?: boolean;
  }) {
    const job = this._taskManager.createJob(taskId, parameters);
    this._logger.log(`Schedule Task ID ${taskId}`);
    this._scheduler.schedule(job);
  }

  schedule(taskId: string, parameters: any, repeat = false) {
    const job = this._taskManager.createJob(taskId, parameters, repeat);
    this._logger.log(`Schedule Task ID ${taskId}`);
    this._scheduler.schedule(job);
  }

  getJobQueue() {
    return this._scheduler.getJobQueue();
  }
}
