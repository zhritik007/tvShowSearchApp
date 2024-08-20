const form=document.querySelector("#searchForm");
form.addEventListener("submit",async function (e){
    e.preventDefault();
    const userSearch= form.elements.query.value;
    const config={params:{q: userSearch}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config
)
   makeImages(res.data);
   form.elements.query.value="";
})

const makeImages=(shows)=>{
    for (const img of document.querySelectorAll('img')) img.remove();
    for(let result of shows){
        if(result.show.image){
        const imageLink=result.show.image.original;
        const createImage=document.createElement("IMG");
        createImage.src=imageLink;
        document.body.append(createImage);
        }
    }
}