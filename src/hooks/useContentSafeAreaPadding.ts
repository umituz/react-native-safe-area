/**
 * useContentSafeAreaPadding Hook
 * Calculate safe area padding for content components
 */

import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Options {
  minBottomPadding?: number;
  additionalPadding?: number;
}

export const useContentSafeAreaPadding = (
  options: Options = {},
): { paddingBottom: number } => {
  const insets = useSafeAreaInsets();
  const { minBottomPadding = 16, additionalPadding = 0 } = options;

  const paddingBottom = useMemo(() => {
    return Math.max(insets.bottom, minBottomPadding) + additionalPadding;
  }, [insets.bottom, minBottomPadding, additionalPadding]);

  return { paddingBottom };
};
