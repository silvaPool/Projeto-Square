import { Box, Grid, Typography } from "@mui/material";
import Gamer from "../assets/images/pc.jpg";
import Divider from "@mui/material/Divider";
import Jogador from "../assets/images/jogador.jpg";
import JogadorDois from "../assets/images/jogadorDois.jpg";
import JogadorTres from "../assets/images/jogadorTres.jpg";
import JogadorQuatro from "../assets/images/jogadorQuatro.jpg";
import JogadorCinco from "../assets/images/jogadorCinco.jpg";

function SecaoDois() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "130vh",
        margin: "0 auto",
        padding: "15px",
        background: "#FFFAFA",
        color: "black",
        position: "relative",
        zIndex: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "20%",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "60px",
            lineHeight: "88px",
            fontFamily: "Cinzel",
          }}
        >
          Explorando o Poder da Tecnologia
        </Typography>

        <Typography
          sx={{
            fontSize: "30px",
            textAlign: "start",
            fontWeight: "300",
            width: "70vw",
          }}
        >
          Na Square, não apenas vendemos computadores e periféricos - entregamos
          portais para mundos digitais incríveis. Nossa missão é capacitar você
          a explorar o poder da tecnologia, desbloqueando possibilidades
          ilimitadas para criatividade, produtividade e entretenimento.
        </Typography>
      </Box>

      <Typography sx={{fontSize: '25px', fontFamily: 'Montserrat'}}>Entre na próxima geração da inovação conosco!</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          marginBottom: "60px",
          width: "100%",
        }}
      >
        <img src={JogadorDois} alt="Logo" className="imgGrid" />
        <img src={Jogador} alt="Logo" className="imgGrid" />
        <img src={JogadorCinco} alt="Logo" className="imgGrid" />
      </Box>

      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img src={Gamer} alt="Logo" width={"400px"} className="imgGrid" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: "45px",
              textAlign: "center",
              fontFamily: "Montserrat",
              marginBottom: "5px",
            }}
          >
            Na Square, não apenas vendemos computadores e periféricos -
            entregamos portais para mundos digitais incríveis.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: "54px",
              textAlign: "center",
              paddingBottom: "6px",
              fontFamily: "Montserrat",
              marginBottom: "5px",
              marginTop: "20px",
            }}
          >
            Nossa missão é capacitar você a explorar o poder da tecnologia,
            desbloqueando possibilidades ilimitadas para criatividade,
            produtividade e entretenimento.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ fontSize: "24px" }}>
          <img
            src={Gamer}
            alt="Logo"
            width={"400px"}
            className="imgGrid"
            style={{ marginTop: "20px" }}
          />
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "start",
              paddingBottom: "6px",
              letterSpacing: "-0.48px",
              fontFamily: "Montserrat",
            }}
          >
            Entre na próxima geração da inovação conosco!
          </Typography>
        </Grid>
      </Grid> */}
    </Box>
  );
}

export default SecaoDois;
