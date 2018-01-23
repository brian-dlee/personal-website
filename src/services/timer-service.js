class TimerService {
  constructor({ setInterval, clearInterval } = window) {
    this.jobs = [];
  }

  add(callback, milliseconds) {
    if (typeof callback !== "function") {
      throw new Error("Argument `callback` must be a function.");
    }

    if (milliseconds <= 0) {
      throw new Error(
        "Argument `milliseconds` must be an integer greater than 0."
      );
    }

    const jobsLength = this.jobs.push({
      timer: setInterval(callback, milliseconds),
      callback,
      milliseconds
    });

    return jobsLength - 1;
  }

  restart(jobId) {
    if (jobId < 0 || jobId >= this.jobs.length) {
      throw new Error("Invalid job ID provided.");
    }

    const { callback, milliseconds } = this.jobs[jobId];

    clearInterval(this.jobs[jobId].timer);
    this.jobs[jobId].timer = setInterval(callback, milliseconds);

    return this;
  }

  stop(jobId) {
    if (jobId < 0 || jobId >= this.jobs.length) {
      throw new Error("Invalid job ID provided.");
    }

    clearInterval(this.jobs[jobId].timer);

    return this;
  }
}

export default TimerService;
