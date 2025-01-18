import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './RootLayout';
import ProfitLossCalendar from './ProfitLossCalendar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RootLayout>
    <ProfitLossCalendar />
  </RootLayout>
);