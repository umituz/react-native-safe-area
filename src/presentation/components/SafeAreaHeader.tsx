/**
 * SafeAreaHeader Component
 *
 * Wrapper component that automatically applies safe area padding to headers
 * Eliminates the need to manually calculate padding in every header component
 */

import React, { ReactNode } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { useHeaderSafeAreaPadding } from '../hooks/useHeaderSafeAreaPadding';

export interface SafeAreaHeaderProps {
  /**
   * Header content to wrap
   */
  children: ReactNode;
  /**
   * Minimum padding from top (default: 8)
   */
  minPadding?: number;
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
 * Safe Area Header
 *
 * Automatically applies safe area padding to header components.
 * Use this wrapper instead of manually calculating padding in each header.
 *
 * @example
 * ```tsx
 * <SafeAreaHeader minPadding={16} additionalPadding={16}>
 *   <View>
 *     <Text>Header Content</Text>
 *   </View>
 * </SafeAreaHeader>
 * ```
 */
export const SafeAreaHeader: React.FC<SafeAreaHeaderProps> = ({
  children,
  minPadding = 8,
  additionalPadding = 0,
  style,
  backgroundColor,
}) => {
  const paddingTop = useHeaderSafeAreaPadding({
    minPadding,
    additionalPadding,
  });

  return (
    <View
      style={[
        {
          paddingTop,
          backgroundColor,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

