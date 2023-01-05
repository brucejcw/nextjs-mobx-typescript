import { makeAutoObservable } from 'mobx'
import { init } from './utils'

export class UserStore {
    name: string | undefined

    constructor(initialState: any = {}) {
        init(this, initialState)
        // https://zh.mobx.js.org/observable-state.html#makeautoobservable
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setName(name: string) {
        this.name = name
    }
}
