import { ColorConfig } from '../ColorConfig';
import { LogLevel } from '../LogLevel';

describe('ColorConfig', () => {
    let colorConfig: ColorConfig;

    beforeEach(() => {
        colorConfig = new ColorConfig();
    });

    test('should format message with default styles', () => {
        const message = colorConfig.formatMessage(LogLevel.INFO, 'Test message');
        expect(message).toContain('ℹ️'); // Should include default INFO icon
        expect(message).toContain('Test message');
    });

    test('should accept custom styles', () => {
        const customConfig = new ColorConfig({
            [LogLevel.INFO]: { color: 'cyan', icon: '🚀' }
        });
        const message = customConfig.formatMessage(LogLevel.INFO, 'Test message');
        expect(message).toContain('🚀'); // Should include custom icon
        expect(message).toContain('Test message');
    });

    test('should preserve default styles for non-customized levels', () => {
        const customConfig = new ColorConfig({
            [LogLevel.INFO]: { color: 'cyan', icon: '🚀' }
        });
        const message = customConfig.formatMessage(LogLevel.ERROR, 'Test message');
        expect(message).toContain('❌'); // Should include default ERROR icon
        expect(message).toContain('Test message');
    });
});