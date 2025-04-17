export * from './logger/core/LogLevel';
export * from './logger/core/LogEvent';
export * from './logger/core/Logger';
export * from './logger/core/LogManager';
export * from './logger/layouts/Layout';
export * from './logger/layouts/PatternLayout';
export * from './logger/appenders/Appender';
export * from './logger/appenders/ConsoleAppender';

// Example usage
import { LogManager } from './logger/core/LogManager';
import { ConsoleAppender } from './logger/appenders/ConsoleAppender';

// Get a logger instance
const logger = LogManager.getLogger('MyApp');

// Add console appender
logger.addAppender(new ConsoleAppender());

// Log some messages
logger.info('Application started');
logger.debug('Debug message with parameter: {}', 42);
try {
    throw new Error('Something went wrong');
} catch (error) {
    logger.error('An error occurred', error);
}
