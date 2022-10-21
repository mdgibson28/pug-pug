import {UseCase} from '../UseCase';
import {dependencies} from './dependencies';
import {Dependency} from '../../foundation/decorators/Dependency';
import {Factory} from '../../foundation/decorators/Factory';
import {DependencySet} from '../../foundation/types/DependencySet';
import {Example as EntityExample} from '../../entities/example/Example';

export interface IExampleDependencies extends DependencySet {
    processor:{
        start:() => string;
    },
    entity: EntityExample
}

@Factory<IExampleDependencies>(dependencies)
export class Example extends UseCase<Example> {

    @Dependency processor: {start:() => string;};
    @Dependency entity: EntityExample;

    protected endResult:string = 'pending';

    public achieveEndResult():void {
        this.endResult = this.processor.start();
    }

    public getEndResult():string {
        return this.endResult;
    }
}
