import { Logger } from './Logger';

export class LogManager {
    private static loggers: Map<string, Logger> = new Map();

    static getLogger(name: string): Logger {
        let logger = this.loggers.get(name);
        if (!logger) {
            logger = new Logger(name);
            this.loggers.set(name, logger);
        }
        return logger;
    }
}