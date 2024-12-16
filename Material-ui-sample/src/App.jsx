import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import Posts from "./components/Posts";
import { featuredPosts, sidebar } from "./data/data";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {featuredPosts.map((post) => (
                <Posts key={post.title} post={post} />
              ))}
            </Grid>
          </Box>
          <br />
          <Box>
            <Grid container spacing={4}>
              <Main title={"This is main section"} />
              <Sidebar props={sidebar} />
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
