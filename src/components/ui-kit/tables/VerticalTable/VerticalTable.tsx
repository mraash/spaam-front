import { FC } from 'react';
import css from './VerticalTable.module.scss';
import { cn } from '~/libraries/class-name';

type VerticalTableProps = {
    table: Array<{
        key: string|number,
        value: any,
    }>
};

export const VerticalTable: FC<VerticalTableProps> = (props) => {
    return (
        <table className={ css.VerticalTable }>
            <tbody>
                { props.table.map((item, index) => (
                    <tr className={ css.row } key={ index }>
                        <td className={ cn(css.cell, css.cell_key) }>{ item.key }</td>
                        <td className={ cn(css.cell, css.cell_value) }>{ item.value }</td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
};
