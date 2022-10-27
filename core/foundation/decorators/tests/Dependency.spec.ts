import {Dependency} from '../Dependency';
import {Factory} from '../Factory';

@Factory({name: 'Timmy Droptables'}) class Subject {

    @Dependency name:string;
}

describe('Dependency', () => {

    it('should not be enumerable', () => {
        let subject:Subject = new Subject();
        const config:any = Object.getOwnPropertyDescriptor(subject, 'name');

        expect(config.enumerable).toBe(false);
    });

    it('should be configurable', () => {
        let subject:Subject = new Subject();
        const config:any = Object.getOwnPropertyDescriptor(subject, 'name');

        expect(config.configurable).toBe(false);
    });
});
