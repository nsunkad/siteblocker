// alert("the URL of this page is " +  window.location.href + typeof(window.location.href));

let url = window.location.href;

const urlsToBlock = ["facebook.com", "quora.com", "reddit.com", "twitter.com", "linkedin.com"];

if (urlsToBlock.some(e => url.includes(e))) {
    clearPage();
    document.body.innerHTML = HTMLCSSToDisplay();
}

function clearPage() {
    let body = document.body;
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}

function HTMLCSSToDisplay() {
    return  `
        <div>
            <img src="https://media.makeameme.org/created/yeah-and-now-3zr5bh.jpg" width="1450" height="800">
        </div>
    `
}
