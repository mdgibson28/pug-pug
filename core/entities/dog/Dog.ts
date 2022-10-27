import {dependencies} from './dependencies';
import {Factory} from '../../foundation/decorators/Factory';
import {Entity} from '../Entity';
import {DependencySet} from '../../foundation/types/DependencySet';

export interface IDependencies extends DependencySet {
}

@Factory<IDependencies>(dependencies)
export class Dog extends Entity<Dog> {

    public breed:string;
    public url:string;

}
