import {Adapter} from '../Adapter';
import {SeeRandomDog} from '../../use-cases/see-dog/SeeRandomDog';
import {Dog} from '../../entities';
import {Observable} from '../../foundation/decorators/Observable';
import {IObservable} from '../../foundation/types/Observable';
import {Singleton} from '../../foundation/decorators/Singleton';

@Singleton
export class DogImage extends Adapter<DogImage> {
    private useCase:SeeRandomDog = new SeeRandomDog();

    @Observable dog:IObservable<Dog>;

    public update():void {
        this.useCase.execute().then((dog:Dog) => {
            this.dog.next(dog);
        });
    }
}
