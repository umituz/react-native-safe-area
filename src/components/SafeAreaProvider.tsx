/**
 * SafeAreaProvider Component
 * Simple wrapper around react-native-safe-area-context
 */

import React, { ReactNode } from 'react';
import { SafeAreaProvider as NativeSafeAreaProvider } from 'react-native-safe-area-context';

export interface SafeAreaProviderProps {
  children: ReactNode;
}

export const SafeAreaProvider: React.FC<SafeAreaProviderProps> = ({
  children,
}) => {
  return <NativeSafeAreaProvider>{children}</NativeSafeAreaProvider>;
};
