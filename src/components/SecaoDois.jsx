import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Gamer from "../assets/images/pc.jpg";

function SecaoDois() {
  return (
    <Box
      sx={{
        border: "1px solid green",
        height: "200vh",
        width: "80%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack sx={{border: '1px solid red', marginBottom: '3rem', width: '85%', height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <Box>
            <Typography>
            A Square lidera a revolução tecnológica, trazendo o futuro até você hoje
            </Typography>
        </Box>
        <Box>
            sdkjdjadjajdf
        </Box>
      </Stack>
      <Box>dsfsdfsdfsdfsdf</Box>
      <Box>dsfsdfsdfsdfsdf</Box>
      <Box>dsfsdfsdfsdfsdf</Box>
    </Box>
  );
}

export default SecaoDois;
