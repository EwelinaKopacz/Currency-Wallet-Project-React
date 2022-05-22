import React from 'react';
import { useSelector } from 'react-redux';
import columnNames from '../../db/columnNames.json';
import '../../styles/Table.css';

const Table = () =>{
    const walletList = useSelector(store=>store)
    console.log(walletList);

    return(
        <section className='table__wrapper'>
            <h2>Posiadane waluty</h2>
            <table className='table__container'>
                <thead className='table__head'>
                    <tr className='table__row'>
                        {columnNames.map((colName)=> <th className='table__header'>{colName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {walletList.map((item) => {
                        return(
                            <tr className='table__row'>
                                <td className='table__data'>{item.currencytype}</td>
                                <td className='table__data'>{item.amount}</td>
                                <td className='table__data'>{item.dayofbuy}</td>
                                <td className='table__data'>{item.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default Table;