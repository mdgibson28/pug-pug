export interface IObservable<T> {
    subscribe:(callback:(newValue:T) => void) => any;
    unsubscribe:(reference:any) => void;
    next:(newValue:T) => void;
    current:() => T;
}

export interface ISubscription {
    unsubscribe():void;
}
