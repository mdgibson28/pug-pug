import {DogApiConfig} from '../../../config/api/DogApiConfig';
import {Factory} from '../../foundation/decorators/Factory';
import {Adapter} from '../Adapter';
import {Dependency} from '../../foundation/decorators/Dependency';
import {DependencySet} from '../../foundation/types/DependencySet';

export interface IDependencies extends DependencySet {
    headers:any;
    endpoint:string;
}

@Factory<IDependencies>(DogApiConfig)
export class DogApi extends Adapter<DogApi> {

    @Dependency headers:any;
    @Dependency endpoint:string;

    public async getRandom():Promise<any> {
        return fetch(this.endpoint + 'breeds/image/random', {
            headers: this.headers
        }).then((response) => {
            return response.json();
        }).then((data) => {
            return {
                url: data.message
            }
        })
    }
}
