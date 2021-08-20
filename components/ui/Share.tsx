import { Button, Grid } from '@material-ui/core';
import { saveAs } from 'file-saver';

interface IShareProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

function downloadCanvas(canvasRef: React.RefObject<HTMLCanvasElement>): void {
  return canvasRef.current?.toBlob(function (blob) {
    if (blob) {
      saveAs(blob, 'plantala.png');
    }
  });
}

const Share = ({ canvasRef }: IShareProps) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Button variant="contained" color="secondary" onClick={() => downloadCanvas(canvasRef)}>
          Download
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="secondary" onClick={() => window.print()}>
          Drucken
        </Button>
      </Grid>
    </Grid>
  );
};

export default Share;
