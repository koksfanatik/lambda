
describe("createArrayWithDots", function () {

    it("creates an array of strings with all combinations of dots between characters from the given string", function() {
    assert.include(createArrayWithDots("ab"), "a.b");
       });
    it("creates an array of strings with all combinations of dots between characters from the given string", function () {
        assert.include(createArrayWithDots("abc"), "ab.c");
        assert.include(createArrayWithDots("abc"), "a.b.c");
        assert.include(createArrayWithDots("abc"), "a.bc");
        assert.notInclude(createArrayWithDots("abc"), "abc.");
        assert.notInclude(createArrayWithDots("abc"), "ab..c");

    });
    it("creates an array of strings with all combinations of dots between characters from the given string", function () {
        assert.include(createArrayWithDots("abcdefghij"), "a.bc.d.ef.g.h.ij");
    });
    

});