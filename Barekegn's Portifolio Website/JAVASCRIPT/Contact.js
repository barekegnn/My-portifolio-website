document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const action = this.action;
    const formStatus = document.createElement("p");

    fetch(action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          formStatus.innerHTML =
            "Thank you for your message! I will get back to you soon.";
          formStatus.style.color = "green";
          this.reset();
        } else {
          formStatus.innerHTML =
            "Oops! There was a problem submitting your form.";
          formStatus.style.color = "red";
        }
        this.appendChild(formStatus);
      })
      .catch((error) => {
        formStatus.innerHTML =
          "Oops! There was a problem submitting your form.";
        formStatus.style.color = "red";
        this.appendChild(formStatus);
      });
  });
