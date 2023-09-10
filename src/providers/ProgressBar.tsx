import React, { FC, ReactNode } from 'react'
import NextTopLoader from 'nextjs-toploader';
import { accentColor } from '@config/constants';

export const ProgressBar:FC<{children?: ReactNode}> = ({children}) => {
  return (
    <>
        <NextTopLoader color={accentColor}/>
        {children}
    </>
  )
}
