const size = 8;
let board = Array.from({length: size}, () => Array(size).fill("-"));


   const validMoves = (position) => {
        const [startX, startY] = position;
        const rows = array.length;
        const cols = array[0].length;
        const movesArray = [];

        const directions = [
            [2, 1],
            [2, -1],
            [1, 2],
            [1, -2],
            [-2, 1],
            [-2, -1],
            [-1, 2],
            [-1, -2],
        ];

        for (const [X, Y] of directions) {
            const newX = startX + X;
            const newY = startY + Y;

             if (newX > 0 && newX < rows && newY > 0 && newX < cols) {
                movesArray.push([newX, newY]);
             }
        }
    }