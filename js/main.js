// // DOM elements
const cardsContainer = document.getElementById("cards");
const heartsEl = document.getElementById("heartsCount");
const coinsEl = document.getElementById("coinCount");
const copiesEl = document.getElementById("copies");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

// State
let heartCount = 0;
let coins = 100;
let copyCount = 0;
let history = [];

// Hotline Data (you should replace icons/images with assets from Drive)
const hotlines = [
    {
        name: "জাতীয় জরুরি সেবা",
        en: "National Emergency",
        number: "999",
        category: "সার্বজনীন",
        icon: "images/emergency.png"
    },
    {
        name: "পুলিশ",
        en: "Police",
        number: "999",
        category: "পুলিশ",
        icon: "images/police.png"
    },
    {
        name: "ফায়ার সার্ভিস",
        en: "Fire Service",
        number: "999",
        category: "ফায়ার",
        icon: "images/fire-service.png"
    },
    {
        name: "অ্যাম্বুলেন্স",
        en: "Ambulance",
        number: "1994-999999",
        category: "স্বাস্থ্য",
        icon: "images/ambulance.png"
    },
    {
        name: "নারী ও শিশু সহায়তা",
        en: "Women & Child Helpline",
        number: "109",
        category: "সহায়তা",
        icon: "images/emergency.png"
    },
    {
        name: "দুদক",
        en: "Anti-Corruption",
        number: "106",
        category: "সরকারি",
        icon: "images/emergency.png"
    },
    {
        name: "বিদ্যুৎ বিভ্রাট",
        en: "Electricity Outage",
        number: "16216",
        category: "বিদ্যুৎ",
        icon: "images/emergency.png"
    },
    {
        name: "ব্র্যাক",
        en: "Brac",
        number: "16445",
        category: "এনজিও",
        icon: "images/brac.png"
    },
    {
        name: "বাংলাদেশ রেলওয়ে",
        en: "Bangladesh Railway",
        number: "163",
        category: "পরিবহন",
        icon: "images/Bangladesh-Railway.png"
    }
];

// Render Cards
function renderCards() {
    cardsContainer.innerHTML = "";
    hotlines.forEach(service => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <div class="card-header">
        <img src="${service.icon}" alt="${service.en}" />
        <button  onclick="increaseHeart()">
            <img class='cartHeart' src="images/heart outline.png" alt="">
        </button>
      </div>
      <div class="card-title">
        <p>${service.name}</p>
        <span>${service.en}</span>
      </div>
      <div> ${service.number}</div>
      <div>
      <p class="card-badge">
        ${service.category}
      </p>
      </div>
      <div class="card-footer">
        <button class='copyButton' onclick="copyNumber('${service.number}')">⮺ Copy</button>
        <button class='callButton' onclick="callService('${service.number}', '${service.name}')">☏ Call</button>
      </div>
    `;
        cardsContainer.appendChild(card);
    });
}

// Heart
function increaseHeart() {
    heartCount++;
    heartsEl.textContent = `${heartCount}`;
}

// Copy
function copyNumber(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert(`Copied: ${number}`);
        copyCount++;
        copiesEl.textContent = `${copyCount} Copy`;
    });
}

// Call
function callService(number, name) {
    if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
    }
    alert(`Calling ${name} at ${number}`);
    coins -= 20;
    coinsEl.textContent = ` ${coins}`;

    const time = new Date().toLocaleTimeString();
    history.push({ name, number, time });
    renderHistory();
}

// Render History
function renderHistory() {
    historyList.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");

        const leftSpan = document.createElement("span");
        leftSpan.className = "left";

        const serviceName = document.createElement("span");
        serviceName.textContent = item.name;

        const serviceNumber = document.createElement("span");
        serviceNumber.className = "number";
        serviceNumber.textContent = item.number;

        leftSpan.appendChild(serviceName);
        leftSpan.appendChild(serviceNumber);

        const rightSpan = document.createElement("span");
        rightSpan.className = "right";
        rightSpan.textContent = item.time; // Call time

        li.appendChild(leftSpan);
        li.appendChild(rightSpan);

        historyList.appendChild(li);
    });
}
// Clear History
clearHistoryBtn.addEventListener("click", () => {
    history = [];
    renderHistory();
});

// Init
renderCards();
