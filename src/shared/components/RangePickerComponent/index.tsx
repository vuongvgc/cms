import * as Unicons from '@iconscout/react-unicons';
import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
export interface IRangerPicker {
  value?: any;
  onChange?: (value: any) => void;
  defaultValue?: any;
  textLabel?: string;
  className?: string;
}

const RangePickerComponent = (props: IRangerPicker) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = (pValue: any) => {
    setValue(pValue);
    if (props.onChange) {
      props.onChange(pValue);
    }
  };

  return (
    <DatePicker.RangePicker
      className={props.className || 'alta-calendar'}
      defaultValue={props?.defaultValue}
      id={props.textLabel}
      onChange={onChange}
      // onChange={(value) => props?.onChange(value)}
      value={value}
      format='DD/MM/YYYY'
      showTime
      suffixIcon={<Unicons.UilCalendarAlt size='27' className='icon-feather' />}
    />
  );
};

export default React.memo(RangePickerComponent);
