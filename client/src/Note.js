<ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a post
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="title"
              autoComplete="title"
              autoFocus
              placeholder="title"
              value={inputs.title}
              onChange={handleChange}
              name="title"
              type={"text"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="description"
              autoComplete="description"
              autoFocus
              placeholder="description"
              value={inputs.description}
              onChange={handleChange}
              name="description"
              type={"text"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="image"
              label="image"
              autoComplete="image"
              autoFocus
              placeholder="image"
              value={inputs.image}
              onChange={handleChange}
              name="image"
              type={"text"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>