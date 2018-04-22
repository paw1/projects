window.onload = checkPause();

function checkPause() {
    z = Array.from(document.getElementsByTagName(`video`))
    // console.log(z)
    setTimeout(() => {
        if(z[0].paused) {
            z.forEach(element => {
                element.play()
                setTimeout(() => {
                    if(!z[0].paused) {
                        x = Array.from(document.getElementsByClassName(`plBtn`))
                        x.forEach((el) => el.classList.add("dpNone"))
                        y = Array.from(document.getElementsByClassName(`psBtn`))
                        y.forEach((el) => el.classList.remove("dpNone"))
                    }
                } , 1000)
            });
        
        }}
        ,1000)
    
}

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

// function playGif(num) {
//     let x = document.getElementById(`gif${num}playbutton`)
//     x.style.display = "none"
//     let y = document.getElementById(`gif${num}pausebutton`)
//     y.style.display = "inline"

//     let z = document.getElementById(`gif${num}`)
//     z.setAttribute('src', z.getAttribute('data-srcgif'))

// }

// function pauseGif(num) {
//     let x = document.getElementById(`gif${num}playbutton`)
//     x.style.display = "inline"
//     let y = document.getElementById(`gif${num}pausebutton`)
//     y.style.display = "none"

//     let z = document.getElementById(`gif${num}`)
//     z.setAttribute('src', z.getAttribute('data-srcjpg'))

// }

function playmp4(num) {

    let x = document.getElementById(`gif${num}playbutton`)
    x.classList.add('dpNone')
    let y = document.getElementById(`gif${num}pausebutton`)
    y.classList.remove('dpNone')

    let z = document.getElementById(`video${num}`)
    z.play()
}

function pausemp4(num) {

    let x = document.getElementById(`gif${num}playbutton`)
    x.classList.remove('dpNone')
    let y = document.getElementById(`gif${num}pausebutton`)
    y.classList.add('dpNone')

    let z = document.getElementById(`video${num}`)
    z.pause()
}