import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/entry" element={<>entry</>} />
                <Route
                    path="/*"
                    element={
                        <AuthGuard fallback={<LoginPage />}>
                            <LandingPage />
                        </AuthGuard>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
