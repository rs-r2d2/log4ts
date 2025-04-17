import { LogLevel } from './LogLevel';
import { LogEvent } from './LogEvent';
import { Appender } from '../appenders/Appender';

export class Logger {
    private appenders: Appender[] = [];

    constructor(private name: string) {}

    addAppender(appender: Appender): void {
        this.appenders.push(appender);
    }

    private log(level: LogLevel, message: string, ...args: any[]): void {
        const error = args.length > 0 && args[args.length - 1] instanceof Error 
            ? args.pop() 
            : undefined;

        const formattedMessage = args.length > 0 
            ? message.replace(/\{\}/g, () => String(args.shift()))
            : message;

        const event: LogEvent = {
            message: formattedMessage,
            level,
            timestamp: new Date(),
            loggerName: this.name,
            error
        };

        this.appenders.forEach(appender => appender.append(event));
    }

    trace(message: string, ...args: any[]): void {
        this.log(LogLevel.TRACE, message, ...args);
    }

    debug(message: string, ...args: any[]): void {
        this.log(LogLevel.DEBUG, message, ...args);
    }

    info(message: string, ...args: any[]): void {
        this.log(LogLevel.INFO, message, ...args);
    }

    warn(message: string, ...args: any[]): void {
        this.log(LogLevel.WARN, message, ...args);
    }

    error(message: string, ...args: any[]): void {
        this.log(LogLevel.ERROR, message, ...args);
    }

    fatal(message: string, ...args: any[]): void {
        this.log(LogLevel.FATAL, message, ...args);
    }
}