import { Store } from '@client/providers/StoreProvider'
import React from 'react'
import { StoresContext } from '../contexts'

export const useStores = () => React.useContext(StoresContext)

export const useSubStore = <T extends keyof Store>(storeName: T): Store[T] => {
    const stores = useStores()
    return stores[storeName]
}
