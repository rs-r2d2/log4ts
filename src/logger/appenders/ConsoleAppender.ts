import { Appender } from './Appender';
import { LogEvent } from '../core/LogEvent';
import { Layout } from '../layouts/Layout';
import { PatternLayout } from '../layouts/PatternLayout';

export class ConsoleAppender implements Appender {
    private layout: Layout;

    constructor(layout?: Layout) {
        this.layout = layout || new PatternLayout();
    }

    append(event: LogEvent): void {
        const formattedMessage = this.layout.format(event);
        console.log(formattedMessage);
    }

    setLayout(layout: Layout): void {
        this.layout = layout;
    }
}