import Link from 'next/link'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const StyledDiv = styled.div`
    background: yellow;
`

const Home = () => {
    console.log('render home page')
    return (
        <StyledDiv>
            <ul>
                <li>
                    <Link href="/a" as="/a">
                        <a>pageA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/b" as="/b">
                        <a>pageB</a>
                    </Link>
                </li>
            </ul>
        </StyledDiv>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { locale, defaultLocale } = context
    return {
        props: {
            ...(await serverSideTranslations(locale || defaultLocale || 'en-US')),
            initialMobxState: {
                user: {
                    name: 'Tony',
                },
            },
        }, // will be passed to the page component as props
    }
}

export default observer(Home)
