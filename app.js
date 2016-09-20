'use strict';

var question1 = prompt('Guess the answer to Question 1').toLowerCase();

while (question1 != 'yes' && question1 != 'y' && question1 != 'no' && question1 != 'n') {
  console.log(question1);
  alert('Please input Yes\(Y\) or No \(N\) \(not case sensitive\)');
  question1 = prompt('Guess the answer to Question 1').toLowerCase();
}

if (question1 === 'yes' || question1 === 'y') {
  alert('Yes that is true');
} else if (question1 === 'no' || question1 === 'n') {
  alert('Actually...');
};
console.log('Guessed ' + question1 + ' to Question 1');
