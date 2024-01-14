import { Tooltip } from 'antd';
import { Info } from 'react-feather';
import { useIntl } from 'react-intl';
interface IProps {
  onClick?: () => void;
  disable?: boolean;
}
const InformationIconComponent = (props: IProps) => {
  const intl = useIntl();
  const onClick = (e: any) => {
    if (props?.onClick) {
      props?.onClick();
    }
    e.stopPropagation();
  };

  if (props?.disable) {
    return <></>;
  }
  return (
    <Tooltip title={intl.formatMessage({ id: 'common.info' })}>
      <Info
        className={`icon-edit ${props?.disable ? 'icon-disable' : ''}`}
        size={19}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default InformationIconComponent;
