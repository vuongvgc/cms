import "@styles/styles.scss";

import { ConfigProvider } from "antd";
import lodash from "lodash";
import React, { memo, Suspense, useEffect, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import locale from "@locale/index";
import { TokenSelector } from "@modules/authentication/profileStore";
import { LanguageSelector } from "@modules/setting/settingStore";
import PrivatePage from "@routers/component/PrivatePage";
import "@shared/assets/css/bootstrap.min.css";
import PublicPage from "./routers/component/PublicPage";

const MainView = memo(({ statusLogin }: { statusLogin: boolean }) => {
    return (
        <>
            {statusLogin ? (
                <Suspense fallback={<></>}>
                    <PrivatePage />
                </Suspense>
            ) : (
                <Suspense fallback={<></>}>
                    <PublicPage />
                </Suspense>
            )}
        </>
    );
});

// For Test
const App: React.FC = () => {
    const { token } = useSelector(TokenSelector);
    const { language } = useSelector(LanguageSelector);
    const navigate = useNavigate();
    const memoLangData = useMemo(() => {
        return locale[language];
    }, [language]);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token]);

    return (
        <IntlProvider locale={language} messages={memoLangData}>
            <ConfigProvider locale={memoLangData}>
                <MainView statusLogin={!lodash.isEmpty(token)} />
            </ConfigProvider>
        </IntlProvider>
    );
};

export default App;
