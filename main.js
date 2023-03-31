window.addEventListener('load', () => {
  const draw = SVG().addTo('#container').size(600, 500);

const arr = [];
const rectWidth = 30;
const rectHeight = 30;
const rectSpacing = 10;
const rectStartX = 50;
const rectStartY = 50;

for (let i = 0; i < 20; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
  rect.fill('#2ecc71');
  const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
  arr.push({value: randomNumber, rect: rect, text: text});
}

async function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].value > arr[j+1].value) {
        // Swap rectangles
        const tempX = arr[j].rect.x();
        arr[j].rect.x(arr[j+1].rect.x());
        arr[j+1].rect.x(tempX);
        
        // Swap text
        const tempTextX = arr[j].text.x();
        arr[j].text.x(arr[j+1].text.x());
        arr[j+1].text.x(tempTextX);
        
        // Swap elements in array
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      // Color code the rectangles
      arr[j].rect.fill('#2ecc71');
      arr[j+1].rect.fill('#e74c3c');
      await new Promise(r => setTimeout(r, 100)); // Pause for visualization
    }
    arr[arr.length - i - 1].rect.fill('#1abc9c'); // Set the last element to green
  }
}

bubbleSort();


});


