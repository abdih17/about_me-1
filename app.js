'use strict';

alert('Hello! Welcome to my \"About Me\" page! Let\'s play a quick guessing game about my life. If you think I\'m telling the truth answer: Yes. If you think I\'m lying answer: No. Press OK to continue...');

// QUESTION 1

var question1 = prompt('Guess the answer to Question 1').toLowerCase();

while (question1 != 'yes' && question1 != 'y' && question1 != 'no' && question1 != 'n') {
  console.log('User input invalid for Question 1: ' + question1);
  alert('Please input Yes\(Y\) or No \(N\) \(not case sensitive\)');
  question1 = prompt('Guess the answer to Question 1').toLowerCase();
}

if (question1 === 'yes' || question1 === 'y') {
  alert('Yes that is true');
} else if (question1 === 'no' || question1 === 'n') {
  alert('Actually...');
};
console.log('User guessed ' + question1 + ' to Question 1');

// QUESTION 2

var question2 = prompt('Guess the answer to Question 2').toLowerCase();

while (question2 != 'yes' && question2 != 'y' && question2 != 'no' && question2 != 'n') {
  console.log('User input invalid for Question 2: ' + question2);
  alert('Please input Yes\(Y\) or No \(N\) \(not case sensitive\)');
  question2 = prompt('Guess the answer to Question 2').toLowerCase();
}

if (question2 === 'yes' || question2 === 'y') {
  alert('Yes that is true');
} else if (question2 === 'no' || question2 === 'n') {
  alert('Actually...');
};
console.log('User guessed ' + question2 + ' to Question 2');

// QUESTION 3

var question3 = prompt('Guess the answer to Question 3').toLowerCase();

while (question3 != 'yes' && question3 != 'y' && question3 != 'no' && question3 != 'n') {
  console.log('User input invalid for Question 3: ' + question3);
  alert('Please input Yes\(Y\) or No \(N\) \(not case sensitive\)');
  question3 = prompt('Guess the answer to Question 3').toLowerCase();
}

if (question3 === 'yes' || question3 === 'y') {
  alert('Yes that is true');
} else if (question3 === 'no' || question3 === 'n') {
  alert('Actually...');
};
console.log('User guessed ' + question3 + ' to Question 3');

// QUESTION 4

var question4 = prompt('Guess the answer to Question 4').toLowerCase();

while (question4 != 'yes' && question4 != 'y' && question4 != 'no' && question4 != 'n') {
  console.log('User input invalid for Question 4: ' + question4);
  alert('Please input Yes\(Y\) or No \(N\) \(not case sensitive\)');
  question4 = prompt('Guess the answer to Question 4').toLowerCase();
}

if (question4 === 'yes' || question4 === 'y') {
  alert('Yes that is true');
} else if (question4 === 'no' || question4 === 'n') {
  alert('Actually...');
};
console.log('User guessed ' + question4 + ' to Question 4');

// QUESTION 5

var question5 = prompt('Guess the answer to Question 5').toLowerCase();

while (question5 != 'yes' && question5 != 'y' && question5 != 'no' && question5 != 'n') {
  console.log('User input invalid for Question 5: ' + question5);
  alert('Please input Yes\(Y\) or No \(N\) \(not case sensitive\)');
  question5 = prompt('Guess the answer to Question 5').toLowerCase();
}

if (question5 === 'yes' || question5 === 'y') {
  alert('Yes that is true');
} else if (question5 === 'no' || question5 === 'n') {
  alert('Actually...');
};
console.log('User guessed ' + question5 + ' to Question 5');
