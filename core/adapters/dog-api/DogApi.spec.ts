import {DogApi} from './Example';

describe('Example', () => {
    let adapter:DogApi;

    beforeEach(() => {
        adapter = new DogApi();
    });

    it('should use dependencies', () => {
        expect(adapter.getInput()).toEqual('in');
        expect(adapter.getOutput()).toEqual('out');
    });
});
