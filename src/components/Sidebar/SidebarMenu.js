import Link from 'next/link';
import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';


const SidebarMenu = ({ show, handleClose }) => {
   const totalCartQuantity = useSelector(state => state.products.cartTotalQuantity);
   const { user, logout } = useAuth();
   return (
       <>

          <div >
             <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
                <Offcanvas.Header closeButton>
                   <div className="logo">
                      <Link href="/home">
                         <a>
                            <img src="assets/img/logo/logo-white.png" alt="logo" />
                         </a>
                      </Link>
                   </div>
                </Offcanvas.Header>

                <Offcanvas.Body>

                   <div className="">
                      <div className="">

                         <div className="sidebar__content">

                            <div className="mobile-menu">
                               <nav id="mobile-menu">
                                  <ul>
                                     <Collapsible trigger={<Link href="/home">Anasayfa</Link>} triggerTagName="div"
                                                  triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                        <ul className="sidebar_sub_menu submenu text-white">
                                           <li><Link href="/home"><a >Anasayfa Wordpress</a></Link></li>
                                           <li><Link href="/homeTwo"><a >Anasayfa Eklentiler</a></Link></li>
                                           <li><Link href="/home-three"><a >Anasayfa Market</a></Link></li>
                                        </ul>
                                     </Collapsible>

                                     <Collapsible trigger={<Link href="/product">Temalar</Link>} triggerTagName="div"
                                                  triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                        <ul className="sidebar_sub_menu submenu text-white">
                                           <li><Link href="/product"><a>Ürünler</a></Link></li>
                                           <li><Link href="/product-details"><a>Ürün Detayları</a></Link></li>
                                        </ul>
                                     </Collapsible>

                                     <div className='single_link iconAdd '>
                                        <li><Link href="/product"><a>HTML</a></Link></li>
                                     </div>

                                     <div className='single_link iconAdd'>
                                        <li><Link href="/support"><a>Destek</a></Link></li>
                                     </div>

                                     <Collapsible trigger={<Link href="/product">Sayfalar</Link>} triggerTagName="div"
                                                  triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                        <ul className="sidebar_sub_menu submenu text-white">
                                           <li><Link href="/about"><a >Hakkımızda</a></Link></li>
                                           <li><Link href="/documentation"><a >Belgeleme</a></Link></li>
                                           <li><Link href="/cart"><a >Sepet Sayfası</a></Link></li>
                                           <li><Link href="/wishlist"><a >İstek Listesi</a></Link></li>
                                           <li><Link href="/checkout"><a >Ödeme</a></Link></li>
                                           <li><Link href="/pricing"><a >Fiyatlandırma</a></Link></li>
                                           <li><Link href="/sign-up"><a >Kayıt Ol</a></Link></li>
                                           <li><Link href="/login"><a >Giriş Yap</a></Link></li>
                                        </ul>
                                     </Collapsible>

                                     <Collapsible trigger={<Link href="/blog">Blog</Link>} triggerTagName="div"
                                                  triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                        <ul className="sidebar_sub_menu submenu text-white">
                                           <li><Link href="/blog"><a >Blog</a></Link></li>
                                           <li><Link href="/blog-details"><a >Blog Detayları</a></Link></li>
                                        </ul>
                                     </Collapsible>

                                     <div className='single_link iconAdd border-0'>
                                        <li><Link href="/contact"><a >İletişim</a></Link></li>
                                     </div>

                                  </ul>
                               </nav>
                            </div>

                            <div className="sidebar__action d-flex align-items-center">
                               <div className="sidebar__login mt-15">
                                  {user?.email ? < a onClick={logout} style={{ cursor: 'pointer' }} className='d-flex align-items-center'> <i className="fal fa-sign-out-alt"></i> Çıkış Yap</a> :
                                      <Link href="/login">
                                         < a> <i className="far fa-unlock"></i> Giriş Yap</a>
                                      </Link>}
                               </div>
                               <div className="sidebar__cart mt-20">
                                  <Link href="/cart">
                                     <a className="cart-toggle-btn">
                                        <i className="far fa-shopping-cart"></i>
                                        <span>{totalCartQuantity}</span>
                                     </a>
                                  </Link>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                </Offcanvas.Body>
             </Offcanvas>
          </div>
       </>
   );
};

export default SidebarMenu;