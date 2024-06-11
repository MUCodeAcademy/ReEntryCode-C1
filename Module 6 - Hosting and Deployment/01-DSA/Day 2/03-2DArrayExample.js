let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Jetr Jess', 28, 43, 'A'],
    ['Ben Jamin', 16, 51, 'B']
];

let end = MathScore.length - 1;

// Gets the last item
console.log(MathScore[4][3]);
console.log(MathScore[MathScore.length-1][(MathScore[MathScore.length -1]).length - 1]);
console.log(MathScore[MathScore.length-1][end-1]);

// Gets the first item
console.log(MathScore[3][3]);

// Changing an item in an array
MathScore[2][0] = 'Gary Chess';
console.log(MathScore[2][0]);

const [state, setState] = useState([
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Jetr Jess', 28, 43, 'A'],
    ['Ben Jamin', 16, 51, 'B']
]);

setState(prevState => [...prevState, [item]]);
setState(prevState => [...prevState, ['Luce', 50, 10, 'F']]);

setState(prevState => {
    // Copy the array
    const newState = [...prevState];

    newState[2][0] = "Gary Chess";

    return newState;
});

fetch('something', {    
    // Fetch functions
})
.then(response => response.text())
.then(response => setState(response));