import {Example} from './Example';

describe('Example', () => {
    let adapter:Example;

    beforeEach(() => {
        adapter = new Example();
    });

    it('should use dependencies', () => {
        expect(adapter.getInput()).toEqual('in');
        expect(adapter.getOutput()).toEqual('out');
    });
});
