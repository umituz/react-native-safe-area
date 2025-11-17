/**
 * useSafeAreaFrame Hook
 *
 * Get safe area frame with web support
 */

import { useSafeAreaFrame as useNativeSafeAreaFrame } from 'react-native-safe-area-context';
import type { SafeAreaFrame } from '../../domain/entities/SafeAreaTypes';

/**
 * Get safe area frame
 *
 * Returns safe area frame dimensions (x, y, width, height).
 */
export const useSafeAreaFrame = (): SafeAreaFrame => {
  return useNativeSafeAreaFrame();
};

