import {IExampleDependencies} from './Example';

export const dependencies:IExampleDependencies = {
    idMaker: {
        makeId: ():string => {
            return '123';
        }
    }
}
