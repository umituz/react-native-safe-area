/**
 * useHeaderSafeAreaPadding Hook
 * Calculate safe area padding for header components
 */

import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Options {
  minPadding?: number;
  additionalPadding?: number;
}

export const useHeaderSafeAreaPadding = (
  options: Options = {},
): number => {
  const insets = useSafeAreaInsets();
  const { minPadding = 8, additionalPadding = 0 } = options;

  return useMemo(() => {
    return Math.max(insets.top, minPadding) + additionalPadding;
  }, [insets.top, minPadding, additionalPadding]);
};
