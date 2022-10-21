
export function Dependency(target:any, key:string):void {
    let pKey:string = '_' + key;

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

    // Set up property on class that will initialize on get/set and turn into the
    // object we want to use but can't make until after object is initialized
    Object.defineProperty(target, key, {
        get: target['::get' + pKey](),
        set: target['::set' + pKey](),
        enumerable: false,
        configurable: true
    });
}
