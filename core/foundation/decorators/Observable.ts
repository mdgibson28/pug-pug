export function Observable(target:any, key:string):void {
    const pKey:string = '_' + key;
    const subscriptionsKey:string = '::subscriptions' + pKey;
    const observableKey:string = '::observable' + pKey;

    target['::set' + pKey] = function ():Function {
        return function (newVal:any):void {
            // this function is called at runtime, making `this` available

            // define property for value storage (used only by accessor and setter)
            Object.defineProperty(this, pKey, {
                enumerable: false,
                configurable: true,
                writable: true
            });

            // define property for usage in object
            Object.defineProperty(this, key, {
                get: () => {
                    return this[pKey];
                },
                set: (val) => {
                    this[pKey] = val;
                },
                enumerable: false,
                configurable: false,
                writable: false
            });

            this[pKey] = newVal;
        };
    };

    target['::get' + pKey] = function ():any {
        return function ():any {
            return this[pKey];
        };
    };

    target[subscriptionsKey] = [];
    target[observableKey] = {
        subscribe: (callback:(newVal:any) => void) => {
            target[subscriptionsKey].push(callback);
        },
        unsubscribe: (callback:(newVal:any) => void) => {
            target[subscriptionsKey].filter((subscription:any) => {
                return subscription !== callback;
            });
        },
        next: (newValue:any) => {
            for(let subscription of target[subscriptionsKey]) {
                subscription(newValue);
            }
        }
    }

    Object.freeze(target[observableKey]);

    Object.defineProperty(target, key, {
        get: target['::get' + pKey](),
        set: target['::set' + pKey](),
        enumerable: false,
        configurable: true
    });
}
