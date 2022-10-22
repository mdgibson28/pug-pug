import {IDependencies} from './SeeDog';

// here is where i will bring in the class that calls the api
export const dependencies:IDependencies = {
    provider: {
        fetch: () => {
            return Promise.resolve({
                breed: 'mastiff-tibetan',
                url: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_899.jpg'
            });
        }
    }
}
