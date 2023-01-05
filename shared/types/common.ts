import React from 'react'
import { NextPage } from 'next'

export type MyNextPage<P = any, IP = P> = NextPage<P, IP> & {
    Layout?: ((...anyProps: any) => JSX.Element) | React.ComponentType<any>
}
