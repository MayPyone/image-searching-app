const accessKey = "K7nM3OuVgClQNtDLnYhzpVZDxHSwTE_JzHEHFt4uczg";
async function searchImages(){
    const url  = `https://api.unsplash.com/photos?page=1&query=dogclient_id=${accessKey}`
    const response = await fetch(url);
    const data = await response.json(); 

    //chage joson data
    const results = data.results;
    console.log("hello")
    console.log(results);
    document.querySelector('body').innerHTML=results[0].urls.small;
}

searchImages();