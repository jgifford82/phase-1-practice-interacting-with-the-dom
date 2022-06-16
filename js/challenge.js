window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded');
    // setInterval(interval, 1000);

    let interval = setInterval(increment, 1000);
    let counter = document.querySelector('#counter');
    let seconds = 0;
function increment() {
    counter.textContent = seconds;
    seconds += 1;
}


const minus = document.querySelector('#minus');
minus.addEventListener('click', (event) => counter.innerHTML -= 1);

const plus = document.querySelector('#plus');
plus.addEventListener('click', (event) => counter.innerHTML = parseInt(counter.innerHTML, 10) + 1);


const heart = document.querySelector('#heart');
let likesObj = {};
heart.addEventListener('click', (event) => {
    const ul = document.querySelector(".likes");
    const li = document.createElement("li");
    
    let counterValue = document.querySelector('#counter').textContent;
    // let counterClicks = 0
    // counterClicks =+ 1;
    // if (counterClicks === 1) {
    //     li.innerText = `${counter.innerHTML} has been liked ${counterClicks} time`
    // } else {
    //     li.innerText = `${counter.innerHTML} has been liked ${counterClicks += 1} times`
    // }

    // ul.appendChild(li);

    let likesCount = counter.textContent;
    let foundLi = document.getElementById(likesCount)

    if(foundLi) {
        likesObj[counterValue] ++
        foundLi.textContent = `${likesCount} has been liked ${likesObj[counterValue]} times`;
    } else {
       likesObj[counterValue] = 1 
       li.id = likesCount
       li.textContent = `${likesCount} has been liked ${likesObj[counterValue]} time`;
       ul.appendChild(li);
    }
})

const submit = document.querySelector('#submit');
const pause = document.querySelector('#pause');

pause.addEventListener('click', (event) => {
    if (pause.innerHTML === "resume") {
        pause.innerHTML = "pause"
        interval = setInterval(increment, 1000)
    } else {
        clearInterval(interval)
        pause.innerHTML = "resume";
    }
    minus.disabled = !minus.disabled;
    plus.disabled = !plus.disabled;
    heart.disabled = !heart.disabled;
    submit.disabled = !submit.disabled;
});



document.getElementById("comment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const div = document.querySelector("#list");
    const p = document.createElement("p");
    div.appendChild(p);
    let input = document.querySelector("#comment-input")
    p.append(`${input.value}`)
    input.value = ""
})

});



// Manually increment and decrement the counter using the plus and minus buttons.
// We need an event listener for a click, and change the textContent of the counter.
// const minus = document.querySelector('#minus');
// minus.addEventListener('click', (event) => counter.innerHTML -= 1);

// const plus = document.querySelector('#plus');
// plus.addEventListener('click', (event) => counter.innerHTML = parseInt(counter.innerHTML, 10) + 1);

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// Need an event listener for click that: 
//      DONE targets the like button 
//      DONE creates an li element
//      DONE appends new element to the ul 
//      DONE and new li text content 
//      DONE text interpolating the counter innerHTML into string "has been liked x times." 
// also need x to increment +1 on each click
// const heart = document.querySelector('#heart');
// heart.addEventListener('click', (event) => {
//     const ul = document.querySelector(".likes");
//     const li = document.createElement("li");
//     ul.appendChild(li);
//     li.append(`${counter.innerHTML} has been liked x times`);
// })

// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// pseudo code: grab the pause button in a variable, add click event listener.

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."