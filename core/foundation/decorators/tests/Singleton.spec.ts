import {Singleton} from '../Singleton';

@Singleton class Subject {
    public age:number;

    constructor() {
    }
}

describe('Singleton', () => {
    let subject:Subject;

    beforeAll(() => {
        subject = new Subject();
    });

    it('should behave as a singleton', () => {
        expect(subject.age).toBeUndefined();
        subject.age = 5;

        let newSubject:Subject = new Subject();
        expect(newSubject.age).toEqual(5);
    });

    it('should still behave as a singleton', () => {
        let anotherNewSubject:Subject = new Subject();
        expect(anotherNewSubject.age).toEqual(5);
    })
});
