import {Core} from '../config/index';

/**
 * Bootstrap your application
 */

const setup = {
    entityExample: new Core.Entities.Example({
        name: 'Muh Entity',
        id: 'an idea that will be overwritten by the dependency'
    }),
    useCaseExample: new Core.UseCases.Example(),
    adapterExample: new Core.Adapters.Example()
};

console.log(JSON.stringify(setup, null, 4));
