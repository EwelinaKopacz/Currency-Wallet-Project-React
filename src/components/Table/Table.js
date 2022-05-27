import React from 'react';
import { useSelector } from 'react-redux';
import columnNames from '../../db/columnNames.json';
import '../../styles/Table.css';

const Table = () =>{
    const walletList = useSelector(store=>store.wallet);
    const rateList = useSelector(store=>store.exchange);
    console.log('walletlist',walletList);
    console.log('ratelist', rateList);

    const renderColumnNames = () =>{
        return columnNames.map((colName)=> <th className='table__header'>{colName}</th>)
    }

    const renderData = () =>{
        return walletList.map((item) => {
            return(
                <tr className='table__row'>
                    <td className='table__data'>{item.currencytype}</td>
                    <td className='table__data'>{item.amount}</td>
                    <td className='table__data'>{item.dayofbuy}</td>
                    <td className='table__data'>{item.price}</td>
                    <td className='table__data'>{renderActualRate(item.currencytype)}</td>
                    <td className='table__data'>{renderActualValue(item.currencytype,item.amount)}</td>
                </tr>
            )
        })
    }

    const renderActualRate = (currencyType) => {
        const result = rateList.filter((item) => item[currencyType])
        return result.map((el) => Number(el[currencyType].toFixed(2)))
    }

    const renderActualValue = (currencyType,currencyAmount) =>{
        const result = rateList.filter((item) => item[currencyType])
        return result.map((el) => Number(el[currencyType] * currencyAmount).toFixed(2))
    }

    return(
        <section className='table__wrapper'>
            <h2>Posiadane waluty</h2>
            <table className='table__container'>
                <thead className='table__head'>
                    <tr className='table__row'>
                        {renderColumnNames()}
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
            </table>
        </section>
    )
}

export default Table;