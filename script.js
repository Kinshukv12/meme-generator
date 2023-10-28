const generateMemeBtn= document.querySelector(".meme-generator-btn");

const memeImage =document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url , title , author )=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by ${author}`;
}

async function generateMeme ()  {
    const response= await fetch("https://meme-api.com/gimme/wholesomememes");
    const data= await response.json();
    updateDetails(data.url,data.title,data.author);
};

generateMemeBtn.addEventListener("click",generateMeme );
generateMeme();