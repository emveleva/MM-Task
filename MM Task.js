function solve(x, y, x1, y1, N, genZero){
    if (y >= 1000){
        console.log('y must not be above 1000');
        return;
    }
    if (x > y){
        console.log('x must not be bigger than y');
        return;
    }
    if (N < 0){
        console.log('N must be a positive value');
        return;
    }
    if (x1 < 0 || y1 < 0){
        console.log('x1 and y1 must be positive values');
        return;
    } if (genZero.length !== y){
        console.log('Make sure the matrix has y lines');
        return;
    } 
    for (let i = 0; i < genZero.length; i++){
        if (genZero[i].length !== x){
            console.log('Make sure all lines of the matrix are equal to x');
            return;
        }
    }
    let timesGreen = 0;
    let counter = 0;
    for (let i = 0; i < genZero.length; i++){
        let line = (genZero.shift().split('').map(Number));
        genZero.push(line);
    }
    while (counter <= N){
        let turnGreen = [];
        let turnRed = [];
        if (genZero[y1][x1] === 1){
            timesGreen++;
        }
        for (let i = 0; i < genZero.length; i++){
            let item = genZero[i];
            for (let j = 0; j < item.length; j++){

                const allPossibleIndexes = [
                    [i - 1, j],
                    [i, j - 1],
                    [i - 1, j - 1],
                    [i + 1, j],
                    [i, j + 1],
                    [i + 1, j + 1],
                    [i + 1, j - 1],
                    [i - 1, j + 1]
                ];
                const allPossibleValues = []
                allPossibleIndexes.forEach(([i, j]) => {
                    try {
                        allPossibleValues.push(genZero[i][j])
                    } catch (err) {
                    }
                })
                let array = allPossibleValues.filter(v => v != undefined);
                    
                    if (genZero[i][j] === 0){
                        let filtered1 = array.filter((a) => a === 1);                     
                        if (filtered1.length === 3 || filtered1.length === 6){
                                turnGreen.push([i, j])
                        }
                    
                    } else if (genZero[i][j] === 1){
                        let filtered1 = array.filter((a) => a === 1);
                        if (filtered1.length === 0 || filtered1.length === 1 || filtered1.length === 4 || filtered1.length === 5 || filtered1.length === 7 || filtered1.length === 8){
                            if (filtered1.length !== 2 && filtered1.length !== 3 && filtered1.length !== 6){
                                turnRed.push([i, j]);
                            }
                            }        
                    }
            }
        }
            for (let arr of turnGreen){
                const i = Number(arr[0]);
                const j = Number(arr[1]);
                genZero[i][j] = 1;
            };
            for (let arr of turnRed){
                const i = Number(arr[0]);
                const j = Number(arr[1]);
                genZero[i][j] = 0;
            };
            counter++;
    }
    console.log(`Result: ${timesGreen}`);
}


solve(4, 4, 2, 2, 15, ['1001', '1111', '0100', '1010'])