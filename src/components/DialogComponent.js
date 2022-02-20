import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const DialogComponent = ({ showDialog, handleCloseDialog, setInputSubItemValue, handleSubItemDialog }) => {
  return (
    <div>
      <Dialog
        open={showDialog}
        maxWidth={"md"}
        fullWidth={true}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Add Sub Item</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" fullWidth variant="outlined" onChange={(e) => setInputSubItemValue(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubItemDialog}
            color="primary"
            variant="outlined"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
