// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. 
// Once the value is 0 it should log “DONE!” and stop.

// countDown(4);
// 3
// 2
// 1
// "DONE!"

function countDown(number) {
    let timer = setInterval(function(){
        // decrements by 1
        number--;
        // checks value of number -> if number <=0, print 'DONE!', otherwise print number
        if(number <= 0) {
            clearInterval(timer);
            console.log("DONE!");
        }
        else {
            console.log(number);
        }
    }, 1000);
}

// countDown(10);


// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds. 
// Each time that a random number is picked, add 1 to a counter.
// If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
    let numberOfTries = 0;
    let timer = setInterval(function() {
        let num = Math.random(); 
        numberOfTries ++;
        if (num > 0.75) {
            clearInterval(timer);
            console.log("It took " + numberOfTries + " try/tries.");
        } 
    }, 1000)
}

randomGame();