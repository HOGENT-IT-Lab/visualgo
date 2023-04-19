const sortBySelectionArr = [];
const sortByInsertionArr = [];
const mergeSortArr = [];
const bubbleSortArr = [];
const rectWidth = 30;
const rectHeight = 30;
const rectSpacing = 10;
const rectStartX = 50;
const rectStartY = 50;

window.addEventListener('load', () => {
  async function sortBySelection() {
    const draw = SVG().addTo("#sortBySelection").size(600, 100);

    for (let i = 0; i < 14; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
      rect.fill('#2ecc71');
      const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
      sortBySelectionArr.push({value: randomNumber, rect: rect, text: text});
    }
  }

  async function insertionSort() {
    const draw = SVG().addTo('#sortByInsertion').size(600, 100);

    for (let i = 0; i < 14; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
      rect.fill('#2ecc71');
      const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
      sortByInsertionArr.push({value: randomNumber, rect: rect, text: text});
    }
  }

  async function mergeSort() {
    const draw = SVG().addTo('#mergeSort').size(600, 100);

    for (let i = 0; i < 14; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
      rect.fill('#2ecc71');
      const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
      mergeSortArr.push({value: randomNumber, rect: rect, text: text});
    }

  }

  async function bubbleSort() {
    const draw = SVG().addTo('#bubbleSort').size(600, 100);

    for (let i = 0; i < 14; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
      rect.fill('#2ecc71');
      const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
      bubbleSortArr.push({value: randomNumber, rect: rect, text: text});
    }

  }

  sortBySelection();
  insertionSort();
  mergeSort();
  bubbleSort();
});



window.onload = function() {
  const sortBySelectionPlay = document.getElementById("sortBySelectionPlay");

  sortBySelectionPlay.addEventListener("click", () => {
    async function sortBySelection() {
      for (let i = sortBySelectionArr.length - 1; i >= 1; i--) {
        pos = i;
        max = sortBySelectionArr[i].value;
        for (let j = i - 1; j >= 0; j--) {
          // pink shows current max value
          sortBySelectionArr[pos].rect.fill("pink");
          if (sortBySelectionArr[j].value > max) {
            sortBySelectionArr[pos].rect.fill("#2ecc71");
            pos = j;
            max = sortBySelectionArr[j].value;
          };
          sortBySelectionArr[j].rect.fill("green");
          await new Promise(r => setTimeout(r, 100)); // Pause for visualization
          sortBySelectionArr[j].rect.fill("#2ecc71");
        }
        sortBySelectionArr[pos].rect.fill('#e74c3c');
        await new Promise(r => setTimeout(r, 100)); // Pause for visualization

        // Swap rectangles
        const tempRectX = sortBySelectionArr[pos].rect.x();
        sortBySelectionArr[pos].rect.x(sortBySelectionArr[i].rect.x());
        sortBySelectionArr[i].rect.x(tempRectX);
        
        // Swap text
        const tempTextX = sortBySelectionArr[pos].text.x();
        sortBySelectionArr[pos].text.x(sortBySelectionArr[i].text.x());
        sortBySelectionArr[i].text.x(tempTextX);
        
        // Swap elements in sortBySelectionArray
        const temp = sortBySelectionArr[pos];
        sortBySelectionArr[pos] = sortBySelectionArr[i];
        sortBySelectionArr[i] = temp;
        await new Promise(r => setTimeout(r, 100)); // Pause for visualization

        // Color code the rectangles
        sortBySelectionArr[i].rect.fill('#1abc9c'); // Set the last element to green
      };
      sortBySelectionArr[0].rect.fill("#1abc9c");
    };
    sortBySelection();
  });

  const sortByInsertionPlay = document.getElementById("sortByInsertionPlay");
  sortByInsertionPlay.addEventListener("click", () => { 
    async function sortByInsertion() {
  
      for (let i = 1; i <= sortByInsertionArr.length - 1; i++) {
        x = sortByInsertionArr[i];
        j = i;
        while (j > 0 && x.value < sortByInsertionArr[j - 1].value) {
  
          // Swap rectangles
          const tempX = sortByInsertionArr[j].rect.x();
          sortByInsertionArr[j].rect.x(sortByInsertionArr[j - 1].rect.x());
          sortByInsertionArr[j - 1].rect.x(tempX);
          
          // Swap text
          const tempTextX = sortByInsertionArr[j].text.x();
          sortByInsertionArr[j].text.x(sortByInsertionArr[j - 1].text.x());
          sortByInsertionArr[j - 1].text.x(tempTextX);
  
          // Swap elements in sortBySelectionArray
          const temp = sortByInsertionArr[j];          
          sortByInsertionArr[j] = sortByInsertionArr[j - 1];
          sortByInsertionArr[j - 1] = temp;
  
          j--;
        }
        sortByInsertionArr[j].value = x.value;
        await new Promise(r => setTimeout(r, 100)); // Pause for visualization
      }
    }
    sortByInsertion();
  });
  const mergeSortPlay = document.getElementById("mergeSortPlay");
  mergeSortPlay.addEventListener("click", () => {
    async function mergeSort() {

    }
    mergeSort();
  });

  const bubbleSortPlay = document.getElementById("bubbleSortPlay");
  bubbleSortPlay.addEventListener("click", () => { 
    async function bubbleSort() {
  
      for (let i = 0; i < bubbleSortArr.length; i++) {
        for (let j = 0; j < bubbleSortArr.length - i - 1; j++) {
          if (bubbleSortArr[j].value > bubbleSortArr[j+1].value) {
            // Swap rectangles
            const tempX = bubbleSortArr[j].rect.x();
            bubbleSortArr[j].rect.x(bubbleSortArr[j+1].rect.x());
            bubbleSortArr[j+1].rect.x(tempX);
            
            // Swap text
            const tempTextX = bubbleSortArr[j].text.x();
            bubbleSortArr[j].text.x(bubbleSortArr[j+1].text.x());
            bubbleSortArr[j+1].text.x(tempTextX);
            
            // Swap elements in bubbleSortArray
            const temp = bubbleSortArr[j];
            bubbleSortArr[j] = bubbleSortArr[j+1];
            bubbleSortArr[j+1] = temp;
          }
          // Color code the rectangles
          bubbleSortArr[j].rect.fill('#2ecc71');
          bubbleSortArr[j+1].rect.fill('#e74c3c');
          await new Promise(r => setTimeout(r, 100)); // Pause for visualization
        }
        bubbleSortArr[bubbleSortArr.length - i - 1].rect.fill('#1abc9c'); // Set the last element to green
      }
    };
    bubbleSort();

  });


};