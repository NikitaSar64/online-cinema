'use client'

import { useAuth } from '@hooks/useAuth'
import { useAuthRedirect } from '@hooks/useAuthRedirect'
import { AuthInputType } from '@shared/types/auth.type'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Auth.module.scss';
import { Metadata } from 'next'
import { Heading } from '@components/ui/heading/Heading'
import { Button } from '@ui/form-elements/Button'
import { AuthFields } from './authfields/AuthFields'

export const metadata: Metadata = {
	title: 'Auth',
}

export const Auth = () => {
    useAuthRedirect()

    const {isLoading} = useAuth();

    const [type, setType] = useState<'login' | 'register'>('login');

    const {register:registerInput, handleSubmit, formState, reset} = useForm<AuthInputType>({
        mode: 'onChange'
    })

    const login = (data: any) => {

    }
    const register = (data: any) => {

    }

    const onSubmit: SubmitHandler<AuthInputType> = (data) => {
        if (type == 'login')login(data);
        if (type == 'register') register(data);

        reset();
    }

  return (
    <section className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading title='Auth' className='mb-6'/>

        <AuthFields formState={formState} register={registerInput} isPasswordRequired/>

        <div className={styles.btns}>
          <Button type='submit' onSubmit={() => setType('login')} disabled={isLoading}>Login</Button>
          <Button type='submit' onSubmit={() => setType('register')} disabled={isLoading}>Register</Button>
        </div>

      </form>
    </section>
  )
}