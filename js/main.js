//griglia formato 10x10;

const gridDom = document.getElementById('grid');

for (let i = 0; i < 100; i++) {

    let currentSquare = createSquare();

    currentSquare.addEventListener('click',
        function () {
            this.classList.toggle('clicked');
            console.log(newValidRandomNumber);
        }
    );

    gridDom.append(currentSquare);

}

function createSquare() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}

let buttonDom = document.getElementById('btn');

buttonDom.addEventListener('click',
    function () {
        gridDom.classList.remove('d-none');
        gridDom.classList.add('d-block');

    }
);