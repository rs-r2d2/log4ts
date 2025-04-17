import { LogEvent } from '../core/LogEvent';

export interface Layout {
    format(event: LogEvent): string;
}