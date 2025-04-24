import Link from "next/link";

const Cta = () => {
    return (
        <>
            <section className="cta__area pt-100 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="section__title-wrapper text-center mb-45">
                                <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">Gelirinizi <span>Bugün</span> Artırın</h2>
                                <p className="wow fadeInUp" data-wow-delay=".5s">Binlerce Markit Markası geçiş yaptı. Müşteriyi düşünerek SMS pazarlaması!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3">
                            <div className="cta__content text-center wow fadeInUp" data-wow-delay=".7s">
                                <Link href="/pricing"><a  className="m-btn m-btn-border-2 cta__btn active"> <span></span> 14 Günlük Ücretsiz Denemeye Başla</a></Link>
                                <Link href="/pricing"><a  className="m-btn m-btn-border-2 cta__btn"> <span></span> Ücretsiz Demo Talep Et</a></Link>
                                <p>SMS Göndermeye Başla - Kredi Kartı Gerekmez</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cta;