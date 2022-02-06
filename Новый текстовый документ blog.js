let upto = document.querySelector(".upTo");
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
class blogConstructor{
    constructor(src, alt, classes, classes2th, text, text2th, href, parenter){
        this.src = src;
        this.alt = alt;
        this.classes = classes;
        this.classes2th = classes2th;
        this.text = text;
        this.text2th = text2th;
        this.href = href;
        this.parent = document.querySelector(parenter);
    }
    create (){
        let element = document.createElement("div");
        element.classList.add("mainBlogContentBox");
        element.innerHTML = `
            <a href="${this.href}" class="${this.classes}">
            <img src="${this.src}" alt="${this.alt}">
            </a>
            <p>${this.text}</p>
            <a href="${this.href}" class="${this.classes2th}">${this.text2th}</a>
        `
        this.parent.append(element)
    }
};
new blogConstructor(
    "img/b1.jpg",
    "b1",
    "blogImg",
    "blogLink",
    "Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "READ",
    "",
    ".mainBlogContent"
).create();
new blogConstructor(
    "img/b2.jpg",
    "b2",
    "blogImg",
    "blogLink",
    "Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "READ",
    "",
    ".mainBlogContent"
).create();
new blogConstructor(
    "img/b3.jpg",
    "b3",
    "blogImg",
    "blogLink",
    "Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "READ",
    "",
    ".mainBlogContent"
).create();
new blogConstructor(
    "img/b1.jpg",
    "b1",
    "blogImg",
    "blogLink",
    "Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "READ",
    "",
    ".mainBlogContent"
).create();
new blogConstructor(
    "img/b2.jpg",
    "b2",
    "blogImg",
    "blogLink",
    "Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "READ",
    "",
    ".mainBlogContent"
).create();
new blogConstructor(
    "img/b3.jpg",
    "b3",
    "blogImg",
    "blogLink",
    "Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "READ",
    "",
    ".mainBlogContent"
).create();
new blogConstructor(
    "img/b1.jpg",
    "b1",
    "blogImg",
    "blogLink",
    "Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "READ",
    "",
    ".mainBlogContent"
).create();
new blogConstructor(
    "img/b2.jpg",
    "b2",
    "blogImg",
    "blogLink",
    "Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "READ",
    "",
    ".mainBlogContent"
).create();