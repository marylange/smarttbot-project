import React, { useSate } from 'react';
import AppContext from './AppContext';

const Provider = ({Children}) => {
  <AppContext.Provider>{Children}</AppContext.Provider>
}

export default Provider;
