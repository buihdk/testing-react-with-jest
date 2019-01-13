describe("The Question List Component", () => {
  beforeEach(() => {
    console.log("Before each!");
  });
  
  beforeAll(() => {
    console.log("Before all!");
  });

  afterEach(() => {
    console.log("After each!");
  });
  
  afterAll(() => {
    console.log("After all!");
  });

  it.only ("should display a lists of items", () => {
    expect(40 + 2).toEqual(42);
  });

  it ("should also be skipped", () => {
    expect(40 + 2).toEqual(42);
  });

  it.skip ("should be the meaning of life", () => {
    expect(40 + 2).toEqual(43);
  });
});