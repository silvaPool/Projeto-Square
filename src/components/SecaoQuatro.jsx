import { Box, Typography } from "@mui/material";
import Jogador from "../assets/images/jogador.jpg";

function SecaoQuatro() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        marginTop: "90px",
        marginBottom: "60px",
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
        <Typography sx={{fontFamily: "Cinzel", fontSize: "55px", marginTop: '15px'}}>Jogue como um PRO</Typography>
        <Typography sx={{fontFamily: "Montserrat", fontSize: "30px"}}>Entre em Contato</Typography>
      </Box>
    </Box>
  );
}

export default SecaoQuatro;
