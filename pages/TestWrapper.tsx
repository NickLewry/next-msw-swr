import React from 'react';
import { SWRConfig } from 'swr';

export const Wrapper: React.FC = ({ children }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        refreshInterval: 0,
      }}
    >
      {children}
    </SWRConfig>
  );
};