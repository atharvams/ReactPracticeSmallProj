import Grid from "@mui/material/Grid2";
import React from "react";
import { posts } from "../data/data";
import Markdown from "markdown-to-jsx";
import { Divider, Typography } from "@mui/material";

function Main({title}) {
  return (
    <Grid item size={{ xs: 12, md: 8 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown key={post.body}>{post.body}</Markdown>
      ))}
    </Grid>
  );
}

export default Main;
