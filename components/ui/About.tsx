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
          Wir, Anne Mühlich und Gerd Müller, haben 2021 die Webanwendung Plantala im Rahmen eines Stipendiums des
          Kulturhackathons Coding da Vinci entwickelt. Mit Plantala kannst du aus ästhetischen Pflanzenteilen dein
          eigenes Mandala erstellen, speichern, ausdrucken und im Anschluss ausmalen. Ganz nebenbei lernst du auch noch
          etwas über spezielle Eigenheiten der einzelnen Pflanzen.
        </DialogContentText>
        <DialogContentText>
          Alle Bilder und erstellten Plantalas sind lizenzfrei und können frei genutzt werden, z.B. für den Unterricht,
          für umweltpädagogische Angebote oder einfach für private Deko. Verweist gern auf uns und nutzt den Hashtag
          <i> #plantala</i>
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Hintergründe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Die Lehrtafeln entstanden gegen Ende des 19. bis Anfang des 20. Jahrhunderts im Umfeld der Universität
          Göttingen. Oft ist dabei nicht genau bekannt, wer die Tafeln gemalt hat. An den von uns genutzten Tafeln waren
          nach heutigem Wissensstand Carl Bollmann (Zeichner), Hermann Zippel (Botaniker), Albert Peter (Botaniker und
          Zeichner) sowie Walter Müller (Lithograf) beteiligt. Einige der Lehrtafeln erschienen im Verlag von Friedrich
          Vieweg und Sohn. zu finden.
        </DialogContentText>
        <DialogContentText>
          Der Quellcode von Plantala läuft unter einer MIT Lizenz. Die von der Universität Göttingen bereitgestellten
          Digitalisate von Botanischen Lehrtafeln wurden unter einer CC BY-SA 4.0 Lizenz veröffentlicht und sind{' '}
          <Link href="https://sammlungen.uni-goettingen.de/sammlung/slg_1053/" target="_blank" rel="noreferrer">
            hier
          </Link>{' '}
          zu finden. Alle Pflanzenausschnitte laufen ebenfalls unter einer CC BY-SA 4.0 Lizenz.
        </DialogContentText>
        <DialogContentText>
          Die Lehrtafeln entstanden gegen Ende des 19. bis Anfang des 20. Jahrhunderts im Umfeld der Universität
          Göttingen. Oft ist dabei nicht genau bekannt, wer die Tafeln gemalt hat. An den von uns genutzten Tafeln waren
          nach heutigem Wissensstand Carl Bollmann (Zeichner), Hermann Zippel (Botaniker), Albert Peter (Botaniker und
          Zeichner) sowie Walter Müller (Lithograf) beteiligt. Einige der Lehrtafeln erschienen im Verlag von Friedrich
          Vieweg und Sohn.
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Plantala weiterdenken</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Plantala ist als Medienstation konzipiert und soll Kulturinstitutionen die Möglichkeit bieten, ihre eigene
          Medienstation -digital und analog- zu entwickeln. Die Medienstation as a Service (MaaS) bietet dir eine
          einfache Möglichkeit, die Vorzüge Plantalas mit deinen Bildern zu verbinden. Willst du mehr erfahren? Schau in
          die{' '}
          <Link
            href="https://github.com/digitalwarenkombinat/plantala/blob/main/medienstationAsAService/README.md"
            target="_blank"
            rel="noreferrer"
          >
            ausführliche Beschreibung
          </Link>{' '}
          von MaaS. Hast du Interesse, MaaS einzusetzen oder weiterzuentwickeln? Dann kontaktiere uns unter folgender
          E-Mail-Adresse: <Link href="mailto:info@digitalwarenkombinat.de">info@digitalwarenkombinat.de</Link>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
