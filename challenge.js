const counterH1 = document.querySelector('h1#counter');
const likesUl = document.querySelector('ul.likes');
const decreaseButton = document.querySelector('button#\\-');
const increaseButton = document.querySelector('button#\\+');
const likeButton = document.querySelector('button#\\<3');
const pauseButton = document.querySelector('button#pause');
const commentsDiv = document.querySelector('div#list.comments');
const commentsForm = document.querySelector('form#comment-form')

let startCounter = true;
let counter = 0;

setInterval(() => {
    if (startCounter) {
        counter += 1
        counterH1.innerText = counter;
    }
}, 1000);

pauseButton.addEventListener('click', (e) => {
    if (startCounter) {
        startCounter = false;
        pauseButton.innerText = 'resume'
    } else {
        startCounter = true;
        pauseButton.innerText = 'pause'
    }
});

increaseButton.addEventListener('click', (e) => {
    if (startCounter) {
        counter += 1
        counterH1.innerText = counter;
    }
});

decreaseButton.addEventListener('click', (e) => {
    if (startCounter) {
        counter -= 1
        counterH1.innerText = counter;
    }
});

likeButton.addEventListener('click', (e) => {
    let likeLis = document.querySelectorAll('li')
    let lastLi = likeLis[likeLis.length -1]

    let found = false
    likeLis.forEach((likeLi) => {
        if (likeLi.innerText.includes(`Number: ${counterH1.innerText}`)) {
            let likeSpan = likeLi.querySelector('span');
            likeSpan.innerText = parseInt(likeSpan.innerText) + 1;
            found = true;
        }
    });
    if (!found) {
        let likeLi = document.createElement('li');
            likeLi.innerText = `Number: ${counter} Likes: `;
        
        let likeSpan = document.createElement('span');
            likeSpan.innerText = 1;
        
        likeLi.append(likeSpan);
        likesUl.append(likeLi);
    }
});

commentsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentP = document.createElement('p');
        commentP.innerText = e.target.querySelector('input').value;
    commentsDiv.append(commentP);
    e.target.reset();
});