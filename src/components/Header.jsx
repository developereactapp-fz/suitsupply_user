import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}
    >
      <Toolbar sx={{ gap: 3 }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{ display: "flex", alignItems: "center", gap: 2, textDecoration: "none" }}
        >
          <img src={logo} alt="Logo" style={{ height: 36 }} />
          <Typography fontWeight={700} color="text.primary">
            SUITSUPPLY
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <SearchBar />
        </Box>

        <Box
          sx={{
            ml: "auto",
            display: { xs: "none", md: "flex" },
            gap: 3,
          }}
        >
          {["Home", "Customize", "Shirts", "Suits"].map((item) => (
            <Typography key={item} sx={{ cursor: "pointer" }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
