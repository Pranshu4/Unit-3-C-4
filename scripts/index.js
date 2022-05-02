// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import navbar from "../components/navbar.js";
import sidebar from "../components/sidebar.js";


document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("#sidebar").innerHTML=sidebar();

// import { Tdata, appe } from "./fetch.js";

let searchT =(ele)=>{
    if(ele.key ==="Enter"){
        let value =document.querySelector("#search_input").value;
        let contain =document.querySelector("#results");
        contain.innerHTML=null;
        Tdata(value).then((data)=>{
            console.log(data);
            appe(data.articles,contain)
        })
    }
}
document.querySelector("#search_input").addEventListener("keydown",searchT);

let Tdata = async () =>{
    try{
        let ser = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

        let data =ser.json();

        return data;
    }catch (err){
        console.log(err);
    }
}
let appe=( data, contain)=>{
data.forEach(element => {
    
});(function(ele){
    let box =document.createElement("div");
    box.setAttribute("class",news);
    let p=document.createElement("p");
    p.innerText=title;
    let image =document.createElement("img");
    image.src=ele.urlToImage;
    let description=document.createElement("p");
    description.innerText=ele.description;
    box.append(p,image,description);
    contain.append(box);

})
}
let value =document.querySelector("#search_input").value;
let contain =document.querySelector("#results");
contain.innerHTML=null;
Tdata(value).then((data)=>{
    console.log(data);
    appe(data.articles,contain)
})