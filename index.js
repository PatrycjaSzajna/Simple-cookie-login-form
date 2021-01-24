window.addEventListener("DOMContentLoaded", (event) => {
  const btn = document.querySelector(".btn");
  const btn2 = document.querySelector(".btn-out");
  const form = document.querySelector(".to-hide");
  const textH1 = document.querySelector("h1");
  const personNameField = document.getElementById("fname");
  let isUserLoggedIn = false;

  if (!isUserLoggedIn) {
    btn2.style.display = "none";
  }

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const personName = document.getElementById("fname").value;
    if (personName.length < 2) {
      const errorMess = document.createElement("p");
      errorMess.classList.add("warning");

      errorMess.innerText = "Your name is too short!";
      personNameField.parentNode.insertBefore(
        errorMess,
        personNameField.nextSibling
      );
      return;
    }

    setCookie(personName);
    formToHide();
    const showName = () => {
      let username = document.cookie;
      console.log(username.split("=")[1]);
      return username.split("=")[1];
    };
    showWelcomeMessage(showName);
    showName();
    if (isUserLoggedIn) {
      btn2.style.display = "block";
    }
  });

  const setCookie = (name) => {
    document.cookie = `username=${name}`;
    isUserLoggedIn = true;
  };

  const formToHide = () => {
    form.style.display = "none";
  };

  const showWelcomeMessage = (nameLog) => {
    textH1.innerText = `Welcome
        ${nameLog()}
        You 
        Are
        Logged in`;
  };

  btn2.addEventListener("click", () => {
    deletCookie();
  });

  const deletCookie = () => {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    isUserLoggedIn = false;
  };
});
