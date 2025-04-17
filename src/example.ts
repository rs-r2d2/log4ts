import { LogManager } from './logger/core/LogManager';
import { ConsoleAppender } from './logger/appenders/ConsoleAppender';
import { PatternLayout } from './logger/layouts/PatternLayout';
import { ColorConfig } from './logger/core/ColorConfig';
import { LogLevel } from './logger/core/LogLevel';

// Create a custom color configuration
const customColors = new ColorConfig({
    [LogLevel.INFO]: { color: 'cyan', icon: '🚀' }
});

// Create a logger with custom layout
const logger = LogManager.getLogger('ExampleApp');
const layout = new PatternLayout('[%d] [%p] %c - %m', customColors);
const appender = new ConsoleAppender(layout);
logger.addAppender(appender);

// Example usage of different log levels
logger.trace('Detailed debugging information');
logger.debug('Debug message with parameter: {}', 42);
logger.info('Application started successfully');
logger.warn('Warning: Resource usage at {}%', 85);

try {
    throw new Error('Something went wrong');
} catch (error) {
    logger.error('Failed to process request', error);
}

logger.fatal('Critical system error');