import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Main } from "./pages/Main";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Main />
        </ThemeProvider>
    );
}

export default App;
