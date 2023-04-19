window.addEventListener('load', () => {

    function drawBinaryHeap(values) {
        // Create an SVG.js canvas inside the specified container element
        const canvas = SVG().addTo("#drawHeap").size('100%', '100%');

        // Define some constants for sizing and positioning elements
        const radius = 20;
        // const spacingX = 50;
        // const spacingY = 70;
        const startX = 50;
        const startY = 50;

        // Calculate the number of rows in the binary heap
        const numRows = Math.ceil(Math.log2(values.length + 1));

        // Create an array to hold all the nodes in the heap
        const nodes = [];

        // Loop through each row and column, creating a circle for each node in the heap
        for (let row = 0; row < numRows; row++) {
            const numNodes = 2 ** row;
            const spacingX = ((canvas.width() - 280) - (startX * 2)) * 1.5 / (numNodes);
            const y = row * (radius * 2 + 10) + startY;
            for (let col = 0; col < numNodes; col++) {
                const x = col * spacingX + startX + (spacingX / 2);
                const valueIndex = 2 ** row - 1 + col;
                if (valueIndex >= values.length) {
                    break;
                }
                const value = values[valueIndex];
                const node = canvas.circle(radius * 2).move(x - radius, y - radius);
                const text = canvas.text(value).font({
                    fill: '#f06'
                }).move(x - 5, y - 8);
                nodes.push(node);
            }
        }

        // Connect each node to its parent with a line
        for (let i = 1; i < nodes.length; i++) {
            const parentIndex = Math.floor((i - 1) / 2);
            const parent = nodes[parentIndex];
            const child = nodes[i];
            const parentX = parent.cx();
            const parentY = parent.cy();
            const childX = child.cx();
            const childY = child.cy();
            const dx = childX - parentX;
            const dy = childY - parentY;
            const angle = Math.atan2(dy, dx);
            const parentX2 = parentX + Math.cos(angle) * radius;
            const parentY2 = parentY + Math.sin(angle) * radius;
            const childX2 = childX - Math.cos(angle) * radius;
            const childY2 = childY - Math.sin(angle) * radius;
            canvas.line(parentX2, parentY2, childX2, childY2).stroke({
                width: 2,
                color: '#f06'
            });
        }

        // Adjust the size of the canvas to fit the binary heap
        const lastNode = nodes[nodes.length - 1];
        const canvasHeight = lastNode ? lastNode.cy() + radius + startY : startY;
        canvas.size(canvas.width(), canvasHeight);
    }

    // Example usag
    drawBinaryHeap([4, 2, 7, 1, 3, 6, 8, 5, 3, 5, 1, 2, 4, 6, 7, 10, 4, 15, 44, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

})