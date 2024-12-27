'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Logo.module.scss';
import { ROUTER } from '@/utils/router';

export const Logo = () => {
  return (
    <Link href={ROUTER.MAIN} className={styles.logo}>
      <Image src={'/images/logo.png'} alt='logo' width={274} height={76} className={styles.img} />
    </Link>
  );
};
