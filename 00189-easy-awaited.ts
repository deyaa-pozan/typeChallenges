// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
type MyAwaited<T> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? MyAwaited<U>
    : U
  : T extends { then: (onfulfilled: (arg: infer V) => any) => any }
  ? V
  : never;

// ============= Description =============
async function fetchUserData() {
  // Returns a Promise<User>
  return { id: 1, name: "John" };
}

// Without Awaited
type UserPromise = ReturnType<typeof fetchUserData>; // Promise<User>

// With Awaited
type User = Awaited<ReturnType<typeof fetchUserData>>; // User
