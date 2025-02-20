'use client';
import React, { useEffect, useState } from 'react';
import styles from './FormPay.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateInvoice } from '@/hooks/query-hooks/invoice/useCreateInvoice';
import { v4 as uuidv4 } from 'uuid';

const options = [
  {
    name: 'Сбербанк',
    value: 'card',
  },
  {
    name: 'Т-Банк',
    value: 'card',
  },
  {
    name: 'Райффайзен',
    value: 'card',
  },
  {
    name: 'Альфа-банк',
    value: 'card',
  },
  {
    name: 'СБП',
    value: 'sbp-a',
  },
  {
    name: 'Наша платежная форма',
    value: 'h2h',
  },
];

export const FormPay = () => {
  const [uuid, setUuid] = useState('');

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: '500',
      method: options[0].value,
    },
  });

  const handleGenerateUUID = () => {
    const newUuid = uuidv4();

    setUuid(newUuid);
  };

  const { mutate, isPending } = useCreateInvoice({
    onSuccess: (data) => {
      if (data.payment_url) {
        window.open(`${data.payment_url}`, '_blank');
      }
    },
  });

  const onSubmit: SubmitHandler<{
    amount: string;
    method: string;
  }> = async (data) => {
    await handleGenerateUUID();

    mutate({
      amount: data.amount,
      order_id: uuid,
      payment_methods: [data.method],
    });
  };

  useEffect(() => {
    handleGenerateUUID();
  }, []);

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrp}>
        <div className={styles.formBlock}>
          <div className={styles.formText}>СУММА:</div>
          <div className={styles.formText}>МЕТОД ОПЛАТЫ:</div>
        </div>

        <div className={styles.inputWrapper}>
          <input
            type='number'
            inputMode='numeric'
            className={styles.input}
            {...register('amount')}
          />
          <select className={styles.select} {...register('method')}>
            {options.map((item) => (
              <option key={item.name} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type='submit' tabIndex={-1} className={styles.btn} disabled={!isValid || isPending}>
        {isPending ? 'СОЗДАНИЕ ПЛАТЕЖА...' : 'ОПЛАТИТЬ'}
      </button>
    </form>
  );
};
