import {Constructor} from '../types/Constructor';
import {DependencySet} from '../types/DependencySet';
import {InitializableClass} from '../InitializableClass';

export function Factory<T extends DependencySet>(dependencies?:T) {
    return function factory<U extends Constructor>(constructor:U) {
        return class extends constructor {
            constructor(...args:any[]) {
                super(...args);
                if (dependencies) {
                    for(let key in dependencies) {
                        Object.defineProperty(this, key, {
                            value: dependencies[key],
                            writable: false,
                            enumerable: false,
                            configurable: false
                        });
                    }
                }

                this._initialize();
            }
        };
    }
}
