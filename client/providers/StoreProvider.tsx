import { ReactNode } from 'react'
import { configure } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
// import { isObservableProp } from 'mobx'
import { UserStore, GlobalStore } from '@client/stores'
import { StoresContext } from '@client/contexts'

// mobx在严格模式下，不允许在 action 外更改任何状态
configure({ enforceActions: 'observed' })

// To avoid leaking memory, call useStaticRendering(true) when using server side rendering which essentially disables observer.
const isServer = typeof window === 'undefined'
enableStaticRendering(isServer)

export class Store {
    user: UserStore
    global: GlobalStore

    constructor(initialState: any = {}) {
        this.user = new UserStore(initialState.user)
        this.global = new GlobalStore(initialState.global)
    }
}

let store: Store

export function initializeStore(initialState: any = {}) {
    if (isServer) {
        return new Store(initialState)
    }
    if (!store) {
        store = new Store(initialState)
    }
    return store
}

export type MobxState = Record<keyof Store, any>

// export function getStateFromStore(mobxStore: Store) {
//     const mobxState: MobxState = {} as MobxState
//     for (const x in mobxStore) {
//         mobxState[x] = {}
//         for (const y in mobxStore[x]) {
//             if (isObservableProp(mobxStore[x], y)) {
//                 mobxState[x][y] = mobxStore[x][y]
//             }
//         }
//     }
//     return mobxState
// }

export type Props = {
    children: ReactNode
    initialMobxState: MobxState
}

const StoreProvider = ({ children, initialMobxState }: Props) => {
    const mobxStore = initializeStore(initialMobxState)
    return <StoresContext.Provider value={mobxStore}>{children}</StoresContext.Provider>
}

export default StoreProvider
