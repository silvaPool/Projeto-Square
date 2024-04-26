import { Box, Button, Typography } from "@mui/material";
import Jogador from "../assets/images/jogador.jpg";

function SecaoQuatro() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        padding: "25px",
        marginTop: "90px",
        marginBottom: "60px",
        background: 'white',
        color: 'black',
      }}
    >
      <Box>
        <img
          src={Jogador}
          alt="Imagem de um jogador"
          className="jogador"
        />
      </Box>

      <Box sx={{textAlign: 'center', padding: '20px'}}>
        <Typography sx={{fontFamily: "Cinzel", fontSize: "55px", marginTop: '15px', marginBottom: '15px'}}>Jogue como um PRO</Typography>
       <button className="button2">Entre em contato</button>
      </Box>
    </Box>
  );
}

export default SecaoQuatro;
