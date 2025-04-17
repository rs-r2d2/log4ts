import { LogEvent } from '../core/LogEvent';
import { Layout } from '../layouts/Layout';

export interface Appender {
    append(event: LogEvent): void;
    setLayout(layout: Layout): void;
}