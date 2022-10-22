import {dependencies} from './dependencies';
import {Factory} from '../../foundation/decorators/Factory';
import {Adapter} from '../Adapter';
import {Dependency} from '../../foundation/decorators/Dependency';
import {DependencySet} from '../../foundation/types/DependencySet';

export interface IDependencies extends DependencySet {
    apiKey:string;
}

@Factory<IDependencies>(dependencies)
export class DogApi extends Adapter<DogApi> {

    @Dependency apiKey:string;

    public async getRandom():Promise<any> {

    }

    protected getHeaders():any {
        return {
            'x-rapidapi-host': '',
            'x-rapidapi-key': '',
            'x-rapidapi-ua': ''
        }
    }
}
