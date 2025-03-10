// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T;

// ============= Description =============
// For union type T = A | B | C:
// (A | B | C) extends U ? never : (A | B | C) becomes:
// (A extends U ? never : A) | (B extends U ? never : B) | (C extends U ? never : C)

