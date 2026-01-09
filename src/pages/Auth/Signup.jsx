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
import AuthLayout from "../../layouts/AuthLayout";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  terms: yup.boolean().oneOf([true], "You must accept terms"),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <AuthLayout
      borderGradient="linear-gradient(90deg,#9333ea,#ec4899)"
      leftContent={
        <>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 2,
              py: 0.75,
              mb: 3,
              borderRadius: 999,
              background: "rgba(147,51,234,0.1)",
              color: "#9333ea",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            ✨ Join Our Community
          </Box>

          <Typography
            variant="h3"
            sx={{ mb: 2, lineHeight: 1.2 }}
          >
            Start Your Journey to{" "}
            <span style={{ color: "#7c3aed" }}>
              Perfect Style
            </span>
          </Typography>

          <Typography
            sx={{
              maxWidth: 420,
              color: "#64748b",
              fontSize: 15,
            }}
          >
            Create your account and unlock access to premium
            suit customization, expert tailoring, and exclusive
            designs.
          </Typography>

          {/* Feature cards */}
          <Box sx={{ mt: 4, display: "grid", gap: 2 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                background: "#ffffff",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <Typography fontWeight={600}>
                🎯 Personalized Experience
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                Save measurements and preferences
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                background: "#ffffff",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.06)",
              }}
            >
              <Typography fontWeight={600}>
                🏆 Exclusive Access
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                Premium fabrics and early releases
              </Typography>
            </Box>
          </Box>
        </>
      }
    >
      {/* Right Card Content */}
      <Typography
        variant="h5"
        sx={{ mb: 0.5, fontWeight: 600 }}
      >
        Create Account
      </Typography>

      <Typography
        sx={{
          mb: 3,
          fontSize: 14,
          color: "#64748b",
        }}
      >
        Fill in your details to get started
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="First Name"
            fullWidth
            {...register("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            label="Last Name"
            fullWidth
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Box>

        <TextField
          label="Email Address"
          fullWidth
          sx={{ mt: 2 }}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          sx={{ mt: 2 }}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          sx={{ mt: 2 }}
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        <FormControlLabel
          sx={{ mt: 2 }}
          control={<Checkbox {...register("terms")} />}
          label={
            <Typography fontSize={13}>
              I agree to the{" "}
              <Link href="#">Terms and Conditions</Link>{" "}
              and{" "}
              <Link href="#">Privacy Policy</Link>
            </Typography>
          }
        />

        {errors.terms && (
          <Typography
            fontSize={12}
            color="error"
            sx={{ mt: 0.5 }}
          >
            {errors.terms.message}
          </Typography>
        )}

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
          Create Account
        </Button>

        <Typography
          align="center"
          sx={{ mt: 2, fontSize: 14 }}
        >
          Already have an account?{" "}
          <Link href="/">Sign in</Link>
        </Typography>

        <Divider sx={{ my: 3 }}>OR SIGN UP WITH</Divider>

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
