// (new Image()).src = "img/1.gif"
// (new Image()).src = "img/2.gif"
// (new Image()).src = "img/3.gif"
// (new Image()).src = "img/4.gif"
// (new Image()).src = "img/5.gif"
// (new Image()).src = "img/6.gif"

function testFn() {
    let x = document.getElementById('iframe1');
    x.className += "showElement";

    x.setAttribute('src', x.getAttribute('data-src'))

}

function playGif(num) {
    let x = document.getElementById(`gif${num}playbutton`)
    x.style.display = "none"
    let y = document.getElementById(`gif${num}pausebutton`)
    y.style.display = "inline"

    let z = document.getElementById(`gif${num}`)
    z.setAttribute('src', z.getAttribute('data-srcgif'))

}

function pauseGif(num) {
    let x = document.getElementById(`gif${num}playbutton`)
    x.style.display = "inline"
    let y = document.getElementById(`gif${num}pausebutton`)
    y.style.display = "none"

    let z = document.getElementById(`gif${num}`)
    z.setAttribute('src', z.getAttribute('data-srcjpg'))

}

function playmp4(num) {

    let x = document.getElementById(`gif${num}playbutton`)
    x.style.display = "none"
    let y = document.getElementById(`gif${num}pausebutton`)
    y.style.display = "inline"

    let z = document.getElementById(`video${num}`)
    z.play()
}

function pausemp4(num) {

    let x = document.getElementById(`gif${num}playbutton`)
    x.style.display = "inline"
    let y = document.getElementById(`gif${num}pausebutton`)
    y.style.display = "none"

    let z = document.getElementById(`video${num}`)
    z.pause()
}