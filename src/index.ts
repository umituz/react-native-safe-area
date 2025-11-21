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
export { SafeAreaHeader } from './presentation/components/SafeAreaHeader';
export type { SafeAreaHeaderProps } from './presentation/components/SafeAreaHeader';
export { SafeAreaContent } from './presentation/components/SafeAreaContent';
export type { SafeAreaContentProps } from './presentation/components/SafeAreaContent';

// =============================================================================
// PRESENTATION LAYER - Hooks
// =============================================================================

export { useSafeAreaInsets } from './presentation/hooks/useSafeAreaInsets';
export { useSafeAreaFrame } from './presentation/hooks/useSafeAreaFrame';
export { useHeaderSafeAreaPadding } from './presentation/hooks/useHeaderSafeAreaPadding';
export { useStatusBarSafeAreaPadding } from './presentation/hooks/useStatusBarSafeAreaPadding';
export { useContentSafeAreaPadding } from './presentation/hooks/useContentSafeAreaPadding';

