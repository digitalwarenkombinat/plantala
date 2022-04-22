import { Dialog, DialogContent, DialogContentText, DialogTitle, Link } from '@material-ui/core';

export function About({ onClose, open }: { onClose: () => void; open: boolean }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="about-dialog" open={open} maxWidth={'xl'}>
      <DialogTitle id="about-dialog">Über Plantala</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Wir, Anne Mühlich und Gerd Müller, haben 2021 die Webanwendung Plantala im Rahmen des Kulturhackathons Coding
          da Vinci und eines anschließenden Stipendiums entwickelt. Mit Plantala kannst du aus ästhetischen
          Pflanzenteilen dein eigenes Mandala erstellen, speichern, ausdrucken und im Anschluss ausmalen. Ganz nebenbei
          lernst du auch noch etwas über spezielle Eigenheiten der einzelnen Pflanzen.
        </DialogContentText>
        <DialogContentText>
          Alle Bilder und erstellten Plantalas sind frei lizenziert und können vielfältig genutzt werden, z.B. für den
          Unterricht, für umweltpädagogische Angebote oder einfach für private Deko. Verweise gern auf uns und nutze den
          Hashtag <i> #plantala</i>
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Hintergründe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Die Lehrtafeln entstanden gegen Ende des 19. bis Anfang des 20. Jahrhunderts. Oft ist dabei nicht genau
          bekannt, wer die Tafeln gemalt hat. An den von uns genutzten Tafeln waren nach heutigem Wissensstand Carl
          Bollmann, Hermann Zippel, Albert Peter, Walter Müller sowie bisher unbekannte Zeichner beteiligt. Einige der
          Lehrtafeln erschienen im Verlag von Friedrich Vieweg und Sohn.
        </DialogContentText>
        <DialogContentText>
          Der Quellcode von Plantala läuft unter einer MIT Lizenz. Die von der Universität Göttingen bereitgestellten
          Digitalisate von Botanischen Lehrtafeln wurden teilweise unter einer CC BY-SA 4.0 Lizenz veröffentlicht. Die
          vorher in publizierten Werken erschienenen Lehrtafeln laufen unter einer Publik Domain Mark 1.0 und sind damit
          gemeinfrei. Dies gilt auch für die bunten Pflanzenausschnitte.{' '}
          <Link href="https://sammlungen.uni-goettingen.de/sammlung/slg_1053/" target="_blank" rel="noreferrer">
            Hier
          </Link>{' '}
          findest du alle Lehrtafeln aus der Sammlung der Uni Göttingen. Alle eigens für das Projekt erstellten
          schwarz-weißen Pflanzenvektoren laufen unter einer CC BY-SA 4.0 Lizenz.
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Plantala weiterdenken</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Plantala ist als Open-Source-Anwendung für eine Medienstation konzipiert und soll Kulturinstitutionen die
          Möglichkeit bieten, ihre eigene Medienstation zu entwickeln. Die Medienstation as a Service (MaaS) bietet dir
          eine einfache Möglichkeit, die technischen Vorzüge Plantalas mit deinen Bildern zu verbinden. Willst du mehr
          erfahren? Schau in die{' '}
          <Link
            href="https://github.com/digitalwarenkombinat/plantala/blob/main/medienstationAsAService/README.md"
            target="_blank"
            rel="noreferrer"
          >
            ausführliche Beschreibung
          </Link>{' '}
          von MaaS. Hast du Interesse, MaaS einzusetzen oder weiterzuentwickeln? Oder hast du bei Plantala inhaltliche
          Fehler gefunden, die du gern korrigiert sehen möchtest? Dann kontaktiere uns unter folgender E-Mail-Adresse:{' '}
          <Link href="mailto:info@digitalwarenkombinat.de">info@digitalwarenkombinat.de</Link>
        </DialogContentText>
        <DialogContentText>
          Folge uns gern auf{' '}
          <Link href="https://twitter.com/digiwako" target="_blank" rel="noreferrer">
            Twitter
          </Link>{' '}
          und{' '}
          <Link href="https://www.instagram.com/digitalwarenkombinat" target="_blank" rel="noreferrer">
            Instagram
          </Link>{' '}
          unter <i> @digitalwarenkombinat </i>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
