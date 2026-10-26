const questions = [
  {
    question: "Which keyword declares a variable that can be reassigned?",
    options: ["const", "let", "static", "final"],
    answer: 1,
    explanation: "Use let when a variable's value needs to change. const is for bindings that should not be reassigned."
  },
  {
    question: "What does typeof null return in JavaScript?",
    options: ['"null"', '"undefined"', '"object"', '"number"'],
    answer: 2,
    explanation: 'For historical reasons, typeof null returns "object". This is a well-known quirk of JavaScript.'
  },
  {
    question: "Which array method creates a new array by transforming every item?",
    options: ["filter()", "forEach()", "find()", "map()"],
    answer: 3,
    explanation: "map() calls a function for each array item and returns a new array containing the results."
  },
  {
    question: "What is the result of 2 + '2'?",
    options: ['"22"', "4", "NaN", '"2 2"'],
    answer: 0,
    explanation: "When one operand is a string, + performs concatenation, so the number 2 becomes the string '2'."
  },
  {
    question: "Which value represents an intentional absence of any object value?",
    options: ["undefined", "NaN", "false", "null"],
    answer: 3,
    explanation: "null is an explicitly assigned value that represents the intentional absence of an object."
  },
  {
    question: "How do you add an item to the end of an array?",
    options: ["array.push(item)", "array.pop(item)", "array.shift(item)", "array.add(item)"],
    answer: 0,
    explanation: "push() appends one or more items to the end of an array and returns its new length."
  },
  {
    question: "Which operator checks both value and type equality?",
    options: ["==", "=", "===", "!="],
    answer: 2,
    explanation: "The strict equality operator (===) compares values without converting their types."
  },
  {
    question: "What does Array.isArray(value) do?",
    options: ["Sorts an array", "Checks whether a value is an array", "Creates an array", "Counts array items"],
    answer: 1,
    explanation: "Array.isArray() returns true when the supplied value is an array, and false otherwise."
  },
  {
    question: "Which method converts a JSON string into a JavaScript value?",
    options: ["JSON.stringify()", "JSON.convert()", "JSON.parse()", "JSON.toObject()"],
    answer: 2,
    explanation: "JSON.parse() reads a JSON string and creates the corresponding JavaScript value."
  },
  {
    question: "What is the purpose of the === operator?",
    options: ["Assign a value", "Compare value and type", "Compare only types", "Declare a constant"],
    answer: 1,
    explanation: "=== returns true only when both operands have the same value and the same type."
  },
  {
    question: "Which statement correctly defines an arrow function?",
    options: ["const greet = () => {}", "function => greet() {}", "const greet = -> {}", "arrow greet() {}"],
    answer: 0,
    explanation: "Arrow functions use the => syntax, often assigned to a variable declared with const."
  },
  {
    question: "What does the spread syntax ... do when used with an array?",
    options: ["Deletes its values", "Expands its elements", "Sorts its elements", "Converts it to a string"],
    answer: 1,
    explanation: "The spread syntax expands an iterable, such as an array, into its individual elements."
  },
  {
    question: "Which method removes the last item from an array?",
    options: ["shift()", "slice()", "pop()", "spliceStart()"],
    answer: 2,
    explanation: "pop() removes and returns the last item of an array."
  },
  {
    question: "What does the DOM stand for?",
    options: ["Document Object Model", "Data Order Method", "Digital Ordinance Model", "Document Orientation Map"],
    answer: 0,
    explanation: "The Document Object Model represents a web page as objects that JavaScript can read and change."
  },
  {
    question: "Which event fires when a user clicks an element?",
    options: ["change", "hover", "submit", "click"],
    answer: 3,
    explanation: "The click event fires when a pointing device button is pressed and released on an element."
  },
  {
    question: "What does Promise.all() do?",
    options: ["Runs promises one by one", "Waits for all promises to fulfill, or rejects if one rejects", "Cancels every promise", "Turns a promise into a callback"],
    answer: 1,
    explanation: "Promise.all() fulfills with all results when every input fulfills, and rejects as soon as an input rejects."
  },
  {
    question: "Which keyword pauses an async function until a Promise settles?",
    options: ["wait", "defer", "await", "yield"],
    answer: 2,
    explanation: "await pauses execution inside an async function until the Promise settles, then returns its result."
  },
  {
    question: "What is a closure?",
    options: ["A function bundled with access to its surrounding scope", "A way to close the browser tab", "A loop that runs once", "A built-in array method"],
    answer: 0,
    explanation: "A closure lets a function retain access to variables from the scope where that function was created."
  },
  {
    question: "Which method selects the first element matching a CSS selector?",
    options: ["document.getAll()", "document.querySelector()", "document.selectFirst()", "document.findElement()"],
    answer: 1,
    explanation: "document.querySelector() returns the first matching element, or null if there is no match."
  },
  {
    question: "What is the result of Boolean('')?",
    options: ["true", "undefined", "null", "false"],
    answer: 3,
    explanation: "An empty string is a falsy value, so converting it to a Boolean gives false."
  },
  {
    question: "Which syntax creates a template literal?",
    options: ["'Hello ${name}'", '"Hello ${name}"', "`Hello ${name}`", "(Hello ${name})"],
    answer: 2,
    explanation: "Template literals use backticks and allow expressions to be embedded with ${...}."
  },
  {
    question: "What does the filter() array method return?",
    options: ["A new array with items that pass a test", "The first matching item", "The original array, sorted", "A single combined value"],
    answer: 0,
    explanation: "filter() returns a new array containing only the items for which its callback returns true."
  },
  {
    question: "How can you handle a rejected Promise with async/await?",
    options: ["if / else", "try / catch", "switch / case", "for / catch"],
    answer: 1,
    explanation: "Wrap an await expression in try/catch to handle a Promise rejection as an exception."
  },
  {
    question: "Which keyword prevents a class from being subclassed?",
    options: ["static", "const", "private", "JavaScript has no built-in final class keyword"],
    answer: 3,
    explanation: "JavaScript has no built-in final class keyword. A class can be extended unless you prevent it yourself."
  },
  {
    question: "What does event.preventDefault() do?",
    options: ["Stops the event from reaching every listener", "Removes the event listener", "Prevents the browser's default action", "Refreshes the current page"],
    answer: 2,
    explanation: "preventDefault() cancels the browser's default behavior for an event, such as navigating on a link click."
  }
];

const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const reviewScreen = document.querySelector("#review-screen");
const questionCount = document.querySelector("#question-count");
const questionText = document.querySelector("#question-text");
const optionsList = document.querySelector("#options-list");
const scoreElement = document.querySelector("#score");
const correctCount = document.querySelector("#correct-count");
const progressFill = document.querySelector("#progress-fill");
const progressTrack = document.querySelector(".progress-track");
const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedback-title");
const explanation = document.querySelector("#explanation");
const nextButton = document.querySelector("#next-button");
const timerNumber = document.querySelector("#timer-number");
const timerRing = document.querySelector("#timer-ring");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answerLocked = false;
let remainingSeconds = 30;
let timerId = null;
let answers = [];

function startQuiz() {
  clearInterval(timerId);
  currentQuestion = 0;
  score = 0;
  answers = [];
  selectedAnswer = null;
  scoreElement.textContent = "0";
  correctCount.textContent = "0";
  resultScreen.hidden = true;
  reviewScreen.hidden = true;
  quizScreen.hidden = false;
  renderQuestion();
}

function renderQuestion() {
  clearInterval(timerId);
  selectedAnswer = null;
  answerLocked = false;
  remainingSeconds = 30;
  const question = questions[currentQuestion];

  questionCount.innerHTML = `QUESTION <strong>${String(currentQuestion + 1).padStart(2, "0")}</strong> <span>/ ${questions.length}</span>`;
  questionText.textContent = question.question;
  optionsList.replaceChildren();
  feedback.hidden = true;
  feedback.classList.remove("is-wrong-feedback");
  nextButton.disabled = true;
  nextButton.innerHTML = currentQuestion === questions.length - 1
    ? 'See my results <span aria-hidden="true">→</span>'
    : 'Next question <span aria-hidden="true">→</span>';
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.dataset.index = String(index);
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = option;
    button.addEventListener("click", () => chooseAnswer(index));
    optionsList.append(button);
  });

  updateTimer();
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    updateTimer();
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      lockAnswer(null, true);
    }
  }, 1000);
}

function updateTimer() {
  timerNumber.textContent = String(remainingSeconds);
  const progress = (remainingSeconds / 30) * 100;
  timerRing.style.background = `conic-gradient(var(--purple) ${progress}%, #eeecf6 0)`;
  timerRing.style.setProperty("--timer-progress", `${progress}%`);
  timerRing.classList.toggle("is-low", remainingSeconds <= 10);
  timerNumber.setAttribute("aria-label", `${remainingSeconds} seconds remaining`);
}

function chooseAnswer(index) {
  if (answerLocked) return;
  lockAnswer(index, false);
}

function lockAnswer(index, timedOut) {
  if (answerLocked || quizScreen.hidden) return;
  answerLocked = true;
  selectedAnswer = index;
  clearInterval(timerId);
  const question = questions[currentQuestion];
  const isCorrect = index === question.answer;
  answers.push({ questionIndex: currentQuestion, selectedAnswer: index, isCorrect });

  if (isCorrect) {
    score += 1;
    scoreElement.textContent = String(score);
    correctCount.textContent = String(score);
  }

  [...optionsList.children].forEach((button, optionIndex) => {
    button.disabled = true;
    if (optionIndex === question.answer) button.classList.add("is-correct");
    else if (optionIndex === index) button.classList.add("is-wrong");
  });

  feedback.hidden = false;
  feedback.classList.toggle("is-wrong-feedback", !isCorrect);
  feedbackTitle.textContent = isCorrect ? "That’s right!" : timedOut ? "Time’s up!" : "Not quite!";
  explanation.textContent = question.explanation;
  nextButton.disabled = false;
}

function showResults() {
  clearInterval(timerId);
  quizScreen.hidden = true;
  reviewScreen.hidden = true;
  resultScreen.hidden = false;
  document.querySelector("#final-score").textContent = String(score);

  const percentage = score / questions.length;
  const heading = percentage === 1 ? "Perfect score!" : percentage >= 0.8 ? "Amazing work!" : percentage >= 0.5 ? "Nice effort!" : "Keep practicing!";
  const message = percentage === 1
    ? "Flawless! You know your JavaScript inside and out."
    : percentage >= 0.8
      ? "You’ve got a great handle on JavaScript. Keep that momentum going!"
      : percentage >= 0.5
        ? "You’re making progress. Review a few answers and give it another go!"
        : "Every great developer starts somewhere. Review the answers and try again!";
  document.querySelector("#result-heading").textContent = heading;
  document.querySelector("#result-message").textContent = message;
  document.querySelector("#review-button").hidden = answers.every(answer => answer.isCorrect);
}

function showReview() {
  resultScreen.hidden = true;
  reviewScreen.hidden = false;
  const wrongAnswers = answers.filter(answer => !answer.isCorrect);
  const reviewSummary = document.querySelector("#review-summary");
  const reviewList = document.querySelector("#review-list");
  reviewSummary.textContent = wrongAnswers.length === 0
    ? "You got every question right. There’s nothing to review!"
    : `${wrongAnswers.length} question${wrongAnswers.length === 1 ? "" : "s"} to learn from.`;
  reviewList.replaceChildren();

  wrongAnswers.forEach(answer => {
    const question = questions[answer.questionIndex];
    const item = document.createElement("article");
    item.className = "review-item";
    const heading = document.createElement("h2");
    heading.className = "review-question";
    heading.textContent = `${answer.questionIndex + 1}. ${question.question}`;
    const given = document.createElement("p");
    given.className = "review-answer given-answer";
    const givenLabel = document.createElement("strong");
    givenLabel.textContent = answer.selectedAnswer === null
      ? "Your answer: Time ran out"
      : `Your answer: ${question.options[answer.selectedAnswer]}`;
    given.append(givenLabel);
    const correct = document.createElement("p");
    correct.className = "review-answer correct-answer";
    const correctLabel = document.createElement("strong");
    correctLabel.textContent = `Correct answer: ${question.options[question.answer]}`;
    correct.append(correctLabel);
    const why = document.createElement("p");
    why.className = "review-explanation";
    why.textContent = question.explanation;
    item.append(heading, given, correct, why);
    reviewList.append(item);
  });
}

nextButton.addEventListener("click", () => {
  if (selectedAnswer === null) return;
  if (currentQuestion === questions.length - 1) showResults();
  else {
    currentQuestion += 1;
    renderQuestion();
  }
});

document.querySelector("#restart-button").addEventListener("click", startQuiz);
document.querySelector("#home-link").addEventListener("click", event => {
  event.preventDefault();
  startQuiz();
});
document.querySelector("#play-again-button").addEventListener("click", startQuiz);
document.querySelector("#review-restart-button").addEventListener("click", startQuiz);
document.querySelector("#review-button").addEventListener("click", showReview);
document.querySelector("#back-to-results-button").addEventListener("click", () => {
  reviewScreen.hidden = true;
  resultScreen.hidden = false;
});

document.addEventListener("keydown", event => {
  if (!quizScreen.hidden && !answerLocked && /^[1-4]$/.test(event.key)) {
    chooseAnswer(Number(event.key) - 1);
  }
});

startQuiz();
