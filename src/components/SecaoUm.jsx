import { Box, Stack, Typography } from "@mui/material";

function SecaoUm() {
  return (
    <Stack spacing={2} sx={{ border: "1px solid red", height: "100vh" }}>
      <Box>
        <Typography>Explore o Futuro da Tecnologia com a Square</Typography>

        <Typography>
            Imagem aqui
        </Typography>
      </Box>

      <Box>
        Texto aqui
      </Box>
    </Stack>
  );
}

export default SecaoUm;
