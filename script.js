const size = 8;
const board = Array.from({length: size}, () => Array(size).fill("-"));


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
        return movesArray;
    }

    const knightMoves = (start, end) => {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start.toString());

        while (queue.length != 0) {
            const path = queue.shift();
            const current = path[path.length - 1];

            if (current[0] === end[0] && current[1] === end[1]) {
                return path;
            }

            for (const move of validMoves(current)) {
                const key = move.toString();
                if (!visited.has(key)) {
                    visited.add(key);
                    queue.push([...path, move]);
                }
            }
        }
    }