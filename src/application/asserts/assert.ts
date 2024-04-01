export class Asserts {
  public static assertIsNonNullable<Type>(
    value: unknown,
  ): asserts value is NonNullable<Type> {
    console.log({ value })
    if (typeof value !== 'object') {
      throw new Error('Value must be an object')
    }
  }
}
