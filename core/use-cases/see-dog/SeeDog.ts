import {UseCase} from '../UseCase';
import {dependencies} from './dependencies';
import {Factory} from '../../foundation/decorators/Factory';
import {DependencySet} from '../../foundation/types/DependencySet';
import {Dog} from '../../entities';
import {Dependency} from '../../foundation/decorators/Dependency';

export interface IDependencies extends DependencySet {
    provider: {fetch: () => Promise<Partial<Dog>>;};
}

@Factory<IDependencies>(dependencies)
export class SeeDog extends UseCase<SeeDog> {

    @Dependency provider:{fetch: () => Promise<Partial<Dog>>;};

    public async execute():Promise<Dog> {
        const dog:Dog = new Dog();

        await this.provider.fetch().then((data:Partial<Dog>) => {
            Object.assign(dog, data);
        });

        return dog;
    }
}
