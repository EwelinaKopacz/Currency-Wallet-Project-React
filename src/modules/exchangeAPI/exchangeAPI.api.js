class ExchangeRateAPI {
    url = 'https://api.apilayer.com/exchangerates_data/';

    getExchangeRate(symbol) {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "AC3yMIgz32bQPjxC0ZfpudB6Thg2w8Zi");

        const requestOptions = {
            headers: myHeaders
        }

        return fetch(`${this.url}convert?to=pln&from=${symbol}&amount=1`,requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }
}
export default ExchangeRateAPI;