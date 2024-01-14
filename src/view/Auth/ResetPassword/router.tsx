import { IRouter } from "@routers/interface";
import ResetPassword from "./index";

export const routerResetPassword: IRouter = {
    path: "/reset-password/:token",
    loader: import("./index"),
    exact: true,
    Component: <ResetPassword />,
};
