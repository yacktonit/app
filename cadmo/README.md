
# Cadmo App

## Descrizione

Cadmo è un'applicazione web sviluppata utilizzando Ionic e Angular, destinata alla gestione di corsi, scadenze, presenze, voti e altre informazioni utili. L'app include una dashboard con grafici interattivi, un menu di navigazione e funzionalità per monitorare e gestire attività.

Il codice dell'app è stato interamente sviluppato da me, Antonio Tomaselli, come parte di un progetto per facilitare la gestione delle attività scolastiche.

Il Mockup iniziale è stato realizzato da Vincenzo Assisi, Suma Uddin, Francesco Gregorace.

Il Betatest finale è stato eseguito da Giovanni Longo.

## Tecnologie Utilizzate

- **Ionic Framework**: Una piattaforma per la costruzione di applicazioni mobili con tecnologie web.
- **Angular**: Un framework per costruire applicazioni web moderne.
- **Chart.js**: Una libreria JavaScript per la visualizzazione di grafici.
- **Router Angular**: Per la gestione della navigazione tra le pagine.

## Prerequisiti

Assicurati di avere i seguenti strumenti installati:

- [Node.js](https://nodejs.org/) (versione 16 o superiore)
- [Ionic CLI](https://ionicframework.com/docs/cli) (versione 6 o superiore)
- [Angular CLI](https://angular.io/cli) (versione 14 o superiore)

## Installazione

### 1. Navigare nella cartella del progetto

```bash
cd cadmo-app
```

### 2. Installare le dipendenze

Per installare tutte le dipendenze necessarie, esegui:

```bash
npm install
```

### 3. Installare Chart.js

L'app utilizza Chart.js per visualizzare i grafici nella dashboard. Per installarlo, esegui:

```bash
npm install chart.js
```

### 4. Avviare il server di sviluppo

Una volta installate tutte le dipendenze, puoi avviare il server di sviluppo:

```bash
ionic serve
```

## Struttura del Progetto

La struttura delle cartelle è la seguente:

```bash
cadmo-app/
│
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── dashboard.page.html       # Template della dashboard
│   │   │   ├── dashboard.page.scss       # Stili della dashboard
│   │   │   ├── dashboard.page.ts         # Logica della dashboard
│   │   ├── corsi/
│   │   │   ├── corsi.page.html           # Template della pagina corsi
│   │   │   ├── corsi.page.scss           # Stili della pagina corsi
│   │   │   ├── corsi.page.ts             # Logica della pagina corsi
│   │   ├── home/
│   │   │   ├── home.page.html            # Template della home page
│   │   │   ├── home.page.scss            # Stili della home page
│   │   │   ├── home.page.ts              # Logica della home page
│   │   ├── accesso/
│   │   │   ├── accesso.page.html         # Template della pagina di accesso
│   │   │   ├── accesso.page.scss         # Stili della pagina di accesso
│   │   │   ├── accesso.page.ts           # Logica della pagina di accesso
│   │   ├── impostazioni/
│   │   │   ├── impostazioni.page.html    # Template della pagina impostazioni
│   │   │   ├── impostazioni.page.scss    # Stili della pagina impostazioni
│   │   │   ├── impostazioni.page.ts      # Logica della pagina impostazioni
│   │   ├── chisiamo/
│   │   │   ├── chisiamo.page.html        # Template della pagina "Chi Siamo"
│   │   │   ├── chisiamo.page.scss        # Stili della pagina "Chi Siamo"
│   │   │   ├── chisiamo.page.ts          # Logica della pagina "Chi Siamo"
│   │   ├── contatti/
│   │   │   ├── contatti.page.html        # Template della pagina contatti
│   │   │   ├── contatti.page.scss        # Stili della pagina contatti
│   │   │   ├── contatti.page.ts          # Logica della pagina contatti
│   ├── assets/
│   │   ├── logo.png                      # Logo dell'app
│   │   ├── user.png                      # Immagine avatar
├── package.json                          # File delle dipendenze
├── tsconfig.json                         # Configurazione TypeScript
├── ionic.config.json                     # Configurazione di Ionic
├── angular.json                          # Configurazione di Angular
```
(NB: non tutte i percossi degli assets sono stati inseriti, in modo da rendere più facile la lettura!)

## Funzionalità Principali

- **Menu di Navigazione**: Un menu laterale per navigare tra le pagine.
- **Dashboard**: Visualizza grafici interattivi per presenze, voti e scadenze.
- **Pagine**: "Corsi", "Home", "Impostazioni", "Chi Siamo", "Contatti", "Accesso" con informazioni sui corsi, la home, e altre utilità.
- **Barra di Progresso**: Visualizza il progresso delle attività completate.
- **Modulo Contatti**: Un modulo per inviare domande tramite un form con campi di input per nome, e-mail, telefono e una casella di controllo per accettare la Privacy Policy.

## Utilizzo dei Grafici

L'app utilizza Chart.js per visualizzare grafici a ciambella nella dashboard. Ogni grafico è configurato in modo dinamico per visualizzare:

- **Presenze**: Percentuale di studenti presenti e assenti.
- **Voti**: Percentuale di studenti promossi e bocciati.
- **Scadenze**: Percentuale di attività completate e da completare.

## Comandi Ionic + Capacitor per Android

Questa è una guida rapida ai comandi usati per preparare e avviare un progetto Ionic su Android usando Capacitor.

1. **Compilare l'app Ionic**:

    ```bash
    ionic build
    # Compila l'app Ionic e genera la versione web nella cartella www/.
    ```

2. **Aggiungere la piattaforma Android**:

    ```bash
    ionic cap add android
    # Aggiunge la piattaforma Android al progetto. Crea la cartella android/ contenente il progetto nativo.
    ```

3. **Ricompilare l'app**:

    ```bash
    ionic build
    # Serve se hai fatto modifiche e vuoi aggiornare i file nella cartella www/.
    ```

4. **Copiare i file nel progetto Android**:

    ```bash
    npx cap copy android
    # Copia i file web (www/) nel progetto Android.
    ```

5. **Sincronizzare i plugin e le configurazioni**:

    ```bash
    npx cap sync
    # Sincronizza plugin, configurazioni e piattaforme.
    ```

6. **Aprire il progetto Android con Android Studio**:

    ```bash
    npx cap run android
    # Apre il progetto sul telefono bypassando Android Studio
    ```
