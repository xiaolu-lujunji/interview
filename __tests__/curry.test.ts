import curry from '../src/curry'

const join = (a: string, b: string, c: string) => {
  return `${a}_${b}_${c}`
}

describe('curry', () => {
  test('join(1)(2)(3)', () => {
    expect(curry(join)(1)(2)(3)).toBe('1_2_3')
  })

  test('join(1, 2)(3)', () => {
    expect(curry(join)(1, 2)(3)).toBe('1_2_3')
  })

  test('join(1, 2, 3, 4)', () => {
    expect(curry(join)(1, 2, 3, 4)).toBe('1_2_3')
  })

  test('join(1, 2)(3)(4)', () => {
    const curried = curry(join)(1, 2)
    expect(curried(3)).toBe('1_2_3')
    expect(curried(4)).toBe('1_2_4')
  })

  test('sum(1,2,3)(4)(5).valueOf()', () => {
    const sum = (
      number1: number,
      number2: number,
      number3: number,
      number4: number,
      number5: number
    ) => {
      return number1 + number2 + number3 + number4 + number5
    }

    const curried = curry(sum)
    expect(curried(1, 2, 3)(4)(5).valueOf()).toBe(15)
  })
})
