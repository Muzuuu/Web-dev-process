let minnum = 1;
let maxnum = 100;
let answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;

let attempt = 0;
let guss;
let running = true;

while (running) {
    guss = Number(window.prompt(`Guess the Number Between ${minnum} - ${maxnum}`)); // Convert user input to a number
    
    if (isNaN(guss)) {
        window.alert('Please enter a valid number');
    } else if (guss < minnum || guss > maxnum) {
        window.alert("Please enter a number within the range");
    } else {
        attempt++;
        if (guss < answer) {
            window.alert("TOO LOW! TRY AGAIN");
        } else if (guss > answer) {
            window.alert("TOO HIGH! TRY AGAIN");
        } else {
            window.alert(`You have guessed the CORRECT ANSWER ${answer}, it took you ${attempt} ATTEMPTS`);
            running = false;
        }
    }
}
