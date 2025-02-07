import React from 'react';
import { Calculator } from './components/Calculator';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  return (
    <>
      <LanguageSwitcher />
      <Calculator />
    </>
  );
}

export default App;