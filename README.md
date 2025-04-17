# Log4TS

A powerful, flexible logging library for TypeScript applications with colored output and emojis. Inspired by Apache Log4j, this library brings the robust logging patterns of Log4j to the TypeScript ecosystem.

## Inspiration

Log4TS is inspired by [Apache Log4j](https://logging.apache.org/log4j/2.x/), bringing its proven logging patterns and concepts to TypeScript:
- Hierarchical logging architecture
- Multiple output appenders
- Customizable layouts
- Log levels
- Pattern-based formatting

While maintaining these core concepts, Log4TS adds modern features like:
- 🎨 Colored console output
- 🎯 TypeScript-first implementation
- 🎁 Emoji indicators for different log levels
- 📝 Modern ES6+ features

## Features

- 🎨 Colored console output
- 🎯 Multiple log levels (TRACE, DEBUG, INFO, WARN, ERROR, FATAL)
- 🔧 Customizable layouts and patterns
- 🎁 Emoji indicators for different log levels
- 📝 Placeholder substitution (`{}`)
- ⚡ Stack trace support for errors
- 🔌 Extensible appender system

## Installation

```bash
npm install @rs-r2d2/log4ts
```

## Quick Start

```typescript
import { LogManager, ConsoleAppender } from '@rs-r2d2/log4ts';

// Get a logger instance
const logger = LogManager.getLogger('MyApp');

// Add console appender
logger.addAppender(new ConsoleAppender());

// Log some messages
logger.info('Application started');
logger.debug('Processing data: {}', someData);
logger.error('An error occurred', error);
```

## Log Levels

The library supports the following log levels (in order of severity):

- 🔍 TRACE - Detailed debugging information
- 🐛 DEBUG - Debugging information
- ℹ️ INFO - General information
- ⚠️ WARN - Warning messages
- ❌ ERROR - Error messages
- 💀 FATAL - Critical errors that may cause application termination

## Pattern Layout

The pattern layout supports the following placeholders:

- `%d` - Date/time
- `%p` - Log level
- `%c` - Logger name
- `%m` - Log message

Example:
```typescript
new PatternLayout('[%d] [%p] %c - %m');
```

## Custom Colors and Icons

You can customize colors and icons for different log levels:

```typescript
const customConfig = new ColorConfig({
    [LogLevel.INFO]: { color: 'blue', icon: '✨' }
});

const layout = new PatternLayout('[%d] [%p] %c - %m', customConfig);
const appender = new ConsoleAppender(layout);
```

## Testing

Run the test suite:

```bash
npm test
```

## License

MIT