import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { MaterialDesignContent } from "notistack";
import { store } from "./store/index.js";
import { styled } from "@mui/material";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-default": {
    backgroundColor: "#0B0023",
  },
}));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        Components={{ default: StyledMaterialDesignContent }}
        autoHideDuration={2000}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>
);
