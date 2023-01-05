import { Provider } from 'mobx-react'
import stores from '@client/stores'
import React from 'react'

const TestProvider = ({ children }: any) => {
    return <Provider {...stores}>{children}</Provider>
}

export default TestProvider
