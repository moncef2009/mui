import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Controles from "./Controles";

function Post(props) {
  const { title, content, id, featured, snip } = props;
  return (
    <>
      <Card raised className="root">
        <Controles />
        <CardContent>
          <Typography variant="h6" component="h3">
            {snip ? title.slice(0, 15) : title}
          </Typography>
          <Typography variant="body1" component="p">
            {snip ? content.slice(0, 70) : content}
          </Typography>
        </CardContent>
        {snip && (
          <CardActions>
            <Button
              variant="contained"
              fullWidth
              LinkComponent={Link}
              to={`/post/${id}`}
            >
              Read More
            </Button>
          </CardActions>
        )}
      </Card>
    </>
  );
}

export default Post;
