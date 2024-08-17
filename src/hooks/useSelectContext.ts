import React from 'react';
import { SELECT_CONTEXT_DEFAULT_VALUE } from '../constants/constants';
import { SelectContextProps } from '../types/types';

export const SelectContext = React.createContext<SelectContextProps>(
  SELECT_CONTEXT_DEFAULT_VALUE
);

export const SelectContextProvider = SelectContext.Provider;
