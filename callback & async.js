function wait3second() {
  let sec = 3000 + new Date().getTime();
  while (new Date() < sec) {}
}

function login(callback) {
  setTimeout(() => {
    console.log("1. login");
    callback();
  }, 2000);
}

function getdata(callback) {
  setTimeout(() => {
    console.log("2. getting data");
    callback();
  }, 1000);
}

function database(callback) {
  setTimeout(() => {
    console.log("3. database operation");
    callback();
  }, 1000);
}
function publishdata(callback) {
  setTimeout(() => {
    console.log("4. publish");
    callback();
  }, 1000);
}

function usercreated() {
  setTimeout(() => {
    console.log("5. usercreated");
  }, 1000);
}

// callback hell
login(() => {
  getdata(() => {
    database(() => {
      publishdata(() => {
        usercreated();
      });
    });
  });
});
