import {ISubscription} from '../types/Observable';

export function Observable(target:any, key:string):void {
    const pKey:string = '_' + key;
    const subscriptionsKey:string =  pKey + '::subscriptions';
    const observableKey:string = pKey + '::observable';
    const valueKey:string = pKey + '::value';

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
            target[valueKey] = newValue;
            for(let subscription of target[subscriptionsKey]) {
                subscription(newValue);
            }
        },
        current: () => {
            return target[valueKey];
        }
    }

    Object.freeze(target[observableKey]);
}
