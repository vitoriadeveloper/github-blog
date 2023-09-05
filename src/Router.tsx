import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:postId" element={<About />} />
        </Routes>
    );
}
