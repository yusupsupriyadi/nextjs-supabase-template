"use client";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Login() {
	return (
		<Container
			component='main'
			maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography
					component='h1'
					variant='h5'>
					Sign in
				</Typography>
				<Box
					component='form'
					action='/auth/login'
					method='post'
					noValidate
					sx={{ mt: 1 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>
					<FormControlLabel
						control={
							<Checkbox
								value='remember'
								color='primary'
							/>
						}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3 }}>
						Login
					</Button>
					<Button
						type='submit'
						formAction='/auth/sign-up'
						fullWidth
						variant='contained'
						sx={{ mt: 1, mb: 2 }}>
						Sign Up
					</Button>
					<Button
						type='submit'
						formAction='/auth/logout'
						fullWidth
						variant='contained'
						sx={{ mt: 1, mb: 2 }}>
						Logout
					</Button>
					<Grid container>
						<Grid
							item
							xs>
							<Link
								href='#'
								variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								href='#'
								variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
