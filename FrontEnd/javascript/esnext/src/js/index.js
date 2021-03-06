export const pi = Math.PI; //Es6

export function power(x, y) {
  return x ** y; //ES7
}

export class Foo {
  #private = 10; //stage 3
  foo() {
    const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4 };
    return { a, b, x };
  }
  bar() {
    return this.#private;
  }
}
