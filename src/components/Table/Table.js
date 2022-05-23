import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { loadExchangeRate } from '../../modules/exchangeAPI/exchange.actions';
import columnNames from '../../db/columnNames.json';
import '../../styles/Table.css';

const Table = () =>{
    const dispatch = useDispatch();
    const walletList = useSelector(store=>store.wallet);
    const currencyRate = useSelector(store=>store.exchange.rates);
    console.log(currencyRate);

    useEffect(()=>{
        const walletCurrency = walletList.map((item) => item.currencytype);
        console.log(walletCurrency);
        dispatch(loadExchangeRate(walletCurrency));
    },[walletList])

    // const getActuallRate = (amount) =>{
    //     return currencyRate.map((item) => item * amount)
    // }


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
                    {/* <td className='table__data'>{getActuallRate(item.amount)}</td> */}
                </tr>
            )
        })
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