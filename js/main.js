//griglia formato 10x10;

const gridDom = document.getElementById('grid');

for (let i = 0; i < 100; i++){
    let smallSquare = createSquare();

    smallSquare.addEventListener('click', function() {
        this.classList.toggle('clicked');
       });

    gridDom.append(smallSquare);

}

function createSquare(){
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}