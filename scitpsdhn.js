const pages = document.querySelectorAll("iframe");
console.log(pages);
function loads () {
    pages.forEach((page,index) => {
        console.log(page);
        const body = page.querySelector("body");
        // const body = page.;
        console.log(body)
        const title = page.querySelector("title").innerHTML;
        console.log(title);
        const header = document.createElement("p");
        if(title!=null){
            header.innerHTML = title;
            console.log(header);
            body.before(header);
        }
    });

}