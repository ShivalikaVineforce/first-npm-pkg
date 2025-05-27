import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_OtAGusCuoJAIFb05tpE84SYrsXqxyYasbT1iuU3J');

//convertCurrency("INR","USD",3);
export async function convertCurrency(fromCurrency,toCurrency,units){

const response=await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

   const multiplier=response.data[toCurrency] ;
  return multiplier*units ;
}

