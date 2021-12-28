import react from 'react'
import { storageConfig } from '@webcored/react-local-storage'

// storage definitions
import { user } from './storages/user'
import { view } from './storages/view'

storageConfig({
  namespace: 'rls',
  delimiter: '.',
  react,
  // storage: window.sessionStorage, /* opt between local or session storage */
  storages: {
    user,
    view
  },
})
