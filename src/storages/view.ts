import { storageKeyConfig } from "@webcored/react-local-storage"

const view = storageKeyConfig<number>({ // page view
  defaults: 1,
})

export {
  view
}