import {ISubscription} from '../types/Observable';

export function Observable(target:any, key:string):void {
    const pKey:string = '_' + key;
    const subscriptionsKey:string = '::subscriptions' + pKey;
    const observableKey:string = '::observable' + pKey;

    target[subscriptionsKey] = [];
    target[key] = {
        subscribe: (callback:(newVal:any) => void):ISubscription => {
            target[subscriptionsKey].push(callback);
            return Object.freeze({
                unsubscribe() {
                    target[subscriptionsKey].filter((subscription:any) => {
                        return subscription !== callback;
                    });
                }
            });
        },
        next: (newValue:any) => {
            for(let subscription of target[subscriptionsKey]) {
                subscription(newValue);
            }
        }
    }

    Object.freeze(target[observableKey]);
}
