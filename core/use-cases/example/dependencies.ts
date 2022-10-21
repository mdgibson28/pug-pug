import {IExampleDependencies} from './Example';
import {Example as EntityExample} from '../../entities/example/Example';

export const dependencies:IExampleDependencies = {
    processor: {
        start: ():string => {
            return 'success';
        }
    },
    entity: new EntityExample({
        name: 'Entity for Use Case'
    })
}
