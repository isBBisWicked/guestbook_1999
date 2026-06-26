# Guestbook 1999

Una piccola homepage personale in stile Web anni ’90.

Colori improbabili, scritte lampeggianti, sfondi stellati, un contatore visite che sembra importantissimo e un guestbook da firmare come si faceva prima dei social, delle newsletter e delle persone che scrivono “link in bio”.

Il progetto prova a ricreare quel preciso momento storico in cui ogni sito aveva almeno una di queste cose:

* un testo che scorreva senza un motivo;
* un badge “Best viewed with Netscape”;
* una sezione “link amici”;
* un contatore visite che nessuno poteva verificare;
* una pagina “in costruzione” che sarebbe rimasta tale per quindici anni.

## Funzioni

* Contatore visite salvato nel browser
* Guestbook con nome e messaggio
* Messaggi ordinati dal più recente
* Salvataggio dei dati tramite `localStorage`
* Frasi casuali da perfetta homepage del 1999
* Link finti che avvisano che il webmaster sta ancora configurando il modem
* Layout responsive, perché anche il cattivo gusto merita di adattarsi agli smartphone

## Tecnologie usate

Il sito è costruito con:

* HTML
* CSS
* JavaScript
* `localStorage`

Nessun framework, nessuna libreria, nessun file `node_modules` da 800 MB per far lampeggiare una scritta.

## Avvio

Clona la repository:

```bash
git clone https://github.com/TUO-USERNAME/guestbook-1999.git
```

Apri la cartella:

```bash
cd guestbook-1999
```

Poi avvia `index.html` nel browser.

Non serve altro. Non devi installare dipendenze, configurare variabili d’ambiente o cercare su Stack Overflow perché un bottone non vuole collaborare.

## Struttura del progetto

```text
guestbook-1999/
├── index.html
├── style.css
├── script.js
└── README.md
```

* `index.html` contiene la struttura della pagina;
* `style.css` gestisce il trauma visivo;
* `script.js` fa funzionare contatore, guestbook e messaggi casuali;
* `README.md` documenta tutto con una serietà moderata.

## Come funziona il guestbook

Inserisci nome e messaggio, premi il pulsante di invio e il contenuto viene salvato nel browser.

I messaggi non vengono inviati a un server, non finiscono in un database e non vengono letti da un misterioso webmaster chiuso in una stanza piena di floppy disk.

Restano soltanto nel browser e nel dispositivo che stai usando.

Se svuoti i dati del browser, cambierai computer o aprirai il sito da un altro dispositivo, il guestbook ripartirà da zero. Proprio come certi forum del 2004 dopo un blackout.

## Contatore visite

Il contatore aumenta ogni volta che apri la pagina sullo stesso browser.

Non distingue tra visitatori, parenti curiosi, webmaster che controlla se funziona e persone che aggiornano la pagina trenta volte di seguito.

Ma questo è perfettamente coerente con lo spirito del 1999.

## Idee per futuri aggiornamenti

* Musica MIDI opzionale
* Cursor personalizzato
* GIF animate ovunque
* Sezione “foto del webmaster”
* Guestbook con risposta del proprietario del sito
* Finta chat IRC
* Pagina “download”
* Badge da collezionare
* Modalità “connessione lenta” con caricamento finto
* Un pulsante che dice “Non cliccare qui” e che ovviamente va cliccato

## Nota storica non richiesta

Nel Web degli anni ’90 avere un sito personale significava prendere una decisione molto precisa:

> “Ho accesso a Internet e tutti devono sapere quali sono i miei tre film preferiti.”

Guestbook 1999 è un omaggio a quell’epoca. Un’epoca più lenta, più rumorosa, meno ordinata e decisamente meno preoccupata di usare cinque colori fluorescenti contemporaneamente.

## Licenza

Puoi usare, modificare e migliorare il progetto liberamente.

Nel caso tu lo trasformi in qualcosa di spettacolare, evita di dire che è nato dal nulla: anche le homepage brutte hanno una storia.
