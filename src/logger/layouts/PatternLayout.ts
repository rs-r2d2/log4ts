import { Layout } from './Layout';
import { LogEvent } from '../core/LogEvent';
import { getLevelName } from '../core/LogLevel';
import { ColorConfig } from '../core/ColorConfig';

export class PatternLayout implements Layout {
    private colorConfig: ColorConfig;

    constructor(
        private pattern: string = '[%d] [%p] %c - %m',
        colorConfig?: ColorConfig
    ) {
        this.colorConfig = colorConfig || new ColorConfig();
    }

    format(event: LogEvent): string {
        const baseMessage = this.pattern
            .replace('%d', event.timestamp.toISOString())
            .replace('%p', getLevelName(event.level))
            .replace('%c', event.loggerName)
            .replace('%m', event.message);

        const coloredMessage = this.colorConfig.formatMessage(event.level, baseMessage);
        return coloredMessage + (event.error ? '\n' + event.error.stack : '');
    }
}