import { Button } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';


interface Score{
  score: number;
  upto: number;
}

const Score = ({score, upto}: Score) => {

  const retake = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="scoreboard">
        Your Score: {score} / {upto}
      </div>
      <div id="retake">
        <Button variant="contained" color="primary" onClick={retake} endIcon={<ReplayIcon />}> Retake? </Button>
      </div>
    </>
  )
}

export default Score