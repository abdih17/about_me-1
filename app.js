'use strict';

alert('Hello! Welcome to my \"About Me\" page! Let\'s play a quick guessing game about my life \(5 questions\). If you think I\'m telling the truth, answer: \"Yes\". If you think I\'m lying, answer: \"No\". Press OK to continue...');

// QUESTION 1

var question1 = prompt('My grandfather was a Puerto Rican CIA Field Agent who used to translate communications they intercepted of Fidel Castro for the United States government.').toLowerCase();

while (question1 != 'yes' && question1 != 'y' && question1 != 'no' && question1 != 'n' && question1 != 'true' && question1 !='false') {
  console.log('User input invalid for Question 1: ' + question1);
  alert('Please answer either Yes, Y, No, N, True or False. \(not case sensitive\)');
  question1 = prompt('My grandfather was a Puerto Rican CIA Field Agent who used to translate communications they intercepted of Fidel Castro for the United States government.').toLowerCase();
}

if (question1 === 'yes' || question1 === 'y' || question1 === 'true') {
  alert('Correct! My grandfather was like the Puerto Rican James Bond from NYC.');
} else if (question1 === 'no' || question1 === 'n' || question1 === 'false') {
  alert('Actually, it\'s true. My grandfather was like the Puerto Rican James Bond from NYC.');
};
console.log('User guessed ' + question1 + ' to Question 1');

// QUESTION 2

var question2 = prompt('I spend a lot of time walking around the woods in the rain looking for things to eat.').toLowerCase();

while (question2 != 'yes' && question2 != 'y' && question2 != 'no' && question2 != 'n' && question2 != 'true' && question2 !='false') {
  console.log('User input invalid for Question 2: ' + question2);
  alert('Please answer either Yes, Y, No, N, True or False. \(not case sensitive\)');
  question2 = prompt('I spend a lot of time walking around the woods in the rain looking for things to eat.').toLowerCase();
}

if (question2 === 'yes' || question2 === 'y' || question2 === 'true') {
  alert('YEP! It\'s true. I love foraging for mushrooms around my top secret sweet spots in the Pacific NW \(No, I won\'t tell you the exact location\). I also love digging for clams and scooping up oysters off the beach \(and eating them raw/alive\)');
} else if (question2 === 'no' || question2 === 'n' || question2 === 'false') {
  alert('Actually, it\'s true. I love foraging for mushrooms around my top secret sweet spots in the Pacific NW \(No, I won\'t tell you the exact location\). I also love digging for clams and scooping up oysters off the beach \(and eating them raw/alive\)');
};
console.log('User guessed ' + question2 + ' to Question 2');

// QUESTION 3

var question3 = prompt('I never graduated from high school and did not receive my GED until I was 31 years old.').toLowerCase();

while (question3 != 'yes' && question3 != 'y' && question3 != 'no' && question3 != 'n' && question3 != 'true' && question3 !='false') {
  console.log('User input invalid for Question 3: ' + question3);
  alert('Please answer either Yes, Y, No, N, True or False. \(not case sensitive\)');
  question3 = prompt('I never graduated from High School and did not receive my GED until I was 31 years old.').toLowerCase();
}

if (question3 === 'yes' || question3 === 'y' || question3 === 'true') {
  alert('It\'s true, I dropped out of high school in the 10th grade to start my own business selling screen-printed t-shirts and sweatshirts. I supported myself on that income for over 15 years.');
} else if (question3 === 'no' || question3 === 'n' || question3 === 'false') {
  alert('Actually, it\'s true. I dropped out of high school in the 10th grade to start my own business selling screen-printed t-shirts and sweatshirts. I supported myself on that income for over 15 years.');
};
console.log('User guessed ' + question3 + ' to Question 3');

// QUESTION 4

var question4 = prompt('My uncles legally hunted and killed a grey whale in 1999 on a hand carved canoe with harpoons and a 50 cal rifle, after fasting, bathing in ice water and covering their bare skin in stinging nettles.').toLowerCase();

while (question4 != 'yes' && question4 != 'y' && question4 != 'no' && question4 != 'n' && question4 != 'true' && question4 !='false') {
  console.log('User input invalid for Question 4: ' + question4);
  alert('Please answer either Yes, Y, No, N, True or False. \(not case sensitive\)');
  question4 = prompt('My uncles legally hunted and killed a grey whale in 1999 on a hand carved canoe with harpoons and a 50 cal rifle, after fasting, bathing in ice water and covering their bare skin in stinging nettles.').toLowerCase();
}

if (question4 === 'yes' || question4 === 'y' || question4 === 'true') {
  alert('100% true. The Makah tribe was granted whaling rights in our treaty with the US government in 1855. The discipline and training required by the tribe in order to participate in these hunts is extremely difficult.');
} else if (question4 === 'no' || question4 === 'n' || question4 === 'false') {
  alert('That statement was 100% true. The Makah tribe was granted whaling rights in our treaty with the US government in 1855. The discipline and training required by the tribe in order to participate in these hunts is extremely difficult.');
};
console.log('User guessed ' + question4 + ' to Question 4');

// QUESTION 5

var question5 = prompt('I\'ve never missed a Dave Mathews Band concert at the Gorge.').toLowerCase();

while (question5 != 'yes' && question5 != 'y' && question5 != 'no' && question5 != 'n' && question5 != 'true' && question5 !='false') {
  console.log('User input invalid for Question 5: ' + question5);
  alert('Please answer either Yes, Y, No, N, True or False. \(not case sensitive\)');
  question5 = prompt('I\'ve never missed a Dave Mathews Band concert at the Gorge.').toLowerCase();
}

if (question5 === 'yes' || question5 === 'y' || question5 === 'true') {
  alert('Wrong. I\'ve never been to a Dave Mathews Band concert, and I probably never will.');
} else if (question5 === 'no' || question5 === 'n' || question5 === 'false') {
  alert('Correct. I\'ve never been to a Dave Mathews Band concert, and I probably never will.');
};
console.log('User guessed ' + question5 + ' to Question 5');
