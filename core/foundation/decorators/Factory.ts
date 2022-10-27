import {Constructor} from '../types/Constructor';
import {DependencySet} from '../types/DependencySet';

export function Factory<T extends DependencySet>(dependencies?:T) {
    return function factory<U extends Constructor>(constructor:U) {

        return new Proxy(
            constructor,
            {
                construct(source:U, args:any[], target:U) {
                    const result:U = Reflect.construct(source, args, target);

                    for (let key in dependencies) {
                        Object.defineProperty(result, key, {
                            value: dependencies[key],
                            writable: false,
                            enumerable: false,
                            configurable: false
                        });
                    }

                    return result;
                }
            }
        )

        // return class extends constructor {
        //     constructor(...args:any[]) {
        //         super(...args);
        //         if (dependencies) {
        //             for (let key in dependencies) {
        //                 Object.defineProperty(this, key, {
        //                     value: dependencies[key],
        //                     writable: false,
        //                     enumerable: false,
        //                     configurable: false
        //                 });
        //             }
        //         }
        //
        //         if (this._initialize) {
        //             this._initialize();
        //         }
        //     }
        // };
    }
}
