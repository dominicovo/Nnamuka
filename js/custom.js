const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const button = document.getElementById("send");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (fullName.value == "" || email.value == "" || message.value == "") {
    alert("Please fill empty fields");
  } else {
    alert("Message sent");
    axios({
      method: "post",
      url: "https://mimi-crypto.herokuapp.com/mimi/sendMessage",
      data: {
        name: fullName.value,
        email: email.value,
        message: message.value,
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert("oops something went wrong");
        console.log(error.message);
      }
    );
  }
});


