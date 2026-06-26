const SUPABASE_URL = "https://nwndxznmtfqbqyavlxtd.supabase.co";
const SUPABASE_KEY = "sb_publishable_KgiD9NVuKzyhlWmyHAYoNw_d6UvbmQo";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const VISIT_SESSION_KEY = "guestbook1999VisitRecorded";

const visitorCount = document.getElementById("visitorCount");
const guestbookForm = document.getElementById("guestbookForm");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const guestbookEntries = document.getElementById("guestbookEntries");
const emptyGuestbook = document.getElementById("emptyGuestbook");
const formStatus = document.getElementById("formStatus");
const factButton = document.getElementById("factButton");
const factBox = document.getElementById("factBox");
const lastUpdate = document.getElementById("lastUpdate");

const retroFacts = [
  "Hai appena cliccato un bottone. Nel 1999 questa era tecnologia avanzata.",
  "Questo sito è stato premiato dalla prestigiosa Accademia dei Siti Fatti Troppo Tardi.",
  "Il webmaster non è responsabile per eventuali modem che iniziano a fare rumori strani.",
  "Ricorda: una homepage senza marquee è solo una pagina triste.",
  "Questo messaggio è compatibile con Internet Explorer 5. Probabilmente.",
  "Hai trovato il segreto del sito. Non c'era nessun segreto, ma ora sei parte del club."
];

function formatCounter(number) {
  return String(number).padStart(6, "0");
}

function formatDate(timestamp) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(timestamp));
}

function createEntryElement(entry) {
  const article = document.createElement("article");
  article.className = "guestbook-entry";

  const header = document.createElement("div");
  header.className = "entry-header";

  const name = document.createElement("span");
  name.textContent = `Messaggio di: ${entry.name}`;

  const date = document.createElement("span");
  date.textContent = formatDate(entry.created_at);

  const message = document.createElement("p");
  message.className = "entry-message";
  message.textContent = entry.message;

  header.append(name, date);
  article.append(header, message);

  return article;
}

async function renderEntries() {
  guestbookEntries.innerHTML = "";

  const { data, error } = await supabaseClient
    .from("guestbook_entries")
    .select("id, name, message, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error(error);
    emptyGuestbook.style.display = "block";
    emptyGuestbook.textContent =
      "Il guestbook ha avuto un problema tecnico. Il webmaster è già stato informato, probabilmente.";
    return;
  }

  emptyGuestbook.style.display = data.length ? "none" : "block";

  data.forEach((entry) => {
    guestbookEntries.appendChild(createEntryElement(entry));
  });
}

async function updateVisitorCounter() {
  if (!sessionStorage.getItem(VISIT_SESSION_KEY)) {
    const { error } = await supabaseClient.from("site_visits").insert({});

    if (!error) {
      sessionStorage.setItem(VISIT_SESSION_KEY, "true");
    }
  }

  const { count, error } = await supabaseClient
    .from("site_visits")
    .select("*", { count: "exact", head: true });

  visitorCount.textContent = error
    ? "??????"
    : formatCounter(count || 0);
}

guestbookForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    formStatus.textContent =
      "Compila nome e messaggio. Anche Internet del 1999 aveva degli standard.";
    return;
  }

  formStatus.textContent = "Invio del messaggio in corso...";

  const { error } = await supabase
    .from("guestbook_entries")
    .insert({ name, message });

  if (error) {
    console.error(error);
    formStatus.textContent =
      "Errore durante l'invio. Il modem del webmaster potrebbe essere occupato.";
    return;
  }

  guestbookForm.reset();
  formStatus.textContent =
    "Messaggio salvato. Ora esisti ufficialmente su Internet.";

  renderEntries();
});

factButton.addEventListener("click", () => {
  const index = Math.floor(Math.random() * retroFacts.length);
  factBox.textContent = retroFacts[index];
});

document.querySelectorAll(".fake-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    alert(
      "Questo link sarà disponibile appena il webmaster finisce di configurare il modem."
    );
  });
});

lastUpdate.textContent = new Intl.DateTimeFormat("it-IT", {
  day: "2-digit",
  month: "long",
  year: "numeric"
}).format(new Date());

updateVisitorCounter();
renderEntries();