import { FC } from 'react';
import css from './Table.module.scss';

type TableProps = {
    header: Array<any>,
    body: Array<Array<any>>
};

export const Table: FC<TableProps> = (props) => {
    return (
        <table className={ css.Table }>
            <thead className={ css.header }>
                <tr>
                    { props.header.map((item, index) => (
                        <th className={ css.headerCell } key={ index }>{ item }</th>
                    )) }
                </tr>
            </thead>
            <tbody className={ css.body }>
                { props.body.map((row, index) => (
                    <tr className={ css.row } key={ index }>
                        { row.map((item, index) => (
                            <td className={ css.cell } key={ index }>{ item }</td>
                        )) }
                    </tr>
                )) }
            </tbody>
        </table>
    );
};
