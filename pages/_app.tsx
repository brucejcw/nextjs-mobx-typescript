import React from 'react'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '@client/styles/GlobalStyle'
import DefaultLayout from '@client/components/Layout'
import { MyNextPage } from '@shared/types/common'

import StoreProvider from '@client/providers/StoreProvider'

type CosAppProps = AppProps & {
    Component: MyNextPage
}

function MyApp(props: CosAppProps) {
    const { Component, pageProps } = props
    const Layout = Component?.Layout || DefaultLayout

    return (
        <StoreProvider initialMobxState={pageProps.initialMobxState}>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StoreProvider>
    )
}

export default appWithTranslation(MyApp)
