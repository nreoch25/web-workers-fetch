self.addEventListener(
  "message",
  function(e) {
    var url = "https://jsonplaceholder.typicode.com/posts/1";
    self
      .fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("fetch error");
        }
      })
      .then(function(response) {
        self.postMessage(response);
      })
      .catch(function(error) {
        self.postMessage(error.message);
      });
  },
  false
);

// self.onmessage
//   self.postMessage("HELLO");
//   // var url = "https://jsonplaceholder.typicode.com/posts/";
//   // self.fetch(url).then(function(response) {
//   //   if(response.ok) {
//   //     self.postMessage(response);
//   //   } else {
//   //     throw new Error("fetch error");
//   //   }
//   // }).catch(function(error) {
//   //   self.postMessage(error.message);
//   // })
// });
