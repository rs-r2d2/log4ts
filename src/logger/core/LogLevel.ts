export enum LogLevel {
    ALL = 0,
    TRACE = 100,
    DEBUG = 200,
    INFO = 300,
    WARN = 400,
    ERROR = 500,
    FATAL = 600,
    OFF = Number.MAX_VALUE
}

export function getLevelName(level: LogLevel): string {
    return LogLevel[level];
}