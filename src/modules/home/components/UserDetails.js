import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  const { user } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        User Details
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ width: "800px", margin: "0 auto" }}
      >
        <DialogTitle>{`${user.firstName} ${user.lastName}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="row">
              <div className="col-12 col-sm-6">
                <p>Họ: {user.firstName}</p>
                <p>Tên: {user.lastName}</p>
                <p>Công ty: {user.company}</p>
                <p>sđt: {user.phoneNumber}</p>
                <p>email: {user.email}</p>
              </div>
              <div className="col-12 col-sm-6">
                <p>giới tính: {user.gender}</p>
                <p>thanh toán: {user.payMode}</p>
                <p>số thẻ: {user.cardNumber}</p>
                <p>ngày hết hạn: {user.expiration}</p>
                <p>CVN: {user.cvn}</p>
                <p>Donate: {user.donate}</p>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
