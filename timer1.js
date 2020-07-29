//Implement a timer which will beep after a specified amount of time
//User should be able to specify an unlimited number of alarms using command line arguments
/* Example: 


// 10 3 5 are arguments
// to access arguments: 
//  
node timer1.js 10 3 5 15 9 

This will make it beep at:

    3 seconds
    5 seconds
    9 seconds
    10 seconds
    15 seconds
*/

const alarmClock = function() {
  const userInput = process.argv.slice(2);
  if (userInput.length === 0){
    return;
  }
  for (let i = 0; i < userInput.length; i++){
    if (userInput[i] >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, userInput[i] * 1000);
    } else {
      continue;
    }
  }
};

alarmClock();

// console.log(process.argv.slice(2));