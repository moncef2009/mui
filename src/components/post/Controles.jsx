import {  Delete, Edit } from "@mui/icons-material";
import { Collapse, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import UpdatePostF from "../forms/UpdatePostF";
import Dialogg from "../shaired/Dialog";

function Controles() {
  const [iconsDis, setIconsDis] = useState(false);
  const [open, setOpen] = useState(false);
  const [openU, setOpenU] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenU = () => {
    setOpenU(true);
  };

  const handleCloseU = () => {
    setOpenU(false);
  };

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <IconButton
            color="primary"
            onClick={() => {
              setIconsDis(!iconsDis);
            }}
          >
            <Edit />
          </IconButton>
        </Grid>
        <Collapse in={iconsDis}>
          <Grid item>
            <IconButton color="info" onClick={handleOpenU}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={handleOpen}>
              <Delete />
            </IconButton>
          </Grid>
        </Collapse>
      </Grid>
      <Dialogg open={open} handleClose={handleClose} />
      <UpdatePostF open={openU} close={handleCloseU} />
    </>
  );
}

export default Controles;
