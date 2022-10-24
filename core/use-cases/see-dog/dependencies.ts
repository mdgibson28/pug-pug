import {IDependencies} from './SeeRandomDog';
import {DogApi} from '../../adapters';

// here is where i will bring in the class that calls the api
export const dependencies:IDependencies = {
    provider: new DogApi()
}
