import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProduct } from '../../redux/features/productSlice';

const ProductDetailsArea = () => {
   // tüm ürünler
   const product = useSelector(state => state.products.specificProduct);
   // dispatch
   const dispatch = useDispatch();
   // sepete ürün ekle
   const handleCartProduct = () => {
      dispatch(addToProduct(product))
   }
   return (

       <section className="product__area pb-115">
          <div className="container">
             <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                   <div className="product__wrapper">
                      <div className="product__details-thumb w-img mb-30">
                         <img src={product?.img_big} alt="ürün-detayları" />
                      </div>
                      <div className="product__details-content">
                         <div className="product__tab mb-40">
                            <ul className="nav nav-tabs" id="proTab" role="tablist">
                               <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Genel Bakış</button>
                               </li>
                               <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="support-tab" data-bs-toggle="tab" data-bs-target="#support" type="button" role="tab" aria-controls="support" aria-selected="false">Destek</button>
                               </li>
                            </ul>
                         </div>
                         <div className="product__tab-content">
                            <div className="tab-content" id="proTabContent">
                               <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                  <div className="product__overview">
                                     <h3 className="product__overview-title">Şablon Detayları</h3>
                                     <p>{`Bu içerik test amaçlı yazılmıştır`}</p>
                                     <div className="product__features mt-40">
                                        <h3 className="product__overview-title">Şablon Özellikleri:</h3>
                                        <ol>
                                           <li>
                                              <p>Tamamen Duyarlı Düzen</p>
                                           </li>
                                           <li>
                                              <p>Kurslar İçin CMS (Ürünler)</p>
                                           </li>
                                           <li>
                                              <p>Çalıştaylar İçin CMS</p>
                                           </li>
                                           <li>
                                              <p>Yaygın Elementler İçin Semboller</p>
                                           </li>
                                           <li>
                                              <p>Yaygın Sayfalar İçin Önceden Oluşturulmuş Şablonlar</p>
                                           </li>
                                           <li>
                                              <p>Telif Ücretsiz Google Yazı Tipleri</p>
                                           </li>
                                           <li>
                                              <p>Kolayca Değiştirilebilir Global Renk Paletleri</p>
                                           </li>
                                           <li>
                                              <p>Çalışan İletişim Sayfası</p>
                                           </li>
                                           <li>
                                              <p>Kaydırmalı Referanslar Bölümü</p>
                                           </li>
                                           <li>
                                              <p>Şık Mikro Etkileşimler</p>
                                           </li>
                                        </ol>
                                     </div>
                                     <div className="product__features">
                                        <h3 className="product__overview-title">Tasarım Düzeni</h3>
                                        <ol>
                                           <li>
                                              <p>Anasayfa / Açılış Sayfası</p>
                                           </li>
                                           <li>
                                              <p>Ürün Koleksiyonu</p>
                                           </li>
                                           <li>
                                              <p>Hizmetler</p>
                                           </li>
                                           <li>
                                              <p>Uygulama Koleksiyonu</p>
                                           </li>
                                           <li>
                                              <p>Blog Koleksiyonu</p>
                                           </li>
                                           <li>
                                              <p>Tekil Blog Yazısı</p>
                                           </li>
                                           <li>
                                              <p>Hakkında</p>
                                           </li>
                                           <li>
                                              <p>İletişim</p>
                                           </li>
                                        </ol>
                                     </div>
                                     <div className="product__social m-social grey-bg-2">
                                        <h4 className="product__social-title">Bizi takip edin</h4>
                                        <ul>
                                           <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                           <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                                           <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                                           <li><a href="#" className="link"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                     </div>
                                  </div>
                               </div>
                               <div className="tab-pane fade" id="support" role="tabpanel" aria-labelledby="support-tab">
                                  <div className="product__support">
                                     <div className="latest-comments mb-55">
                                        <ul>
                                           <li>
                                              <div className="comments-box grey-bg-2">
                                                 <div className="comments-info d-flex">
                                                    <div className="comments-avatar mr-15">
                                                       <img src="assets/img/product/support/sup-1.jpg" alt="" />
                                                    </div>
                                                    <div className="avatar-name">
                                                       <h5>Jason Response</h5>
                                                       <span className="post-meta">Yazar</span>
                                                    </div>
                                                 </div>
                                                 <div className="comments-text ml-65">
                                                    <p>{`Harry saçmalığı, yalan söylüyor, hamile, lezzetli, aman tanrım, yönetici, etrafta dolaşıyor, aptal, neden senin sıran arkadaşım.`}</p>
                                                 </div>
                                              </div>
                                           </li>
                                           <li className="children">
                                              <div className="comments-box grey-bg-2">
                                                 <div className="comments-info d-flex">
                                                    <div className="comments-avatar mr-15">
                                                       <img src="assets/img/product/support/sup-2.jpg" alt="" />
                                                    </div>
                                                    <div className="avatar-name">
                                                       <h5>Hilary Ouse</h5>
                                                       <span className="post-meta">Yazar</span>
                                                    </div>
                                                 </div>
                                                 <div className="comments-text ml-65">
                                                    <p>{`Hiçbir sorun istemiyorum, hata yaptım, git buradan.!`}</p>
                                                 </div>
                                              </div>
                                           </li>
                                        </ul>
                                     </div>
                                     <div className="post-comment-form wow fadeInUp" data-wow-delay=".2s">
                                        <h4 className="post-comment-title mb-25">Yorum Ekle</h4>
                                        <form action="#">
                                           <div className="post-comment-inner">
                                              <div className="row">
                                                 <div className="col-xl-12">
                                                    <div className="post-input d-sm-flex align-items-center mb-10">
                                                       <textarea placeholder="Yazara yorumunuz..."></textarea>
                                                       <button type="submit" className="m-btn m-btn-4"> <span></span> Yorumu Gönder</button>
                                                    </div>
                                                 </div>
                                                 <div className="col-xl-12">
                                                    <div className="post-agree d-flex align-items-center">
                                                       <input className="m-check-input" type="checkbox" id="m-agree" />
                                                       <label className="m-check-label" htmlFor='m-agree'>Bu yoruma cevap geldiğinde bana e-posta gönder</label>
                                                    </div>
                                                 </div>
                                              </div>
                                           </div>
                                        </form>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4">
                   <div className="product__details-sidebar ml-30">
                      <div className="product__proprietor white-bg mb-30">
                         <div className="product__proprietor-head mb-25">
                            <div className="product__prorietor-info mb-20 d-flex justify-content-between">
                               <div className="product__proprietor-avater d-flex align-items-center">
                                  <div className="product__proprietor-thumb">
                                     <img src="assets/img/product/proprietor/proprietor-1.jpg" alt="" />
                                  </div>
                                  <div className="product__proprietor-name">
                                     <h5><a href="#">Justin Case</a></h5>
                                     <a href="#">Profili Görüntüle</a>
                                  </div>
                               </div>
                               <div className="product__proprietor-price">
                                  <span className="d-flex align-items-start"><span>$</span>{product?.price}</span>
                               </div>
                            </div>
                            <div className="product__proprietor-text">
                               <p>Jeffrey ters takla attı, bize haber ver yaşlı şık lezzetli botlar arsız.</p>
                            </div>
                         </div>
                         <div className="product__proprietor-body fix">
                            <ul className="mb-10 fix">
                               <li>
                                  <h6>İndirmeler:</h6>
                                  <span>44</span>
                               </li>
                               <li>
                                  <h6>Yayınlanma Tarihi:</h6>
                                  <span>16 Şubat 2021</span>
                               </li>
                               <li>
                                  <h6>Versiyon:</h6>
                                  <span>1.0</span>
                               </li>
                               <li>
                                  <h6>Uyumluluk:</h6>
                                  <span>Elementor</span>
                               </li>
                               <li>
                                  <h6>Çatı:</h6>
                                  <span>Redux:</span>
                               </li>
                            </ul>
                            <span >
                              <a style={{cursor:'pointer'}} onClick={handleCartProduct} className="m-btn m-btn-2 w-100 mb-20"> <span></span> Sepete Ekle</a>

                           </span>
                            <a href="https://themeforest.net/item/zibber-business-consulting-wordpress-theme/30120392" rel="noreferrer" target="_blank" className="m-btn m-btn-border w-100"> <span></span> Projeyi Önizle</a>
                         </div>
                      </div>
                      <div className="sidebar__banner" style={{ background: `url(assets/img/banner/sidebar-banner.jpg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                         <h4 className="sidebar__banner-title">Ücretsiz <br />Şablonlarımıza Göz Atın</h4>
                         <Link href="/product">
                            <a className="m-btn m-btn-white"> <span></span> ücretsiz şablon</a>
                         </Link>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>

   );
};

export default ProductDetailsArea;