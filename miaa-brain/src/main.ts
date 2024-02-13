import { createServer } from "http";
import { Server } from "socket.io";
import { Task } from "./core/Task";
import { Job } from "./core/Job";
import { TaskManager } from "./core/TaskManager";
import { Scheduler } from "./core/Scheduler";
import { JobExecutor } from "./core/JobExecutor";
import { Logger } from "./core/Logger";
import { Storage } from "./core/Storage";
import { DependencyResolver } from "./core/DependencyResolver";
import { Keeper } from "./Keeper";

export const main = async () => {
  console.log("main start");
  const keeper = new Keeper();
  keeper.work();
  setTimeout(() => {
    keeper.schedule("1", { text: "Hello World 1" }, true);
    // keeper.schedule("2", { text: "Hello World 2" });
  }, 4000);
  // const task1 = new Task("1", "Task 1", "This is the first task");
  // const task2 = new Task("2", "Task 2", "This is the second task");

  // const taskManager = new TaskManager();
  // taskManager.addTask(task1);
  // taskManager.addTask(task2);

  // const job1 = taskManager.createJob(task1.id, { param1: "value1" });
  // const job2 = taskManager.createJob(task2.id, { param2: "value2" });

  // const scheduler = new Scheduler();
  // scheduler.schedule(job1);
  // scheduler.schedule(job2);

  // const jobExecutor = new JobExecutor();

  // const jobQueue = scheduler.getJobQueue();

  // jobQueue.forEach((job) => {
  //   jobExecutor.executeJob(job);
  // });

  // const logger = new Logger();
  // logger.log("Jobs executed successfully.");

  // const storage = new Storage();
  // storage.save({ data: "Some data to save." });

  // const httpServer = createServer();
  // const io = new Server(httpServer, {
  //   cors: {
  //     origin: "*"
  //   }
  // });

  // io.on("connection", (socket) => {
  //   console.log("connection", socket.id);
  //   // ...
  // });

  // io.listen(1234);
};
main();
