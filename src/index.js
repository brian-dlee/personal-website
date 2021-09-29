import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as TerminalProvider } from './components/context/Terminal'
import reportWebVitals from "./reportWebVitals";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TerminalProvider>
      <App />
    </TerminalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (navigator.serviceWorker) {
  // Uninstall all previously installed service workers
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration
        .unregister()
        .then(() => {
          console.log('Service worker removal succeeded:', registration.scope);
        })
        .catch((error) => {
          console.error('Service worker removal failed:', registration.scope);
          console.error(error);
        });
    });
  });
}

reportWebVitals();
