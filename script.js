// let play = document.querySelector(".icon2");
// let pause = document.querySelector(".icon3");
// let refresh = document.querySelector(".icon4");
// let timer = document.querySelector(".timer");

// play.addEventListener("click", () => {
//     pause.classList.remove("hide");
//     play.classList.add("hide");
//     time(0, 0, 0);
// })

// pause.addEventListener("click", () => {
//     play.classList.remove("hide");
//     pause.classList.add("hide");


// })

// refresh.addEventListener("click", () => {
//     // refresh.classList.add("rotate");
// })

// const time = (i, j, k) => {
//     for (let i = 0; i < 24; i++) {
//         for (let j = 0; j <= 60; j++) {
//             if (j == 60) {
//                 j = 0;
//             }
//             else {
//                 setInterval(() => {
//                     for (let k = 0; k < 60; k++) {
//                         if (k == 60) {
//                             k = 0;
//                         }
//                         else {

//                             if (i < 10 && j < 10 && k < 10) {
//                                 timer.innerHTML = `0${i}:0${j}:0${k}`;
//                             }
//                             else if (i < 10 && j < 10 && k > 10) {
//                                 timer.innerHTML = `0${i}:0${j}:${k}`;
//                             }
//                             else if (i < 10 && j > 10 && k > 10) {
//                                 timer.innerHTML = `0${i}:${j}:${k}`;
//                             }
//                             else {
//                                 timer.innerHTML = `${i}:${j}:${k}`;
//                             }


//                         }
//                     }
//                 }, 1000);
//             }
//         }
//     }
// }
let mainPart = document.querySelector(".main-part");
let play = document.querySelector(".icon2");
let pause = document.querySelector(".icon3");
let restart = document.querySelector(".icon4");
let [sec, min, hr] = [0, 0, 0];
let timer = document.querySelector(".timer");
let t = null;

function stopwatch() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hr++;
        }
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    timer.innerHTML = `${h}:${m}:${s}`;
}

pause.addEventListener("click", () => {
    play.classList.remove("hide");
    pause.classList.add("hide");
    mainPart.classList.add("red");
    mainPart.classList.remove("green");
    stop();
})
restart.addEventListener("click", () => {
    mainPart.classList.remove("green");
    mainPart.classList.remove("red");
    reStart();
})

play.addEventListener("click", () => {
    pause.classList.remove("hide");
    play.classList.add("hide");
    mainPart.classList.remove("red");
    mainPart.classList.add("green");
    watchStart();
})
function watchStart() {
    if (t !== null) {
        clearInterval(t);
    }
    t = setInterval(stopwatch, 200);
}
function stop() {
    clearInterval(t);
}
function reStart() {
    clearInterval(t);
    [sec, min, hr] = [0, 0, 0];
    timer.innerHTML="00:00:00";
    play.classList.remove("hide");
    pause.classList.add("hide");
}