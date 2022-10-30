import { Button, Dialog, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import validate from "../../utils/validations/post";

function UpdatePostF(props) {
  const { open, close } = props;
  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = values.title.trim();
    const body = values.body.trim();
    const validationErrors = validate(title, body);
    setError(validationErrors);
    console.log(validationErrors);
    setValues({
      title: "",
      body: "",
    });
    validationErrors.title === "" && validationErrors.body === ""
      ? close()
      : console.log("maha");
  };
  //   error.title = "Error";

  return (
    <Dialog open={open} onClose={close} fullWidth>
      <Paper sx={{p:2}}>
        <Typography variant="h3">Update this Post</Typography>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Title"
            fullWidth
            value={values.title}
            name="title"
            onChange={handleChange}
            error={!!error.title}
            helperText={
              error.title ? error.title : "Post Title must contain 7-70 chars"
            }
          />
          <TextField
            variant="outlined"
            label="Post"
            fullWidth
            multiline
            value={values.body}
            rows={6}
            name="body"
            onChange={handleChange}
            error={!!error.body}
            helperText={
              error.body ? error.body : "Post must contain 7-2000 chars"
            }
          />
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Dialog>
  );
}

export default UpdatePostF;
