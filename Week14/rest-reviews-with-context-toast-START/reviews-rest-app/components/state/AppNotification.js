import { useState, createContext, useContext } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const AppNotificationContext = createContext({});

export function useNotification() {
  const context = useContext(AppNotificationContext);
  if (!context) {
    throw new Error("useContext must be used within an app notification");
  }
  return context;
}

export default function AppNotification(props) {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const showNotification = (msg, sev) => {
    setSeverity(sev);
    setMessage(msg);
    setOpen(true);
  };

  return (
    <AppNotificationContext.Provider value={{ showNotification }}>
      {props.children}
      <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
        <MuiAlert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          elevation={6}
          sx={{ width: "100%" }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </AppNotificationContext.Provider>
  );
}
