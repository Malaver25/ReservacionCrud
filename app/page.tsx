'use client';

import LoginCuentas from './sistemaRegistro/loginCuentas';
import Head from 'next/head';

export default function Page() {
    return (
        <>
            <Head>
                <title>Login Principal</title>
            </Head>
            <LoginCuentas />
        </>
    );
}
