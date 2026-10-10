import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const myElement = (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>Tariq</td>
      </tr>
      <tr>
        <td>Javed</td>
      </tr>
    </tbody>
  </table>
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
createRoot(document.getElementById("table")).render(
  myElement
)
console.log(document.getElementById("table"));

