const fb = require('../fizzbuzz')
test("isFizzy", () => {
  expect(fb.isFizzy(1, 3)).toBe(false)
  expect(fb.isFizzy(3, 3)).toBe(true)
  expect(fb.isFizzy(5, 3)).toBe(false)
  expect(fb.isFizzy(6, 3)).toBe(true)
})
test("isBuzzy", () => {
  expect(fb.isBuzzy(1, 5)).toBe(false)
  expect(fb.isBuzzy(5, 5)).toBe(true)
  expect(fb.isBuzzy(10, 5)).toBe(true)
  expect(fb.isBuzzy(13, 5)).toBe(false)
})
test("isFizzyBuzzy", () => {
  expect(fb.fizzyBuzzy(1, 3, 5)).toBe("")
  expect(fb.fizzyBuzzy(3, 3, 5)).toBe("fizz")
  expect(fb.fizzyBuzzy(5, 3, 5)).toBe("buzz")
  expect(fb.fizzyBuzzy(15, 3, 5)).toBe("fizzbuzz")
  expect(fb.fizzyBuzzy(20, 3, 5)).toBe("buzz")
})
test("fizzBuzzTest", () => {
  expect(fb.fizzBuzz(15)).toStrictEqual(
    {
      count: 15,
      fizz: 4,
      buzz: 2,
      fizzBuzz: 1
    }
  )
})