import { Box, Stack, Typography } from "@mui/material";
import PC from "../assets/images/pc.jpg";
import Icon from "../assets/images/icoos.png";

function SecaoUm() {
  return (
    <Stack
      spacing={2}
      className="container"
      sx={{
        height: "110vh",
        textAlign: "center",
        padding: "25px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "90px",
            fontFamily: "Cinzel",
            lineHeight: "106px",
            letterSpacing: "normal",
            textAlign: "start",
          }}
        >
          <span style={{ color: "#999999" }}>Explore</span> o{" "}
          <span style={{ color: "#999999" }}> Futuro </span>da{" "}
          <span style={{ color: "#999999" }}> Tecnologia </span>com a{" "}
          <span style={{ color: "#999999" }}> Square </span>
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          top: "25%",
          width: "100vw",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: "Montserrat",
            lineHeight: "42px",
            letterSpacing: "0.721px",
          }}
        >
          Descubra o que o futuro da tecnologia reserva para você com a Square.
          Oferecemos uma ampla variedade de computadores e periféricos de ponta
          para impulsionar a sua produtividade, criatividade e entretenimento.
          Explore nossos produtos e esteja pronto para o amanhã!
        </Typography>
      </Box>
    </Stack>
  );
}

export default SecaoUm;
