import { ThemeProvider } from "@emotion/react";
import { createTheme, Paper } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";

import Home from "./pages/Home";

import SinglePage from "./pages/templates/SinglePage";
import SinglePost from "./pages/templates/SinglePost";
import Header from "./parts/Header";
import AddPost from "./pages/forms/AddPost";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: green[600],
      },
      secondary: {
        main: brown[600],
      },
      mode: darkMode ? "dark" : "light",
    },
  });
  const handleChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Paper sx={{ maxWidth: "90%", mx: "auto", my: "2rem", p: 2 }}>
          <Header checked={darkMode} onChange={handleChange} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={<SinglePage title="About" content="blabla" />}
            />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/add-post" element={<AddPost />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
