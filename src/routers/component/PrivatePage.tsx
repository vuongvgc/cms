import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import config from "@config/index";
import DefaultLayout from "@layout/index";
import authenticationPresenter from "@modules/authentication/presenter";
import { TokenSelector } from "@modules/authentication/profileStore";

import { privateRouter } from "../index";
import ShowRouter from "./ShowRouter";
import { Routes } from "react-router-dom";

const PrivatePage: React.FC = () => {
    const { token } = useSelector(TokenSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
            authenticationPresenter.getProfile();
        } else {
            window.location.href = config.LOGIN_PAGE;
        }
    }, [token, dispatch]);

    return <Routes>{ShowRouter({ routers: privateRouter, MasterLayout: DefaultLayout })}</Routes>;
};
export default PrivatePage;
