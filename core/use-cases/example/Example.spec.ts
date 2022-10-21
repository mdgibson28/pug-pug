import {Example} from './Example';

describe('Example', () => {
    let useCase:Example;

    beforeEach(() => {
        useCase = new Example();
    });

    it('should use dependencies', () => {
        expect(useCase.getEndResult()).toEqual('pending');
        useCase.achieveEndResult();
        expect(useCase.getEndResult()).toEqual('success');
    });
});
