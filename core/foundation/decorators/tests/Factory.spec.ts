import {Factory} from '../Factory';
import {DependencySet} from '../../types/DependencySet';
import {Dependency} from '../Dependency';

@Factory<DependencySet>({ age: 5 }) class Subject {

    @Dependency age:number;

    constructor(public name?:string) {
    }

    getAge():number {
        return this.age;
    }
}

describe('Factory', () => {

    it('should behave like a factory', () => {
        let subject:Subject = new Subject();
        expect(subject.getAge()).toEqual(5);
    });

    it('should pass along constructor values', () => {
        const name:string = 'Little Timmy Drop Tables';
        let subject:Subject = new Subject(name);
        expect(subject.name).toEqual(name);
    });
});
