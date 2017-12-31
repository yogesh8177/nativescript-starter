import { EventData, fromObject } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {

    const page = <Page>args.object;
    const source = page.navigationContext;

    page.bindingContext = source;
}