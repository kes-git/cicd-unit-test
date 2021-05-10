const expect = require('chai').expect;

const app = require('../index');

describe('Simple Math Test', () => {
    it('should return 5', () => {
        const result = app.add(2, 3);
        expect(result).to.equal(5);
    });
});