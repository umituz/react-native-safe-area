# @umituz/react-native-safe-area

Safe area context provider and hooks for React Native apps with web support.

## Installation

```bash
npm install @umituz/react-native-safe-area react-native-safe-area-context
```

## Usage

### Wrap your app with SafeAreaProvider

```tsx
import { SafeAreaProvider } from '@umituz/react-native-safe-area';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Your app content */}
    </SafeAreaProvider>
  );
}
```

### Use safe area hooks

```tsx
import { useSafeAreaInsets, useSafeAreaFrame } from '@umituz/react-native-safe-area';

function MyComponent() {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* Your content */}
    </View>
  );
}
```

## Features

- ✅ Web support with default insets
- ✅ TypeScript support
- ✅ Works with react-native-safe-area-context
- ✅ Zero configuration required

## API

### Components

- `SafeAreaProvider` - Provider component that wraps your app

### Hooks

- `useSafeAreaInsets()` - Get safe area insets (top, bottom, left, right)
- `useSafeAreaFrame()` - Get safe area frame dimensions

## License

MIT

