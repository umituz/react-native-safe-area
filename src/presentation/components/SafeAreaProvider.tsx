/**
 * Safe Area Provider Component
 *
 * Wraps react-native-safe-area-context's SafeAreaProvider with web support
 */

import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import {
  SafeAreaProvider as NativeSafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import type { SafeAreaMetrics } from '../../domain/entities/SafeAreaTypes';

export interface SafeAreaProviderProps {
  children: ReactNode;
  initialMetrics?: SafeAreaMetrics;
}

/**
 * Safe Area Provider
 *
 * Provides safe area context to the app with web support.
 * On web, provides default insets if not available.
 */
export const SafeAreaProvider: React.FC<SafeAreaProviderProps> = ({
  children,
  initialMetrics,
}) => {
  // For web, provide default metrics if not available
  const metrics = React.useMemo(() => {
    if (initialMetrics) {
      return initialMetrics;
    }

    if (Platform.OS === 'web') {
      const isTabletAndAbove =
        typeof window !== 'undefined' ? window.self !== window.top : true;

      if (isTabletAndAbove) {
        return {
          insets: { top: 64, bottom: 34, left: 0, right: 0 },
          frame: {
            x: 0,
            y: 0,
            width: typeof window !== 'undefined' ? window.innerWidth : 390,
            height: typeof window !== 'undefined' ? window.innerHeight : 844,
          },
        };
      }
    }

    return initialWindowMetrics;
  }, [initialMetrics]);

  return (
    <NativeSafeAreaProvider initialMetrics={metrics}>
      {children}
    </NativeSafeAreaProvider>
  );
};

