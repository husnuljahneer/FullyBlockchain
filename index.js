const fullyHash = (data) => {
    return data + '*';
}

class Block{
    constuctor(data,hash,lastHash){
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

class Blockchain{
    constructor(){
        const genesis = new Block('gen-data' , 'gen-hash' ,'gen-lastHash');
        this.chain = [genesis];
    }
    addBlock (data){
        const lastHash = this.chain[this.chain.length-1].hash;
        const hash = fullyHash(data + lastHash );
        const block = new Block (data, hash, lastHash);
        this.chain.push(block);
    }
}

const fooBlockchain = new Blockchain();
fooBlockchain.addBlock('one');
fooBlockchain.addBlock('two');
fooBlockchain.addBlock('three');

console.log(fooBlockchain);
