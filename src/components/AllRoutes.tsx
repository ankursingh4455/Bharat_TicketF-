import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Auth from "./Auth";
import NotFound from "./NotFound";
import AddTicket from "../pages/AddTicket";

export default function Routes() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "auth",
            element: <Auth />
        },
        {
            path: "add-ticket",
            element: <AddTicket />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}