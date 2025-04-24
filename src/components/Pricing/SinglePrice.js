import Link from 'next/link';
import React from 'react';

const SinglePrice = ({ title, price, activeClass = '' }) => {
    return (
        <>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className={`pricing__item ${activeClass && activeClass} text-center transition-3 mb-30`}>
                    <div className="pricing__header mb-25">
                        <h3>{title}</h3>
                        <p>Aradığınız Şey!</p>
                    </div>
                    <div className="pricing__tag d-flex align-items-start justify-content-center mb-30">
                        <span>$</span>
                        <h4>{price}</h4>
                    </div>
                    <div className="pricing__switch mb-10">
                        <button type="button">Yıllık faturalamaya geç</button>
                    </div>
                    <div className="pricing__buy mb-20">
                        <Link href="/pricing">
                            <a className="m-btn m-btn-border m-btn-border-5 w-100"> <span></span> Şimdi Satın Al</a>
                        </Link>
                    </div>
                    <div className="pricing__features text-start">
                        <ul>
                            <li>Güçlü Yönetim Paneli</li>
                            <li>1 Yerel Android Uygulaması</li>
                            <li>Çoklu Dil Desteği</li>
                            <li>Ücretsiz SSL Sertifikası</li>
                            <li>1X Ayrılmış Kaynak</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePrice;