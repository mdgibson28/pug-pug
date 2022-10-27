/*
References:
 - https://trevoratlas.com/posts/how-to-create-a-typescript-singleton-decorator
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */

import {Constructor} from '../types/Constructor';

export const SINGLETON_KEY = Symbol();

export type Singleton<T extends Constructor> = T&{
    [SINGLETON_KEY]:T extends new (...args:any[]) => infer I ? I : never
};

export const Singleton = <T extends Constructor>(type:T) => new Proxy(
    type,
    {
        construct(source:Singleton<T>, args:any[], target:T) {
            if (source.prototype !== target.prototype) {
                return Reflect.construct(source, args, target);
            }

            return source[SINGLETON_KEY] = !source[SINGLETON_KEY]
                ? Reflect.construct(source, args, target)
                : source[SINGLETON_KEY];
        }
    }
);
