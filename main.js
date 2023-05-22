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
  const sortBySelectionPause = document.getElementById('sortBySelectionPause');


  sortBySelectionPlay.addEventListener("click", () => {
    function startAnimation() {
      async function sortBySelection() {
        for (let currentIndex = sortBySelectionArr.length - 1; currentIndex >= 1; currentIndex--) {
          let maxValue = sortBySelectionArr[currentIndex].value;
          let maxIndex = currentIndex;
          setPinkColor(currentIndex);
      
          for (let j = currentIndex - 1; j >= 0; j--) {
            setGreenColor(j);
      
            if (sortBySelectionArr[j].value > maxValue) {
              maxIndex = j;
              maxValue = sortBySelectionArr[j].value;
            }
      
            await new Promise(r => setTimeout(r, 100)); // Pause for visualization
            resetColor(j);
          }
      
          setRedColor(maxIndex);
      
          await new Promise(r => setTimeout(r, 1000)); // Pause for visualization
      
          swapElements(currentIndex, maxIndex);
      
          await new Promise(r => setTimeout(r, 1000)); // Pause for visualization
      
          setColor(currentIndex, '#1abc9c');
        }
      
        setColor(0, '#1abc9c');
      }
      
      function setPinkColor(index) {
        sortBySelectionArr[index].rect.fill('orange');
      }
      
      function setGreenColor(index) {
        sortBySelectionArr[index].rect.fill('green');
      }
      
      function setRedColor(index) {
        sortBySelectionArr[index].rect.fill('#e74c3c');
      }
      
      function setColor(index, color) {
        sortBySelectionArr[index].rect.fill(color);
      }
      
      function resetColor(index) {
        sortBySelectionArr[index].rect.fill('#2ecc71');
      }
      
      function swapElements(index1, index2) {
        const tempRectX = sortBySelectionArr[index1].rect.x();
        sortBySelectionArr[index1].rect.x(sortBySelectionArr[index2].rect.x());
        sortBySelectionArr[index2].rect.x(tempRectX);
      
        const tempTextX = sortBySelectionArr[index1].text.x();
        sortBySelectionArr[index1].text.x(sortBySelectionArr[index2].text.x());
        sortBySelectionArr[index2].text.x(tempTextX);
      
        const temp = sortBySelectionArr[index1];
        sortBySelectionArr[index1] = sortBySelectionArr[index2];
        sortBySelectionArr[index2] = temp;
      }
      sortBySelection();
    }

    sortBySelectionPause.addEventListener("click", () => {
      document.getElementById('sortBySelectionPlay').style.display = "inline";
      document.getElementById('sortBySelectionPause').style.display = "none";
    });

    sortBySelectionPlay.addEventListener("click", () => {
      document.getElementById('sortBySelectionPlay').style.display = "none";
      document.getElementById('sortBySelectionPause').style.display = "inline";
      startAnimation();
    });
  });

  const sortByInsertionPlay = document.getElementById("sortByInsertionPlay");
  const sortByInsertionPause = document.getElementById('sortByInsertionPause');

  sortByInsertionPlay.addEventListener("click", () => { 
    function startAnimation() {
      async function sortByInsertion() {
        for (let i = 1; i <= sortByInsertionArr.length - 1; i++) {
          x = sortByInsertionArr[i];
          j = i;
          
          // Highlight current element being sorted
          sortByInsertionArr[j].rect.fill('orange');
          
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
            
            // Highlight swapped elements
            sortByInsertionArr[j + 1].rect.fill('#2ecc71');
            sortByInsertionArr[j].rect.fill('orange');
            await new Promise(r => setTimeout(r, 1000)); // Pause for visualization
          }
          
          // Change color of the element to green once it is in its final position
          for (let c = 0; c <= i; c++) {
            sortByInsertionArr[c].rect.fill('#1abc9c');
          }
          //sortByInsertionArr[j].rect.fill('#1abc9c');
          
          sortByInsertionArr[j].value = x.value;
          await new Promise(r => setTimeout(r, 100)); // Pause for visualization
        }
      }
      
      sortByInsertion();
      
    }
    sortByInsertionPause.addEventListener("click", () => {
      document.getElementById('sortByInsertionPlay').style.display = "inline";
      document.getElementById('sortByInsertionPause').style.display = "none";
    });

    sortByInsertionPlay.addEventListener("click", () => {
      document.getElementById('sortByInsertionPlay').style.display = "none";
      document.getElementById('sortByInsertionPause').style.display = "inline";
      startAnimation();
    });

  });

  const mergeSortPlay = document.getElementById("mergeSortPlay");
  const mergeSortPause = document.getElementById('mergeSortPause');
  mergeSortPlay.addEventListener("click", () => {
    function startAnimation() {

      async function visualizeMergeSort() {
        mergeSortRecursive(mergeSortArr, 0, mergeSortArr.length - 1);
      }

      async function mergeSortRecursive(a, begin, einde) {
        if (begin < einde) {
          const midden = Math.floor((begin + einde) / 2);
    
          await mergeSortRecursive(a, begin, midden);
          await mergeSortRecursive(a, midden + 1, einde);
          await merge(a, begin, midden, einde);
        }
      }
      
      async function merge(a, begin, midden, einde) {
        let i = begin; // Counter for the left subarray
        let j = midden + 1; // Counter for the right subarray
        let k = i; // Counter for the auxiliary array hulpa
        const hulpa = new Array(einde - begin + 1); // Temporary storage array
      
        while (i <= midden && j <= einde) {
          if (a[i].value <= a[j].value) {
            hulpa[k] = { ...a[i] };
            i++;
          } else {
            hulpa[k] = {...a[j]};
            j++;
          }
          k++;
        }
      
        if (i > midden) {
          // The second subarray needs to be emptied
          while (j <= einde) {
            hulpa[k] = {...a[j]};
            j++;
            k++;
          }
        } else {
          // The first subarray needs to be emptied
          while (i <= midden) {
            hulpa[k] = {...a[i]};
            i++;
            k++;
          }
        }
      
        for (let k = begin; k <= einde; k++) {
          // Copy the sorted subarray back to a
          // TODO: sorted right but doesn't show on screen
          a[k] = {...hulpa[k]};
        }
      }
    
      console.log(visualizeMergeSort());
      console.log(mergeSortArr);
      
    }

    mergeSortPause.addEventListener("click", () => {
      document.getElementById('mergeSortPlay').style.display = "inline";
      document.getElementById('mergeSortPause').style.display = "none";
    });

    mergeSortPlay.addEventListener("click", () => {
      document.getElementById('mergeSortPlay').style.display = "none";
      document.getElementById('mergeSortPause').style.display = "inline";
      startAnimation();
    });

  });

  const bubbleSortPlay = document.getElementById("bubbleSortPlay");
  const bubbleSortPause = document.getElementById('bubbleSortPause');

  bubbleSortPlay.addEventListener("click", () => { 
    function startAnimation() {

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
            await new Promise(r => setTimeout(r, 1000)); // Pause for visualization
          }
          bubbleSortArr[bubbleSortArr.length - i - 1].rect.fill('#1abc9c'); // Set the last element to green
        }
      };
      bubbleSort();
      
    }

    bubbleSortPause.addEventListener("click", () => {
      document.getElementById('bubbleSortPlay').style.display = "inline";
      document.getElementById('bubbleSortPause').style.display = "none";
    });

    bubbleSortPlay.addEventListener("click", () => {
      document.getElementById('bubbleSortPlay').style.display = "none";
      document.getElementById('bubbleSortPause').style.display = "inline";
      startAnimation();
    });

  });


};