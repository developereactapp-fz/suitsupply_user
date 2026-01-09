import { Box, Container, Paper } from "@mui/material";
import Header from "../components/Header";

export default function AuthLayout({
  leftContent,
  children,
  borderGradient,
  bgGradient,
}) {
  return (
    <>
      <Header />

      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          background: bgGradient,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ py: { xs: 2, sm: 4, md: 6 } }}   // ✅ MOBILE SPACING FIX
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 420px" },
              gap: { xs: 3, md: 6 },
              alignItems: "center",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {leftContent}
            </Box>

            <Paper
              elevation={14}
              sx={{
                p: { xs: 2.5, sm: 3, md: 4 }, // ✅ MOBILE SPACING FIX
                borderRadius: 4,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 4,
                  background: borderGradient,
                }}
              />
              {children}
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
