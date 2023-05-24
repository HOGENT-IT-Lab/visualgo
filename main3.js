
const sequentialSearchArr = [];

const rectWidth = 30;
const rectHeight = 30;
const rectSpacing = 10;
const rectStartX = 50;
const rectStartY = 50;


document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {

    async function sequentialSearch() {
      const draw = SVG().addTo("#sequentialSearch").size(600, 100);
  
      for (let i = 0; i < 14; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
        rect.fill('#2ecc71');
        const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
        sequentialSearchArr.push({value: randomNumber, rect: rect, text: text});
      }
    }
  
    sequentialSearch();
  });
  
  const sequentialSearchButton = document.getElementById("sequentialSearchButton");
  const confirmNumber = document.getElementById("confirmNumber");
  const sequentialResult = document.getElementById("sequentialResult");
  
  sequentialSearchButton.addEventListener("click", async () => {
  
    const num = document.getElementById("sequentialNumber").value;
    if (num === "") {
      confirmNumber.innerHTML = "Give a number as input!";
      confirmNumber.style.color = "red";
      return;
    }
    confirmNumber.style.color = "#145E7D";
    confirmNumber.innerHTML = "The number is " + num + ".";
    confirmNumber.css

    sequentialSearchArr.forEach((r) => r.rect.fill("#2ecc71"));

    let counter = 0;
    while (counter < sequentialSearchArr.length && sequentialSearchArr[counter].value !== parseInt(num)) {
      sequentialSearchArr[counter].rect.fill("green");
      await new Promise(r => setTimeout(r, 100)); // Pause for visualization
      sequentialSearchArr[counter].rect.fill("#2ecc71");
      counter++;
    };

    if (counter <  sequentialSearchArr.length) {
      sequentialSearchArr[counter].rect.fill("pink");
      sequentialResult.innerHTML = num + " is found on index " + counter + ".";
    } else {
      sequentialResult.innerHTML = num + " is not found in this array.";
    }
  
  });
});
