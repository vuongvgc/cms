import { useAltaIntl } from "@shared/hook/useTranslate";
import { Typography } from "antd";
import lodash from "lodash";
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import { ITitle } from "../inteface";

const TitleComponent: React.FC<ITitle> = (props) => {
    const { formatMessage } = useAltaIntl();
    const tooltip: string | undefined = React.useMemo<string | undefined>(() => {
        if (!lodash.isEmpty(props.tooltip)) {
            return formatMessage(props.tooltip || "");
        }
        if (typeof props.title === "string") {
            return formatMessage(props.title);
        }
        return undefined;
    }, [props.title, formatMessage]);
    return (
        <Typography.Title level={props.level} title={tooltip}>
            <FormattedMessage id={String(props.title)} />
        </Typography.Title>
    );
};

export default memo(TitleComponent);
