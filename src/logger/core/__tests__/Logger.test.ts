import { Logger } from '../Logger';
import { ConsoleAppender } from '../../appenders/ConsoleAppender';
import { LogLevel } from '../LogLevel';

describe('Logger', () => {
    let logger: Logger;
    let mockAppender: jest.Mocked<ConsoleAppender>;
    
    beforeEach(() => {
        mockAppender = {
            append: jest.fn(),
            setLayout: jest.fn()
        } as any;
        logger = new Logger('TestLogger');
        logger.addAppender(mockAppender);
    });

    test('should create log events with correct level and message', () => {
        logger.info('Test message');
        
        expect(mockAppender.append).toHaveBeenCalledWith(expect.objectContaining({
            level: LogLevel.INFO,
            message: 'Test message',
            loggerName: 'TestLogger'
        }));
    });

    test('should handle placeholder substitution', () => {
        logger.debug('Test {} with {}', 'message', 123);
        
        expect(mockAppender.append).toHaveBeenCalledWith(expect.objectContaining({
            level: LogLevel.DEBUG,
            message: 'Test message with 123'
        }));
    });

    test('should handle error objects', () => {
        const error = new Error('Test error');
        logger.error('Failed', error);
        
        expect(mockAppender.append).toHaveBeenCalledWith(expect.objectContaining({
            level: LogLevel.ERROR,
            message: 'Failed',
            error
        }));
    });
});