import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const {formulario, email, password, onChange} = useForm({
        email: "cb@gmail.com",
        password: "1234"
    });

    return (
        <>
            <h3>Formularios</h3>

            <input
                type="text"
                className="form-control"
                placeholder="Correo"
                value={email}
                onChange = {({target}) => onChange(target.value, 'email')}
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="password"
                value={password}
                onChange = {({target}) => onChange(target.value, 'password')}
            />
            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}
