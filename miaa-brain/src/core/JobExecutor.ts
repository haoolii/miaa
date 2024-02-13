import { Job, JobStatus } from "./Job";
import { Task } from "./Task";

function timeout(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout"));
    }, ms);
  });
}

export class JobExecutor {
  executeJob(job: Job, tasks: Task[]): void {
    // console.log(`Executing job ${job.id}`);
    job.status = JobStatus.RUNNING;

    // Find the corresponding task
    const task = tasks.find((task) => task.id === job.id);
    if (task) {
      // Execute the task
      Promise.race([task.execute(job.parameters), timeout(120000)])
        .then((result) => {
          job.status = JobStatus.COMPLETED;
        })
        .catch((error) => {
          console.log("Failed error", error);
          job.status = JobStatus.FAILED;
        });
    } else {
      console.log("Failed");
      job.status = JobStatus.FAILED;
    }
  }
}
