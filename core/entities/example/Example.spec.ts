import {Example} from './Example';


describe('Example', () => {
    let entity:Example;

    beforeEach(() => {
        entity = new Example({
            name: 'Hello, world!',
            id: 'abc'
        });
    });

    it('should use dependencies', () => {
        expect(entity.name).toEqual('Hello, world!');
        expect(entity.id).toEqual('123');               // set by dependency
    });
});
