import types from './exchangeAPI.types';

const initState = [];

const exchageReductor = (state=initState,action) => {
    switch (action.type){
        case types.GET_LATEST_EXCHANGE_RATE:
            return [
                ...state,
                action.payload
            ]

        case types.UPDATE_LATEST_EXCHANGE_RATE:
            const {key} = action.payload
            // znajdz el z takim kluczem

            // ---> SZUKAJ PO KLUCZU ELE DO ZAKTUALIZOWANIA
            //const findItem = state.find((item) => item[key] === key) 

            // zaktualizuj el o takim kluczu
            // let newState = state
            // newState = state.map((item) => {
            //     console.log(item)
            //     if(item === findItem){
            //         return {item:action.payload}
            //     } return item

            // })
            // ustaw nowy state

            // --->  SZUKAJ PO INDEKSIE ELE DO ZAKTUALIZOWANIA
            // const findItem = state.findIndex((item) => item[key] === key);
            // const updateState = state.map((el,index) => {
            //     if(el[index]=== findItem){
            //         return {el:action.payload}
            //     }
            // })
            //const updateState = {...action.payload, state[findIndex]:action.payload}


            // ---> USUN ITEM O TAKIM KLUCZU I DODAJ NOWY PAYLOAD
            const updateState = state.filter((item) => item[key] !== key )
            updateState.push(action.payload)

            return [
                //newState
                ...updateState,
                //action.payload
            ]
        default:
            return state;
    }
}

export default exchageReductor;