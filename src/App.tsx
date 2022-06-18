import { FC } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./AppRouter";

const defaultTheme = createTheme();

const App: FC<{}> = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
