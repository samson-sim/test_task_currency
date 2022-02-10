/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import './Exchanger.scss';

type Props = {
  eur: string,
  usd: string
};

export const Exchanger: React.FC<Props> = ({ eur, usd }) => {
  const [currencyBuy, setCurrencyBuy] = useState('UAN');
  const [currencySale, setCurrencySale] = useState('UAN');
  const [selectedInput, setSelectedInput] = useState(0);

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const exchanger = () => {
    if (selectedInput === 1) {
      switch (currencyBuy) {
        case 'USD':
          switch (currencySale) {
            case 'UAN':
              setValue2((Number(value1) * Number(usd)).toFixed(2));
              break;

            case 'USD':
              setValue2(value1);
              break;

            case 'EUR':
              setValue2(((Number(value1) * Number(usd)) / Number(eur)).toFixed(2));
              break;
          }

          break;

        case 'UAN':
          switch (currencySale) {
            case 'UAN':
              setValue2(value1);
              break;

            case 'USD':
              setValue2((+value1 / +usd).toFixed(2));
              break;

            case 'EUR':
              setValue2((+value1 / +eur).toFixed(2));
              break;
          }

          break;

        case 'EUR':
          switch (currencySale) {
            case 'UAN':
              setValue2((+value1 * +eur).toFixed(2));
              break;

            case 'USD':
              setValue2(((+value1 * +eur) / +usd).toFixed(2));
              break;

            case 'EUR':
              setValue2(value1);
              break;
          }
      }
    }

    if (selectedInput === 2) {
      switch (currencySale) {
        case 'USD':
          switch (currencyBuy) {
            case 'UAN':
              setValue1((Number(value2) * Number(usd)).toFixed(2));
              break;

            case 'USD':
              setValue1(value2);
              break;

            case 'EUR':
              setValue1(((Number(value2) * Number(usd)) / Number(eur)).toFixed(2));
              break;
          }

          break;

        case 'UAN':
          switch (currencyBuy) {
            case 'UAN':
              setValue1(value2);
              break;

            case 'USD':
              setValue1((+value2 / +usd).toFixed(2));
              break;

            case 'EUR':
              setValue1((+value2 / +eur).toFixed(2));
              break;
          }

          break;

        case 'EUR':
          switch (currencyBuy) {
            case 'UAN':
              setValue1((+value2 * +eur).toFixed(2));
              break;

            case 'USD':
              setValue1(((+value2 * +eur) / +usd).toFixed(2));
              break;

            case 'EUR':
              setValue1(value2);
              break;
          }
      }
    }
  };

  useEffect(() => {
    exchanger();
  }, [currencyBuy, currencySale, value1, value2]);

  return (
    <div className="exchange">
      <h2>Обмен валют</h2>
      <select className="exchange__select" onChange={({ target }) => setCurrencyBuy(target.value)}>
        <option value="UAN">UAN</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <input
        className="exchange__input"
        value={value1}
        onChange={({ target }) => {
          setSelectedInput(1);
          setValue1(target.value);
          exchanger();
        }}
        placeholder="0"
      />
      <span>=</span>
      <input
        className="exchange__input"
        value={value2}
        onChange={({ target }) => {
          setSelectedInput(2);
          setValue2(target.value);
          exchanger();
        }}
        placeholder="0"
      />
      <select
        className="exchange__select"
        onChange={({ target }) => {
          setCurrencySale(target.value);
        }}
      >
        <option value="UAN">UAN</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};
