# Medienstation as a Service - MaaS

Die _Medienstation as a Service_ (MaaS) bietet dir eine einfache Möglichkeit, die Vorzüge Plantalas mit deinen eigenen Bildern zu verbinden. Halbautomatisierte Schritte helfen dir dabei, auch ohne tiefgreifende technische Kenntnisse, deine Daten einzubinden und die Medienstation nach deinen Wünschen anzupassen.

## Funktionen

- in nur 3 Schritten zur eigenen Medienstation
- automatisierter Bilderimport und Entfernen der Bildhintergründe
- unterstützter Bearbeitungsmodus der Daten und Hinzufügen von Hintergrundinformationen
- Farben werden anhand deines Startbildes analysiert
- Farbschema der Medienstation frei wählbar
- spielerisch ästhetische Wissensvermittlung mit deinen Daten

Im Folgenden zeigen wir dir, wie du deine eigene Medienstation erstellst.

<br />

# TL;DR

- Kopiere deine Bilder in der Ordner `public/images/input` und entwirf ein Logo `public/images/logo.png` sowie ein Startbild `public/images/start.png`
- Starte die Medienstation mit `docker-compose up -d --build`
- Erzeuge die Mediendaten mit `docker exec -d plantala-app npm run media-data` und bearbeite Hintergrundinformationen der Bilder und Farbwerte deiner Medienstation in `public/mediaData.js`

<br />

# In 3 Schritten zur eigenen Medienstation

Deine eigene Medienstation erstellst du in 3 einfachen Schritten.

1. Bilder kopieren
2. Medienstation starten
3. Bilder und Informationen anpassen

---

<br />

## Schritt 1. Kopiere deine Bilder

<br />

Kopiere zunächst all deine Bilder in den Ordner `public/images/input`. Alle Bilder werden beim Start der Medienstation automatisch freigestellt (d.h. der Hintergrund wird entfernt) und in diese eingebunden.

Bitte beachte folgende Hinweise für deine Bilder:

- Für ein bestmögliches Ergebnis verwende am besten ein einzelnes Objekt mit einfarbigem Hintergrund pro Bild.
- Der Dateiname wird als Titel der Bilder in der Medienstation verwendet. Bitte benenne die Bilder entsprechend dem dargestellten Objekt.

<br />

Zusätzlich benötigt deine Medienstation ein Logo und ein Startbild. Diese beiden Bilder müssen nicht freigestellt werden und können somit direkt als `logo.png` bzw. `start.png` in den Ordner `public/images` (nicht `public/images/input`) eingefügt werden.

Ist dies erledigt, kannst du deine Medienstation starten.

<br />

## Schritt 2. Medienstation starten

<br />

Zum Starten der Medienstation wird eine Anwendung namens _Docker_ verwendet. Vereinfacht gesagt ist _Docker_ ein weiterer Computer auf deinem Computer. Dadurch erhältst du die Möglichkeit die Medienstation aufzurufen und das Entfernen der Hintergründe von all deinen kopierten Bildern zu starten.

_Docker_ installiert beim Starten automatisch alle benötigten Bibliotheken. Du musst auf deinem Computer somit keine weiteren Anwendungen außer _Docker_ installieren. Für die Installation klicke auf [Docker installieren](https://docs.docker.com/get-docker/) und wähle dein Betriebssystem aus.

Nach abgeschlossener Installation kannst du deine Medienstation mit folgendem Aufruf im Terminal starten:

```
docker-compose up -d --build
```

Dabei werden 2 sogenannte Container gestartet. Der Container _plantala-media-data_ entfernt in all deinen kopierten Bildern den Hintergrund und beendet sich danach.

Der Container _plantala-app_ beinhaltet die komplette Medienstation und ist auf deinem Computer unter [diesem Link zu erreichen.](http://localhost:3000/)

Hurra, deine Medienstation ist nun sichtbar. Damit all deine Bilder und Informationen in dieser erscheinen ist noch ein dritter und letzter Schritt notwendig.

<br />

## Schritt 3: Hinzufügen von Hintergrundinformationen & Anpassen des Farbschemas

<br />

Deine kopierten Bilder wurden alle im Hintergrund freigestellt und befinden sich nun neben deinem Logo sowie deinem Startbild im Ordner `public/images`.

Damit die Bilder in der Medienstation erscheinen, aktualisiere die Mediendaten.

Dies geschieht mit dem Terminalaufruf:

```
docker exec -d plantala-app npm run media-data
```

Öffne erneut den Link deiner Medienstation [mit diesem Link.](http://localhost:3000/)

All deine Bilder werden nun in der Medienstation angezeigt. Weiterhin ist dein Logo und dein Startbild zu sehen. Dieses Startbild hat auch dafür gesorgt, dass sich das Farbschema der Medienstation verändert hat. Die bedeutendsten Farben aus dem Startbild werden nun als Primär- & Sekundärfarbe verwendet.

Gern kannst du Anpassungen in den soeben erzeugten Mediendaten unter `public/mediaData.js` vornehmen.

Insgesamt 7 Farben wurden aus dem Startbild abgeleitet. Die Farbwerte sind als 6-stellige Webfarbe mit einem führenden Zahlenzeichen (#) angegeben. Mit der Website [Colordot](https://color.hailpixel.com/) kannst du eine Farbe deine Wahl aussuchen und jeden einzelnen Farbwert anpassen.

Wofür die einzelnen Farbwerte stehen, siehst du in der folgenden Liste:

```
const primaryColor = '#799160';     // Primärfarbe der Medienstation
const secondaryColor = '#e0bf96';   // Sekundärfarbe der Medienstation
const backgroundColor = '#faebd7';  // Hintergrundfarbe der Medienstation
const textColor = '#341419';        // Textfarbe der Medienstation
const errorColor = '#f3aa1e';       // Farbe für Fehlermeldungen innerhalb der Medienstation
const infoColor = '#ab465a';        // Farbe für Infomeldungen innerhalb der Medienstation
const successColor = '#f3aa1e';     // Farbe für Erfolgsmeldungen innerhalb der Medienstation
```

Neben den Farbwerten sind ebenfalls alle freigestellten Bilder in den Mediendaten enthalten. Auch hier kannst du gern Anpassen vornehmen.

Wenn du mit Dateipfaden vertraut ist, ist ein Anpassung unter _source_ möglich.

Für jedes Bild sind folgende 5 Elemente hinterlegt:

- _name_ ist der, aus dem Dateinamen abgeleitete, Bildtitel für die Medienstation
- _source_ ist die technische Pfadangabe zum freigestellten Bild
- _description_ ist der Beschreibungstext zum Bild für die Darstellung in der Medienstation
- _link_ bietet die Möglichkeit, eine externe Referenz wie bspw. zum Originaldokument anzugeben
- _wiki_ bietet die Möglichkeit, eine Verlinkung zu Wikimedia o.ä. anzugeben

All deine Anpassungen werden direkt in der Medienstation angezeigt. Öffne dafür den Link deiner Medienstation [mit diesem Link.](http://localhost:3000/)

## Du bist fertig. Deine Medienstation kann nun bereitgestellt werden 🎉

Super! Deine Medienstation ist fertig und du kannst sie [hier ansehen.](http://localhost:3000/)
Um die Medienstation mit anderen zu teilen kannst du sie exportieren.

Dafür nutzt du erneut _Docker_ mit folgendem Aufruf:

```
docker exec -d plantala-app npm run build
```

Deine Medienstation wird in 2 Varianten für dich exportiert:

1. Als Node.js unterstützte Produktionsanwendung im Ordner `.next` für deinen eigenen Server.

2. Als statisches HTML im Ordner `out`, welches eigenständig (ohne Node.js-Server) ausgeführt werden kann.

Bist du mit allen Anpassungen deiner Medienstation zufrieden und hast sie erfolgreich exportiert, kannst du die _Docker_ Container mit folgendem Aufruf stoppen:

```
docker-compose stop
```

Und nun viel Spaß mit deiner Medienstation.
