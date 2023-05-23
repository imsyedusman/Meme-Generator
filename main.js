var generateMemeBtn = document.querySelector('.generate-meme-btn');

var memeTitle = document.querySelectorAll('.meme-title');

var memeAuthors = document.querySelector('.meme-author');

var memeImage = document.querySelector('.meme-generator img');



const updateDetails = (url, title, author) => {

    memeImage.setAttribute("src", url);

    memeTitle.innerHTML = title;

    memeAuthors.innerHTML = author; 
}



const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(response => response.json())
        .then(data => {
            updateDetails(data.url, data.title, data.author);
        });
}

generateMemeBtn.addEventListener('click', generateMeme);

generateMeme();

