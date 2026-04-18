import { useState } from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Banner() {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity="info"
        action={
          <IconButton size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2, borderRadius: 2 }}
      >
        First message will trigger backend service and it may take 1 min to start , please wait !
      </Alert>
    </Collapse>
  );
}