let __value = 42;

const isomophicFetch = jest.fn(() => __value);

isomophicFetch.__setValue = v => __value = v;

export default isomophicFetch;