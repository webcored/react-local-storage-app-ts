import { storageKeyConfig } from "@webcored/react-local-storage"

interface UserStorage {
  name: string;
  email: string;
  avatar?: string;
}

const user = storageKeyConfig<UserStorage>({
  defaults: {
    name: 'Guest',
    email: 'guest@email.com'
  },

  version: 2,

  // assume version 1, has no default email
  migration: (currentValue, defaultValue) => {
    return {...currentValue, ...defaultValue }
  }
})

export type { UserStorage }

export {
  user
}

