export interface IObservable<T> {
    subscribe:(callback:(newValue:T) => void) => any;
    unsubscribe:(reference:any) => void;
    next:(newValue:T) => void;
}

export interface ISubscription {
    unsubscribe():void;
}
