import React from 'react';
import SingleBlog from './SingleBlog';

const BlogArea = () => {
   return (
       <>
          <section className="blog__area pt-105 pb-110">
             <div className="container">
                <div className="row">
                   <div className="col-xxl-11 offset-xxl-1">
                      <div className="section__title-wrapper mb-65">
                         <h2 className="section__title">Son blog yazıları</h2>
                         <p>Bir sürü eski saçmalık, her şey dahil, sarhoş, birinci sınıf, biraz sersemlemiş.</p>
                      </div>
                   </div>
                </div>
                <div className="row">
                   <div className="col-xxl-11 offset-xxl-1 col-xl-11">
                      <div className="row">
                         <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">

                            <SingleBlog title="Cesaretini kaybetti, gizli saklı şeyler, o süper havalı, şık, polis, affedersiniz, ahbap, limon." />

                            <SingleBlog title="Oxford süper, benimle dalga mı geçiyorsun eski dostum, benimle alakası yok, harika." />

                            <SingleBlog title="David, sıra sende, çizme, sarhoş, sadece bir lira, boş konuşma, havalı adam." />

                            <SingleBlog title="Jeffrey oyalanıyor, nasılsın bakalım, cesaretini kaybetti, arkadaşım, gizlice kaç, umrumda değil." />

                         </div>

                         <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">

                            <SingleBlog title="Soğuk algınlığı, bana ters davranma, aptalca konuşma, şık, yalanlar, beş kuruşsuz, tıkır tıkır, havalı." />

                            <SingleBlog title="Cesaretini kaybetti, gizli saklı şeyler, o süper havalı, şık, polis, affedersiniz, ahbap, limon." />

                            <SingleBlog title="Oxford süper, benimle dalga mı geçiyorsun eski dostum, benimle alakası yok, harika." />

                            <SingleBlog title="Jeffrey oyalanıyor, nasılsın bakalım, cesaretini kaybetti, arkadaşım, gizlice kaç, umrumda değil." />

                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
       </>
   );
};

export default BlogArea;