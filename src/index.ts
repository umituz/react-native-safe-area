/**
 * @umituz/react-native-safe-area - Public API
 *
 * Safe area context provider and hooks for React Native apps with web support.
 *
 * Usage:
 *   import { SafeAreaProvider, useSafeAreaInsets } from '@umituz/react-native-safe-area';
 */

// =============================================================================
// DOMAIN LAYER - Entities
// =============================================================================

export type {
  SafeAreaInsets,
  SafeAreaFrame,
  SafeAreaMetrics,
} from './domain/entities/SafeAreaTypes';

// =============================================================================
// PRESENTATION LAYER - Components
// =============================================================================

export { SafeAreaProvider } from './presentation/components/SafeAreaProvider';
export type { SafeAreaProviderProps } from './presentation/components/SafeAreaProvider';

// =============================================================================
// PRESENTATION LAYER - Hooks
// =============================================================================

export { useSafeAreaInsets } from './presentation/hooks/useSafeAreaInsets';
export { useSafeAreaFrame } from './presentation/hooks/useSafeAreaFrame';

