import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

/* ---------------- VALIDATION SCHEMA ---------------- */

const schema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
});

/* ---------------- COMPONENT ---------------- */

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    // after successful auth
    navigate("/home");
  };

  return (
    <AuthLayout
      borderGradient="linear-gradient(90deg,#2563eb,#9333ea,#ec4899)"
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
              background: "rgba(37,99,235,0.1)",
              color: "#2563eb",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            ✨ Premium Suit Customization
          </Box>

          {/* Heading */}
          <Typography
            variant="h3"
            sx={{ mb: 2, lineHeight: 1.2 }}
          >
            Welcome Back to Your{" "}
            <span style={{ color: "#7c3aed" }}>
              Custom Wardrobe
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
            Sign in to continue creating your perfect suit.
            Access your saved designs, measurements, and
            preferences.
          </Typography>

          {/* Feature cards */}
          <Box sx={{ mt: 4, display: "grid", gap: 2 }}>
            {[
              { title: "Custom Suits", icon: "🧥" },
              { title: "Tailored Fit", icon: "✂️" },
              { title: "Premium Fabrics", icon: "🎨" },
            ].map((item) => (
              <Box
                key={item.title}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  background: "#ffffff",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Typography>{item.icon}</Typography>
                <Typography fontWeight={500}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      }
    >
      {/* ---------------- RIGHT CARD ---------------- */}

      <Typography
        variant="h5"
        sx={{ mb: 0.5, fontWeight: 600 }}
      >
        Sign In
      </Typography>

      <Typography
        sx={{
          mb: 3,
          fontSize: 14,
          color: "#64748b",
        }}
      >
        Enter your credentials to access your account
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <TextField
          label="Email Address"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* Password */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          sx={{ mt: 2 }}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        {/* Remember / Forgot */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography fontSize={13}>
                Remember me
              </Typography>
            }
          />

          <Link
            href="/reset-password"
            sx={{ fontSize: 13 }}
          >
            Forgot Password?
          </Link>
        </Box>

        {/* Submit */}
        <Button
          type="submit"
          fullWidth
          sx={{
            mt: 3,
            py: 1.4,
            borderRadius: 2,
            // background:
            //   "linear-gradient(90deg,#0f172a,#1e293b)",
                  background: "linear-gradient(90deg, #2563eb, #9333ea, #ec4899)",
            boxShadow:
              "0 12px 25px rgba(15,23,42,0.35)",
          }}
          variant="contained"
        >
          Sign In
        </Button>

        {/* Signup */}
        <Typography
          align="center"
          sx={{ mt: 2, fontSize: 14 }}
        >
          Don’t have an account?{" "}
          <Link href="/signup">Create an account</Link>
        </Typography>

        <Divider sx={{ my: 3 }}>OR CONTINUE WITH</Divider>

        {/* Social */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button fullWidth variant="outlined">
            Google
          </Button>
          <Button fullWidth variant="outlined">
            Facebook
          </Button>
        </Box>
      </Box>
    </AuthLayout>
  );
}
