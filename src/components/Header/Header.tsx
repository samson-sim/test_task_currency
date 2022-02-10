import React, { useEffect, useState } from 'react';
import { getCurrency } from '../../api';
import './Header.scss';
import { Exchanger } from '../Exchanger/Exchanger';

export const Header = () => {
  const [currency, setCurrency] = useState<Current[]>([]);

  const loadCurrency = async () => {
    const cours = await getCurrency();

    setCurrency(cours);
  };

  useEffect(() => {
    loadCurrency();
  }, []);

  const USD_BUY: string = Number(currency.find(item => item.ccy === 'USD')?.buy || 0).toFixed(2);
  const EUR_BUY: string = Number(currency.find(item => item.ccy === 'EUR')?.buy || 0).toFixed(2);

  return (
    <header className="header">
      <div className="header__actual-course">
        <h2>Актуальный курс:</h2>
        <p className="header__usd">{USD_BUY !== '0.00' ? `USD: ${USD_BUY} UAN` : ''}</p>
        <p className="header__eur">{EUR_BUY !== '0.00' ? `EUR: ${EUR_BUY} UAN` : ''}</p>
      </div>
      <Exchanger usd={USD_BUY} eur={EUR_BUY} />
    </header>
  );
};
