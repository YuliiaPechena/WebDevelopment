let right_answer_n = 0;

let k = Number(n_question.value);
console.log(k);
n.innerHTML = k + 1;
n_right.innerHTML = right_answer_n;
let point = 1;

answers(n_question.value);

get_answer.addEventListener("click", f_get_answer);
view_answer.addEventListener("click", f_view_answer);
next_question.addEventListener("click", f_next_question);

function f_get_answer() {
  let n_a;
  if (y1.checked) { n_a = 1; }
  if (y2.checked) { n_a = 2; }
  if (y3.checked) { n_a = 3; }
  if (y4.checked) { n_a = 4; }

  if (n_a == n_right_answer) {
    right_div.classList.remove("hidden");
    wrong_div.classList.add("hidden");
    right_answer_n = right_answer_n + point;
    point = 0;
  } else {
    right_div.classList.add("hidden");
    wrong_div.classList.remove("hidden");
    point = 0;
  }
}

function f_view_answer() {
  answer.classList.toggle("hidden");
  view_answer.classList.toggle("opend");
}

function f_next_question() {
  if (k < Number(n_question.value) - 1) {
    console.log(k, Number(n_question.value));
    right_div.classList.add("hidden");
    answer.classList.add("hidden");
    point = 1;
    k += 1;
    n_right.innerHTML = right_answer_n;
    n.innerHTML = k + 1;
    answers(k);
  } else {
    n_right.innerHTML = right_answer_n;
    questions.classList.add("hidden");
  }
}

function answers(k) {
  // Массив питань по HTML, CSS і JS українською
  const quizData = [
    {
      title: "Основи HTML",
      question: "Що таке тег <head> в HTML?",
      a1: "Секція для основного контенту сторінки",
      a2: "Секція для метаданих сторінки",
      a3: "Секція для стилів CSS",
      a4: "Секція для скриптів JavaScript",
      answer: "Секція для метаданих сторінки",
      n_right_answer: 2,
    },
    {
      title: "Основи CSS",
      question: "Як задати колір фону сторінки за допомогою CSS?",
      a1: "background-color: #fff;",
      a2: "color: #fff;",
      a3: "font-size: 12px;",
      a4: "padding: 20px;",
      answer: "background-color: #fff;",
      n_right_answer: 1,
    },
    {
      title: "Основи JavaScript",
      question: "Як вивести повідомлення в консоль за допомогою JavaScript?",
      a1: "console.print('Привіт');",
      a2: "echo('Привіт');",
      a3: "alert('Привіт');",
      a4: "console.log('Привіт');",
      answer: "console.log('Привіт');",
      n_right_answer: 4,
    },
    {
      title: "Основи HTML",
      question: "Що робить тег <a> в HTML?",
      a1: "Визначає посилання на іншу сторінку",
      a2: "Створює новий абзац",
      a3: "Вставляє зображення",
      a4: "Визначає список",
      answer: "Визначає посилання на іншу сторінку",
      n_right_answer: 1,
    },
    {
      title: "Основи CSS",
      question: "Як встановити шрифт для тексту в CSS?",
      a1: "font-family: Arial;",
      a2: "text-style: Arial;",
      a3: "font-style: Arial;",
      a4: "text-font: Arial;",
      answer: "font-family: Arial;",
      n_right_answer: 1,
    },
    {
      title: "Основи HTML",
      question: "Який тег використовується для вставки зображення в HTML?",
      a1: "<img>",
      a2: "<image>",
      a3: "<src>",
      a4: "<picture>",
      answer: "<img>",
      n_right_answer: 1,
    },
    {
      title: "Основи JavaScript",
      question: "Яка правильна форма оголошення змінної в JavaScript?",
      a1: "var x = 10;",
      a2: "let x = 10;",
      a3: "const x = 10;",
      a4: "Усі відповіді вірні",
      answer: "Усі відповіді вірні",
      n_right_answer: 4,
    },
    {
      title: "Основи CSS",
      question: "Що таке селектор класу в CSS?",
      a1: ".class",
      a2: "#class",
      a3: "<class>",
      a4: "class()",
      answer: ".class",
      n_right_answer: 1,
    },
    {
      title: "Основи HTML",
      question: "Який тег використовують для створення списку в HTML?",
      a1: "<ol>",
      a2: "<ul>",
      a3: "<li>",
      a4: "<list>",
      answer: "<ul>",
      n_right_answer: 2,
    },
    {
      title: "Основи JavaScript",
      question: "Як оголосити функцію в JavaScript?",
      a1: "function myFunction() {}",
      a2: "function: myFunction() {}",
      a3: "def myFunction() {}",
      a4: "func myFunction() {}",
      answer: "function myFunction() {}",
      n_right_answer: 1,
    },
  ];

  let quiz = quizData[k];

  question.innerHTML = quiz.question;
  title.innerHTML = quiz.title;
  a1.innerHTML = quiz.a1;
  a2.innerHTML = quiz.a2;
  a3.innerHTML = quiz.a3;
  a4.innerHTML = quiz.a4;
  answer.innerHTML = quiz.answer;
  
  n_right_answer = quiz.n_right_answer;
  n_question.value = quizData.length;  // Оновлюємо кількість питань
  console.log(quiz);
}
