// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============
type First<T extends unknown[]> = T extends [] ? never : T[0]



// ============= Description =============
// T extends U ? X : Y syntax lets you create types that depend on conditions.
// T extends [] condition specifically checks if T is an empty array type.
// T[0] gets the type of the first element in the array.