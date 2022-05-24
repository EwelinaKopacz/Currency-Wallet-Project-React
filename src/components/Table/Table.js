import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { loadExchangeRate } from '../../modules/exchangeAPI/exchange.actions';
import columnNames from '../../db/columnNames.json';
import '../../styles/Table.css';

const Table = () =>{
    const dispatch = useDispatch();
    const walletList = useSelector(store=>store.wallet);
    const currencyRate = useSelector(store=>store.exchange.rates);
    console.log('walletlist',walletList);
    console.log('currencyrate', currencyRate);

    useEffect(()=>{
        const walletCurrency = walletList.map((item) => item.currencytype);
        console.log('walletcurrency',walletCurrency);
        walletCurrency.map((item)=> dispatch(loadExchangeRate(item)))
    },[walletList])

    // const getActualRate = (currencyType) =>{
    //     if(currencyRate){
    //         for (const [key, value] of Object.entries(currencyRate)) {
    //             if(key === currencyType){
    //                 return value.toFixed(2);
    //             }
    //         }
    //     }
    // }

    // const calcActualValue = (currencyType, currencyAmount) => {
    //     if(currencyRate){
    //         for (const [key, value] of Object.entries(currencyRate)) {
    //             if(key === currencyType){
    //                 const actualValue = currencyAmount * value;
    //                 return actualValue.toFixed(2);
    //             }
    //         }
    //     }
    // }

    // const calcProfit = (currencyType, currencyAmount, currencyPrice) =>{
    //     if(currencyRate){
    //         for (const [key, value] of Object.entries(currencyRate)) {
    //             if(key === currencyType){
    //                 const prevValue = (currencyAmount * currencyPrice).toFixed(2);
    //                 const actualValue = (currencyAmount * value).toFixed(2)
    //                 console.log('prev i acktual value',prevValue,actualValue);

    //                 const profit = prevValue - actualValue;
    //                 console.log('zysk', profit);

    //                 if(prevValue > actualValue){
    //                     return `${profit} +`
    //                 }
    //                 else {
    //                     return `${profit} -`
    //                 }
    //                 //return profit;
    //             }
    //         }
    //     }
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
                    {/* <td className='table__data'>{getActualRate(item.currencytype)}</td> */}
                    {/* <td className='table__data'>{calcActualValue(item.currencytype,item.amount)}</td>
                    <td className='table__Data'>{calcProfit(item.currencytype, item.amount,item.price)}</td> */}
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