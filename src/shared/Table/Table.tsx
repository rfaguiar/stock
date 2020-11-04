import React from "react";
import "./Table.scss";
import organizeData from "../../utils/organizeDataForTable";
import Button from "../Button";

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
            {
                props.enableActions && 
                    <th className={'right'}>
                        Actions
                    </th>
            }
            </tr>
        </thead>
        <tbody>
        {
            organizedData.map((row, i) => {
                return <tr key={i}>
                    {
                        Object.keys(row)
                            .map((item, i) => {
                                if (item !== '$original') {
                                    return <td 
                                        className={indexedHeaders[item].right ? 'right' : ''}
                                        key={row.$original._id + i}>
                                        {row[item]}
                                    </td>
                                }
                                return null
                            })
                    }
                    {
                        props.enableActions &&
                            <td className={'actions right'}>
                            {
                                props.onEdit &&
                                    <Button onClick={() => props.onEdit && props.onEdit(row.$original)}>
                                        Edit
                                    </Button>
                            }
                            {
                                props.onDetail &&
                                <Button onClick={() => props.onDetail && props.onDetail(row.$original)}>
                                    Detail
                                </Button>
                            }
                            {
                                props.onDelete &&
                                <Button onClick={() => props.onDelete && props.onDelete(row.$original)}>
                                    Delete
                                </Button>
                            }
                            </td>
                    }
                </tr>
            })
        }
        </tbody>
    </table>
}

export default Table;