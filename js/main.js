var headlines = [];
function init() {
    search();
    setId();
    contentList();

}

function search() {
    headlines = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headlines = Array.from(headlines);
    console.log(headlines);
    headlines.forEach(e => {
        console.log(e.innerHTML);
        
    });
}

function setId () {
    headlines.forEach(e => {
        var id = document.createAttribute("id");
        id.value = e.innerHTML;
        e.setAttributeNode(id);
        
    });
    
}

function contentList () {
    var ul = document.createElement("ul");
    document.body.appendChild(ul)
    headlines.forEach(e => {
        var li = document.createElement("li");
        ul.appendChild(li);
        var a = document.createElement("a");
        var linkText = document.createTextNode(e.innerHTML);
        a.appendChild(linkText);
        a.href = "#" + e.id;
        document.body.appendChild(a);
        li.appendChild(a);
        
    });
}





addEventListener("DOMContentLoaded", init);