import { useRef } from 'react';

import { Button, Grid } from '@material-ui/core';
import { saveAs } from 'file-saver';
import { useReactToPrint } from 'react-to-print';

import { MandalaPrint } from './MandalaPrint';

// async function shareCanvas() {
//   const canvasElement = useStore.getState().canvas;
//   const dataUrl = canvasElement.toDataURL();
//   const blob = await (await fetch(dataUrl)).blob();
//   const filesArray = [
//     new File([blob], `Plantala${new Date().getTime()}.png`, {
//       type: blob.type,
//       lastModified: new Date().getTime(),
//     }),
//   ];
//   const shareData = {
//     files: filesArray,
//   };
//   navigator.share(shareData);
// }

async function downloadCanvas() {
  //   const blob = await (await fetch(useStore.getState().canvas)).blob();
  const blob = '';
  if (blob) {
    saveAs(blob, 'plantala.png');
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
          <Button variant="contained" color="secondary" onClick={() => downloadCanvas()}>
            Download
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={handlePrint}>
            Drucken
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ShareButtons;
