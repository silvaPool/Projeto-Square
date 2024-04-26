import { Box, Button, Stack, Typography } from "@mui/material";

function SecaoTres() {
  return (
    <Box
      sx={{
        marginTop: "0",
        textAlign: "center",
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
       
      }}
    >
      <Typography sx={{ fontFamily: "Cinzel", fontSize: "35px" }}>
        Explorando o Futuro da Tecnologia
      </Typography>
      <Typography sx={{ fontSize: "25px", fontFamily: "Montserrat", width: '70vw' }}>
        A Square lidera a revolução tecnológica, trazendo o futuro até você
        hoje. Estamos desbravando novos horizontes na Realidade Virtual,
        redefinindo o entretenimento e proporcionando experiências digitais
        inovadoras. Junte-se a nós nessa jornada rumo a uma era de
        possibilidades sem limites.
      </Typography>

      <button className="button2">Descubra agora</button>
    </Box>
  );
}

export default SecaoTres;
