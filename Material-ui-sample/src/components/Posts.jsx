import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { posts } from "../data/data";

function Posts({ post }) {
  return (
    <Grid item size={{ xs: 12, md: 6 }}>
      <CardActionArea component="a" href="#">
        <Card>
          <div sx={{ flex: 1 }}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1">{post.description}</Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default Posts;
