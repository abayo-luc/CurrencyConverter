export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANCE_BASE_CURRENCY = 'CHANCE_BASE_CURRENCY';
export const CHANCE_QUOTE_CURRENCY = 'CHANCE_QUOTE_CURRENCY';


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