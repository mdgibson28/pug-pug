import {dependencies} from './dependencies';
import {Factory} from '../../foundation/decorators/Factory';
import {Adapter} from '../Adapter';
import {Dependency} from '../../foundation/decorators/Dependency';
import {DependencySet} from '../../foundation/types/DependencySet';

export interface IExampleDependencies extends DependencySet {
    inbound: {state: string;};
    outbound: {state: string;};
}

@Factory<IExampleDependencies>(dependencies)
export class Example extends Adapter<Example> {

    @Dependency inbound:{state: string;};
    @Dependency outbound:{state: string;};

    public getInput():string {
        return this.inbound.state;
    }

    public getOutput():string {
        return this.outbound.state;
    }
}
