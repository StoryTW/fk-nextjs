import { Header } from '@/layout/Header/Header';
import dynamic from 'next/dynamic';
import React from 'react';

const OurTeam = dynamic(() => import('@/sections/OurTeam/OurTeam'));

const AboutSection = dynamic(() => import('@/sections/AboutSection/AboutSection'));

const HistorySection = dynamic(() => import('@/sections/HistorySection/HistorySection'));

const RulesSection = dynamic(() => import('@/sections/RulesSection/RulesSection'));

const ConditionSection = dynamic(() => import('@/sections/ConditionSection/ConditionSection'));

const PayoffSchemeSection = dynamic(
  () => import('@/sections/PayoffSchemeSection/PayoffSchemeSection'),
);
const ClientsSection = dynamic(() => import('@/sections/ClientsSection/ClientsSection'));

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <ClientsSection />
        {/* <HistorySection />
        <RulesSection />
        <ConditionSection />
        <PayoffSchemeSection />
        <AboutSection />
        <OurTeam /> */}
      </main>
    </>
  );
};
