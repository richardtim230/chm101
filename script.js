const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4",
        explanation: "2 + 2 equals 4."
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris"],
        answer: "Paris",
        explanation: "The capital of France is Paris."
    }
];

let currentQuestionIndex = 0;
let timer;

function startQuiz() {
    document.getElementById("start-test").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const explanationElement = document.getElementById("explanation");
    const timerElement = document.getElementById("timer");

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    explanationElement.style.display = "none";
    timerElement.textContent = "";

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const explanationElement = document.getElementById("explanation");
    const timerElement = document.getElementById("timer");

    if (selectedOption === correctAnswer) {
        explanationElement.textContent = `Correct! ${questions[currentQuestionIndex].explanation}`;
    } else {
        explanationElement.textContent = `Incorrect. ${questions[currentQuestionIndex].explanation}`;
    }

    explanationElement.style.display = "block";
    document.getElementById("next-question").style.display = "none";
    startTimer(5, timerElement);
}

function startTimer(seconds, timerElement) {
    let timeLeft = seconds;

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("next-question").style.display = "block";
        } else {
            timerElement.textContent = `Next question in ${timeLeft} seconds...`;
            timeLeft--;
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
        document.getElementById("quiz-container").style.display = "none";
    }
}

// Event listener for the "Start Test" button
document.getElementById("start-test").addEventListener("click", startQuiz);

const topicsContent = {
  "introduction": {
    title: "Introduction",
    description: "Explore the foundational concepts in chemistry, including measurements, matter, and chemical reactions.",
    keyConcepts: [
      "Methods of science: Measurement and precision",
      "Significant figures: Errors in quantitative measurements",
      "Nature of matter: Elements and compounds",
      "Types of chemical reactions"
    ],
    lecture: `
      <h2>Introduction</h2>
      <p>This section covers the basics of scientific measurements, significant figures, and the nature of matter.</p>
      <h3>1. Methods of Science</h3>
      <p>Learn about precise measurement techniques and how they are critical for scientific accuracy.</p>
      <h3>2. Significant Figures</h3>
      <p>Understand how to handle errors in quantitative measurements and use significant figures effectively.</p>
      <h3>3. Nature of Matter</h3>
      <p>Dive into the properties of elements and compounds, the building blocks of chemistry.</p>
      <h3>4. Types of Chemical Reactions</h3>
      <p>Study various chemical reactions, including synthesis, decomposition, and single/double displacement reactions.</p>
    `
  },

  "atomic-theory": {
    title: "Atomic Theory and Nature of Atoms",
    description: "Learn about the atomic theory, atomic weight, and contributions to atomic structure.",
    keyConcepts: [
      "Dalton atomic theory",
      "Atomic weight and Avogadro's number",
      "Structure of the atom",
      "Contributions of Bohr, Thompson, Moseley, and Rutherford"
    ],
    lecture: `
      <h2>Atomic Theory and Nature of Atoms</h2>
      <p>This section explores the historical development of atomic theory and the structure of the atom.</p>
      <h3>1. Dalton's Atomic Theory</h3>
      <p>Dalton proposed that all matter is composed of indivisible atoms, laying the groundwork for modern chemistry.</p>
      <h3>2. Structure of the Atom</h3>
      <p>Understand the divisibility of atoms, the role of cathode rays, and the discovery of the nucleus.</p>
      <h3>3. Contributions to Atomic Structure</h3>
      <p>Learn how Bohr, Rutherford, Moseley, and Thompson contributed to our understanding of atomic structure.</p>
    `
  },

  "stoichiometry-i": {
    title: "Stoichiometry I",
    description: "Understand chemical formulae, equations, and the mole concept.",
    keyConcepts: [
      "Simplest and molecular formulae",
      "Mole concept and gravimetric calculations",
      "Ionic equations for neutralization and precipitation reactions",
      "Balancing redox equations"
    ],
    lecture: `
      <h2>Stoichiometry I</h2>
      <p>This section focuses on the quantitative relationships between reactants and products in chemical reactions.</p>
      <h3>1. Mole Concept</h3>
      <p>Learn how to use the mole to count particles and relate it to chemical reactions.</p>
      <h3>2. Balancing Equations</h3>
      <p>Master the skill of balancing chemical and redox equations using stoichiometric coefficients.</p>
    `
  },

  "stoichiometry-ii": {
    title: "Stoichiometry II",
    description: "Learn about volumetric analysis and preparation of standard solutions.",
    keyConcepts: [
      "Volumetric analysis",
      "Preparation of standard solutions",
      "Molarity and volumetric coefficients"
    ],
    lecture: `
      <h2>Stoichiometry II</h2>
      <p>Understand advanced stoichiometric concepts, including volumetric calculations and standard solutions.</p>
    `
  },

  "chemical-equilibria": {
    title: "Chemical Equilibria",
    description: "Study the equilibrium state, equilibrium constants, and pH of acids and bases.",
    keyConcepts: [
      "Equilibrium state and mass action",
      "Equilibrium constants",
      "pH of acids and bases",
      "Buffer solutions and solubility products"
    ],
    lecture: `
      <h2>Chemical Equilibria</h2>
      <p>This section delves into chemical equilibrium, pH calculations, and buffer solutions.</p>
    `
  },

  "thermochemistry": {
    title: "Thermochemistry",
    description: "Learn about energy changes in chemical reactions, including entropy and enthalpy.",
    keyConcepts: [
      "Hydrogen bonding and intermolecular forces",
      "Exothermic and endothermic changes",
      "Enthalpy of reaction",
      "Hess's law and heats of neutralization"
    ],
    lecture: `
      <h2>Thermochemistry</h2>
      <p>Explore the energy changes associated with chemical reactions, focusing on enthalpy and entropy.</p>
    `
  },

  "electrochemistry": {
    title: "Electrochemistry",
    description: "Study electrical units, Faraday’s laws, galvanic cells, and electrochemical reactions.",
    keyConcepts: [
      "Ohm’s law and electrical units",
      "Faraday’s laws of electrolysis",
      "Galvanic cells and standard half-cell potentials",
      "Nernst equation and redox reactions"
    ],
    lecture: `
      <h2>Electrochemistry</h2>
      <p>This section explains the principles of electrochemistry, focusing on galvanic cells and Faraday's laws.</p>
    `
  },

  "kinetics": {
    title: "Kinetics",
    description: "Understand reaction rates, molecularity, and activation energy.",
    keyConcepts: [
      "Order of reaction and molecularity",
      "Reaction rates and mechanisms",
      "Activation energy and kinetic theory"
    ],
    lecture: `
      <h2>Kinetics</h2>
      <p>Learn about the factors affecting reaction rates, including activation energy and reaction mechanisms.</p>
    `
  },

  "radioactivity": {
    title: "Radioactivity",
    description: "Explore radioactive disintegration, nuclear reactions, and uses of radioisotopes.",
    keyConcepts: [
      "Types of radioactive disintegration",
      "Nuclear fission and fusion",
      "Detection of radioactivity",
      "Uses of radioisotopes"
    ],
    lecture: `
      <h2>Radioactivity</h2>
      <p>This section covers the principles of radioactivity, including fission, fusion, and applications of radioisotopes.</p>
    `
  }
};



// Elements
const topicsSection = document.getElementById("topics-section");
const topicDetailsSection = document.getElementById("topic-details-section");
const topicContent = document.getElementById("topic-content");
const backButton = document.getElementById("back-button");

// Event listener for topic links
document.querySelectorAll(".topic-link").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const topicId = event.target.dataset.topic;
    loadTopicContent(topicId);
  });
});

// Back button event listener
backButton.addEventListener("click", () => {
  topicsSection.classList.remove("hidden");
  topicDetailsSection.classList.add("hidden");
});

// Function to load topic content dynamically
function loadTopicContent(topicId) {
  const topic = topicsContent[topicId];

  if (topic) {
    topicContent.innerHTML = `
      <h1>${topic.title}</h1>
      <p>${topic.description}</p>
      <h2>Key Concepts</h2>
      <ul>
        ${topic.keyConcepts.map(concept => `<li>${concept}</li>`).join("")}
      </ul>
      <h2>Lecture</h2>
      ${topic.lecture}
    `;

    // Show the topic details section and hide the topics list
    topicsSection.classList.add("hidden");
    topicDetailsSection.classList.remove("hidden");
  }
}
