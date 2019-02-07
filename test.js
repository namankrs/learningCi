const assert = require("assert");
const { add } = require("./foo");

describe("add", function() {
  it("should return the sum of two numbers", function() {
    assert.deepEqual(add(2, 3), 5);
  });
});
