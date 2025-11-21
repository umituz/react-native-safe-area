/**
 * useStatusBarSafeAreaPadding Hook
 *
 * Calculate safe area padding for status bar components
 * Ensures status bar has proper spacing from top safe area
 */

import { useMemo } from 'react';
import { useSafeAreaInsets } from './useSafeAreaInsets';

interface StatusBarSafeAreaPaddingOptions {
  /**
   * Minimum padding from top (default: 4)
   */
  minPadding?: number;
}

/**
 * Get safe area padding for status bar components
 *
 * @param options - Padding options
 * @returns Padding top value
 *
 * @example
 * ```tsx
 * const paddingTop = useStatusBarSafeAreaPadding({ minPadding: 4 });
 * <View style={{ paddingTop }}>
 *   <StatusBar />
 * </View>
 * ```
 */
export const useStatusBarSafeAreaPadding = (
  options: StatusBarSafeAreaPaddingOptions = {},
): number => {
  const insets = useSafeAreaInsets();
  const { minPadding = 4 } = options;

  return useMemo(() => {
    return Math.max(insets.top, minPadding);
  }, [insets.top, minPadding]);
};

