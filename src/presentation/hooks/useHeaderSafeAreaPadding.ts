/**
 * useHeaderSafeAreaPadding Hook
 *
 * Calculate safe area padding for header components
 * Ensures header has proper spacing from top safe area
 */

import { useMemo } from 'react';
import { useSafeAreaInsets } from './useSafeAreaInsets';

interface HeaderSafeAreaPaddingOptions {
  /**
   * Minimum padding from top (default: 8)
   */
  minPadding?: number;
  /**
   * Additional padding to add (default: 0)
   */
  additionalPadding?: number;
}

/**
 * Get safe area padding for header components
 *
 * @param options - Padding options
 * @returns Padding top value
 *
 * @example
 * ```tsx
 * const paddingTop = useHeaderSafeAreaPadding({ minPadding: 12 });
 * <View style={{ paddingTop }}>
 *   <Header />
 * </View>
 * ```
 */
export const useHeaderSafeAreaPadding = (
  options: HeaderSafeAreaPaddingOptions = {},
): number => {
  const insets = useSafeAreaInsets();
  const { minPadding = 8, additionalPadding = 0 } = options;

  return useMemo(() => {
    return Math.max(insets.top, minPadding) + additionalPadding;
  }, [insets.top, minPadding, additionalPadding]);
};

