/**
 * Safe Area Types
 *
 * Type definitions for safe area insets and frame
 */

export interface SafeAreaInsets {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface SafeAreaFrame {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SafeAreaMetrics {
  insets: SafeAreaInsets;
  frame: SafeAreaFrame;
}

