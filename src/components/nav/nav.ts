import { IDisposable, customElement } from 'aurelia';
import {
    IRouterEvents,
    NavigationEndEvent,
} from '@aurelia/router-lite';

@customElement('au-nav')
export default class Nav implements IDisposable {
    protected _links;
    protected _url: string;
    protected _subscription: IDisposable;

    constructor(@IRouterEvents events: IRouterEvents) {
        this._links = [
            {
                path: '/',
                label: 'Home'
            },
            {
                path: '/about',
                label: 'About'
            }
        ];

        this._subscription = events.subscribe('au:router:navigation-end', (event: NavigationEndEvent) => {
            this._url = '/' + event.finalInstructions.toPath();
        });
    }
    dispose(): void {
        this._subscription.dispose();
    }
}