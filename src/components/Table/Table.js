import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import columnNames from '../../db/columnNames.json';
import { getToday } from '../../functions/getToday';
import { removeItemFromWallet } from '../../modules/wallet/wallet.actions';
import '../../styles/Table.css';

const Table = () =>{
    const walletList = useSelector(store=>store.wallet);
    const rateList = useSelector(store=>store.exchange)
    const today = getToday().toString();
    const dispatch = useDispatch();
    const rateListToday = rateList[today];

    const renderColumnNames = () => columnNames.map((item)=> <th className='table__header' key={item.id}>{item.name}</th>)

    const renderData = () =>{
        return walletList.map((item) => {
            return(
                <tr className='table__row' key={item.id}>
                    <td className='table__data'>{item.currencytype}</td>
                    <td className='table__data'>{item.amount}</td>
                    <td className='table__data'>{item.dayofbuy}</td>
                    <td className='table__data'>{item.price}</td>
                    <td className='table__data'>{renderActualRate(item.currencytype)}</td>
                    <td className='table__data'>{renderActualValue(item.currencytype,item.amount)}</td>
                    <td className='table__data'>{renderActualProfit(item.currencytype,item.amount,item.price)}</td>
                    <td><button onClick={e => handleRemove(item.id)}>Usuń</button></td>
                </tr>
            )
        })
    }

    const renderActualRate = (curr) => {
        if(rateListToday){
            const value = rateListToday[curr];
            if(value) {
                return value.toFixed(2)
            }
        }
    }

    const renderActualValue = (curr,amount) => {
        if(rateListToday){
            const value = rateListToday[curr];
            if(value) {
                return (value * amount).toFixed(2)
            }
        }
    }

    const renderActualProfit = (curr,amount,price) => {
        const actualProfit = renderActualValue(curr,amount);
        const prevProfit = (amount * price).toFixed(2);
        if(actualProfit === undefined){ 
            return null
        }
        return (actualProfit - prevProfit).toFixed(2);
    }

    const handleRemove = (id) => {
        dispatch(removeItemFromWallet(id))
    }

    if(walletList.length > 0) {
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
    } else {
        return (
            <section>
                <h2>Nie posiadasz walut <br/> Dodaj pierwsza walutę</h2>
            </section>
        )
    }
}

export default Table;