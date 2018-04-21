// window.onload = checkPause();

// function checkPause() {
//     z = document.getElementById(`video1`)
//     setTimeout(() => {
//         if(z.paused) {
//             alert('gg')
//         }}
//         ,1000)
    
// }

function testFn() {
    let x = document.getElementById('iframe1');
    x.className += "showElement";

    x.setAttribute('src', x.getAttribute('data-src'))

}

function testFn2() {
    window.open(
        'files/Pawan Chawla - Software Developer.pdf',
        '_blank' // <- This is what makes it open in a new window.
      );
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