import { useTheme } from "@mui/material/styles";
import {
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";



import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../../parts/Sidebar";
import Post from "../../components/post/Post";

const root = {
  // bgcolor: "Gray",
  margin: "1rem auto",
  maxWidth: "90%",
};
const main = {
  //  bgcolor: "lightblue",
  padding: "1rem",
};
const sideBar = {
  //  bgcolor: "pink",
  padding: "1rem",
};
const rootSmall = {
  margin: "3rem auto",
  //  bgcolor: "Gray",
  maxWidth: "90%",
};

function SinglePost() {
  const { id } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [post, setPost] = useState(undefined);
  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const fetchPost = async () => {
      const response = await axios.get(URL);
      setPost(response.data);
    };
    setTimeout(() => {
      fetchPost();
    }, 2000);
  }, []);
  console.log(post);
  return (
    <>
      <Grid
        container
        sx={matches ? rootSmall : root}
        justifyContent="space-between"
        direction={matches ? "column" : "row"}
      >
        <Grid item xs={7} sx={main} columnSpacing={1}>
          {post ? (
            <>
              <Post id={post.id} title={post.title} content={post.body}/>
            </>
          ) : (
            <>
              <Typography variant="h3">post is loading</Typography>
              <CircularProgress size='5rem'/>
            </>
          )}
        </Grid>
        <Grid item xs={4} sx={sideBar}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
}

export default SinglePost;
