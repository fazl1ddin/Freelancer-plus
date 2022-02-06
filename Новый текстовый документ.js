let upto = document.querySelector(".upTo");
let tabs = document.querySelectorAll(".tabs ul li");
let allContent = document.querySelector(".allContent");
let content = document.querySelectorAll(".content");
let onAnimate = document.querySelectorAll(".content .onAnimate");
let scrolling = document.querySelector("#mainInfo");
let port = document.querySelector("#mainLastWorks");
scrolling.addEventListener("click", function(){
    let position = document.querySelector("." + scrolling.id);
    let coords = position.getBoundingClientRect();
    coords = coords.top + window.pageYOffset;
    window.scrollTo({
        top: coords,
        behavior: "smooth"
    });
});
port.addEventListener("click", function(){
    let position = document.querySelector("." + port.id);
    let coords = position.getBoundingClientRect();
    coords = coords.top + window.pageYOffset;
    window.scrollTo({
        top: coords,
        behavior: "smooth"
    });
});
content.forEach((item, index) => {
    item.addEventListener("mouseover", function(){
        onAnimate[index].classList.add("animate");
    });
    item.addEventListener("mouseout", function(){
        onAnimate[index].classList.remove("animate");
    });
    tabs.forEach((it) => {
        it.addEventListener("click", function(){
            let tabsDataName = it.getAttribute("data");
            let contentDates = document.querySelectorAll("[" + "data-" + tabsDataName + "]");
            item.animate([
                {opacity: 1},
                {opacity: 0}
            ], {duration: 500});
                item.classList.add("none");
                item.classList.remove("block");
            for(let i = 0; i < contentDates.length; i++){
                contentDates[i].animate([
                    {opacity: 0},
                    {opacity: 1}
                ], {duration: 500});
                contentDates[i].classList.add("block");
                contentDates[i].classList.remove("none");
            };
        });
    });
});
tabs.forEach((item, index) => {
    item.addEventListener("click", function(){
        for(let i = 0; i < tabs.length; i++){
            tabs[i].classList.remove("active");
        };
        item.classList.add("active");
    });
});
window.addEventListener("scroll", function(event){
    let position = window.pageYOffset;
    if(position > window.innerHeight){
        upto.classList.add("block");
    } else {
        upto.classList.remove("block");
    };
});
upto.addEventListener("click", function(){
    window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});