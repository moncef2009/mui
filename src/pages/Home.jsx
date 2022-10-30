import { useTheme } from "@mui/material/styles";
import {
  CircularProgress,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Post from "../components/post/Post";
import Sidebar from "../parts/Sidebar";
import Featured from "../components/post/Featured";
import { useEffect, useState } from "react";
import axios from "axios";

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

function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [posts, setPosts] = useState([]);
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/?_page=${page}`;
    const fetchPosts = async () => {
      const response = await axios.get(URL);
      setPosts(response.data);
    };
    setTimeout(() => {
      fetchPosts();
    }, 2000);

    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [page]);

  console.log(page);
  return (
    <>
      <Featured></Featured>
      <Grid
        container
        sx={matches ? rootSmall : root}
        justifyContent="space-between"
        direction={matches ? "column" : "row"}
      >
        <Grid
          item
          xs={7}
          sx={main}
          container
          columnSpacing={1}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Posts
            </Typography>
          </Grid>
          {posts && posts.length > 0 ? (
            posts.map((post) => {
              return (
                <Grid item md={6}>
                  <Post title={post.title} content={post.body} id={post.id} snip />
                </Grid>
              );
            })
          ) : (
            <CircularProgress determinate value={progress} size="5rem" />
          )}
          <Grid item xs={12}>
            <Pagination
              count={10}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={sideBar}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
