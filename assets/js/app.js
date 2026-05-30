"use strict";

document.documentElement.classList.add("js");

const eventDate = new Date("2026-09-04T14:00:00-03:00");
const checklistKey = "campori-apso-checklist-v2";

const checklistData = {
  docs: [
    {
      title: "Documentos do Clube",
      items: [
        "Ficha de inscrição do clube preenchida e entregue",
        "Autorização dos pais / responsáveis de todos os membros",
        "Lista completa de membros com dados pessoais",
        "Credencial atualizada de cada líder e instrutor",
        "Apólice de seguro do grupo confirmada"
      ]
    },
    {
      title: "Saúde e Segurança",
      items: [
        "Ficha de saúde de cada membro preenchida",
        "Alergias e restrições alimentares informadas",
        "Kit de primeiros socorros do clube organizado",
        "Medicamentos de uso contínuo devidamente embalados",
        "Responsável de saúde do clube designado"
      ]
    }
  ],
  uniforme: [
    {
      title: "Uniforme Completo",
      items: [
        "Camisa oficial do uniforme de gala limpa e passada",
        "Lenço do clube devidamente dobrado",
        "Emblemas e distintivos corretamente posicionados",
        "Calça ou saia na cor padrão sem amassados",
        "Sapato preto engraxado",
        "Meias brancas sem manchas"
      ]
    },
    {
      title: "Insígnias e Distintivos",
      items: [
        "Distintivo de classe atual corretamente fixado",
        "Patch do clube no lugar correto",
        "Especialidades conquistadas costuradas no pano",
        "Nome do membro visível e legível"
      ]
    }
  ],
  acampamento: [
    {
      title: "Estrutura do Acampamento",
      items: [
        "Barracas testadas e em bom estado",
        "Mastro da bandeira do clube preparado",
        "Área de cozinha separada da área de dormir",
        "Varal organizado dentro do espaço do clube",
        "Lixeiras identificadas para orgânico e reciclável",
        "Placa de identificação do clube instalada"
      ]
    },
    {
      title: "Alimentação e Utensílios",
      items: [
        "Cardápio planejado para os 4 dias",
        "Utensílios de cozinha completos e higienizados",
        "Botijão de gás verificado",
        "Água suficiente para o grupo",
        "Extintor ou balde de areia próximo ao fogão"
      ]
    }
  ],
  especialidades: [
    {
      title: "Especialidades Obrigatórias",
      items: [
        "Verificar lista oficial de especialidades do Campori",
        "Confirmar quais membros já possuem cada especialidade",
        "Organizar classes para especialidades faltantes",
        "Panos de especialidades prontos e costurados",
        "Certificados de especialidades organizados"
      ]
    },
    {
      title: "Classes e Progressão",
      items: [
        "Cada membro na classe adequada para sua idade",
        "Requisitos da classe atual cumpridos",
        "Cerimônia de avanço de classe preparada",
        "Livros e materiais de estudo disponíveis"
      ]
    }
  ],
  espiritual: [
    {
      title: "Preparação Espiritual",
      items: [
        "Estudar o tema bíblico O Desejado com o clube",
        "Ler Isaías 28, Daniel 9 e Ageu 2 com os membros",
        "Organizar momentos devocionais diários no Campori",
        "Cada membro aprendeu a música tema do Campori",
        "Oração coletiva de dedicação do clube realizada"
      ]
    },
    {
      title: "Comunidade e Missão",
      items: [
        "Projeto de serviço comunitário realizado antes do Campori",
        "Membros incentivados a convidar amigos não-adventistas",
        "Dinâmica de integração preparada para o acampamento",
        "Clube comprometido com o testemunho durante o evento"
      ]
    }
  ]
};

const rankingRows = [
  { pos: "1°", clube: "Em breve", regiao: "—", inspecao: "—", especialidades: "—", esportes: "—", total: "—" },
  { pos: "2°", clube: "Em breve", regiao: "—", inspecao: "—", especialidades: "—", esportes: "—", total: "—" },
  { pos: "3°", clube: "Em breve", regiao: "—", inspecao: "—", especialidades: "—", esportes: "—", total: "—" }
];

const newsData = [
  {
    date: "Maio · 2026",
    tag: "Oficial",
    title: "Logo e Tema Oficial Revelados",
    text: "O Ministério dos Desbravadores da APSo revela oficialmente o tema do XI Campori: O Desejado, inspirado em Isaías, Daniel e Ageu."
  },
  {
    date: "Em breve",
    tag: "Inscrições",
    title: "Abertura das Inscrições",
    text: "Os clubes poderão realizar suas inscrições pelo sistema oficial da APSo assim que a organização publicar o prazo."
  },
  {
    date: "Em breve",
    tag: "Regulamento",
    title: "Regulamento Oficial",
    text: "O regulamento completo será publicado aqui quando o documento final estiver disponível para clubes e líderes."
  }
];

const faqData = [
  {
    q: "Quem pode participar do Campori?",
    a: "Desbravadores com idade entre 10 e 15 anos, devidamente inscritos em clubes filiados à APSo da Igreja Adventista do Sétimo Dia, acompanhados por diretores e líderes credenciados."
  },
  {
    q: "Como faço a inscrição do meu clube?",
    a: "As inscrições serão realizadas pelo sistema oficial da APSo. Aguarde a abertura e siga as instruções publicadas nos canais oficiais do Ministério dos Desbravadores."
  },
  {
    q: "O que é o CTA em Araçoiaba da Serra?",
    a: "O Centro de Treinamento Adventista é uma estrutura da Igreja Adventista localizada em Araçoiaba da Serra - SP, com área para acampamentos e suporte a grandes eventos."
  },
  {
    q: "Qual é o tema bíblico do Campori?",
    a: "O Desejado é uma referência messiânica presente em Ageu e conectada ao estudo de Cristo em Isaías e Daniel. O tema convida os Desbravadores a buscarem Jesus acima de tudo."
  },
  {
    q: "Como entro em contato com a organização?",
    a: "Use os canais oficiais informados nesta página. Quando houver WhatsApp ou links adicionais oficiais, eles devem ser atualizados aqui."
  }
];

const quizData = [
  {
    q: "Qual é o nome do evento em Araçoiaba da Serra em setembro de 2026?",
    options: ["IX Campori APSo", "XI Campori APSo", "X Campori APSo", "XII Campori APSo"],
    answer: 1,
    explanation: "O XI Campori APSo - O Desejado será realizado de 04 a 07 de setembro de 2026 no CTA em Araçoiaba da Serra."
  },
  {
    q: "Quantos anos têm os membros do Clube de Desbravadores?",
    options: ["7 a 12 anos", "10 a 15 anos", "12 a 18 anos", "8 a 14 anos"],
    answer: 1,
    explanation: "O Clube de Desbravadores é voltado para crianças e adolescentes entre 10 e 15 anos."
  },
  {
    q: "Qual é o Pastor Departamental do MDA da APSo?",
    options: ["André Cieba", "Vandão", "Kevin Choque", "Daniel Rufino"],
    answer: 2,
    explanation: "O Pastor Kevin Choque é o Pastor Departamental do Ministério dos Desbravadores e Aventureiros da APSo."
  },
  {
    q: "O tema O Desejado é uma referência a qual personagem bíblico?",
    options: ["Moisés", "Davi", "Jesus Cristo - O Messias", "Paulo"],
    answer: 2,
    explanation: "O Desejado aponta para Jesus Cristo, o centro do tema espiritual do Campori."
  },
  {
    q: "Em qual cidade está localizado o CTA onde acontecerá o Campori?",
    options: ["Sorocaba", "Araçoiaba da Serra", "Itu", "Piedade"],
    answer: 1,
    explanation: "O Centro de Treinamento Adventista fica em Araçoiaba da Serra, no interior de São Paulo."
  }
];

const triviaData = [
  {
    q: "Em qual livro bíblico aparece O Desejado das Nações?",
    options: ["Isaías", "Daniel", "Ageu", "Zacarias"],
    answer: 2,
    explanation: "Ageu 2:7 menciona O Desejado de todas as nações, uma referência messiânica ligada à esperança em Cristo."
  },
  {
    q: "Qual profeta recebeu a profecia das 70 semanas?",
    options: ["Isaías", "Jeremias", "Daniel", "Ezequiel"],
    answer: 2,
    explanation: "Daniel 9 contém a profecia das 70 semanas."
  },
  {
    q: "O nome Jesus, Yeshua, significa:",
    options: ["Rei dos Reis", "O Senhor salva", "Filho de Deus", "O Desejado"],
    answer: 1,
    explanation: "Jesus, ou Yeshua, está ligado ao significado O Senhor salva."
  },
  {
    q: "Em Isaías 9:6, qual nome profético é dado ao Messias?",
    options: ["O Desejado", "Maravilhoso Conselheiro", "Filho do Homem", "O Santo"],
    answer: 1,
    explanation: "Isaías 9:6 apresenta nomes messiânicos como Maravilhoso Conselheiro, Deus Forte, Pai da Eternidade e Príncipe da Paz."
  },
  {
    q: "O que significa espiritualmente O Desejado para os Desbravadores?",
    options: ["Desejar especialidades", "Buscar a Cristo acima de tudo", "Conquistar troféus", "Ser o melhor clube"],
    answer: 1,
    explanation: "O tema convida cada Desbravador a ter Cristo como o maior desejo do coração."
  }
];

const wordSearchWords = ["DESEJADO", "CAMPORI", "DESBRAVADOR", "APSO", "CORAGEM", "AVENTURA", "UNIFORME", "LIDERANCA"];

let activeModal = null;
let lastFocus = null;
let quizState = { index: 0, score: 0, answered: false, data: quizData, target: "quizContent" };
let triviaState = { index: 0, score: 0, answered: false, data: triviaData, target: "triviaContent" };
let wordGrid = [];
let wordPlaced = [];
let wordFound = [];
let wordDragStart = null;
let wordDragCells = [];
let wordIsDragging = false;

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === null || value === undefined) return;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "htmlFor") node.htmlFor = value;
    else if (key.startsWith("data-")) node.setAttribute(key, value);
    else if (key.startsWith("aria-")) node.setAttribute(key, value);
    else node.setAttribute(key, value);
  });
  children.forEach((child) => {
    if (typeof child === "string") node.appendChild(document.createTextNode(child));
    else if (child) node.appendChild(child);
  });
  return node;
}

function safeId(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function loadChecklist() {
  try {
    return JSON.parse(localStorage.getItem(checklistKey) || "{}");
  } catch {
    return {};
  }
}

function saveChecklist(state) {
  try {
    localStorage.setItem(checklistKey, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

function initNav() {
  const button = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");
  if (!button || !links) return;

  function setOpen(open) {
    links.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  }

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach((item) => obs.observe(item));
}

function initCountdown() {
  const ids = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    min: document.getElementById("cd-min"),
    sec: document.getElementById("cd-sec")
  };
  if (!ids.days || !ids.hours || !ids.min || !ids.sec) return;

  function tick() {
    let diff = eventDate.getTime() - Date.now();
    if (diff < 0) diff = 0;
    ids.days.textContent = String(Math.floor(diff / 86400000)).padStart(2, "0");
    ids.hours.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0");
    ids.min.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    ids.sec.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  }

  tick();
  window.setInterval(tick, 1000);
}

function initParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const points = [];
  let width = 0;
  let height = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 130; i += 1) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.5 + 0.1,
      s: Math.random() * 0.3 + 0.05,
      d: Math.random() * 0.2 - 0.1,
      tw: Math.random() * Math.PI * 2,
      gold: i > 112
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    points.forEach((point) => {
      point.tw += 0.02;
      const alpha = point.a * (0.6 + 0.4 * Math.sin(point.tw));
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      ctx.fillStyle = point.gold ? `rgba(212,160,23,${alpha})` : `rgba(245,237,216,${alpha})`;
      ctx.fill();
      point.y -= point.s;
      point.x += point.d;
      if (point.y < -5) {
        point.y = height + 5;
        point.x = Math.random() * width;
      }
      if (point.x < -5) point.x = width + 5;
      if (point.x > width + 5) point.x = -5;
    });
    requestAnimationFrame(draw);
  }

  draw();
}

function initParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const hero = document.querySelector(".hero-content");
  if (!hero) return;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) hero.style.transform = `translateY(${scrollY * 0.16}px)`;
  }, { passive: true });
}

function renderChecklist() {
  const wrapper = document.getElementById("checklistPanels");
  if (!wrapper) return;
  const state = loadChecklist();

  Object.entries(checklistData).forEach(([key, groups], panelIndex) => {
    const panel = el("div", {
      id: `tab-${key}`,
      class: `checklist-panel${panelIndex === 0 ? " active" : ""}`,
      role: "tabpanel",
      "aria-labelledby": `tab-btn-${key}`
    });
    const grid = el("div", { class: "checklist-grid" });
    groups.forEach((group, groupIndex) => {
      const card = el("article", { class: "checklist-card" }, [el("h3", { text: group.title })]);
      group.items.forEach((item, itemIndex) => {
        const id = `check-${key}-${groupIndex}-${itemIndex}`;
        const input = el("input", { type: "checkbox", id, "data-check-id": id });
        input.checked = Boolean(state[id]);
        const label = el("label", { class: "check-item", htmlFor: id }, [input, el("span", { text: item })]);
        card.appendChild(label);
      });
      grid.appendChild(card);
    });
    panel.appendChild(grid);
    wrapper.appendChild(panel);
  });

  wrapper.addEventListener("change", (event) => {
    const input = event.target.closest("input[type='checkbox'][data-check-id]");
    if (!input) return;
    const next = loadChecklist();
    next[input.dataset.checkId] = input.checked;
    if (!saveChecklist(next)) showToast("Não foi possível salvar neste navegador.");
    updateProgress();
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => switchChecklistTab(button.dataset.tab));
  });

  const resetButton = document.querySelector("[data-reset-checklist]");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      try {
        localStorage.removeItem(checklistKey);
      } catch {
        // Storage can be unavailable in private or restricted browsing modes.
      }
      document.querySelectorAll("#checklistPanels input[type='checkbox']").forEach((input) => {
        input.checked = false;
      });
      updateProgress();
      showToast("Checklist limpo neste navegador.");
    });
  }

  updateProgress();
}

function switchChecklistTab(name) {
  document.querySelectorAll(".checklist-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${name}`);
  });
  document.querySelectorAll("[data-tab]").forEach((button) => {
    const isActive = button.dataset.tab === name;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function updateProgress() {
  const checks = Array.from(document.querySelectorAll("#checklistPanels input[type='checkbox']"));
  const done = checks.filter((input) => input.checked).length;
  const pct = checks.length ? Math.round((done / checks.length) * 100) : 0;
  const bar = document.getElementById("ppBar");
  const text = document.getElementById("ppPct");
  if (bar) bar.style.width = `${pct}%`;
  if (text) text.textContent = String(pct);
}

function renderRanking() {
  const body = document.getElementById("rankingBody");
  if (!body) return;
  rankingRows.forEach((row) => {
    const tr = el("tr");
    [
      el("span", { class: "rank-pos", text: row.pos }),
      row.clube,
      row.regiao,
      row.inspecao,
      row.especialidades,
      row.esportes,
      row.total
    ].forEach((value) => {
      const td = el("td");
      if (value instanceof Node) td.appendChild(value);
      else td.textContent = value;
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}

function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;
  newsData.forEach((item, index) => {
    const card = el("article", { class: `news-card reveal reveal-delay-${(index % 3) + 1}` }, [
      el("div", { class: "news-date-bar", text: item.date }),
      el("div", { class: "news-body" }, [
        el("span", { class: "news-tag", text: item.tag }),
        el("h3", { class: "news-title", text: item.title }),
        el("p", { class: "news-excerpt", text: item.text })
      ])
    ]);
    grid.appendChild(card);
  });
}

function renderFaq() {
  const list = document.getElementById("faqList");
  if (!list) return;
  faqData.forEach((item, index) => {
    const answerId = `faq-a-${index}`;
    const question = el("button", {
      class: "faq-q",
      type: "button",
      "aria-expanded": "false",
      "aria-controls": answerId
    }, [
      el("span", { text: item.q }),
      el("span", { class: "faq-icon", "aria-hidden": "true", text: "+" })
    ]);
    const answer = el("div", { class: "faq-a", id: answerId, text: item.a });
    const card = el("div", { class: "faq-item reveal" }, [question, answer]);
    list.appendChild(card);
  });

  list.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-q");
    if (!button) return;
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    if (answer) answer.classList.toggle("open", !expanded);
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  lastFocus = document.activeElement;
  activeModal = modal;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  const box = modal.querySelector(".modal-box");
  if (box) box.focus();
}

function closeModal(modal = activeModal) {
  if (!modal) return;
  modal.hidden = true;
  activeModal = null;
  document.body.classList.remove("modal-open");
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function initModals() {
  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-modal]");
    if (openButton) {
      openModal(openButton.dataset.openModal);
      return;
    }

    const closeButton = event.target.closest("[data-close-modal]");
    if (closeButton) {
      const modal = closeButton.closest(".modal-overlay");
      closeModal(modal);
      return;
    }

    if (event.target.classList.contains("modal-overlay")) {
      closeModal(event.target);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeModal) closeModal(activeModal);
    if (event.key === "Tab" && activeModal) trapFocus(event);
  });
}

function trapFocus(event) {
  const focusables = Array.from(activeModal.querySelectorAll("a[href], button:not([disabled]), input, [tabindex]:not([tabindex='-1'])"));
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function initGames() {
  document.addEventListener("click", (event) => {
    const game = event.target.closest("[data-game]");
    if (!game) return;
    if (game.dataset.game === "quiz") {
      quizState = { index: 0, score: 0, answered: false, data: quizData, target: "quizContent" };
      openModal("quizModal");
      renderQuiz(quizState);
    }
    if (game.dataset.game === "trivia") {
      triviaState = { index: 0, score: 0, answered: false, data: triviaData, target: "triviaContent" };
      openModal("triviaModal");
      renderQuiz(triviaState);
    }
    if (game.dataset.game === "word") {
      openModal("wordModal");
      buildWordSearch();
    }
  });
}

function renderQuiz(state) {
  const target = document.getElementById(state.target);
  if (!target) return;
  target.replaceChildren();

  const current = state.data[state.index];
  const question = el("div", { class: "quiz-q", text: current.q });
  const options = el("div", { class: "quiz-opts" });
  current.options.forEach((option, index) => {
    const button = el("button", { class: "quiz-opt", type: "button", text: option });
    button.addEventListener("click", () => answerQuiz(state, index));
    options.appendChild(button);
  });
  const feedback = el("div", { class: "quiz-fb", "aria-live": "polite" });
  const nav = el("div", { class: "quiz-nav" }, [
    el("span", { class: "quiz-prog", text: `Pergunta ${state.index + 1} de ${state.data.length}` })
  ]);
  target.append(question, options, feedback, nav);
}

function answerQuiz(state, choice) {
  if (state.answered) return;
  state.answered = true;
  const target = document.getElementById(state.target);
  const current = state.data[state.index];
  const options = Array.from(target.querySelectorAll(".quiz-opt"));
  const feedback = target.querySelector(".quiz-fb");
  const nav = target.querySelector(".quiz-nav");
  const isCorrect = choice === current.answer;
  if (isCorrect) state.score += 1;

  options.forEach((button, index) => {
    button.disabled = true;
    if (index === current.answer) button.classList.add("correct");
    if (index === choice && !isCorrect) button.classList.add("wrong");
  });

  feedback.className = `quiz-fb ${isCorrect ? "correct" : "wrong"} show`;
  feedback.textContent = `${isCorrect ? "Correto. " : "Resposta revisada. "}${current.explanation}`;

  const next = el("button", {
    class: "btn btn-primary",
    type: "button",
    text: state.index < state.data.length - 1 ? "Próxima" : "Ver resultado"
  });
  next.addEventListener("click", () => nextQuiz(state));
  nav.appendChild(next);
}

function nextQuiz(state) {
  state.index += 1;
  state.answered = false;
  if (state.index >= state.data.length) {
    renderQuizScore(state);
    return;
  }
  renderQuiz(state);
}

function renderQuizScore(state) {
  const target = document.getElementById(state.target);
  if (!target) return;
  const scoreText = state.score >= 4
    ? "Excelente preparo. Continue guiando seu clube."
    : state.score >= 2
      ? "Bom trabalho. Continue estudando e revisando."
      : "Continue praticando. Cada estudo fortalece a jornada.";
  const replay = el("button", { class: "btn btn-primary", type: "button", text: "Jogar novamente" });
  replay.addEventListener("click", () => {
    state.index = 0;
    state.score = 0;
    state.answered = false;
    renderQuiz(state);
  });
  target.replaceChildren(el("div", { class: "quiz-score" }, [
    el("strong", { text: `${state.score}/${state.data.length}` }),
    el("p", { text: scoreText }),
    replay
  ]));
}

function buildWordSearch() {
  wordGrid = [];
  wordPlaced = [];
  wordFound = [];
  wordDragStart = null;
  wordDragCells = [];
  wordIsDragging = false;
  const size = 12;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const target = document.getElementById("wordContent");
  if (!target) return;

  for (let row = 0; row < size; row += 1) {
    wordGrid[row] = [];
    for (let col = 0; col < size; col += 1) wordGrid[row][col] = "";
  }

  wordSearchWords.forEach((word) => placeWord(word, size));
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      if (!wordGrid[row][col]) wordGrid[row][col] = letters[Math.floor(Math.random() * letters.length)];
    }
  }

  const grid = el("div", { id: "wsGrid", role: "grid", "aria-label": "Grade do caça-palavras" });
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      grid.appendChild(el("button", {
        class: "ws-cell",
        type: "button",
        "data-row": String(row),
        "data-col": String(col),
        "aria-label": `Linha ${row + 1}, coluna ${col + 1}, letra ${wordGrid[row][col]}`,
        text: wordGrid[row][col]
      }));
    }
  }

  const wordList = el("div", { class: "word-list" });
  wordSearchWords.forEach((word) => {
    wordList.appendChild(el("span", { class: "word-badge", id: `word-${word}`, text: word }));
  });

  target.replaceChildren(
    el("div", { class: "word-toolbar" }, [
      el("p", { class: "word-hint", text: "Selecione uma palavra arrastando em linha reta. No celular, role horizontalmente se necessário." }),
      el("button", { class: "btn btn-ghost", type: "button", text: "Novo jogo", "data-word-reset": "true" })
    ]),
    el("div", { class: "word-grid-wrap" }, [grid]),
    el("p", { class: "word-list-label", text: "Palavras:" }),
    wordList
  );

  target.querySelector("[data-word-reset]").addEventListener("click", buildWordSearch);
  attachWordEvents(grid);
}

function placeWord(word, size) {
  for (let tries = 0; tries < 240; tries += 1) {
    const dir = Math.floor(Math.random() * 2);
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);
    const cells = [];
    let ok = true;
    for (let index = 0; index < word.length; index += 1) {
      const nextRow = row + (dir ? index : 0);
      const nextCol = col + (dir ? 0 : index);
      if (nextRow >= size || nextCol >= size) {
        ok = false;
        break;
      }
      if (wordGrid[nextRow][nextCol] && wordGrid[nextRow][nextCol] !== word[index]) {
        ok = false;
        break;
      }
      cells.push([nextRow, nextCol]);
    }
    if (ok) {
      cells.forEach(([r, c], index) => {
        wordGrid[r][c] = word[index];
      });
      wordPlaced.push({ word, cells });
      return;
    }
  }
}

function attachWordEvents(grid) {
  grid.addEventListener("pointerdown", (event) => {
    const cell = event.target.closest(".ws-cell");
    if (!cell) return;
    event.preventDefault();
    wordIsDragging = true;
    wordDragStart = cell;
    wordDragCells = [cell];
    clearWordSelection();
    cell.classList.add("selecting");
    grid.setPointerCapture(event.pointerId);
  });

  grid.addEventListener("pointerover", (event) => {
    if (!wordIsDragging || !wordDragStart) return;
    const cell = event.target.closest(".ws-cell");
    if (!cell) return;
    clearWordSelection();
    wordDragCells = wordLine(wordDragStart, cell);
    wordDragCells.forEach((item) => {
      if (!item.classList.contains("found")) item.classList.add("selecting");
    });
  });

  grid.addEventListener("pointerup", () => finishWordDrag());
  grid.addEventListener("pointercancel", () => finishWordDrag());
}

function finishWordDrag() {
  if (!wordIsDragging) return;
  wordIsDragging = false;
  checkWord(wordDragCells);
  wordDragStart = null;
  wordDragCells = [];
  clearWordSelection();
}

function wordLine(start, end) {
  const r0 = Number(start.dataset.row);
  const c0 = Number(start.dataset.col);
  const r1 = Number(end.dataset.row);
  const c1 = Number(end.dataset.col);
  const cells = [];
  if (r0 === r1) {
    const step = c1 >= c0 ? 1 : -1;
    for (let col = c0; col !== c1 + step; col += step) cells.push(wordCell(r0, col));
  } else if (c0 === c1) {
    const step = r1 >= r0 ? 1 : -1;
    for (let row = r0; row !== r1 + step; row += step) cells.push(wordCell(row, c0));
  } else {
    cells.push(start);
  }
  return cells.filter(Boolean);
}

function wordCell(row, col) {
  return document.querySelector(`.ws-cell[data-row="${row}"][data-col="${col}"]`);
}

function clearWordSelection() {
  document.querySelectorAll(".ws-cell.selecting").forEach((cell) => cell.classList.remove("selecting"));
}

function checkWord(cells) {
  if (!cells || cells.length < 2) return;
  const str = cells.map((cell) => cell.textContent).join("");
  wordPlaced.forEach((placed) => {
    if (wordFound.includes(placed.word)) return;
    const reversed = placed.word.split("").reverse().join("");
    if (str === placed.word || str === reversed) {
      wordFound.push(placed.word);
      placed.cells.forEach(([row, col]) => {
        const cell = wordCell(row, col);
        if (cell) {
          cell.classList.add("found");
          cell.classList.remove("selecting");
        }
      });
      const badge = document.getElementById(`word-${placed.word}`);
      if (badge) badge.classList.add("found");
      if (wordFound.length === wordPlaced.length) showToast("Parabéns! Todas as palavras foram encontradas.");
    }
  });
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = el("div", { class: "toast", role: "status", text: message });
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3200);
}

function initCloseModalLinks() {
  document.querySelectorAll("a[data-close-modal]").forEach((link) => {
    link.addEventListener("click", () => {
      const modal = link.closest(".modal-overlay");
      closeModal(modal);
    });
  });
}

function init() {
  initNav();
  initParticles();
  initParallax();
  initCountdown();
  renderChecklist();
  renderRanking();
  renderNews();
  renderFaq();
  initReveal();
  initModals();
  initGames();
  initCloseModalLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
