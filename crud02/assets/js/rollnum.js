document.getElementById("confirmpass").addEventListener("change", () => {
  let pass = document.getElementById("pass").value;
  let cnfpass = document.getElementById("confirmpass");
  console.log(pass, cnfpass.value);
  if (pass !== cnfpass.value) {
    console.log("hua");
    document.getElementById("add").setAttribute("disabled", true);
      cnfpass.style.border = "1px solid red";
    }
  else
  {
      console.log( "kisksi" )
       document.getElementById("add").removeAttribute("disabled", true);
       cnfpass.style.border = "2px solid rgb(19, 206, 131)";
    }
} );


