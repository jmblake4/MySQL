import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import BlogViewControl from '../viewcontrols/blog/blog.vc';
import BlogNewPostViewControl from '../viewcontrols/blognewpost/blognewpost.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: BlogViewControl },
            // { pattern: '1/classes/Posts', view: BlogViewControl },
            { pattern: 'newPost', view: BlogNewPostViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
