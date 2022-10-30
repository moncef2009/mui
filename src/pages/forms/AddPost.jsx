import { Divider, Paper, Typography } from "@mui/material";
import React from "react";
import AddPostF from "../../components/forms/AddPostF";

function AddPost() {
  console.log(1);
  return (
    <Paper sx={{ maxWidth: "80%", mx: "auto", p: 2 }}>
      <Typography variant="h4" component="h1">
        Add Post
      </Typography>
      <Typography variant="body1">
        Add your new post using the form below.
      </Typography>
      <Divider sx={{ my: 3 }}></Divider>
      <AddPostF/>
    </Paper>
  );
}

export default AddPost;
