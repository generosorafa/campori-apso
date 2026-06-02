"use strict";

document.documentElement.classList.add("js");

const eventDate = new Date("2026-09-04T14:00:00-03:00");
const checklistKey = "campori-apso-checklist-v2";
const campRankingKey = "campori-apso-camp-ranking-v1";
const runnerRecordKey = "campori-apso-runner-record-v1";

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
const campGrid = { rows: 7, cols: 7 };
const campItems = [
  { id: "entrada", label: "Entrada", code: "EN", sprite: "entrance", hint: "Deve ficar em uma borda do terreno." },
  { id: "barraca1", label: "Barracas A", code: "B1", sprite: "tents", hint: "Uma ala de barracas longe da fogueira e do lixo." },
  { id: "barraca2", label: "Barracas B", code: "B2", sprite: "tents", hint: "Mantenha as barracas agrupadas." },
  { id: "barraca3", label: "Barracas C", code: "B3", sprite: "tents", hint: "Mais uma area de barracas para o clube." },
  { id: "cozinha", label: "Cozinha", code: "CZ", sprite: "kitchen", hint: "Funciona melhor perto da agua e longe do lixo." },
  { id: "enfermaria", label: "Enfermaria", code: "EF", sprite: "medic", hint: "Deve estar acessivel pela entrada." },
  { id: "banheiros", label: "Banheiros", code: "BN", sprite: "bath", hint: "Devem ficar afastados da cozinha e da agua." },
  { id: "lixo", label: "Lixo", code: "LX", sprite: "trash", hint: "Precisa ficar isolado da cozinha, barracas e agua." },
  { id: "agua", label: "Agua", code: "AG", sprite: "water", hint: "Ajuda a cozinha, mas nao deve ficar junto ao lixo." },
  { id: "fogueira", label: "Fogueira", code: "FG", sprite: "fire", hint: "Deve ficar distante das barracas." }
];
const campTentIds = ["barraca1", "barraca2", "barraca3"];
const campItemMap = Object.fromEntries(campItems.map((item) => [item.id, item]));
const runnerCharacters = [
  { id: "boy", label: "Desbravador" },
  { id: "girl", label: "Desbravadora" }
];
const runnerLevelPoints = 1000;
const runnerMaxLevel = 20;
const runnerObstacles = [
  { type: "log", label: "Tronco", row: 2, col: 0, width: 52, height: 30 },
  { type: "tent", label: "Barraca baixa", row: 2, col: 1, width: 54, height: 42 },
  { type: "backpack", label: "Mochila", row: 2, col: 2, width: 42, height: 50 },
  { type: "puddle", label: "Poca", row: 2, col: 3, width: 54, height: 18 },
  { type: "fire", label: "Fogueira", row: 2, col: 4, width: 46, height: 50 },
  { type: "crate", label: "Caixa", row: 2, col: 5, width: 50, height: 54 },
  { type: "rope", label: "Corda", row: 2, col: 6, width: 54, height: 36 },
  { type: "rocks", label: "Pedras", row: 2, col: 7, width: 54, height: 32 }
];
const runnerCollectibles = [
  { type: "scarf", label: "Lenco", row: 3, col: 0, points: 90, width: 44, height: 48 },
  { type: "bible", label: "Biblia", row: 3, col: 1, points: 100, width: 42, height: 48 },
  { type: "canteen", label: "Cantil", row: 3, col: 2, points: 70, width: 38, height: 42 },
  { type: "badge", label: "Especialidade", row: 3, col: 3, points: 130, width: 38, height: 38 },
  { type: "compass", label: "Bussola", row: 3, col: 4, points: 80, width: 42, height: 42 },
  { type: "flashlight", label: "Lanterna", row: 3, col: 5, points: 70, width: 42, height: 34 },
  { type: "map", label: "Mapa", row: 3, col: 6, points: 85, width: 42, height: 42 },
  { type: "star", label: "Estrela", row: 3, col: 7, points: 120, width: 42, height: 42 }
];

let activeModal = null;
let lastFocus = null;
let quizState = { index: 0, score: 0, answered: false, data: quizData, target: "quizContent" };
let triviaState = { index: 0, score: 0, answered: false, data: triviaData, target: "triviaContent" };
let campState = createCampState();
let runnerState = createRunnerState();
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
  if (modal.id === "runnerModal") stopRunnerGame();
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
    if (game.dataset.game === "camp") {
      campState = createCampState();
      openModal("campModal");
      renderCampGame();
    }
    if (game.dataset.game === "runner") {
      runnerState = createRunnerState(runnerState.character);
      openModal("runnerModal");
      renderRunnerGame();
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

function createCampState() {
  return {
    selected: "entrada",
    placements: {},
    score: null,
    feedback: [],
    club: ""
  };
}

function loadCampRanking() {
  try {
    const data = JSON.parse(localStorage.getItem(campRankingKey) || "[]");
    return Array.isArray(data) ? data.slice(0, 5) : [];
  } catch {
    return [];
  }
}

function saveCampRanking(entries) {
  try {
    localStorage.setItem(campRankingKey, JSON.stringify(entries.slice(0, 5)));
    return true;
  } catch {
    return false;
  }
}

function renderCampGame() {
  const target = document.getElementById("campContent");
  if (!target) return;

  target.replaceChildren(
    el("div", { class: "camp-game" }, [
      el("section", { class: "camp-panel", "aria-label": "Areas do acampamento" }, [
        el("p", { class: "camp-help", text: "Escolha uma area e toque no terreno. Para mover, toque no item ja colocado e escolha outra celula." }),
        renderCampSummary(),
        renderCampItems(),
        renderCampActions()
      ]),
      el("section", { class: "camp-field", "aria-label": "Terreno do acampamento" }, [
        renderCampBoard(),
        renderCampResult()
      ]),
      renderCampRanking()
    ])
  );
}

function renderCampSummary() {
  const placedCount = Object.keys(campState.placements).length;
  return el("div", { class: "camp-summary" }, [
    el("strong", { text: `${placedCount}/${campItems.length}` }),
    el("span", { text: "areas no mapa" })
  ]);
}

function renderCampItems() {
  const list = el("div", { class: "camp-items", role: "list" });
  campItems.forEach((item) => {
    const placed = Boolean(campState.placements[item.id]);
    const button = el("button", {
      class: `camp-item${campState.selected === item.id ? " selected" : ""}${placed ? " placed" : ""}`,
      type: "button",
      draggable: "true",
      "data-camp-item": item.id,
      "aria-pressed": String(campState.selected === item.id)
    }, [
      campSprite(item),
      el("strong", { text: item.label }),
      el("small", { text: placed ? "Posicionado" : item.hint })
    ]);
    button.addEventListener("click", () => {
      campState.selected = item.id;
      renderCampGame();
    });
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item.id);
      campState.selected = item.id;
    });
    list.appendChild(button);
  });
  return list;
}

function campSprite(item) {
  const sprite = el("span", {
    class: `camp-sprite camp-sprite-${item.sprite || "marker"}`,
    "aria-hidden": "true"
  });
  if (item.sprite === "tents") {
    sprite.append(
      el("i", { class: "camp-mini-tent camp-mini-tent-a" }),
      el("i", { class: "camp-mini-tent camp-mini-tent-b" }),
      el("i", { class: "camp-mini-tent camp-mini-tent-c" })
    );
  }
  return sprite;
}

function renderCampActions() {
  const nameInput = el("input", {
    class: "camp-name",
    type: "text",
    maxlength: "24",
    placeholder: "Nome do clube",
    value: campState.club,
    "aria-label": "Nome do clube para o ranking local"
  });
  nameInput.addEventListener("input", () => {
    campState.club = nameInput.value;
  });

  const validate = el("button", { class: "btn btn-primary", type: "button", text: "Validar acampamento" });
  validate.addEventListener("click", validateCamp);

  const save = el("button", { class: "btn btn-ghost", type: "button", text: "Salvar ranking local" });
  save.disabled = campState.score === null;
  save.addEventListener("click", saveCampScore);

  const clear = el("button", { class: "link-button", type: "button", text: "Limpar terreno" });
  clear.addEventListener("click", () => {
    campState = createCampState();
    renderCampGame();
  });

  return el("div", { class: "camp-actions" }, [nameInput, validate, save, clear]);
}

function renderCampBoard() {
  const board = el("div", { class: "camp-board", role: "grid", "aria-label": "Grade do terreno" });
  for (let row = 0; row < campGrid.rows; row += 1) {
    for (let col = 0; col < campGrid.cols; col += 1) {
      const itemId = campItemAt(row, col);
      const item = itemId ? campItemMap[itemId] : null;
      const cell = el("button", {
        class: `camp-cell${item ? " filled" : ""}${itemId === campState.selected ? " selected" : ""}`,
        type: "button",
        draggable: item ? "true" : "false",
        role: "gridcell",
        "data-row": String(row),
        "data-col": String(col),
        "aria-label": item
          ? `Linha ${row + 1}, coluna ${col + 1}: ${item.label}`
          : `Linha ${row + 1}, coluna ${col + 1}: vazio`
      }, item ? [
        campSprite(item),
        el("small", { text: item.label })
      ] : [
        el("span", { class: "sr-only", text: "Vazio" })
      ]);
      cell.addEventListener("click", () => {
        if (itemId) {
          campState.selected = itemId;
          renderCampGame();
          return;
        }
        if (campState.selected) placeCampItem(campState.selected, row, col);
      });
      cell.addEventListener("dragstart", (event) => {
        if (!itemId) return;
        event.dataTransfer.setData("text/plain", itemId);
        campState.selected = itemId;
      });
      cell.addEventListener("dragover", (event) => event.preventDefault());
      cell.addEventListener("drop", (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("text/plain") || campState.selected;
        if (campItemMap[id]) placeCampItem(id, row, col);
      });
      board.appendChild(cell);
    }
  }
  return el("div", { class: "camp-board-wrap" }, [board]);
}

function renderCampResult() {
  const scoreText = campState.score === null ? "Ainda nao validado" : `${campState.score} pontos`;
  const statusText = campState.score === null
    ? "Monte o terreno e valide para receber orientacoes."
    : campState.score >= 88
      ? "Acampamento excelente para inspeção."
      : campState.score >= 70
        ? "Boa base. Ajuste os pontos destacados."
        : "Reorganize as areas criticas antes da inspeção.";
  const list = el("ul", { class: "camp-feedback" });
  if (campState.feedback.length) {
    campState.feedback.forEach((item) => {
      list.appendChild(el("li", { class: item.ok ? "ok" : "warn", text: item.text }));
    });
  } else {
    list.appendChild(el("li", { text: "Dica: cozinha, lixo, banheiros e fogueira definem boa parte da segurança." }));
  }
  return el("div", { class: "camp-result", "aria-live": "polite" }, [
    el("span", { class: "camp-score-label", text: "Pontuação" }),
    el("strong", { text: scoreText }),
    el("p", { text: statusText }),
    list
  ]);
}

function renderCampRanking() {
  const ranking = loadCampRanking();
  const list = el("ol", { class: "camp-ranking-list" });
  if (!ranking.length) {
    list.appendChild(el("li", { text: "Nenhum resultado salvo neste navegador." }));
  } else {
    ranking.forEach((entry) => {
      list.appendChild(el("li", {}, [
        el("strong", { text: entry.club }),
        el("span", { text: `${entry.score} pts` })
      ]));
    });
  }
  return el("div", { class: "camp-ranking" }, [
    el("h3", { text: "Ranking local" }),
    list,
    el("p", { text: "Salvo apenas neste navegador. Futuramente pode ser ligado ao Firebase." })
  ]);
}

function campItemAt(row, col) {
  const found = Object.entries(campState.placements).find(([, pos]) => pos.row === row && pos.col === col);
  return found ? found[0] : null;
}

function placeCampItem(itemId, row, col) {
  if (!campItemMap[itemId]) return;
  const wasPlaced = Boolean(campState.placements[itemId]);
  const previous = campItemAt(row, col);
  if (previous && previous !== itemId) {
    campState.selected = previous;
    showToast("Essa celula ja esta ocupada. Escolha uma area livre para mover.");
    renderCampGame();
    return;
  }
  campState.placements[itemId] = { row, col };
  campState.score = null;
  campState.feedback = [];
  const next = campItems.find((item) => !campState.placements[item.id]);
  campState.selected = wasPlaced || !next ? itemId : next.id;
  renderCampGame();
}

function validateCamp() {
  const feedback = [];
  let score = 100;
  const missing = campItems.filter((item) => !campState.placements[item.id]);
  if (missing.length) {
    score -= missing.length * 8;
    feedback.push({
      ok: false,
      text: `${missing.length} area(s) ainda precisam ser posicionadas.`
    });
  }

  const rule = (ids, ok, penalty, pass, fail) => {
    if (ids.some((id) => !campState.placements[id])) return;
    if (ok()) feedback.push({ ok: true, text: pass });
    else {
      score -= penalty;
      feedback.push({ ok: false, text: fail });
    }
  };

  rule(["entrada"], () => campOnBorder(campState.placements.entrada), 8,
    "Entrada em uma borda do terreno.",
    "Coloque a entrada em uma das bordas para facilitar acesso e circulação.");
  rule([...campTentIds, "fogueira"], () => campTentIds.every((id) => campDistance(id, "fogueira") >= 3), 14,
    "Ala de barracas mantida a uma distância segura da fogueira.",
    "Afaste a fogueira das barracas para reduzir risco de acidente.");
  rule(campTentIds, () => campTentsGrouped(), 8,
    "Barracas bem agrupadas como uma ala do clube.",
    "Agrupe melhor as barracas para facilitar inspeção e organização.");
  rule(["cozinha", "lixo"], () => campDistance("cozinha", "lixo") >= 3, 12,
    "Cozinha afastada da área de lixo.",
    "A cozinha nao deve ficar perto do lixo.");
  rule(["cozinha", "banheiros"], () => campDistance("cozinha", "banheiros") >= 3, 12,
    "Cozinha afastada dos banheiros.",
    "Afaste a cozinha dos banheiros para melhorar higiene e inspeção.");
  rule(["cozinha", "agua"], () => campDistance("cozinha", "agua") <= 2, 8,
    "Agua bem posicionada para apoiar a cozinha.",
    "A cozinha precisa ficar mais perto da agua.");
  rule(["agua", "lixo"], () => campDistance("agua", "lixo") >= 3, 9,
    "Agua protegida da área de lixo.",
    "Mantenha a agua longe do lixo.");
  rule(["agua", "banheiros"], () => campDistance("agua", "banheiros") >= 3, 9,
    "Agua afastada dos banheiros.",
    "A area de agua nao deve ficar junto aos banheiros.");
  rule(["entrada", "enfermaria"], () => campDistance("entrada", "enfermaria") <= 3, 8,
    "Enfermaria acessivel pela entrada.",
    "A enfermaria precisa ficar em local de acesso rapido.");
  rule([...campTentIds, "lixo"], () => campTentIds.every((id) => campDistance(id, "lixo") >= 3), 8,
    "Barracas afastadas do lixo.",
    "Coloque o lixo longe da area de dormir.");

  campState.score = Math.max(0, Math.min(100, score));
  campState.feedback = feedback;
  renderCampGame();
}

function campDistance(first, second) {
  const a = campState.placements[first];
  const b = campState.placements[second];
  if (!a || !b) return Number.POSITIVE_INFINITY;
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}

function campTentsGrouped() {
  const distances = [];
  campTentIds.forEach((first, index) => {
    campTentIds.slice(index + 1).forEach((second) => {
      distances.push(campDistance(first, second));
    });
  });
  return distances.every((distance) => distance <= 3);
}

function campOnBorder(pos) {
  return pos.row === 0 || pos.col === 0 || pos.row === campGrid.rows - 1 || pos.col === campGrid.cols - 1;
}

function saveCampScore() {
  if (campState.score === null) {
    showToast("Valide o acampamento antes de salvar.");
    return;
  }
  const club = campState.club.trim().slice(0, 24) || "Clube sem nome";
  const entries = loadCampRanking();
  entries.push({
    club,
    score: campState.score,
    createdAt: new Date().toISOString()
  });
  entries.sort((a, b) => b.score - a.score || new Date(a.createdAt) - new Date(b.createdAt));
  if (!saveCampRanking(entries)) {
    showToast("Não foi possível salvar o ranking neste navegador.");
    return;
  }
  showToast("Resultado salvo no ranking local.");
  renderCampGame();
}

function createRunnerState(character = "boy") {
  const selected = runnerCharacters.some((item) => item.id === character) ? character : "boy";
  return {
    character: selected,
    status: "ready",
    score: 0,
    record: loadRunnerRecord(),
    level: 1,
    speed: runnerDifficulty(1).speed,
    playerY: 0,
    velocityY: 0,
    onGround: true,
    lastTime: 0,
    nextObstacle: 980,
    nextCollectible: 720,
    entities: [],
    entityId: 0,
    raf: 0,
    collected: 0,
    lastHudAt: 0,
    jumpHeld: false,
    jumpHoldTime: 0,
    jumpHoldLimit: 0.23
  };
}

function loadRunnerRecord() {
  try {
    const raw = localStorage.getItem(runnerRecordKey);
    if (!raw) return { score: 0, items: 0 };
    const parsed = JSON.parse(raw);
    if (typeof parsed === "number") return { score: Math.max(0, Math.floor(parsed)), items: 0 };
    return {
      score: Math.max(0, Math.floor(Number(parsed.score) || 0)),
      items: Math.max(0, Math.floor(Number(parsed.items) || 0))
    };
  } catch {
    return { score: 0, items: 0 };
  }
}

function saveRunnerRecord(record) {
  try {
    localStorage.setItem(runnerRecordKey, JSON.stringify({
      score: Math.max(0, Math.floor(record.score) || 0),
      items: Math.max(0, Math.floor(record.items) || 0)
    }));
    return true;
  } catch {
    return false;
  }
}

function runnerLevel(score = runnerState.score) {
  return Math.min(runnerMaxLevel, Math.floor(score / runnerLevelPoints) + 1);
}

function runnerDifficulty(level = runnerState.level) {
  const clamped = Math.max(1, Math.min(runnerMaxLevel, level));
  const t = (clamped - 1) / (runnerMaxLevel - 1);
  return {
    speed: Math.round(230 + t * 380),
    scoreRate: 30 + clamped * 1.3,
    obstacleMin: Math.round(900 - t * 540),
    obstacleMax: Math.round(1250 - t * 650),
    collectibleMin: Math.round(820 - t * 220),
    collectibleMax: Math.round(1500 - t * 440)
  };
}

function runnerObstaclePool() {
  if (runnerState.level < 4) return runnerObstacles.slice(0, 4);
  if (runnerState.level < 8) return runnerObstacles.slice(0, 6);
  return runnerObstacles;
}

function renderRunnerGame() {
  const target = document.getElementById("runnerContent");
  if (!target) return;
  stopRunnerGame();
  target.addEventListener("contextmenu", preventRunnerSelection);
  target.addEventListener("selectstart", preventRunnerSelection);

  const chooser = el("div", { class: "runner-chooser", role: "group", "aria-label": "Escolha o personagem" });
  runnerCharacters.forEach((character) => {
    const active = runnerState.character === character.id;
    const button = el("button", {
      class: `runner-character ${active ? "active" : ""}`,
      type: "button",
      "aria-pressed": String(active),
      "data-runner-character": character.id
    }, [
      renderRunnerAvatar(character.id),
      el("span", { text: character.label })
    ]);
    button.addEventListener("click", () => {
      runnerState = createRunnerState(character.id);
      renderRunnerGame();
    });
    chooser.appendChild(button);
  });

  const stage = el("div", {
    class: "runner-stage",
    tabindex: "0",
    "data-runner-stage": "true",
    "aria-label": "Trilha do Campori em pixel-art"
  }, [
    el("div", { class: "runner-sky", "aria-hidden": "true" }, [
      el("span", { class: "runner-cloud runner-cloud-a" }),
      el("span", { class: "runner-cloud runner-cloud-b" }),
      el("span", { class: "runner-sun" })
    ]),
    el("div", { class: "runner-hills", "aria-hidden": "true" }),
    el("div", { class: "runner-forest", "aria-hidden": "true" }),
    el("div", { class: "runner-trail", "aria-hidden": "true" }),
    el("div", { class: "runner-ground", "aria-hidden": "true" }),
    el("div", { class: "runner-track", "data-runner-track": "true" }, [
      renderRunnerPlayer()
    ])
  ]);
  stage.addEventListener("pointerdown", beginRunnerJump);
  stage.addEventListener("pointerup", endRunnerJump);
  stage.addEventListener("pointerleave", endRunnerJump);
  stage.addEventListener("pointercancel", endRunnerJump);

  const start = el("button", { class: "btn btn-primary", type: "button", text: "Começar trilha", "data-runner-start": "true" });
  start.addEventListener("click", startRunnerGame);

  const jump = el("button", { class: "btn btn-ghost", type: "button", text: "Pular", "data-runner-jump": "true" });
  jump.addEventListener("pointerdown", beginRunnerJump);
  jump.addEventListener("pointerup", endRunnerJump);
  jump.addEventListener("pointerleave", endRunnerJump);
  jump.addEventListener("pointercancel", endRunnerJump);

  target.replaceChildren(
    el("div", { class: "runner-game" }, [
      chooser,
      renderRunnerHud(),
      renderRunnerPower(),
      stage,
      el("div", { class: "runner-actions" }, [start, jump]),
      el("div", { class: "runner-message", "data-runner-message": "true", "aria-live": "polite" })
    ])
  );

  updateRunnerPlayer();
  updateRunnerHud();
  updateRunnerPower();
  updateRunnerMessage("Pronto para partir", "Escolha o personagem e comece a trilha.");
}

function renderRunnerHud() {
  return el("div", { class: "runner-hud" }, [
    el("div", { class: "runner-stat" }, [
      el("span", { text: "Pontos" }),
      el("strong", { text: "0", "data-runner-score": "true" })
    ]),
    el("div", { class: "runner-stat" }, [
      el("span", { text: "Recorde" }),
      el("strong", { text: String(runnerState.record.score), "data-runner-record": "true" }),
      el("small", { text: `${runnerState.record.items} itens`, "data-runner-record-items": "true" })
    ]),
    el("div", { class: "runner-stat" }, [
      el("span", { text: "Nível" }),
      el("strong", { text: "1", "data-runner-level": "true" })
    ]),
    el("div", { class: "runner-stat" }, [
      el("span", { text: "Itens" }),
      el("strong", { text: "0", "data-runner-items": "true" })
    ])
  ]);
}

function renderRunnerPower() {
  return el("div", { class: "runner-power", "aria-label": "Forca do pulo" }, [
    el("span", { text: "Força do pulo" }),
    el("div", { class: "runner-power-track", "aria-hidden": "true" }, [
      el("i", { class: "runner-power-fill", "data-runner-power": "true" })
    ]),
    el("strong", { text: "0%", "data-runner-power-text": "true" })
  ]);
}

function renderRunnerAvatar(character) {
  return el("span", { class: `runner-sprite runner-avatar runner-avatar-${character}`, "aria-hidden": "true" });
}

function renderRunnerPlayer() {
  return el("span", {
    class: `runner-sprite runner-player runner-player-${runnerState.character}`,
    "data-runner-player": "true",
    "aria-hidden": "true"
  });
}

function startRunnerGame() {
  const character = runnerState.character;
  runnerState = createRunnerState(character);
  runnerState.status = "running";
  runnerState.lastTime = performance.now();
  runnerState.lastHudAt = runnerState.lastTime;

  const track = document.querySelector("[data-runner-track]");
  if (track) track.querySelectorAll(".runner-entity").forEach((node) => node.remove());

  const player = document.querySelector("[data-runner-player]");
  if (player) player.classList.remove("runner-player-hit");

  updateRunnerHud();
  updateRunnerPower();
  updateRunnerPlayer();
  updateRunnerMessage("Trilha iniciada", "Pegue os itens e salte os obstáculos.");
  runnerState.raf = requestAnimationFrame(runnerLoop);
}

function stopRunnerGame() {
  if (!runnerState || !runnerState.raf) return;
  cancelAnimationFrame(runnerState.raf);
  runnerState.raf = 0;
}

function preventRunnerSelection(event) {
  event.preventDefault();
}

function beginRunnerJump(event) {
  if (event) event.preventDefault();
  if (runnerState.status !== "running") {
    startRunnerGame();
  }
  if (!runnerState.onGround) return;

  runnerState.velocityY = -600;
  runnerState.onGround = false;
  runnerState.jumpHeld = true;
  runnerState.jumpHoldTime = 0;
  const player = document.querySelector("[data-runner-player]");
  if (player) {
    player.classList.remove("runner-player-hop");
    void player.offsetWidth;
    player.classList.add("runner-player-hop");
  }
  updateRunnerPower();
}

function endRunnerJump(event) {
  if (event) event.preventDefault();
  if (!runnerState.jumpHeld) return;
  runnerState.jumpHeld = false;
  updateRunnerPower();
}

function runnerLoop(timestamp) {
  if (runnerState.status !== "running") return;
  const dt = Math.min(0.034, Math.max(0, (timestamp - runnerState.lastTime) / 1000 || 0));
  runnerState.lastTime = timestamp;
  const previousLevel = runnerState.level;
  const difficulty = runnerDifficulty(previousLevel);
  runnerState.score += dt * difficulty.scoreRate;
  runnerState.level = runnerLevel(runnerState.score);
  runnerState.speed = runnerDifficulty(runnerState.level).speed;
  if (runnerState.level !== previousLevel) {
    const message = runnerState.level === runnerMaxLevel
      ? "Desafio máximo liberado. Agora é habilidade pura."
      : "A trilha ficou mais rápida.";
    updateRunnerMessage(`Nível ${runnerState.level}`, message);
  }

  updateRunnerPhysics(dt);
  updateRunnerSpawns(dt);
  updateRunnerEntities(dt);
  checkRunnerCollisions();
  if (runnerState.status !== "running") return;

  updateRunnerPlayerFrame();
  if (timestamp - runnerState.lastHudAt > 90) {
    updateRunnerHud();
    runnerState.lastHudAt = timestamp;
  }
  runnerState.raf = requestAnimationFrame(runnerLoop);
}

function updateRunnerPhysics(dt) {
  if (runnerState.onGround) return;
  if (runnerState.jumpHeld && runnerState.jumpHoldTime < runnerState.jumpHoldLimit && runnerState.velocityY < 0) {
    const remaining = 1 - (runnerState.jumpHoldTime / runnerState.jumpHoldLimit);
    runnerState.velocityY -= 1650 * remaining * dt;
    runnerState.velocityY = Math.max(runnerState.velocityY, -910);
    runnerState.jumpHoldTime += dt;
    if (runnerState.jumpHoldTime >= runnerState.jumpHoldLimit) runnerState.jumpHeld = false;
  }
  const gravity = runnerState.velocityY < 0 && !runnerState.jumpHeld ? 2300 : 1850;
  runnerState.velocityY += gravity * dt;
  runnerState.playerY += runnerState.velocityY * dt;
  if (runnerState.playerY >= 0) {
    runnerState.playerY = 0;
    runnerState.velocityY = 0;
    runnerState.onGround = true;
    runnerState.jumpHeld = false;
    runnerState.jumpHoldTime = 0;
  }
  updateRunnerPlayer();
  updateRunnerPower();
}

function updateRunnerSpawns(dt) {
  const difficulty = runnerDifficulty(runnerState.level);
  runnerState.nextObstacle -= runnerState.speed * dt;
  runnerState.nextCollectible -= runnerState.speed * dt;

  if (runnerState.nextObstacle <= 0) {
    spawnRunnerEntity("obstacle");
    runnerState.nextObstacle = randomRunnerRange(difficulty.obstacleMin, difficulty.obstacleMax);
  }

  if (runnerState.nextCollectible <= 0) {
    spawnRunnerEntity("collectible");
    runnerState.nextCollectible = randomRunnerRange(difficulty.collectibleMin, difficulty.collectibleMax);
  }
}

function spawnRunnerEntity(kind) {
  const stage = document.querySelector("[data-runner-stage]");
  const track = document.querySelector("[data-runner-track]");
  if (!stage || !track) return;

  const isObstacle = kind === "obstacle";
  const item = runnerPick(isObstacle ? runnerObstaclePool() : runnerCollectibles);
  const width = item.width || 30;
  const height = item.height || 30;
  const entity = {
    id: runnerState.entityId,
    kind,
    type: item.type,
    label: item.label,
    points: item.points || 0,
    width,
    height,
    x: stage.clientWidth + randomRunnerRange(18, 70),
    y: isObstacle ? 0 : -randomRunnerRange(82, 130),
    node: el("span", {
      class: `runner-sprite runner-entity ${isObstacle ? "runner-obstacle" : "runner-collectible"} runner-${kind}-${item.type}`,
      "aria-hidden": "true"
    }),
    dead: false
  };
  runnerState.entityId += 1;
  entity.node.style.width = "64px";
  entity.node.style.height = "64px";
  entity.node.style.setProperty("--sprite-x", `${item.col * -64}px`);
  entity.node.style.setProperty("--sprite-y", `${item.row * -64}px`);
  track.appendChild(entity.node);
  runnerState.entities.push(entity);
  positionRunnerEntity(entity);
}

function updateRunnerEntities(dt) {
  runnerState.entities.forEach((entity) => {
    entity.x -= runnerState.speed * dt;
    if (entity.x < -90) {
      entity.dead = true;
      entity.node.remove();
    } else {
      positionRunnerEntity(entity);
    }
  });
  runnerState.entities = runnerState.entities.filter((entity) => !entity.dead);
}

function positionRunnerEntity(entity) {
  entity.node.style.transform = `translate3d(${entity.x.toFixed(1)}px, ${entity.y.toFixed(1)}px, 0) scale(var(--runner-entity-scale, 1))`;
}

function checkRunnerCollisions() {
  const stage = document.querySelector("[data-runner-stage]");
  const player = document.querySelector("[data-runner-player]");
  if (!stage) return;

  const ground = 42;
  const height = stage.clientHeight;
  const playerWidth = player ? player.offsetWidth : 48;
  const playerHeight = player ? player.offsetHeight : 68;
  const playerBox = {
    x: player ? player.offsetLeft + 13 : 88,
    y: height - ground - playerHeight + runnerState.playerY + 12,
    w: Math.max(22, playerWidth - 26),
    h: Math.max(34, playerHeight - 18)
  };

  for (const entity of runnerState.entities) {
    const entityBox = {
      x: entity.x + 6,
      y: height - ground - entity.height + entity.y + 4,
      w: Math.max(8, entity.width - 12),
      h: Math.max(8, entity.height - 8)
    };

    if (!runnerBoxesOverlap(playerBox, entityBox)) continue;

    if (entity.kind === "obstacle") {
      runnerGameOver();
      return;
    }

    entity.dead = true;
    entity.node.remove();
    runnerState.score += entity.points;
    runnerState.collected += 1;
    updateRunnerMessage("Item coletado", `${entity.label} +${entity.points}`);
  }

  runnerState.entities = runnerState.entities.filter((entity) => !entity.dead);
}

function runnerGameOver() {
  runnerState.status = "over";
  stopRunnerGame();
  const finalScore = Math.floor(runnerState.score);
  let title = "Fim de trilha";
  let text = `Pontuação: ${finalScore} - Itens: ${runnerState.collected}.`;
  const isRecord = finalScore > runnerState.record.score ||
    (finalScore === runnerState.record.score && runnerState.collected > runnerState.record.items);
  if (isRecord) {
    runnerState.record = { score: finalScore, items: runnerState.collected };
    title = "Novo recorde local";
    text = `Você fez ${finalScore} pontos e coletou ${runnerState.collected} itens.`;
    if (!saveRunnerRecord(runnerState.record)) text += " O navegador não permitiu salvar.";
  }

  const player = document.querySelector("[data-runner-player]");
  if (player) player.classList.add("runner-player-hit");

  updateRunnerPlayerFrame(player);
  updateRunnerHud();
  updateRunnerPower();
  updateRunnerMessage(title, text);
}

function updateRunnerPlayer() {
  const player = document.querySelector("[data-runner-player]");
  if (!player) return;
  updateRunnerPlayerFrame(player);
  player.style.transform = `translate3d(0, ${runnerState.playerY.toFixed(1)}px, 0) scale(var(--runner-player-scale, 1))`;
}

function updateRunnerPlayerFrame(player = document.querySelector("[data-runner-player]")) {
  if (!player) return;
  const row = runnerState.character === "girl" ? 1 : 0;
  let col = 0;
  if (runnerState.status === "over") col = 7;
  else if (!runnerState.onGround) col = runnerState.velocityY < 0 ? 4 : 5;
  else if (runnerState.status === "running") col = 1 + (Math.floor(runnerState.score / 12) % 3);
  player.style.setProperty("--sprite-x", `${col * -82}px`);
  player.style.setProperty("--sprite-y", `${row * -82}px`);
}

function updateRunnerHud() {
  const score = document.querySelector("[data-runner-score]");
  const record = document.querySelector("[data-runner-record]");
  const recordItems = document.querySelector("[data-runner-record-items]");
  const level = document.querySelector("[data-runner-level]");
  const items = document.querySelector("[data-runner-items]");
  const start = document.querySelector("[data-runner-start]");

  if (score) score.textContent = String(Math.floor(runnerState.score));
  if (record) record.textContent = String(runnerState.record.score);
  if (recordItems) recordItems.textContent = `${runnerState.record.items} itens`;
  if (level) level.textContent = `${runnerState.level}/${runnerMaxLevel}`;
  if (items) items.textContent = String(runnerState.collected);
  if (start) start.textContent = runnerState.status === "running" ? "Reiniciar" : "Começar trilha";
}

function updateRunnerPower() {
  const fill = document.querySelector("[data-runner-power]");
  const text = document.querySelector("[data-runner-power-text]");
  if (!fill || !text) return;
  const amount = runnerState.jumpHeld && !runnerState.onGround
    ? Math.min(100, Math.round((runnerState.jumpHoldTime / runnerState.jumpHoldLimit) * 100))
    : 0;
  fill.style.width = `${amount}%`;
  text.textContent = `${amount}%`;
}

function updateRunnerMessage(title, text) {
  const message = document.querySelector("[data-runner-message]");
  if (!message) return;
  message.replaceChildren(
    el("strong", { text: title }),
    el("span", { text })
  );
}

function initRunnerKeys() {
  document.addEventListener("keydown", (event) => {
    if (!activeModal || activeModal.id !== "runnerModal") return;
    if (!runnerIsJumpKey(event)) return;
    event.preventDefault();
    if (event.repeat && runnerState.jumpHeld) return;
    beginRunnerJump();
  });
  document.addEventListener("keyup", (event) => {
    if (!activeModal || activeModal.id !== "runnerModal") return;
    if (!runnerIsJumpKey(event)) return;
    event.preventDefault();
    endRunnerJump();
  });
}

function runnerIsJumpKey(event) {
  return event.code === "Space" || event.code === "ArrowUp" || event.code === "Enter";
}

function runnerPick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomRunnerRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runnerBoxesOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
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
  initRunnerKeys();
  initCloseModalLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
