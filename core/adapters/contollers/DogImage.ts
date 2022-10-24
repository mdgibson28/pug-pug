import {Factory} from '../../foundation/decorators/Factory';
import {Adapter} from '../Adapter';
import {SeeRandomDog} from '../../use-cases/see-dog/SeeRandomDog';
import {Dog} from '../../entities';
import {Dependency} from '../../foundation/decorators/Dependency';
import {Observable} from '../../foundation/decorators/Observable';
import {IObservable} from '../../foundation/types/Observable';

interface IDependency {
    useCase:SeeRandomDog
}

@Factory<IDependency>({useCase:new SeeRandomDog()})
export class DogImage extends Adapter<DogImage> {
    @Dependency useCase:SeeRandomDog;

    @Observable dog:IObservable<Dog>;

    public update():void {
        this.useCase.execute().then((dog:Dog) => {
            this.dog.next(dog);
        });
    }
}
