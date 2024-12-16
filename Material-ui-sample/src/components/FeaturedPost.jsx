import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

function FeaturedPost() {
  

  return (
    <Card
      sx={{
        backgroundImage: `url("https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white", // Ensures text stands out
        padding: "35px 25px", // Adds padding
      }}
    >
      <CardContent sx={{ color: "white" }}>
        <Typography
          sx={{ fontSize: 40, fontFamily: "Montserrat" }}
          gutterBottom
        >
          Technology news is concise way!
        </Typography>
        <Typography variant="h5" component="h2">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" sx={{ color: "#90caf9", fontWeight: 700 }}>
          Read More..
        </Button>
      </CardActions>
    </Card>
  );
}

export default FeaturedPost;
