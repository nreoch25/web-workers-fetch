const CONCURRENT_REQUESTS = 3;
let fetchWorkers = [];

for (var i = 0; i < CONCURRENT_REQUESTS; i++) {
  fetchWorkers[i] = new Worker("fetch.js");
  fetchWorkers[i].addEventListener(
    "message",
    function(e) {
      console.log("Worker said: ", e.data);
    },
    false
  );

  fetchWorkers[i].postMessage(""); // Send data to our worker.
}
