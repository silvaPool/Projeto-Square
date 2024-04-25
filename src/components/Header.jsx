import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/logoalternativo.png";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ textAlign: "center", padding: '5px', background: '#0b1419' }}>
        <Box>
          <img src={Logo} alt="Logo do site" width={"90px"} />
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;
