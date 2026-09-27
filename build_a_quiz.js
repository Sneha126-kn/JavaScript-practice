let questions=[
  {category:"Math",
  question:"What is 2+2?",
  choices:["4","5","6"],
  answer:"4"

  },
  {category:"Science",
  question:"What is photosyntheses?",
  choices:["Water","making food","you"],
  answer:"making food"

  },
  {category:"Social science",
  question:"Who is the father our nation?",
  choices:["me","u","gandhi"],
  answer:"gandhi"

  },
  {category:"Kannada",
  question:"which state off lang ?",
  choices:["karnataka","goa","kerala"],
  answer:"karnataka"

  },
  {category:"Forest",
  question:"Which is the king of the forest?",
  choices:["Lion","tiger","tree"],
  answer:"Lion"

  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}
