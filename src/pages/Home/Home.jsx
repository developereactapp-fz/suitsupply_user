import { Box, Typography, Button } from "@mui/material";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h4">Welcome to SuitSupply</Typography>
          <Typography mt={1}>
            Login successful.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => navigate("/")}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
}
