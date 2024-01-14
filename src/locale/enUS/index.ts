import enUS from "antd/lib/locale/en_US";

import roles from "@locale/viVN/roles";

import auth from "./auth";
import common from "./common";
import pageError from "./pageError";
import server from "./server";
import order from "./order";

export default {
    ...enUS,
    ...common,
    ...server,
    ...auth,
    ...pageError,
    ...roles,
    ...order,
};
