let tags = ["a","span","h1","h2","h3","h4","p","td","li"];
tags.forEach(tag => {
    let f = document.querySelectorAll(tag);
    f.forEach(f => f.innerHTML=("Hahaha!"));
})
