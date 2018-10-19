
class Block{
    
    constructor(index, data, previousHash = ''){
        this.index = index;
        this.data = data;
        this.date = new Date();
        this.previousHash = previousHash;
        
         console.log(index);
    }   
}

bloque = new Block(0,'naoufal');

bloque;