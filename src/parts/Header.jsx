import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";
import SSwitch from "../components/shaired/Switch";
import { PostAdd } from "@mui/icons-material";

function Header(props) {
  const { checked, onChange } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar position="sticky" color="secondary" sx={{ mb: "1rem" }}>
        <Toolbar>
          <Grid
            container
            direction={matches ? "column" : "row"}
            justifyContent={matches ? "center" : "space-around"}
            alignItems="center"
          >
            <Grid item container xs="auto">
              <Grid item>
                <IconButton>
                  <AppsIcon color="inherit" />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="h1" sx={{ mt: 1 }}>
                  MO Blog
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs="auto">
              <Grid item>
                <IconButton LinkComponent={Link} to="/add-post">
                  <PostAdd />
                </IconButton>
              </Grid>
              <Grid item>
                <Button color="inherit" LinkComponent={Link} to="/about">
                  About
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" LinkComponent={Link} to="/">
                  Home
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit">Post</Button>
              </Grid>
              <Grid item>
                <Button color="inherit">Contact</Button>
              </Grid>
              <Grid item>
                <SSwitch checked={checked} onChange={onChange} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
