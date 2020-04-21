var headlines = [];
function init() {
    search();
    setId();
    contentList();

}

function search() {
    headlines = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headlines = Array.from(headlines);
}

function setId () {
    headlines.forEach(e => {
        e.setAttribute("id", randomID() );
        
    });
    
}

function contentList () {
    var ul = document.createElement("ul");
    document.body.appendChild(ul)
    headlines.forEach(e => {
        var li = document.createElement("li");
        ul.appendChild(li);
        var a = document.createElement("a");
        a.appendChild(document.createTextNode(e.innerHTML));
        a.href = "#" + e.id;
        document.body.appendChild(a);
        li.appendChild(a);
        li.setAttribute("class", e.tagName);
        
    });
}

function randomID() {
    let symbols = "0123456789ABCDEF";
    let res = "";
    for (let i = 0; i < 6; i++) {
        res += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return res;
}



addEventListener("DOMContentLoaded", init);