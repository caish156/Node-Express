let arr = document.getElementsByClassName("course");

function hello() {
  Array.apply(arr).map((ele) => {
    ele.values = "hello";
  });
}

