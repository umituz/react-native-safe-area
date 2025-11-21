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

### Use SafeAreaHeader wrapper for headers

```tsx
import { SafeAreaHeader } from '@umituz/react-native-safe-area';

function MyHeader() {
  return (
    <SafeAreaHeader minPadding={16} additionalPadding={16}>
      <View>
        <Text>Header Content</Text>
      </View>
    </SafeAreaHeader>
  );
}
```

### Use SafeAreaContent wrapper for content

```tsx
import { SafeAreaContent } from '@umituz/react-native-safe-area';

function MyContent() {
  return (
    <ScrollView>
      <SafeAreaContent minBottomPadding={16} additionalPadding={100}>
        <ContentItems />
      </SafeAreaContent>
    </ScrollView>
  );
}
```

### Use safe area hooks

```tsx
import { 
  useSafeAreaInsets, 
  useSafeAreaFrame,
  useHeaderSafeAreaPadding,
  useStatusBarSafeAreaPadding,
  useContentSafeAreaPadding,
} from '@umituz/react-native-safe-area';

// Basic usage
function MyComponent() {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* Your content */}
    </View>
  );
}

// Header with safe area padding
function Header() {
  const paddingTop = useHeaderSafeAreaPadding({ minPadding: 12 });
  
  return (
    <View style={{ paddingTop }}>
      <HeaderContent />
    </View>
  );
}

// Status bar with safe area padding
function StatusBar() {
  const paddingTop = useStatusBarSafeAreaPadding({ minPadding: 4 });
  
  return (
    <View style={{ paddingTop }}>
      <StatusBarContent />
    </View>
  );
}

// Content with safe area padding
function Content() {
  const { paddingBottom } = useContentSafeAreaPadding({ 
    minBottomPadding: 16,
    additionalPadding: 100 
  });
  
  return (
    <ScrollView contentContainerStyle={{ paddingBottom }}>
      <ContentItems />
    </ScrollView>
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
- `SafeAreaHeader` - Wrapper component for headers with automatic safe area padding
- `SafeAreaContent` - Wrapper component for content with automatic bottom padding

### Hooks

- `useSafeAreaInsets()` - Get safe area insets (top, bottom, left, right)
- `useSafeAreaFrame()` - Get safe area frame dimensions
- `useHeaderSafeAreaPadding(options?)` - Calculate safe area padding for headers
- `useStatusBarSafeAreaPadding(options?)` - Calculate safe area padding for status bars
- `useContentSafeAreaPadding(options?)` - Calculate safe area padding for content

## License

MIT

