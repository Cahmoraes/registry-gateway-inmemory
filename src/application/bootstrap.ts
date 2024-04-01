import { env } from '@/infra/env'

import { RegistryBuilder } from './registry/register-builder'
import { RegisterDirectorDevelopment } from './registry/register-director-development'
import { RegisterDirectorStaging } from './registry/register-director-staging'

export function bootstrap() {
  // Builder
  const registryBuilder = new RegistryBuilder()
  buildRegistryByType().build()

  function buildRegistryByType() {
    console.log('env.MODE', env.MODE)
    switch (env.MODE) {
      case 'staging':
        return new RegisterDirectorStaging(registryBuilder)
      default:
        return new RegisterDirectorDevelopment(registryBuilder)
    }
  }
}
