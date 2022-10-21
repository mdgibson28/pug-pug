import {dependencies} from './dependencies';
import {Dependency} from '../../foundation/decorators/Dependency';
import {Factory} from '../../foundation/decorators/Factory';
import {Entity} from '../Entity';
import {DependencySet} from '../../foundation/types/DependencySet';

export interface IExampleDependencies extends DependencySet {
    idMaker: {makeId: () => string;};
}

@Factory<IExampleDependencies>(dependencies)
export class Example extends Entity<Example> {
    @Dependency idMaker: {makeId: () => string};

    public name:string;
    public id:string;

    _initialize() {
        this.id = this.idMaker.makeId();
    }
}
