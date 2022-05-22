export const saveToLocalStorage = (state) =>{
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem('wallet', serialState);
    } catch (error){
        console.log(error)
    }
}