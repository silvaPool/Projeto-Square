import { Box, Stack, Typography } from "@mui/material";
import PC from "../assets/images/pc.jpg";

function SecaoUm() {
  return (
    <Stack
      spacing={2}
      sx={{
      
        height: "180vh",
        textAlign: "center",
        padding: "25px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "35px",
            fontFamily: "Cinzel",
            lineHeight: "106px",
            letterSpacing: "5.6px",
          }}
        >
          Explore o Futuro da Tecnologia com a Square
        </Typography>
        <Box sx={{marginBottom: '3rem'}}>
          <img
            src={PC}
            alt="Imagem de um PC"
            className="img"
            width={"1300px"}
            height={"700px"}
          />
        </Box>
      </Box>

      <Box sx={{border: '1px solid red'}}>
        <Typography sx={{ fontSize: "25px", fontFamily: "Montserrat", lineHeight: '42px', letterSpacing: '0.721px' }}>
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
