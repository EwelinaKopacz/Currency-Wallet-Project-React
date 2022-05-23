class ExchangeRateAPI {
    url = 'https://api.apilayer.com/fixer/';

    getExchangeRate(symbols) {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "tAQziVqzbgSzGsOMxhMXc8MjFG22ssae");

        const requestOptions = {
            headers: myHeaders
        }

        return fetch(`${this.url}latest?symbols=${symbols}&base=PLN`,requestOptions)
            //.then(response => response.text())
            .then(response => response.json())
            //.then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
}
export default ExchangeRateAPI;