import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PostProvider } from "./contexts/PostContext";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <PostProvider>
                    <Router />
                </PostProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
