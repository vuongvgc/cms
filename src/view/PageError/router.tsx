import { IRouter } from "@routers/interface";
import PageError from "@view/PageError";

export const routerPageError: IRouter = {
    path: "*",
    masterLayout: false,
    loader: import("@view/PageError"),
    Component: <PageError />,
};
