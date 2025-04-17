import chalk from 'chalk';
import { LogLevel } from './LogLevel';

type ChalkColor = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';

export interface LogStyle {
    color: ChalkColor;
    icon: string;
}

export const DEFAULT_LOG_STYLES: Record<LogLevel, LogStyle> = {
    [LogLevel.TRACE]: { color: 'gray', icon: '🔍' },
    [LogLevel.DEBUG]: { color: 'blue', icon: '🐛' },
    [LogLevel.INFO]: { color: 'green', icon: 'ℹ️' },
    [LogLevel.WARN]: { color: 'yellow', icon: '⚠️' },
    [LogLevel.ERROR]: { color: 'red', icon: '❌' },
    [LogLevel.FATAL]: { color: 'red', icon: '💀' },
    [LogLevel.ALL]: { color: 'white', icon: '📝' },
    [LogLevel.OFF]: { color: 'white', icon: '🚫' }
};

export class ColorConfig {
    private styles: Record<LogLevel, LogStyle>;

    constructor(customStyles?: Partial<Record<LogLevel, LogStyle>>) {
        this.styles = { ...DEFAULT_LOG_STYLES };
        if (customStyles) {
            Object.assign(this.styles, customStyles);
        }
    }

    formatMessage(level: LogLevel, message: string): string {
        const style = this.styles[level];
        return `${style.icon} ${chalk[style.color](message)}`;
    }
}