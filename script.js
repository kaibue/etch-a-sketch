function createNewGrid() {
    let container = document.createElement('div');
    document.className = 'container';
    let gridSize = 16;
    for (i = 0; i <= gridSize * gridSize; i++) {
        let newGridDiv = document.createElement('div');
        newGridDiv.id = i;
        newGridDiv.className = 'singleGrid'
        let textContent = document.createTextNode('id ' + i);
        container.appendChild(newGridDiv);
    }
}

function removeGrid () {
    document.body.removeChild('container');
    createNewGrid();
}


let container = document.createElement('div');
let controls = document.createElement('div');
controls.className = 'controls';

container.className = 'container';
let gridSize = 16;



let resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
controls.appendChild(resetBtn);
resetBtn.addEventListener ('click', () => {

});


document.body.appendChild(controls);
document.body.appendChild(container);