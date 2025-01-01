'use client';
import React from 'react';
import styles from './FormPay.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

const options = ['Visa', 'Master Card', 'Mir', 'Yoomoney'];

export const FormPay = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: '500',
      method: 'Visa',
    },
  });

  const onSubmit: SubmitHandler<{ amount: string; method: string }> = (data) => {
    console.log(data, 'data');
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrp}>
        <div className={styles.formBlock}>
          <div className={styles.formText}>СУМАА:</div>
          <div className={styles.formText}>МЕТОД ОПЛАТЫ:</div>
        </div>

        <div className={styles.inputWrapper}>
          <input type='number' inputMode='numeric' className={styles.input} {...register('amount')} />
          <select className={styles.select} {...register('method')}>
            {options.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <button type='submit' tabIndex={-1} className={styles.btn} disabled={!isValid}>
        ОПЛАТИТЬ
      </button>
    </form>
  );
};
