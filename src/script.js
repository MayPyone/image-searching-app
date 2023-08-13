const accessKey = "K7nM3OuVgClQNtDLnYhzpVZDxHSwTE_JzHEHFt4uczg";
const formEl= document.querySelector('form');
const search = document.getElementById('search-button')
const input = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const show = document.querySelector('.show');

let inputData="";
let page =1;

async function searchImages(){
    inputData = input.value;
    const url  = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response = await fetch(url);
    const data = await response.json(); 

    //chage joson data
    const results = data.results;
    if(page ===1){
        searchResults.innerHTML="";
    }
    console.log(results[0].name);
    results.map((result)=>{
        const imageWrapper= document.createElement('div');
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img');
        image.src= result.urls.small;
        image.alt=result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.append(imageWrapper);
    });
    page++;
    if(page>1){
        show.style.display='block';
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})


show.addEventListener("click",(event)=>{
    searchImages();
})