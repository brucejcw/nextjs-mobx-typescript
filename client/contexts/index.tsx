import React from 'react'
import { UserStore, GlobalStore } from '@client/stores'
import { Store } from '@client/providers/StoreProvider'

export const StoresContext: React.Context<Store> = React.createContext({
    user: new UserStore(),
    global: new GlobalStore(),
})
