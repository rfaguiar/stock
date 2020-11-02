import React from "react";
import "./Table.scss";
import organizeData from "../../utils/organizeDataForTable";

export declare interface TableHeader {
    key: string
    value: string
    right?: boolean
}

declare interface TableProps {
    headers: TableHeader[]
    data: any[]
    enableActions?: boolean
    onDelete?: (item: any) => void
    onDetail?: (item: any) => void
    onEdit?: (item: any) => void
}

const Table: React.FC<TableProps> = (props) => {
    const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)
    return <table className={"AppTable"}>
        <thead>
            <tr>
            {
                props.headers.map(header => 
                    <th className={header.right ? 'right' : ''} 
                        key={header.key} >
                        {header.value}
                    </th>)
            }
            </tr>
        </thead>
        <tbody>
        {
            organizedData.map((row, i) => {
                return <tr key={i}>
                    {
                        Object.keys(row)
                            .map(item => {
                                if (item !== '$original') {
                                    return <td 
                                        className={indexedHeaders[item].right ? 'right' : ''}
                                        key={row.$original.id + i}>
                                        {row[item]}
                                    </td>
                                }
                                return null
                            })
                    }
                </tr>
            })
        }
        </tbody>
    </table>
}

export default Table;