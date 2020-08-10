const counterH1 = document.querySelector('h1#counter');
const likesUl = document.querySelector('ul.likes');
const decreaseButton = document.querySelector('button#\\-');
const increaseButton = document.querySelector('button#\\+');
const likeButton = document.querySelector('button#\\<3');
const pauseButton = document.querySelector('button#pause');
const commentsDiv = document.querySelector('div#list.comments');
const commentsForm = document.querySelector('form#comment-form')

let likesObj = {}

let counter = setInterval(() => counterH1.innerText = parseInt(counterH1.innerText) + 1, 1000);

pauseButton.addEventListener('click', function(e) {
    if (this.innerText === 'pause') {
        this.innerText = 'resume'
        clearInterval(counter)
        disableButtons(true)
    } else {
        this.innerText = 'pause'
        counter = setInterval(() => counterH1.innerText = parseInt(counterH1.innerText) + 1, 1000);
        disableButtons(false)
    }
});

function disableButtons(boolean) {
    let allBtns = document.querySelectorAll('button')

    allBtns.forEach((btn) => {
        if (btn.id !== 'pause') {
            btn.disabled = boolean
        }
    });
};

increaseButton.addEventListener('click', (e) => {
    counterH1.innerText = parseInt(counterH1.innerText) + 1
});

decreaseButton.addEventListener('click', (e) => {
        counterH1.innerText = parseInt(counterH1.innerText) - 1
});

likeButton.addEventListener('click', (e) => {
    let currentNumber = parseInt(counterH1.innerText)
    likesObj[currentNumber] ? likesObj[currentNumber] += 1 : likesObj[currentNumber] = 1
    
    likesUl.innerText = ""

    for (const keyNum in likesObj) {
        let likesLi = document.createElement('li')
            likesLi.innerText = `Number: ${keyNum} Likes: ${likesObj[keyNum]}`

        likesUl.append(likesLi)
    }
});

commentsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentP = document.createElement('p');
        commentP.innerText = e.target.querySelector('input').value;
    commentsDiv.append(commentP);
    e.target.reset();
});