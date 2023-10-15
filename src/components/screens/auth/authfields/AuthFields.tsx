import { validEmail } from '@shared/regex';
import Field from '@ui/form-elements/Field';
import React, { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

interface IAuthField{
    register: UseFormRegister<any>;
    formState: FormState<any>;
    isPasswordRequired?: boolean; 
}

export const AuthFields:FC<IAuthField> = ({register, formState: {errors}, isPasswordRequired = false}) => {
  return (
    <>
        <Field {...register('email', {
            required: 'Email is required',
            pattern: {
                value: validEmail,
                message: 'Please enter a valid email address'
            }
        })}
        placeholder='email' type='email' error={errors.email}/>
        <Field {...register('password', isPasswordRequired ? {
            required: 'Password is required',
            minLength: {
                value: 6,
                message: 'Min length should more 6 symbols'
            }
        } : {})}
        placeholder='Password' type='password' error={errors.password}/>
    </>
  )
}