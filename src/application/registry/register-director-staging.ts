import posts from '@/database/patterns-staging'

import { RegistryBuilder } from './register-builder'

// Builder Director
export class RegisterDirectorStaging {
  constructor(private readonly registerBuilder: RegistryBuilder) {
    console.log(posts)
  }

  public build() {
    this.registerBuilder
      .setRegistryPattern(posts[0])
      .setDIP(posts[1])
      .setBuilderPattern(posts[2])
      .build()
  }
}
