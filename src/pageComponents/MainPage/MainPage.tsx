import { Header } from '@/layout/Header/Header';
import BetSection from '@/sections/BetSection/BetSection';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './MainPage.module.scss';

const OurTeam = dynamic(() => import('@/sections/OurTeam/OurTeam'));

const AboutSection = dynamic(() => import('@/sections/AboutSection/AboutSection'));

const HistorySection = dynamic(() => import('@/sections/HistorySection/HistorySection'));

const RulesSection = dynamic(() => import('@/sections/RulesSection/RulesSection'));

const ConditionSection = dynamic(() => import('@/sections/ConditionSection/ConditionSection'));

const PayoffSchemeSection = dynamic(
  () => import('@/sections/PayoffSchemeSection/PayoffSchemeSection'),
);
const ClientsSection = dynamic(() => import('@/sections/ClientsSection/ClientsSection'));

const AcquiringSection = dynamic(() => import('@/sections/AcquiringSection/AcquiringSection'));

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <BetSection />
          <ClientsSection />
          <HistorySection />
          <RulesSection />
          <ConditionSection />
          <PayoffSchemeSection />
          <AcquiringSection />
          <AboutSection />
        </div>
        <div className={styles.ourteamWrapper}>
          <OurTeam />
        </div>
      </main>
    </>
  );
};
