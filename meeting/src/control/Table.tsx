import { TableOptions, useTable, Column } from "react-table"
import styles from "../css/table.module.css"

interface TableProp{
    columns:Array<Column<any>>;
    data:Array<any>;
    style:string;
}

export function Table({columns, data, style}:TableProp){
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        { columns, data }
    );

    return(
        <table className={style} {...getTableProps()}>
            <thead>
            {
                headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps({style:{minWidth:column.minWidth}})}>{column.render("Header")}</th>
                        ))}
                    </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} /*onClick={()=>{console.log(row.cells)}}*/>
                                {
                                    row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    ))
                                }
                            </tr>
                        );
                })}
            </tbody>
        </table>
  );
}