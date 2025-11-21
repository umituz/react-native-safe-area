/**
 * useStatusBarSafeAreaPadding Hook
 * Calculate safe area padding for status bar components
 */

import { useMemo } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Options {
  minPadding?: number;
}

export const useStatusBarSafeAreaPadding = (
  options: Options = {},
): number => {
  const insets = useSafeAreaInsets();
  const { minPadding = 0 } = options;

  return useMemo(() => {
    if (Platform.OS === 'ios') {
      return minPadding;
    }
    return Math.max(insets.top, minPadding);
  }, [insets.top, minPadding]);
};
