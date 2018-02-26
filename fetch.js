self.addEventListener('message', function(e) {
  var url = "http://localhost:8000/data.json";
  self.fetch(url).then(function(response) {
    if(response.ok) {
      self.postMessage(response);
    } else {
      throw new Error("fetch error");
    }
  }).catch(function(error) {
    self.postMessage(error.message);
  });
}, false);

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
