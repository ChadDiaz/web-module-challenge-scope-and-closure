// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
// console.log(processFirstItem(["foo", "bar"], (str) => str + str))
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *   
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * // 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * //  
*/
console.log("Task 1a answer is -> the let count=0 is in the function in counter1, meaning each time it is invoked, it will restart to 0, in counter2, the let count=0 is outside the function and it will increment by 1 each time the function is invoked.")
console.log("")
console.log("Task 1b answer is -> I feel that counter1 is a closure as count can only be accessed by invoking the function counterMaker. ")
console.log("")
console.log("Task 1c answer is -> see my response in answer 1. ")
// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}
console.log("");

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  randNum = Math.floor(Math.random() * 3 );
  return randNum;
}
console.log("The answer to task 2 is " + inning());
console.log("");

function awayInning(){
  return Math.floor(Math.random() * 3);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callBack,number){
  let home=0;
  let away=0;
  for (let i =0; i<=number; i++){
    home += callBack();
  }
  for(let j=0; j<=number; j++){
    away += callBack();
  }
  return {
    "Home": home,
    "Away": away
  }
}
console.log("The answer to Task 3 " , finalScore(inning,9));
console.log("");


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(callBack1, callBack2, inningNum) {
  let homeScores = 0;
  let awayScores = 0;
  
  for (let i = 0; i <= inningNum; i++){
    homeScores += callBack1(callBack2);
    awayScores += callBack1(callBack2);
    
    if (i == 1){
      console.log(`${i}st inning: ${awayScores} - ${homeScores}`)
    }
    else if (i == 2){
      console.log(`${i}nd inning: ${awayScores} - ${homeScores}`)
    }
    else if (i == 3){
      console.log(`${i}rd inning: ${awayScores} - ${homeScores}`)
    }
    else {
      console.log (`${i}th inning: ${awayScores} - ${homeScores}`)
    }
  }
  return `Final Score: ${awayScores} - ${homeScores}`
}

console.log(scoreboard(inning, awayInning, 9))

