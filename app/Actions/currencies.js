export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANCE_BASE_CURRENCY = 'CHANCE_BASE_CURRENCY';
export const CHANCE_QUOTE_CURRENCY = 'CHANCE_QUOTE_CURRENCY';
export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION';


export const CONVERSION_RESULT = 'CONVERSION_RESULT';
export const CONVERSION_ERROR = 'CONVERSION_ERROR';

export const swapCurrency = () => ({
    type: SWAP_CURRENCY,
})

export const changeCurrencyAmount = (amount) => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount)
})

export const changeBaseCurrency = (currency) => ({
    type: CHANCE_BASE_CURRENCY,
    currency,
})

export const changeQuoteCurrency = (currency) => ({
    type: CHANCE_QUOTE_CURRENCY,
    currency,
})

export const getInitialConversion = () => ({
    type: GET_INITIAL_CONVERSION,
});