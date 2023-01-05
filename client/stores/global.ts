import { makeAutoObservable } from 'mobx'
import { init } from '@client/stores/utils'

export class GlobalStore {
    isDev: boolean | undefined

    constructor(initialState: any = {}) {
        init(this, initialState)
        // https://zh.mobx.js.org/observable-state.html#makeautoobservable
        makeAutoObservable(this, {}, { autoBind: true })
    }
}
