import { Container, createTheme, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import Posts from "./components/Posts";
import { featuredPosts } from "./data/data";

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
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <Posts key={post.title} post={post} />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
