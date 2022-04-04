let adviceHeading = document.getElementsByTagName("h1")[0];
let adviceID = document.getElementsByTagName("span")[0];
let adviceContent = document.getElementsByTagName("p")[0];
let dice = document.getElementById("dice");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      adviceContent.innerHTML = `"${data.slip.advice}"`;
      adviceID.innerHTML = `Advice #${data.slip.id}`;
    });
}

dice.addEventListener("click", getAdvice);
