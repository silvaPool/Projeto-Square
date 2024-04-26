import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        gap: '5px',
        padding: '10px',
        marginTop: '50px',
        backgroundColor: "#070c0f",
      }}
    >
      <Typography sx={{marginBottom: '5px', fontFamily: "Montserrat"}}>Entre em contato conosco:</Typography>
      <Typography sx={{fontFamily: "Montserrat"}}>E-mail: square@square.com</Typography>
      <Typography sx={{fontFamily: "Montserrat"}}>Whatsapp: (21) 98765-4321</Typography>
      <Typography sx={{fontFamily: "Montserrat"}}>Instagram:@square.com LinkedIn: Square</Typography>
      <Typography sx={{fontFamily: "Montserrat"}}>LinkedIn: Square</Typography>
    </Box>
  );
}

export default Footer;
