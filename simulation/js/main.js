// --- Problems (example, adapt as needed) ---
const problems = [
  {
    id: 1,
    title: "Problem 1",
    desc: "Given a positive integer, compute the sum of its digits.",
    template: [
      "int main() {",
      "    int n;",
      '    scanf("%d", &n);',
      "    int sum = _____;", // blank 0
      "    while (n > 0)",
      "    {",
      "        sum += n % _____;", // blank 1
      "        n /= _____;", // blank 2
      "    }",
      '    printf("%d\\n", sum);',
      "    return 0;",
      "}",
    ],
    blanks: [
      { line: 3, answers: ["0"], placeholder: "initial value" },
      { line: 6, answers: ["10"], placeholder: "modulus base" },
      { line: 7, answers: ["10"], placeholder: "divisor" },
    ],
    hints: [
      "What should sum be initialized to?",
      "What value do you use to get the last digit?",
      "What value do you use to remove the last digit?",
      "For n=123, output is 6. For n=405, output is 9.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "For n=123, output is 6. For n=405, output is 9.",
  },
  {
    id: 2,
    title: "Problem 2",
    desc: "Check if a given number is a perfect number (equal to the sum of its proper divisors). Print YES or NO.",
    template: [
      "int main() {",
      "    int n;",
      '    scanf("%d", &n);',
      "    int sum = _____;", // blank 0
      "    for (int i = 1; i <= n / 2; i++) {",
      "        if (n % i == 0)",
      "            sum _____ i;", // blank 1
      "    }",
      "    if (sum == n)",
      '        printf("YES\\n");',
      "    else",
      '        printf("NO\\n");',
      "    return 0;",
      "}",
    ],
    blanks: [
      { line: 3, answers: ["0"], placeholder: "initial value" },
      { line: 6, answers: ["+=", "+= "], placeholder: "operator" },
    ],
    hints: [
      "What should sum be initialized to?",
      "Which operator adds i to sum?",
      "For n=6, output is YES. For n=16, output is NO.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "For n=6, output is YES. For n=16, output is NO.",
  },
  {
    id: 3,
    title: "Problem 3",
    desc: "Given two positive integers a > b > 0, print the continued fraction representation of a/b.",
    template: [
      "int main() {",
      "    int a, b;",
      '    scanf("%d %d", &a, &b);',
      "    while (b != 0) {",
      "        int q = a _____ b;", // blank 0
      '        printf("%d ", q);',
      "        int r = a _____ b;", // blank 1
      "        a = b;",
      "        b = r;",
      "    }",
      "    return 0;",
      "}",
    ],
    blanks: [
      { line: 4, answers: ["/", "/ "], placeholder: "division operator" },
      { line: 6, answers: ["%", "% "], placeholder: "modulus operator" },
    ],
    hints: [
      "Which operator gives the quotient?",
      "Which operator gives the remainder?",
      "For a=239, b=51, output is 4 1 2 5 2. For a=27, b=10, output is 2 1 2 2.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput:
      "For a=239, b=51, output is 4 1 2 5 2. For a=27, b=10, output is 2 1 2 2.",
  },
];

let currentProblem = null;
let userInputs = [];

function renderProblemOptions() {
  const select = document.getElementById("problem-select");
  select.innerHTML = problems
    .map((p, i) => `<option value="${i}">Problem ${i + 1}</option>`)
    .join("");
}

function renderProblem(idx) {
  currentProblem = problems[idx];
  userInputs = Array(currentProblem.blanks.length).fill("");
  document.getElementById("problem-desc").textContent = currentProblem.desc;
  renderCodeTemplate();
  renderHints();
  document.getElementById("feedback").textContent = "";
  document.getElementById("runtime-output").textContent = "";
  document.getElementById("run-btn").disabled = true;
}

function renderCodeTemplate() {
  const codeDiv = document.getElementById("code-template");
  codeDiv.innerHTML = "";
  currentProblem.template.forEach((line, idx) => {
    let html = line;
    currentProblem.blanks.forEach((blank, bIdx) => {
      if (blank.line === idx) {
        html = html.replace(
          "_____",
          `<input class="blank-input" data-blank="${bIdx}" value="${userInputs[bIdx] || ""}" placeholder="${blank.placeholder}" />`,
        );
      }
    });
    codeDiv.innerHTML += `<div class="template-line">${html}</div>`;
  });
  // Attach input listeners
  codeDiv.querySelectorAll(".blank-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const bIdx = +e.target.getAttribute("data-blank");
      userInputs[bIdx] = e.target.value;
      document.getElementById("feedback").textContent = "";
      document.getElementById("runtime-output").textContent = "";
      document.getElementById("run-btn").disabled = true;
    });
  });
}

function renderHints() {
  const hintSelect = document.getElementById("hint-level");
  hintSelect.innerHTML = "";
  hintSelect.innerHTML += `<option value="0" disabled selected>Hint 0</option>`;
  for (let i = 1; i <= currentProblem.hints.length; ++i) {
    hintSelect.innerHTML += `<option value="${i}">Hint ${i}</option>`;
  }
  showHints(0);
  hintSelect.onchange = (e) => showHints(+e.target.value);
}

function showHints(level) {
  const hintsDiv = document.getElementById("hints");
  if (level === 0) {
    hintsDiv.innerHTML = "";
    return;
  }
  hintsDiv.innerHTML = `<div class="hint">${currentProblem.hints[level - 1]}</div>`;
}

function checkAnswers() {
  let allCorrect = true;
  let feedback = "";
  currentProblem.blanks.forEach((blank, i) => {
    const userVal = (userInputs[i] || "").trim();
    if (blank.answers.map((a) => a.trim()).includes(userVal)) {
      feedback += `<div class="feedback-correct">Blank ${i + 1}: Correct</div>`;
    } else {
      feedback += `<div class="feedback-incorrect">Blank ${i + 1}: Incorrect</div>`;
      allCorrect = false;
    }
  });
  document.getElementById("feedback").innerHTML = feedback;
  document.getElementById("run-btn").disabled = !allCorrect;
}

function showRuntimeOutput() {
  document.getElementById("runtime-output").innerHTML =
    `<div class="feedback-all-correct">${currentProblem.runtimeOutput}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProblemOptions();
  renderProblem(0);
  document.getElementById("problem-select").onchange = (e) =>
    renderProblem(+e.target.value);
  document.getElementById("submit-btn").onclick = checkAnswers;
  document.getElementById("run-btn").onclick = showRuntimeOutput;
});
