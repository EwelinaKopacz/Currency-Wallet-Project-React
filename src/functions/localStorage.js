export const saveToLocalStorage = (state) =>{
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem('wallet', serialState);
    } catch (error) {
        console.warn(error);
    }
}

export const loadFromLocalStorage = () => {
	try {
	    const serialState = localStorage.getItem('wallet');
	if (serialState === null) {
		return undefined;
	}
	return JSON.parse(serialState);

	} catch (error) {
        console.warn(error);
	    return undefined;
	}
};