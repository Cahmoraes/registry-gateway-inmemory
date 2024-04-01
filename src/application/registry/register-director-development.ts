import posts from '@/database/patterns-development'

import { RegistryBuilder } from './register-builder'

export class RegisterDirectorDevelopment {
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
