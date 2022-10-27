import {Observable} from '../Observable';
import {IObservable, ISubscription} from '../../types/Observable';

class Subject {
    @Observable age:IObservable<number>;

    public updateAge(value:number):void {
        this.age.next(value);
    }
}

describe('Observable', () => {

    let subject:Subject;

    beforeEach(() => {
        subject = new Subject();
    })

    it('should behave like an observable', () => {
        let result:number;

        let subscription:ISubscription = subject.age.subscribe((value:number) => {
            result = value;
        });

        subject.updateAge(5);
        expect(result).toEqual(5);
    });

    it('should retain its current value', () => {
        subject.updateAge(5);
        expect(subject.age.current()).toEqual(5);
    });
});
