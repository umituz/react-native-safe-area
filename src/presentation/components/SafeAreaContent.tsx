/**
 * SafeAreaContent Component
 *
 * Wrapper component that automatically applies safe area padding to content
 * Eliminates the need to manually calculate bottom padding in scroll views
 */

import React, { ReactNode } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { useContentSafeAreaPadding } from '../hooks/useContentSafeAreaPadding';

export interface SafeAreaContentProps {
  /**
   * Content to wrap
   */
  children: ReactNode;
  /**
   * Minimum padding from bottom (default: 16)
   */
  minBottomPadding?: number;
  /**
   * Additional padding to add (default: 0)
   */
  additionalPadding?: number;
  /**
   * Custom style to apply to container
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Background color (optional, can be set via style)
   */
  backgroundColor?: string;
}

/**
 * Safe Area Content
 *
 * Automatically applies safe area bottom padding to content components.
 * Use this wrapper for ScrollView contentContainerStyle or content containers.
 *
 * @example
 * ```tsx
 * <ScrollView
 *   contentContainerStyle={safeAreaContentStyle}
 * >
 *   <SafeAreaContent minBottomPadding={16} additionalPadding={100}>
 *     <Content />
 *   </SafeAreaContent>
 * </ScrollView>
 * ```
 */
export const SafeAreaContent: React.FC<SafeAreaContentProps> = ({
  children,
  minBottomPadding = 16,
  additionalPadding = 0,
  style,
  backgroundColor,
}) => {
  const { paddingBottom } = useContentSafeAreaPadding({
    minBottomPadding,
    additionalPadding,
  });

  return (
    <View
      style={[
        {
          paddingBottom,
          backgroundColor,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

