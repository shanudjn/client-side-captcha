let captcha = "";
function generateCaptcha() {
  const captchaSource =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*0123456789";
  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * captchaSource.length);
    captcha += captchaSource[index];
  }
  let captachaElement = document.querySelector("#captcha");
  captachaElement.innerText = captcha;
}

function validateCaptcha() {
  event.preventDefault();
  textInput = document.querySelector("#captchaInput").value;
  resultDiv = document.querySelector("#result");
  if (textInput === captcha) {
    resultDiv.innerText = "✨Yayy! the captcha you entered was correct 🙌 ✨";
  } else {
    resultDiv.innerText =
      "✨Sorry! the captcha you entered was incorrect 😥 ✨";
  }
}
