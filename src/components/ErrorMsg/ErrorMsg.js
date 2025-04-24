import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorMsg = ({ errTitle = "Sepetiniz şu anda boş." }) => {
    return (
        <Container className='pb-80'>
            <h1 className='mb-40 text-capitalize'>{errTitle}</h1>
            <Link href="/product">
                <a className='m-btn m-btn-2'>Geri Dön</a>
            </Link>
        </Container>
    );
};

export default ErrorMsg;