import ISelect from "@core/select";

export const LANGUAGE: ISelect<string>[] = [
    { value: "en", label: "ENG" },
    { value: "vi", label: "VNM" },
];

export const allSelect: ISelect = { label: "common.all", value: undefined };

const CONFIG = {
    API_BASE_URL: import.meta.env.API_BASE_URL || "http://localhost:3000/",
    GAME_URL: "http://localhost:3000/",
    APP_NAME: import.meta.env.APP_NAME || "CMS",
    LOGIN_PAGE: "/#/login",
    SSO_PAGE: "/#",
};

export default CONFIG;
