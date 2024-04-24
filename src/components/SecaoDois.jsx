import { Box, Grid, Typography } from "@mui/material";
import Gamer from "../assets/images/pc.jpg";

function SecaoDois() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        margin: "0 auto",
        padding: "25px",
        marginBottom: '60px',
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: "600",
              textAlign: "left",
              marginBottom: "60px",
              lineHeight: "88px",
              fontFamily: "Cinzel",
            }}
          >
            Explorando o Poder da Tecnologia
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <img src={Gamer} alt="Logo" width={"400px"} className="loginho" />
        </Grid>
        <Grid item xs={6} sx={{ fontSize: "24px" }}>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "start",
              paddingBottom: "6px",
              letterSpacing: "-0.48px",
              fontFamily: "Montserrat",
              marginBottom: "5px",
            }}
          >
            Na Square, não apenas vendemos computadores e periféricos -
            entregamos portais para mundos digitais incríveis.
          </Typography>
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
            Nossa missão é capacitar você a explorar o poder da tecnologia,
            desbloqueando possibilidades ilimitadas para criatividade,
            produtividade e entretenimento. Entre na próxima geração da inovação
            conosco!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SecaoDois;
