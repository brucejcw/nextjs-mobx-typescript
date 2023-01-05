import { GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function B() {
    return <div>this is component B</div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { locale, defaultLocale } = context
    return {
        props: {
            ...(await serverSideTranslations(locale || defaultLocale || 'en-US')),
        }, // will be passed to the page component as props
    }
}
