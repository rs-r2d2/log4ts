import { LogLevel } from './LogLevel';

export interface LogEvent {
    message: string;
    level: LogLevel;
    timestamp: Date;
    loggerName: string;
    error?: Error;
    data?: Record<string, any>;
}