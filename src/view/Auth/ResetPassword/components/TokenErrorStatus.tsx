import { useAltaIntl } from "@shared/hook/useTranslate";
import { useNavigate } from "react-router-dom";

const TokenErrorStatus = () => {
    const navigate = useNavigate();
    const { formatMessage } = useAltaIntl();
    return (
        <div className="main-form auth-form">
            <div className="error-token__box">
                <h3 className="main-title">{formatMessage("reset.password.title.error")}</h3>
                <p>{formatMessage("reset.password.notification")}</p>
                <div className="button-center__box">
                    <button onClick={() => navigate("/login")} className="normal-button">
                        {formatMessage("common.button.return")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TokenErrorStatus;
