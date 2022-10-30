import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

function Dialogg(props) {
  const { open, handleClose } = props;
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete this item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item?!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirm</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        <TextField/>
      </Dialog>
    </>
  );
}

export default Dialogg;
