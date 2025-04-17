import { PatternLayout } from '../PatternLayout';
import { LogEvent } from '../../core/LogEvent';
import { LogLevel } from '../../core/LogLevel';

describe('PatternLayout', () => {
    let layout: PatternLayout;
    let mockEvent: LogEvent;

    beforeEach(() => {
        layout = new PatternLayout();
        mockEvent = {
            message: 'Test message',
            level: LogLevel.INFO,
            timestamp: new Date('2025-04-17T12:00:00Z'),
            loggerName: 'TestLogger'
        };
    });

    test('should format message with default pattern', () => {
        const formatted = layout.format(mockEvent);
        expect(formatted).toContain('[2025-04-17T12:00:00.000Z]');
        expect(formatted).toContain('[INFO]');
        expect(formatted).toContain('TestLogger');
        expect(formatted).toContain('Test message');
    });

    test('should include error stack trace when present', () => {
        const error = new Error('Test error');
        const eventWithError = { ...mockEvent, error };
        const formatted = layout.format(eventWithError);
        expect(formatted).toContain('Test error');
        expect(formatted).toContain('Error:');
    });

    test('should use custom pattern', () => {
        layout = new PatternLayout('%p: %m');
        const formatted = layout.format(mockEvent);
        // Using includes instead of exact match due to color formatting
        expect(formatted).toContain('INFO:');
        expect(formatted).toContain('Test message');
    });
});