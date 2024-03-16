import "./style.scss";

import { Space } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Key, useEffect, useState } from "react";

import ISelect from "@core/select";
import RightMenu, { IArrayAction } from "@layout/RightMenu";
import CircleLabel from "@shared/components/CircleLabel";
import { DeleteConfirm } from "@shared/components/ConfirmDelete";
import EditIconComponent from "@shared/components/EditIconComponent";
import InformationIconComponent from "@shared/components/InformationIcon";
import MainTitleComponent from "@shared/components/MainTitleComponent";
import SearchComponent from "@shared/components/SearchComponent/SearchComponent";
import SelectAndLabelComponent, {
    ISelectAndLabel,
} from "@shared/components/SelectAndLabelComponent";
import TableComponent from "@shared/components/TableComponent";
import useTable from "@shared/components/TableComponent/hook";
import { useCustomIntl } from "@shared/hook/useTranslate";

import ModalComponents from "./component/MainModal/ModalHomepage";
import { IModal } from "./interface";
import { routerHomepage } from "./router";

const dataTable = [
    {
        id: "1",
        lastUpdate: "2020-12-01T10:37:30.853Z",
        tagName: "Josie Kulas",
        group: "Mrs.",
        total: "11491379",
    },
    {
        id: "2",
        lastUpdate: "2020-11-30T04:28:31.107Z",
        tagName: "Eliezer Wiegand",
        group: "Mrs.",
        total: "57319485",
    },
    {
        id: "3",
        lastUpdate: "2021-02-09T07:11:07.536Z",
        tagName: "Garnet Shanahan",
        group: "Ms.",
        total: "22184241",
    },
    {
        id: "4",
        lastUpdate: "2020-09-23T19:11:37.563Z",
        tagName: "Eleonore Tillman Jr.",
        group: "Dr.",
        total: "02820888",
    },
    {
        id: "5",
        lastUpdate: "2020-12-29T02:31:21.340Z",
        tagName: "Manuela Hettinger III",
        group: "Dr.",
        total: "53105928",
    },
    {
        id: "6",
        lastUpdate: "2021-01-14T17:12:01.010Z",
        tagName: "Margot Harris",
        group: "Miss",
        total: "12964437",
    },
    {
        id: "7",
        lastUpdate: "2020-03-09T06:12:41.370Z",
        tagName: "Alexa Leuschke",
        group: "Miss",
        total: "85248423",
    },
    {
        id: "8",
        lastUpdate: "2020-06-12T04:38:36.929Z",
        tagName: "Dr. Dorcas Swift",
        group: "Ms.",
        total: "16840913",
    },
    {
        id: "9",
        lastUpdate: "2020-12-04T13:11:53.468Z",
        tagName: "Hector Kertzmann",
        group: "Mrs.",
        total: "99824908",
    },
    {
        id: "10",
        lastUpdate: "2021-02-15T06:28:09.669Z",
        tagName: "Collin Dicki",
        group: "Miss",
        total: "61396048",
    },
    {
        id: "11",
        lastUpdate: "2020-12-21T09:49:30.048Z",
        tagName: "Maximilian Homenick",
        group: "Ms.",
        total: "94016241",
    },
    {
        id: "12",
        lastUpdate: "2020-09-08T05:30:35.886Z",
        tagName: "Aurelia Sipes",
        group: "Miss",
        total: "93274839",
    },
    {
        id: "13",
        lastUpdate: "2020-09-24T20:43:17.190Z",
        tagName: "Amy Glover",
        group: "Mrs.",
        total: "59468625",
    },
    {
        id: "14",
        lastUpdate: "2021-01-03T21:19:44.468Z",
        tagName: "Lindsey Stroman",
        group: "Mrs.",
        total: "77576359",
    },
    {
        id: "15",
        lastUpdate: "2020-06-02T00:16:20.498Z",
        tagName: "Daphnee Beer",
        group: "Mr.",
        total: "03673209",
    },
    {
        id: "16",
        lastUpdate: "2020-11-10T14:38:24.749Z",
        tagName: "Rudy Wehner",
        group: "Dr.",
        total: "86301201",
    },
    {
        id: "17",
        lastUpdate: "2020-08-13T19:12:48.012Z",
        tagName: "Calista Mayert DDS",
        group: "Mrs.",
        total: "00271955",
    },
    {
        id: "18",
        lastUpdate: "2020-08-27T03:57:10.629Z",
        tagName: "Brent Ernser",
        group: "Miss",
        total: "13577955",
    },
    {
        id: "19",
        lastUpdate: "2020-03-10T10:00:59.671Z",
        tagName: "Mrs. Camren Zulauf",
        group: "Mr.",
        total: "03941762",
    },
    {
        id: "20",
        lastUpdate: "2020-11-18T15:38:35.061Z",
        tagName: "Kane Cruickshank",
        group: "Miss",
        total: "63122126",
    },
    {
        id: "21",
        lastUpdate: "2020-12-08T14:30:34.123Z",
        tagName: "Danny Cole",
        group: "Mrs.",
        total: "23410778",
    },
    {
        id: "22",
        lastUpdate: "2020-06-20T07:43:09.928Z",
        tagName: "Lincoln Gerhold",
        group: "Ms.",
        total: "26106516",
    },
    {
        id: "23",
        lastUpdate: "2020-07-06T17:39:47.275Z",
        tagName: "Miss Vanessa Littel",
        group: "Miss",
        total: "05964316",
    },
    {
        id: "24",
        lastUpdate: "2021-02-15T20:12:56.718Z",
        tagName: "Ms. Elisabeth Kessler",
        group: "Miss",
        total: "71578402",
    },
    {
        id: "25",
        lastUpdate: "2020-05-29T22:03:00.714Z",
        tagName: "Hermina Schaefer DVM",
        group: "Ms.",
        total: "21382270",
    },
    {
        id: "26",
        lastUpdate: "2020-12-12T15:46:11.229Z",
        tagName: "Keenan Harvey",
        group: "Ms.",
        total: "30696685",
    },
    {
        id: "27",
        lastUpdate: "2021-01-09T13:39:45.088Z",
        tagName: "Colten Ortiz Jr.",
        group: "Miss",
        total: "94836705",
    },
    {
        id: "28",
        lastUpdate: "2021-02-22T10:15:45.648Z",
        tagName: "Jose Gerhold",
        group: "Mrs.",
        total: "83919321",
    },
    {
        id: "29",
        lastUpdate: "2020-04-26T22:00:48.882Z",
        tagName: "Cortez Howe",
        group: "Miss",
        total: "02461454",
    },
    {
        id: "30",
        lastUpdate: "2021-01-22T05:04:34.608Z",
        tagName: "Trenton Gorczany",
        group: "Miss",
        total: "68451432",
    },
    {
        id: "31",
        lastUpdate: "2020-07-30T22:41:09.979Z",
        tagName: "Shaun Block",
        group: "Dr.",
        total: "73320256",
    },
    {
        id: "32",
        lastUpdate: "2020-09-05T21:07:14.580Z",
        tagName: "Taurean Lesch Jr.",
        group: "Mr.",
        total: "76996454",
    },
    {
        id: "33",
        lastUpdate: "2020-12-24T19:45:17.947Z",
        tagName: "Miss Alvah Walsh",
        group: "Ms.",
        total: "22355749",
    },
    {
        id: "34",
        lastUpdate: "2020-04-25T14:45:07.103Z",
        tagName: "Carmelo Bernhard",
        group: "Mr.",
        total: "44199187",
    },
    {
        id: "35",
        lastUpdate: "2020-05-04T06:46:34.319Z",
        tagName: "Rocio Nitzsche",
        group: "Mr.",
        total: "80473125",
    },
    {
        id: "36",
        lastUpdate: "2020-06-03T04:20:56.160Z",
        tagName: "Gracie Schmidt",
        group: "Dr.",
        total: "82839186",
    },
    {
        id: "37",
        lastUpdate: "2020-04-04T17:28:14.287Z",
        tagName: "Fannie Kessler",
        group: "Miss",
        total: "07339325",
    },
    {
        id: "38",
        lastUpdate: "2021-02-09T14:48:47.618Z",
        tagName: "Joelle Olson",
        group: "Mrs.",
        total: "56624023",
    },
    {
        id: "39",
        lastUpdate: "2020-05-25T16:03:52.901Z",
        tagName: "Carley Jakubowski",
        group: "Dr.",
        total: "52980720",
    },
    {
        id: "40",
        lastUpdate: "2020-10-25T02:46:54.474Z",
        tagName: "Casandra Keebler",
        group: "Dr.",
        total: "07364767",
    },
    {
        id: "41",
        lastUpdate: "2020-04-27T17:29:28.232Z",
        tagName: "Sophia Hackett",
        group: "Mrs.",
        total: "51290836",
    },
    {
        id: "42",
        lastUpdate: "2020-04-23T06:44:07.055Z",
        tagName: "Frances Altenwerth",
        group: "Ms.",
        total: "56737538",
    },
    {
        id: "43",
        lastUpdate: "2021-01-13T22:12:32.124Z",
        tagName: "Ofelia Cole",
        group: "Ms.",
        total: "64961968",
    },
    {
        id: "44",
        lastUpdate: "2020-09-28T15:32:49.292Z",
        tagName: "Alexie O'Kon",
        group: "Dr.",
        total: "97291961",
    },
    {
        id: "45",
        lastUpdate: "2020-03-06T19:38:45.252Z",
        tagName: "Gaetano Morissette",
        group: "Mrs.",
        total: "95412501",
    },
    {
        id: "46",
        lastUpdate: "2020-06-19T07:10:09.303Z",
        tagName: "Ms. Wilburn Larkin",
        group: "Miss",
        total: "60107399",
    },
    {
        id: "47",
        lastUpdate: "2020-12-07T04:13:51.944Z",
        tagName: "Joshua D'Amore",
        group: "Mr.",
        total: "75965616",
    },
    {
        id: "48",
        lastUpdate: "2020-06-13T16:26:11.262Z",
        tagName: "Dasia Kilback",
        group: "Mrs.",
        total: "45370774",
    },
    {
        id: "49",
        lastUpdate: "2020-06-19T21:47:32.722Z",
        tagName: "Henri Kessler",
        group: "Miss",
        total: "69252281",
    },
    {
        id: "50",
        lastUpdate: "2020-05-05T18:43:52.915Z",
        tagName: "Serena Runolfsdottir",
        group: "Mr.",
        total: "23239521",
    },
    {
        id: "51",
        lastUpdate: "2020-03-15T21:38:45.731Z",
        tagName: "Cassandra Schultz",
        group: "Mrs.",
        total: "38387655",
    },
    {
        id: "52",
        lastUpdate: "2020-11-26T06:13:25.405Z",
        tagName: "Earnest Kiehn",
        group: "Miss",
        total: "08998042",
    },
    {
        id: "53",
        lastUpdate: "2020-09-17T00:47:22.159Z",
        tagName: "Mrs. Jamie Bode",
        group: "Dr.",
        total: "15215232",
    },
    {
        id: "54",
        lastUpdate: "2020-10-31T07:30:01.197Z",
        tagName: "Jane Bogan I",
        group: "Ms.",
        total: "50623947",
    },
    {
        id: "55",
        lastUpdate: "2020-06-18T23:16:30.799Z",
        tagName: "Elmer Smith",
        group: "Mrs.",
        total: "96481902",
    },
    {
        id: "56",
        lastUpdate: "2020-11-09T12:07:00.035Z",
        tagName: "Lenny McKenzie",
        group: "Dr.",
        total: "81930114",
    },
    {
        id: "57",
        lastUpdate: "2020-04-26T15:17:08.377Z",
        tagName: "Mr. Chelsea Harber",
        group: "Mr.",
        total: "86135550",
    },
    {
        id: "58",
        lastUpdate: "2020-11-09T15:43:15.153Z",
        tagName: "Alene White",
        group: "Ms.",
        total: "06944486",
    },
    {
        id: "59",
        lastUpdate: "2020-09-21T23:32:24.827Z",
        tagName: "Citlalli Paucek",
        group: "Dr.",
        total: "41910504",
    },
    {
        id: "60",
        lastUpdate: "2020-04-07T23:28:16.415Z",
        tagName: "Brant Rosenbaum",
        group: "Mrs.",
        total: "37152466",
    },
    {
        id: "61",
        lastUpdate: "2020-09-29T05:21:26.957Z",
        tagName: "Garrick Yost",
        group: "Miss",
        total: "51100680",
    },
    {
        id: "62",
        lastUpdate: "2020-12-23T18:47:32.687Z",
        tagName: "Mercedes Rodriguez",
        group: "Dr.",
        total: "07244265",
    },
    {
        id: "63",
        lastUpdate: "2020-03-05T13:35:32.421Z",
        tagName: "Camille Bechtelar",
        group: "Miss",
        total: "25832830",
    },
    {
        id: "64",
        lastUpdate: "2020-03-15T07:34:38.769Z",
        tagName: "Richard Muller",
        group: "Mrs.",
        total: "22099608",
    },
    {
        id: "65",
        lastUpdate: "2020-03-05T13:02:29.787Z",
        tagName: "Mrs. Ian Torp",
        group: "Mrs.",
        total: "88580630",
    },
    {
        id: "66",
        lastUpdate: "2020-08-16T22:53:28.430Z",
        tagName: "Meda Hirthe III",
        group: "Ms.",
        total: "95208553",
    },
    {
        id: "67",
        lastUpdate: "2021-01-14T16:10:39.511Z",
        tagName: "Barbara Harber",
        group: "Miss",
        total: "78649873",
    },
    {
        id: "68",
        lastUpdate: "2020-06-25T11:57:08.363Z",
        tagName: "Miss Lizzie Pagac",
        group: "Dr.",
        total: "64454371",
    },
    {
        id: "69",
        lastUpdate: "2020-12-18T06:05:36.760Z",
        tagName: "Lysanne Marks",
        group: "Miss",
        total: "66707909",
    },
    {
        id: "70",
        lastUpdate: "2020-09-06T02:51:33.721Z",
        tagName: "Madilyn Gusikowski",
        group: "Dr.",
        total: "46240318",
    },
    {
        id: "71",
        lastUpdate: "2020-03-14T09:54:21.837Z",
        tagName: "Selina Steuber",
        group: "Mrs.",
        total: "95747872",
    },
    {
        id: "72",
        lastUpdate: "2020-11-29T19:30:20.520Z",
        tagName: "Rosa Huel",
        group: "Miss",
        total: "44907386",
    },
    {
        id: "73",
        lastUpdate: "2021-02-16T14:33:24.492Z",
        tagName: "Abraham Sanford",
        group: "Ms.",
        total: "39433147",
    },
    {
        id: "74",
        lastUpdate: "2020-07-24T23:00:54.222Z",
        tagName: "Maegan D'Amore",
        group: "Miss",
        total: "13345409",
    },
    {
        id: "75",
        lastUpdate: "2021-01-13T03:04:15.519Z",
        tagName: "Alice Reichert",
        group: "Mrs.",
        total: "62012781",
    },
    {
        id: "76",
        lastUpdate: "2021-02-02T09:54:34.087Z",
        tagName: "Terrance Aufderhar",
        group: "Dr.",
        total: "90330887",
    },
    {
        id: "77",
        lastUpdate: "2020-10-07T17:52:06.585Z",
        tagName: "Nola Howe",
        group: "Mr.",
        total: "57827682",
    },
    {
        id: "78",
        lastUpdate: "2020-06-21T00:51:20.878Z",
        tagName: "Ms. Treva Prosacco",
        group: "Dr.",
        total: "63442911",
    },
    {
        id: "79",
        lastUpdate: "2020-03-19T14:13:06.975Z",
        tagName: "Joyce Hilpert",
        group: "Ms.",
        total: "25616900",
    },
    {
        id: "80",
        lastUpdate: "2020-04-28T06:02:03.989Z",
        tagName: "Mabelle Nicolas",
        group: "Mrs.",
        total: "03761296",
    },
];

const Homepage = () => {
    const { formatMessage } = useCustomIntl();
    const table = useTable();

    const [modal, setModal] = useState<IModal>({
        isVisible: false,
        dataEdit: null,
        isReadOnly: false,
    });
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
    const [search, setSearch] = useState<string>("");
    const [filter, setFilterOption] = useState<any>();

    const idChooses = "id"; //get your id here. Ex: accountId, userId,...
    const columns: ColumnsType = [
        {
            dataIndex: "tagName",
        },
        {
            dataIndex: "lastUpdate",
        },
        {
            dataIndex: "group",
        },
        {
            dataIndex: "group",
            render: () => (
                <CircleLabel text={formatMessage("common.statusActive")} colorCode="blue" />
            ),
        },
        {
            dataIndex: "action",
            render: (_item: any, record: any) => (
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
            iconType: "add",
            handleAction: () => {
                setModal({ dataEdit: null, isVisible: true });
            },
        },
        { iconType: "share" },
        {
            iconType: "delete",
            disable: selectedRowKeys?.length === 0,
            handleAction: () => {
                DeleteConfirm({
                    content: formatMessage("common.delete"),
                    handleOk: () => {
                        // call Api Delete here
                        handleRefresh();
                    },
                    handleCancel: () => {},
                });
            },
        },
    ];
    const dataString: ISelect[] = [{ label: "common.all", value: undefined }];
    const arraySelectFilter: ISelectAndLabel[] = [
        { textLabel: "Lĩnh vực", dataString },
        { textLabel: "Địa bàn quản lý", dataString },
        { textLabel: "Trạng thái", dataString },
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
        <div className="homepage">
            <MainTitleComponent breadcrumbs={routerHomepage} />
            <div className="main-card">
                <div className="flex justify-between items-end mb-3 ">
                    <div className="flex">
                        {arraySelectFilter.map((item, index) => (
                            <SelectAndLabelComponent
                                onChange={onChangeSelectStatus(item.name)}
                                key={index}
                                dataString={item.dataString}
                                textLabel={item.textLabel}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col ">
                        <div className="label-select">{formatMessage("common.keyword")}</div>
                        <SearchComponent
                            onSearch={handleSearch}
                            placeholder={"common.keyword"}
                            classNames="mb-0 search-table"
                        />
                    </div>
                </div>
                <TableComponent
                    // apiServices={}
                    defaultOption={filter}
                    translateFirstKey="homepage"
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

export default Homepage;
