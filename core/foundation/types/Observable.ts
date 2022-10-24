export interface IObservable<T> {
    subscribe:(callback:(newValue:T) => void);
    unsubscribe:(reference:any) => void;
    next:(newValue:T) => void;
}
