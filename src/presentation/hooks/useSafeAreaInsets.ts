/**
 * useSafeAreaInsets Hook
 *
 * Get safe area insets with web support
 */

import { Platform } from 'react-native';
import { useSafeAreaInsets as useNativeSafeAreaInsets } from 'react-native-safe-area-context';
import type { SafeAreaInsets } from '../../domain/entities/SafeAreaTypes';

// Type declaration for window (web only)
declare const window: {
  self?: Window;
  top?: Window;
} | undefined;

/**
 * Get safe area insets
 *
 * Returns safe area insets (top, bottom, left, right).
 * On web, provides default insets if context is not available.
 */
export const useSafeAreaInsets = (): SafeAreaInsets => {
  const nativeInsets = useNativeSafeAreaInsets();

  // On web, provide default insets for tablet/desktop views
  if (Platform.OS === 'web') {
    const isTabletAndAbove =
      typeof window !== 'undefined' ? window.self !== window.top : true;

    if (isTabletAndAbove) {
      return {
        top: 64,
        bottom: 34,
        left: 0,
        right: 0,
      };
    }
  }

  return nativeInsets;
};

