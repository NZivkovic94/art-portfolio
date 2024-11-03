import { StrictMode } from "react";
import App from "./pages/App";

export default function Root(){
    return (
        <StrictMode>
            <App />
        </StrictMode>
    );
}