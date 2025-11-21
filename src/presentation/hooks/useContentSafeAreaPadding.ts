/**
 * useContentSafeAreaPadding Hook
 *
 * Calculate safe area padding for content components
 * Ensures content has proper spacing from bottom safe area
 */

import { useMemo } from 'react';
import { useSafeAreaInsets } from './useSafeAreaInsets';

interface ContentSafeAreaPaddingOptions {
  /**
   * Minimum padding from bottom (default: 16)
   */
  minBottomPadding?: number;
  /**
   * Additional padding to add (default: 0)
   */
  additionalPadding?: number;
}

/**
 * Get safe area padding for content components
 *
 * @param options - Padding options
 * @returns Object with paddingBottom value
 *
 * @example
 * ```tsx
 * const { paddingBottom } = useContentSafeAreaPadding({ 
 *   minBottomPadding: 16,
 *   additionalPadding: 100 
 * });
 * <ScrollView contentContainerStyle={{ paddingBottom }}>
 *   <Content />
 * </ScrollView>
 * ```
 */
export const useContentSafeAreaPadding = (
  options: ContentSafeAreaPaddingOptions = {},
): { paddingBottom: number } => {
  const insets = useSafeAreaInsets();
  const { minBottomPadding = 16, additionalPadding = 0 } = options;

  const paddingBottom = useMemo(() => {
    return Math.max(insets.bottom, minBottomPadding) + additionalPadding;
  }, [insets.bottom, minBottomPadding, additionalPadding]);

  return { paddingBottom };
};

