/**
 * Safe Area Types
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

