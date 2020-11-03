import React from 'react';
import AppContext from './AppContext';

const Provider = ({ Children }) => {
const context = {
  
}
  return (
  <AppContext.Provider value={context}>
    {Children}
  </AppContext.Provider>
  )
}

export default Provider;
