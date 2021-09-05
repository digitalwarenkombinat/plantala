import { useRef } from 'react';

import { Button, Grid } from '@material-ui/core';
import { saveAs } from 'file-saver';
import { useReactToPrint } from 'react-to-print';

import { MandalaPrint } from './MandalaPrint';

async function handleSave() {
  const canvasElement = document.getElementById('plantalaCanvas') as HTMLCanvasElement;
  const dataUrl = canvasElement.toDataURL();
  const blob = await (await fetch(dataUrl)).blob();
  if (blob) {
    saveAs(blob, 'Plantala.png');
  }
}

const ShareButtons = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div style={{ display: 'none' }}>
        <MandalaPrint ref={componentRef} />
      </div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleSave()}>
            Als PNG speichern
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={handlePrint}>
            Als PDF drucken
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ShareButtons;
