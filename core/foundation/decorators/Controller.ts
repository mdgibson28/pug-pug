export const CONTROLLER_KEY = Symbol();

export type Controller<T extends new (...args: any[]) => any> = T & {
    [CONTROLLER_KEY]: T extends new (...args: any[]) => infer I ? I : never
};

export const Controller = <T extends new (...args: any[]) => any>(type: T) =>
    new Proxy(type, {
        // this will hijack the constructor
        construct(target: Controller<T>, argsList, newTarget) {
            // we should skip the proxy for children of our target class
            if (target.prototype !== newTarget.prototype) {
                return Reflect.construct(target, argsList, newTarget);
            }
            // if our target class does not have an instance, create it
            if (!target[CONTROLLER_KEY]) {
                target[CONTROLLER_KEY] = Reflect.construct(target, argsList, newTarget);
            }
            // return the instance we created!
            return target[CONTROLLER_KEY];
        }
    });
