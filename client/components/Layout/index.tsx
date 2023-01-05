import { useTranslation } from 'next-i18next'
import styled from 'styled-components'
import { useSubStore } from '@client/hooks/useStores'
import { observer } from 'mobx-react'

const StyledWrapper = styled.div`
    background: aqua;
`

const Layout = ({ children }: any) => {
    console.log('render layout')
    const { t } = useTranslation()
    const { name } = useSubStore('user')
    return (
        <StyledWrapper>
            <h2>
                <span>{t('common:welcome')}</span>, {name}
            </h2>
            {children}
        </StyledWrapper>
    )
}

export default observer(Layout)
