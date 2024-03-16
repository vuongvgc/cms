import ISelect from '@core/select';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import CircleLabel from '@shared/components/CircleLabel';
import { DeleteConfirm } from '@shared/components/ConfirmDelete';
import EditIconComponent from '@shared/components/EditIconComponent';
import InformationIconComponent from '@shared/components/InformationIcon';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SearchComponent from '@shared/components/SearchComponent/SearchComponent';
import SelectAndLabelComponent, { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';
import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';
import { useCustomIntl } from '@shared/hook/useTranslate';
import { Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Key, useEffect, useState } from 'react';
import ModalComponents from './component/MainModal/ModalOrder';
import dataTable from './data.json';
import { IModal } from './interface';
import { routerOrder } from './router';
import "./style.scss";


const Order = () => {
  const { formatMessage } = useCustomIntl();
  const table = useTable();

  const [modal, setModal] = useState<IModal>({
    isVisible: false,
    dataEdit: null,
    isReadOnly: false,
  });
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilterOption] = useState<any>();

  const idChooses = 'id'; //get your id here. Ex: accountId, userId,...
  const columns: ColumnsType = [
    {
      dataIndex: 'tagName',
    },
    {
      dataIndex: 'lastUpdate',
    },
    {
      dataIndex: 'group',
    },
    {
      dataIndex: 'group',
      render: () => <CircleLabel text={formatMessage('common.statusActive')} colorCode='blue'/>,
    },
    {
      dataIndex: 'action',
      render: (_item:any, record: any) => (
        <Space>
          <EditIconComponent
            onClick={() => {
              setModal({
                dataEdit: record,
                isVisible: true,
                isReadOnly: false,
              });
            }}
          />
          <InformationIconComponent
            onClick={() => {
              setModal({
                dataEdit: record,
                isVisible: true,
                isReadOnly: true,
              });
            }}
          />
        </Space>
      ),
    },
  ];

  const handleRefresh = () => {
    table.fetchData({ option: { search: search, filter: { ...filter } } });
    setSelectedRowKeys([]);
  };
 
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add', handleAction: () => {
        setModal({ dataEdit: null, isVisible: true });
      },
    },
    { iconType: 'share' },
    {
      iconType: 'delete',
      disable: selectedRowKeys?.length === 0,
      handleAction: () => {
        DeleteConfirm({
          content: formatMessage('common.delete'),
          handleOk: () => {
            // call Api Delete here
            handleRefresh();
          },
          handleCancel: () => { },
        });
      },
    },
  ];
  const dataString: ISelect[] = [{ label: 'common.all', value: undefined }];
  const arraySelectFilter: ISelectAndLabel[] = [
    { textLabel: 'Lĩnh vực', dataString },
    { textLabel: 'Địa bàn quản lý', dataString },
    { textLabel: 'Trạng thái', dataString },
  ];

  useEffect(() => {
    table.fetchData({ option: { search: search, filter: { ...filter } } });
  }, [search, filter, table]);

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };

  const onChangeSelectStatus = (name: string | undefined) => (status: any) => {
    if (name && status) {
      setFilterOption((pre: any) => ({ ...pre, [name]: status }));
    }
  };
  return (
    <div className='order'>
        <MainTitleComponent breadcrumbs={routerOrder } />
        <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-end  gap-4 mb-3 ">
                <div className="flex justify-between gap-4 items-end ">
                    {arraySelectFilter.map((item, index) => (
                        <SelectAndLabelComponent
                            onChange={onChangeSelectStatus(item.name)}
                            key={index}
                            dataString={item.dataString}
                            textLabel={item.textLabel}
                        />
                    ))}
                </div>
                <div className="flex flex-col">
                    <div className="font-normal text-2xl">
                        {formatMessage("common.keyword")}
                    </div>
                    <SearchComponent onSearch={handleSearch} placeholder={"common.keyword"} />
                </div>
            </div>
            <TableComponent
                // apiServices={}
                defaultOption={filter}
                translateFirstKey='order'
                rowKey={(res) => res[idChooses]}
                register={table}
                columns={columns}
                onRowSelect={setSelectedRowKeys}
                dataSource={dataTable}
                disableFirstCallApi={true}
            />
        </div>
        <RightMenu arrayAction={arrayAction} />
        <ModalComponents modal={modal} handleRefresh={handleRefresh} setModal={setModal} />
    </div>
);
};

export default Order;

