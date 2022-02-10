const URL = ' https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

export const getCurrency = async () => {
  const currency = await fetch(URL);

  return currency.json();
};
