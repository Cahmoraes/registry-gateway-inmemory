import { Registry, RegistryType, RegistryValue } from './registry'

// Builder
export class RegistryBuilder {
  private readonly registry = Registry

  public setRegistryPattern(value: RegistryValue) {
    this.registry.set(RegistryType.REGISTRY, value)
    return this
  }

  public setDIP(value: RegistryValue) {
    this.registry.set(RegistryType.DIP, value)
    return this
  }

  public setBuilderPattern(value: RegistryValue) {
    this.registry.set(RegistryType.BUILDER, value)
    return this
  }

  public build() {
    return this.registry
  }
}
