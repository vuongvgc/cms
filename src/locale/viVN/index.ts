import viVN from "antd/lib/locale/vi_VN";

import auth from "./auth";
import common from "./common";
import Form from "./form";
import pageError from "./pageError";
import roles from "./roles";
import server from "./server";
import order from "./order";
import homepage from "./hompage";

export default {
    ...viVN,
    ...common,
    ...server,
    ...auth,
    ...pageError,
    ...roles,
    ...order,
    ...homepage,
    Form,
};
