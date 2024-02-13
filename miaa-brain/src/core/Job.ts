export enum JobStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}
export class Job {
  id: string;
  status: JobStatus;
  result?: any;
  failedCount = 0;
  repeat?: boolean;
  parameters?: any;

  constructor(id: string, parameters?: any, repeat = false) {
    this.id = id;
    this.status = JobStatus.PENDING;
    this.parameters = parameters;
    this.repeat = repeat;
  }

  setFailed() {
    this.failedCount++;
  }
}
