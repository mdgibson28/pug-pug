import {UseCase} from '../UseCase';
import {dependencies} from './dependencies';
import {Factory} from '../../foundation/decorators/Factory';
import {DependencySet} from '../../foundation/types/DependencySet';
import {Dog} from '../../entities';
import {Dependency} from '../../foundation/decorators/Dependency';

export interface IDependencies extends DependencySet {
    provider:{getRandom:() => Promise<Dog>};
}

@Factory<IDependencies>(dependencies)
export class SeeRandomDog extends UseCase<SeeRandomDog> {

    @Dependency provider:{getRandom:() => Promise<Dog>};

    public async execute():Promise<Dog> {
        const dog:Dog = new Dog();

        await this.provider.getRandom().then((data:Partial<Dog>) => {
            console.log(data);
            Object.assign(dog, data);
        });

        return dog;
    }
}
