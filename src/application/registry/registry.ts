import { Asserts } from '../asserts/assert'

export const RegistryType = {
  REGISTRY: 'Registry',
  DIP: 'DIP',
  BUILDER: 'Builder',
} as const

export type RegistryTypes = (typeof RegistryType)[keyof typeof RegistryType]

export interface RegistryValue {
  title: string
  description: string
}

// Registry Patten
export class Registry {
  private constructor() {}

  private static readonly registry = new Map<RegistryTypes, RegistryValue>()

  static set(key: RegistryTypes, value: RegistryValue) {
    Registry.registry.set(key, value)
  }

  static get(key: RegistryTypes): RegistryValue {
    const value = Registry.registry.get(key)
    // assert pattern
    Asserts.assertIsNonNullable(value)
    return value
  }
}
