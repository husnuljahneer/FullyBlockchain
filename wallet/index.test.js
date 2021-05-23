const Wallet = require('./index');

describe('Wallet', () => {
    let wallet;

    beforeEach(()=>{
        wallet = new Wallet();
    });

    it('has a `balance`',() => {
        expect(wallet).toHaveProperty('balance');
    });

    it('has a `public key`',() => {
        expect(wallet).toHaveProperty('publicKey');
    });

})
