import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function SinglePage(props) {
  const { title, content } = props;
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {content}
      </Typography>
    </Box>
  );
}

export default SinglePage;
