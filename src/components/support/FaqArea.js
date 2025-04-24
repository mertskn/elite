import React from 'react';
import SingleAccording from './SingleAccording';

const FaqArea = () => {
   return (
       <>
          <section className="faq__area grey-bg-2 pt-105 pb-125">
             <div className="container">
                <div className="row">
                   <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                      <div className="section__title-wrapper text-center mb-65">
                         <h2 className="section__title">Sıkça Sorulan Sorular</h2>
                         <p>Merak ettikleriniz mi var? İşte en çok sorulanlar.</p>
                      </div>
                   </div>
                </div>
                <div className="row">
                   <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-3">
                      <div className="faq__tab wow fadeInLeft" data-wow-delay=".3s">
                         <ul className="nav nav-tabs" id="faqTab" role="tablist">
                            <li className="nav-item" role="presentation">
                               <button className="nav-link active" id="sale-tab" data-bs-toggle="tab" data-bs-target="#sale" type="button" role="tab" aria-controls="sale" aria-selected="true">Satış</button>
                            </li>
                            <li className="nav-item" role="presentation">
                               <button className="nav-link" id="template-tab" data-bs-toggle="tab" data-bs-target="#template" type="button" role="tab" aria-controls="template" aria-selected="false">Şablonlar</button>
                            </li>
                            <li className="nav-item" role="presentation">
                               <button className="nav-link" id="ui-tab" data-bs-toggle="tab" data-bs-target="#ui" type="button" role="tab" aria-controls="ui" aria-selected="false">UI Tasarımı </button>
                            </li>
                            <li className="nav-item" role="presentation">
                               <button className="nav-link" id="xd-tab" data-bs-toggle="tab" data-bs-target="#xd" type="button" role="tab" aria-controls="xd" aria-selected="false">XD Dosyaları</button>
                            </li>
                         </ul>
                      </div>
                   </div>

                   <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-9">
                      <div className="faq__tab-content wow fadeInRight" data-wow-delay=".7s">
                         <div className="tab-content" id="faqTabContent">
                            <div className="tab-pane fade show active" id="sale" role="tabpanel" aria-labelledby="sale-tab">
                               <div className="accordion" id="sale-accordion">

                                  <SingleAccording number="Bir" condition="true" showClass="accordion-collapse
                                 collapse" title="Hangi ödeme yöntemlerini kabul ediyorsunuz?" />

                                  <SingleAccording number="İki" showClass="accordion-collapse collapse show"
                                                   title="İade veya değişim politikanız var mı?" />

                                  <SingleAccording number="Üç" showClass="accordion-collapse collapse"
                                                   title="Satın alma işleminden sonra ne zaman erişim sağlayabilirim?" />

                                  <SingleAccording number="Dört" showClass="accordion-collapse collapse"
                                                   title="Toplu alımlarda indirim sunuyor musunuz?" />

                                  <SingleAccording number="Beş" showClass="accordion-collapse collapse"
                                                   title="Farklı para birimlerinde ödeme yapabilir miyim?" />

                               </div>
                            </div>
                            <div className="tab-pane fade" id="template" role="tabpanel" aria-labelledby="template-tab">
                               <div className="accordion" id="template-accordion">

                                  <SingleAccording number="Altı"  showClass="accordion-collapse collapse show"
                                                   title="Şablonları ticari projelerimde kullanabilir miyim?" />

                                  <SingleAccording number="Yedi"  showClass="accordion-collapse collapse"
                                                   title="Şablonları nasıl özelleştirebilirim?" />

                                  <SingleAccording number="Sekiz"  showClass="accordion-collapse collapse"
                                                   title="Şablonlar hangi formatlarda geliyor?" />

                                  <SingleAccording number="Dokuz"  showClass="accordion-collapse collapse"
                                                   title="Şablonlarla birlikte kaynak dosyaları da veriliyor mu?" />

                                  <SingleAccording number="On"  showClass="accordion-collapse collapse"
                                                   title="Şablonları farklı platformlarda kullanabilir miyim?" />

                               </div>
                            </div>
                            <div className="tab-pane fade" id="ui" role="tabpanel" aria-labelledby="ui-tab">
                               <div className="accordion" id="ui-accordion">


                                  <SingleAccording number="On Bir"  showClass="accordion-collapse collapse show"
                                                   title="UI kitleri hangi yazılımlarla uyumlu?" />

                                  <SingleAccording number="On İki"  showClass="accordion-collapse collapse"
                                                   title="UI kitlerini projelerimde nasıl kullanabilirim?" />

                                  <SingleAccording number="On Üç"  showClass="accordion-collapse collapse"
                                                   title="UI kitleri güncelleniyor mu?" />

                                  <SingleAccording number="On Dört"  showClass="accordion-collapse collapse"
                                                   title="UI kitleriyle birlikte stil kılavuzları da geliyor mu?" />

                                  <SingleAccording number="On Beş" condition="true" title="UI kitlerini kullanarak neler tasarlayabilirim?"
                                                   showClass="accordion-collapse collapse" />

                               </div>
                            </div>

                            <div className="tab-pane fade" id="xd" role="tabpanel" aria-labelledby="xd-tab">
                               <div className="accordion" id="xd-accordion">


                                  <SingleAccording number="On Altı"  showClass="accordion-collapse collapse show"
                                                   title="XD dosyalarını hangi sürümlerle açabilirim?" />

                                  <SingleAccording number="On Yedi"  showClass="accordion-collapse collapse"
                                                   title="XD dosyaları düzenlenebilir mi?" />

                                  <SingleAccording number="On Sekiz"  showClass="accordion-collapse collapse"
                                                   title="XD dosyaları hangi tasarım prensiplerine göre oluşturuldu?" />

                                  <SingleAccording number="On Dokuz"  showClass="accordion-collapse collapse"
                                                   title="XD dosyalarını farklı tasarım araçlarına aktarabilir miyim?"  />

                                  <SingleAccording number="Yirmi" condition="true" title="XD dosyalarıyla birlikte font bilgileri de veriliyor mu?" showClass="accordion-collapse collapse" />

                               </div>
                            </div>
                         </div>
                      </div>
                   </div>


                </div>
             </div>
          </section>
       </>
   );
};

export default FaqArea;