import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "../../layouts/AuthLayout";

/* ---------------- VALIDATION ---------------- */

const schema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
});

/* ---------------- COMPONENT ---------------- */

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Reset link sent to:", data.email);
  };

  return (
    <AuthLayout
      borderGradient="linear-gradient(90deg,#10b981,#06b6d4)"
      bgGradient="linear-gradient(135deg,#f0fdf4 0%,#ecfeff 100%)"
      leftContent={
        <>
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 2,
              py: 0.75,
              mb: 3,
              borderRadius: 999,
              background: "rgba(16,185,129,0.12)",
              color: "#059669",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            ✨ Account Recovery
          </Box>

          {/* Heading */}
          <Typography
            variant="h3"
            sx={{ mb: 2, lineHeight: 1.2 }}
          >
            Need Help{" "}
            <span style={{ color: "#10b981" }}>
              Getting Back In?
            </span>
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              maxWidth: 420,
              color: "#64748b",
              fontSize: 15,
            }}
          >
            Don’t worry! It happens to the best of us. We’ll
            help you reset your password and get you back to
            designing your perfect suit in no time.
          </Typography>

          {/* Steps */}
          <Box sx={{ mt: 4, display: "grid", gap: 2 }}>
            {[
              {
                step: "1",
                title: "Enter your email",
                desc: "We’ll send you a secure reset link",
              },
              {
                step: "2",
                title: "Check your inbox",
                desc: "Click the link in your email",
              },
              {
                step: "3",
                title: "Create new password",
                desc: "Set a strong, memorable password",
              },
            ].map((item) => (
              <Box
                key={item.step}
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    minWidth: 36,
                    height: 36,
                    borderRadius: 2,
                    background: "rgba(16,185,129,0.15)",
                    color: "#059669",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 600,
                  }}
                >
                  {item.step}
                </Box>
                <Box>
                  <Typography fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      }
    >
      {/* RIGHT CARD CONTENT */}

      <Typography
        variant="h5"
        sx={{ mb: 0.5, fontWeight: 600 }}
      >
        Reset Password
      </Typography>

      <Typography
        sx={{
          mb: 3,
          fontSize: 14,
          color: "#64748b",
        }}
      >
        Enter your email and we’ll send you a recovery link
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email Address"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <Button
          type="submit"
          fullWidth
          sx={{
            mt: 3,
            py: 1.4,
            borderRadius: 2,
            background:
              "linear-gradient(90deg,#10b981,#06b6d4)",
            boxShadow:
              "0 12px 25px rgba(16,185,129,0.35)",
          }}
          variant="contained"
        >
          Send Reset Link
        </Button>

        <Typography
          align="center"
          sx={{ mt: 2, fontSize: 14 }}
        >
          Remember your password?{" "}
          <Link href="/">Sign in</Link>
        </Typography>

        {/* Support box */}
        <Box
          sx={{
            mt: 4,
            p: 2,
            borderRadius: 3,
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.2)",
            fontSize: 13,
          }}
        >
          <strong>Need help?</strong> Contact our support team
          at{" "}
          <Link href="mailto:support@suitsupply.com">
            support@suitsupply.com
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
}
