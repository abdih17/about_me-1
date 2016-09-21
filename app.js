'use strict';
var username = prompt('What is your name?');
alert('Hello, ' + username + '! Welcome to my \"About Me\" page! Let\'s play a quick guessing game about my life \(5 questions\). If you think I\'m telling the truth, answer: \"Yes\". If you think I\'m lying, answer: \"No\". Press OK to continue...');

// QUESTION 1

var question1 = prompt('My grandfather was a Puerto Rican CIA Field Agent who used to translate intercepted communications of Fidel Castro for the United States government.').toLowerCase();

while (question1 !== 'yes' && question1 !== 'y' && question1 !== 'no' && question1 !== 'n' && question1 !== 'true' && question1 !== 'false' && question1 !== 't' && question1 !== 'f') {
  console.log(username + '\'s input was invalid for Question 1: ' + question1 + '. Try again, ' + username + '.');
  alert('To proceed, please answer either: Yes, Y, No, N, True, False, T, or F. \(Your answer is not case sensitive\)');
  question1 = prompt('My grandfather was a Puerto Rican CIA Field Agent who used to translate intercepted communications of Fidel Castro for the United States government.').toLowerCase();
}

if (question1 === 'yes' || question1 === 'y' || question1 === 'true' || question1 === 't') {
  alert('Correct! My grandfather was like the Puerto Rican James Bond of NYC.');
} else if (question1 === 'no' || question1 === 'n' || question1 === 'false' || question1 === 'f') {
  alert('Actually, it\'s true. My grandfather was like the Puerto Rican James Bond of NYC.');
};
console.log('User guessed ' + question1 + ' to Question 1');

// QUESTION 2

var question2 = prompt('I spend a lot of my free time walking around the woods in the rain looking for things to eat.').toLowerCase();

while (question2 !== 'yes' && question2 !== 'y' && question2 !== 'no' && question2 !== 'n' && question2 !== 'true' && question2 !== 'false' && question2 !== 't' && question2 !== 'f') {
  console.log(username + '\'s input was invalid for Question 2: ' + question2 + '. Try again, ' + username + '.');
  alert('To proceed, please answer either: Yes, Y, No, N, True, False, T, or F. \(Your answer is not case sensitive\)');
  question2 = prompt('I spend a lot of my free time walking around the woods in the rain looking for things to eat.').toLowerCase();
}

if (question2 === 'yes' || question2 === 'y' || question2 === 'true' || question2 === 't') {
  alert('YEP! It\'s true. I love foraging for fungus in the forest every Fall. I also love digging clams and scooping up oysters off the beach \(and eating them raw/alive\)');
} else if (question2 === 'no' || question2 === 'n' || question2 === 'false' || question2 === 'f') {
  alert('Wrong! I love foraging for fungus in the forest every Fall. I also love digging clams and scooping up oysters off the beach \(and eating them raw/alive\)');
};
console.log('User guessed ' + question2 + ' to Question 2');

// QUESTION 3

var question3 = prompt('I dropped out of high school in the 10th grade to start my own business selling screenprinted T-shirts and Sweatshirts.').toLowerCase();

while (question3 !== 'yes' && question3 !== 'y' && question3 !== 'no' && question3 !== 'n' && question3 !== 'true' && question3 !== 'false' && question3 !== 't' && question3 !== 'f') {
  console.log(username + '\'s input was invalid for Question 3: ' + question3 + '. Try again, ' + username + '.');
  alert('To proceed, please answer either: Yes, Y, No, N, True, False, T, or F. \(Your answer is not case sensitive\)');
  question3 = prompt('I dropped out of high school in the 10th grade to start my own business selling screenprinted T-shirts and Sweatshirts.').toLowerCase();
}

if (question3 === 'yes' || question3 === 'y' || question3 === 'true' || question3 === 't') {
  alert('Yes! It\'s true, and I supported myself on that income for over 15 years.');
} else if (question3 === 'no' || question3 === 'n' || question3 === 'false' || question3 === 'f') {
  alert('Nope, I totally did that! ...and I supported myself on that income for over 15 years.');
};
console.log('User guessed ' + question3 + ' to Question 3');

// QUESTION 4

var question4 = prompt('One time, my uncle and his buddies paddled into sea and killed a gray whale (legally), brought it to shore and cooked it for dinner.').toLowerCase();

while (question4 !== 'yes' && question4 !== 'y' && question4 !== 'no' && question4 !== 'n' && question4 !== 'true' && question4 !== 'false' && question4 !== 't' && question4 !== 'f') {
  console.log(username + '\'s input was invalid for Question 4: ' + question4 + '. Try again, ' + username + '.');
  alert('To proceed, please answer either: Yes, Y, No, N, True, False, T, or F. \(Your answer is not case sensitive\)');
  question4 = prompt('One time, my uncle and his buddies paddled into sea and killed a gray whale (legally), brought it to shore and cooked it for dinner.').toLowerCase();
}

if (question4 === 'yes' || question4 === 'y' || question4 === 'true' || question4 === 't') {
  alert('Correct! The Makah tribe was granted whaling rights in our treaty with the US government in 1855, and my uncles succesfully harvested one on May 17, 1999.');
} else if (question4 === 'no' || question4 === 'n' || question4 === 'false' || question4 === 'f') {
  alert('That statement was actually true, believe it or not! The Makah tribe was granted whaling rights in our treaty with the US government in 1855, and my uncles succesfully harvested one on May 17, 1999.');
};
console.log('User guessed ' + question4 + ' to Question 4');

// QUESTION 5

var question5 = prompt('I\'ve never missed a Dave Mathews Band concert at the Gorge, in all of my adult life.').toLowerCase();

while (question5 !== 'yes' && question5 !== 'y' && question5 !== 'no' && question5 !== 'n' && question5 !== 'true' && question5 !== 'false' && question5 !== 't' && question5 !== 'f') {
  console.log(username + '\'s input was invalid for Question 5: ' + question5 + '. Try again, ' + username + '.');
  alert('To proceed, please answer either: Yes, Y, No, N, True, False, T, or F. \(Your answer is not case sensitive\)');
  question5 = prompt('I\'ve never missed a Dave Mathews Band concert at the Gorge, in all of my adult life.').toLowerCase();
}

if (question5 === 'yes' || question5 === 'y' || question5 === 'true' || question5 === 't') {
  alert('Wrong! I\'ve never been to a Dave Mathews Band concert, and I probably never will.');
} else if (question5 === 'no' || question5 === 'n' || question5 === 'false' || question5 === 'f') {
  alert('Correct. I\'ve never been to a Dave Mathews Band concert, and I probably never will.');
};
console.log('User guessed ' + question5 + ' to Question 5');
