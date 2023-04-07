window.addEventListener('load', () => {

  async function sortBySelection() {

    const draw = SVG().addTo("#sortBySelection").size(600, 100);

    const arr = [];
    const rectWidth = 30;
    const rectHeight = 30;
    const rectSpacing = 10;
    const rectStartX = 50;
    const rectStartY = 50;

    for (let i = 0; i < 14; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
      rect.fill('#2ecc71');
      const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
      arr.push({value: randomNumber, rect: rect, text: text});
    }

    for (let i = arr.length - 1; i >= 1; i--) {
      pos = i;
      max = arr[i].value;
      for (let j = i - 1; j >= 0; j--) {
        // pink shows current max value
        arr[pos].rect.fill("pink");
        if (arr[j].value > max) {
          arr[pos].rect.fill("#2ecc71");
          pos = j;
          max = arr[j].value;
        };
        arr[j].rect.fill("green");
        await new Promise(r => setTimeout(r, 100)); // Pause for visualization
        arr[j].rect.fill("#2ecc71");
      }
      arr[pos].rect.fill('#e74c3c');
      await new Promise(r => setTimeout(r, 100)); // Pause for visualization

      // Swap rectangles
      const tempRectX = arr[pos].rect.x();
      arr[pos].rect.x(arr[i].rect.x());
      arr[i].rect.x(tempRectX);
      
      // Swap text
      const tempTextX = arr[pos].text.x();
      arr[pos].text.x(arr[i].text.x());
      arr[i].text.x(tempTextX);
      
      // Swap elements in array
      const temp = arr[pos];
      arr[pos] = arr[i];
      arr[i] = temp;
      await new Promise(r => setTimeout(r, 100)); // Pause for visualization

      // Color code the rectangles
      arr[i].rect.fill('#1abc9c'); // Set the last element to green
    };
    arr[0].rect.fill("#1abc9c");
  };

  async function insertionSort() {

    const draw = SVG().addTo('#sortByInsertion').size(600, 100);

    const arr = [];
    const rectWidth = 30;
    const rectHeight = 30;
    const rectSpacing = 10;
    const rectStartX = 50;
    const rectStartY = 50;

    for (let i = 0; i < 14; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
      rect.fill('#2ecc71');
      const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
      arr.push({value: randomNumber, rect: rect, text: text});
    }

    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }

    for (let i = 1; i <= arr.length - 1; i++) {
      x = arr[i];
      j = i;
      while (j > 0 && x.value < arr[j - 1].value) {

        // Swap rectangles
        const tempX = arr[j].rect.x();
        arr[j].rect.x(arr[j - 1].rect.x());
        arr[j - 1].rect.x(tempX);
        
        // Swap text
        const tempTextX = arr[j].text.x();
        arr[j].text.x(arr[j - 1].text.x());
        arr[j - 1].text.x(tempTextX);

        // Swap elements in array
        const temp = arr[j];          
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;

        j--;
      }
      arr[j].value = x.value;
      await new Promise(r => setTimeout(r, 100)); // Pause for visualization

    }

  };

  async function mergeSortRecursive(arr, start, end) {

    if (start < end) {
      middle = floor((start + end) / 2);
      mergeSortRecursive(arr, start, middle);
      mergeSortRecursive(arr, middle + 1, end);
      merge(arr, start, middle, end);
    }
  
  }


  async function mergeSort() {
    const draw = SVG().addTo('#mergeSort').size(600, 100);

    const arr = [];
    const rectWidth = 30;
    const rectHeight = 30;
    const rectSpacing = 10;
    const rectStartX = 50;
    const rectStartY = 50;

    for (let i = 0; i < 14; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
      rect.fill('#2ecc71');
      const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
      arr.push({value: randomNumber, rect: rect, text: text});
    }

  }

  async function bubbleSort() {

    const draw = SVG().addTo('#bubbleSort').size(600, 100);

    const arr = [];
    const rectWidth = 30;
    const rectHeight = 30;
    const rectSpacing = 10;
    const rectStartX = 50;
    const rectStartY = 50;

    for (let i = 0; i < 14; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      const rect = draw.rect(rectWidth, rectHeight).move(rectStartX + i * (rectWidth + rectSpacing), rectStartY);
      rect.fill('#2ecc71');
      const text = draw.text(randomNumber).move(rectStartX + i * (rectWidth + rectSpacing) + 5, rectStartY + 7);
      arr.push({value: randomNumber, rect: rect, text: text});
    }

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
  };

  sortBySelection();
  insertionSort();
  mergeSort();
  bubbleSort();

});