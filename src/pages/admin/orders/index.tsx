import ProfileLayout from "@src/components/Layout/ProfileLayout/ProfileLayout";
import MenuDropDown from "@src/components/UI/Search/MenuDropDown";
import SearchBar from "@src/components/UI/Search/SearchBar";
import { ColDef, GridOptions } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const columnData = [
    {
        field: "orderId",
        headerName: "Order ID",
        width: 100
    },
    {
        field: "date",
        headerName: "Date",
        width: 200
    },
    {
        field: "customerName",
        headerName: "Customer Name",
        width: 150
    },
    {
        field: "location",
        headerName: "Location",
        width: 200
    },
    {
        field: "amount",
        headerName: "Amount",
        width: 100
    },
    {
        field: "orderStatus",
        headerName: "Order Status",
        width: 100
    },
    {
        headerName: "Actions",
        type: ["nonEditableColumn", "nonSortableColumn"],
        // pinned: "left",
        cellRenderer: "actionsRenderer",
        cellRendererParams: {
            link: ["jajjajj"]
        },
        width: 100
    },
]

const rowInfo = [
    {
        orderId: "338828",
        date: "26 March 2020, 12:42AM",
        customerName: "Emilia Johanson",
        location: "corner street 5th London",
        amount: "$162.54",
        orderStatus: "Pending"
    },
    {
        orderId: "338828",
        date: "26 March 2020, 12:42AM",
        customerName: "Emilia Johanson",
        location: "corner street 5th London",
        amount: "$162.54",
        orderStatus: "Pending"
    }
]


const Orders = () => {

    const [rowData, setRowData] = useState(rowInfo);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [gridApi, setGridApi] = useState(null);

    const onGridReady = (params: any) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    const gridOptions = useMemo<GridOptions>(() => {
        return {
            frameworkComponents: {
                actionsRenderer: <FaArrowRight className="text-dark-gray text-2xl" />
            },
            columnTypes: {
                nonEditableColumn: {editable: false},
                nonSortableColumn: {editable: false}
            },
            columnDefs: columnData,
            defaultColDef: {
                editable: true,
                enableRowGroup: true,
                enablePivot: true,
                enableValue: true,
                sortable: true,
                resizable: true,
                filter: true,
                flex: 1,
                minWidth: 100,
            },
        }
    }, [])

    return (
        <ProfileLayout header="Orders" >
            <section className="mx-6">
                <div className="flex justify-between">
                    <SearchBar />
                    <MenuDropDown />
                </div>
                <Link href="orders/338828">#338828</Link>
                <div className="ag-theme-alpine w-full h-[90vh]">
                    <AgGridReact onGridReady={onGridReady} rowData={rowData}  gridOptions={gridOptions} pagination />
                </div>
            </section>
        </ProfileLayout>
    )
}

export default Orders;