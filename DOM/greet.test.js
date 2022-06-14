var Greet = require('./Greet');


describe("test Greet()",function() {
    it("should return Hello name when name is in lowercase", function() {
        expect(Greet("Elizabeth")).toBe("Hello,Elizabeth!");
    });
    it("should return Hello there! when name is undefined", function() {
        expect(Greet()).toBe("Hello there!");
    });
    it("should return Hello NAME when name is in uppercase", function() {
        expect(Greet("JOSE")).toBe("Hello,JOSE!");
    });
    it("should return Hello two names when name is an array containing two names", function() {
        expect(Greet(["Jose", "Pep"])).toBe("Hello,Jose,Pep!");
    });
    it("should return Hello multiple names when name is an array containing multiple names", function() {
        expect(Greet(["Alex","Arsene","Jose","Zidane"])).toBe("Hello,Alex,Arsene,Jose,Zidane!");
    });

}

)
    
