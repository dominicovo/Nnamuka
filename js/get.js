let mainDiv = document.getElementById("main");
axios
  .get("https://mimi-crypto.herokuapp.com/mimi/getMessages")
  .then((response) => {
    console.log(response.data);
    let data = response.data.allMessages;
    data.forEach((msg) => {
      let name = msg.name;
      let email = msg.email;
      let message = msg.message;

      let div1 = document.createElement("div");
      div1.className = "testimonial-item, pr-0, pr-md-4";

      let div2 = document.createElement("div");
      div2.className = "mb-25";

      let p = document.createElement("p");
      p.className = "rating-author d-block";
      p.innerHTML = name

      let div3 = document.createElement("div");
      div3.className = "rating-context bg-soft-pink rounded-lg";

      let p2 = document.createElement("p");
      p2.className = "rating-author d-block";
      p2.innerHTML = message

      div2.appendChild(p);

      div3.appendChild(p2);

      div1.appendChild(div2);
      div1.appendChild(div3);

      mainDiv.appendChild(div1);
    });
  });


