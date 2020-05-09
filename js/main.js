
function init() {
    var content1 = new ContentGenerator("#content-list");
    content1.contentList();

}

class ContentGenerator {
    constructor (position) {
        this.root = document.querySelector(position);
        var headlines = [];
    }

    // search = () => {
    //     var headlines = this.headlines;
    //     headlines = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    //     headlines = Array.from(headlines);
    // }

    // setId = () => {
    //     headlines.forEach(e => {
    //         e.setAttribute("id", randomID() );
            
    //     });
    // }

    contentList = () => {
        var headlines = this.headlines;
        headlines = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        headlines = Array.from(headlines);
        headlines.forEach(e => {
            e.setAttribute("id", randomID() );
        });
        var ul = document.createElement("ul");
        this.root.appendChild(ul)
        headlines.forEach(e => {
            var li = document.createElement("li");
            ul.appendChild(li);
            var a = document.createElement("a");
            a.appendChild(document.createTextNode(e.innerHTML));
            a.href = "#" + e.id;
            this.root.appendChild(a);
            li.appendChild(a);
            li.setAttribute("class", e.tagName);
            
        });
    }
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