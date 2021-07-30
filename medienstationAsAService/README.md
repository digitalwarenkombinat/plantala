# Medienstation as a Service - MaaS

## Features

- in nur 3 Schritten zur eigenen Medienstation
- automatisierter Bilderimport samt Entfernen der Hintergründe
- unterstützter Bearbeitungsmodus der Daten
- Farben werden anhand deines Startbildes analysiert
- Farbschema der Anwendung frei wählbar

<br />

## TL;DR

- Kopiere deine Bilder nach `public/images/input`
- Starte die Docker Container mit `docker-compose up -d --build`
- Bearbeite Hintergrundinformationen der Bilder und Farbwerte deiner Anwendung in `public/mediaData.tsx`

<br />

## In 3 Schritten zur eigenen Medienstation

---

<br />

### Schritt 1. Kopiere deine Bilder

<br />

Kopiere zunächst all deine Bilder nach `public/images/input`. Kopiere zusätzlich 2 Dateien mit den Namen `logo.png` und `main.png` nach `public/images` für dein persönliches Anwendungslogo und dein Startbild.

Bitte beachte dabei folgende Hinweise:

- Für ein bestmögliches Ergebnis verwende am besten ein einzelnes Objekt mit einfarbigem Hintergrund pro Bild.
- Der Dateiname wird als Titel der Bilder in der Anwendung verwendet. Bitte benenne die Bilder entsprechend dem dargestellten Objekt.

<br />

### Schritt 2. automatisiertes Freistellen deiner Bilder

<br />

Zum automatisierten Freistellen von Digitalisaten wird _Rembg_ verwendet. _Rembg_ ist ein Werkzeug zum Entfernen des Hintergrunds von Bildern.

Für die Installation von _Rembg_ wird ein Dockerfile bereitgestellt, um alle Objekte freizustellen.

In diesem können die beiden Docker Container _plantala-media_ und _plantala-app_ mit folgendem Befehl gestartet werden:

```
➜ docker-compose up -d --build
```

<br />

<details>
  <summary>Du möchtest kein Docker verwenden? Klicke hier für die alternative Installation</summary>
  
  ## Installationsschritte
  1. Python 3.8 oder neuer installiert
     * https://www.python.org/downloads/
  2. Torch und Torchvision installiert
     * ```➜ pip install torch==1.7.1+cpu torchvision==0.8.2+cpu -f https://download.pytorch.org/whl/torch_stable.html ```
  3. Rembg installiert
     * ```➜ pip install rembg ```

</details>

<br />

### Schritt 3: Hinzufügen von Hintergrundinformationen & Anpassen des Farbschemas

<br />

Nach dem Erzeugen der freigestellten Objekte erfolgt eine automatisierte Generierung des Datenmodells im TSX-Dateiformat. Der Prozess wird mit `npm run media-data` gestartet. In der erzeugten Datei `public/mediaData.tsx` können die Bilder optional bearbeitet sowie mit Hintergrundinformationen angereichert werden.

Jedes Datenobjekt beinhaltet 5 Elemente.

- _name_ bezeichnet den aus dem Dateinamen abgeleiteten Bildtitel, welcher in der Anwendung dargestellt wird
- _source_ ist ein technische Pfadangabe zum freigestellten Bild
- _description_ ist der Beschreibungstext zum Bild und wird ebenfalls in der Anwendung dargestellt
- _link_ bietet die Möglichkeit eine externe Referenz (bspw. zum Originaldokument) anzugeben
- _wiki_ bietet die Möglichkeit eine Verlinkung zu Wikimedia anzugeben

```
[
  {
    name: 'Kelchsaum der Erdnusspflanze',
    source: 'AcaciaSenegal_klein',
    description: 'ursprünglich aus den Anden; die ältesten Funde sind 5000 Jahre alt',
    link: 'https://sammlungen.uni-goettingen.de/objekt/record_naniweb_461334/1/',
    wiki: 'https://de.wikipedia.org/wiki/Erdnuss',
  }
]
```

Ebenfalls in der `public/mediaData.tsx` können Änderungen an Primär- & Sekundärfarbe der Anwendung sowie am Hintergrund vorgenommen werden.

Folgende Farbwerte können angepasst werden:

```
const primaryColor = '#799160';     // Primärfarbe der Anwendung
const secondaryColor = '#e0bf96';   // Sekundärfarbe der Anwendung
const backgroundColor = '#faebd7';  // Hintergrundfarbe der Anwendung
const textColor = '#341419';        // Textfarbe der Anwendung
const errorColor = '#f3aa1e';       // Farbe für Fehlermeldungen innerhalb der Anwendung
const infoColor = '#ab465a';        // Farbe für Infomeldungen innerhalb der Anwendung
const successColor = '#f3aa1e';     // Farbe für Erfolgsmeldungen innerhalb der Anwendung
```

## Fertig. Deine Anwendung kann nun bereitgestellt werden 🎉

Stoppe die Docker Container mit `docker-compose stop`.

---

<br />
Um die Anwendung als Next.js Applikation zu deployen, starte:

```
npm run build
```

Um die Anwendung als HTML-Webseite zu exportieren, starte:

```
npm run export
```
