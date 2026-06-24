const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelector('[data-nav-links]');
const backToTop=document.querySelector('.back-to-top');
const year=document.querySelector('#year');
const lightbox=document.querySelector('.lightbox');
const lightboxImg=document.querySelector('.lightbox img');
const lightboxClose=document.querySelector('.lightbox-close');

if(year){year.textContent=new Date().getFullYear();}

navToggle?.addEventListener('click',()=>{
  const isOpen=navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded',String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',()=>{
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded','false');
  });
});

window.addEventListener('scroll',()=>{
  if(window.scrollY>550){backToTop?.classList.add('visible');}
  else{backToTop?.classList.remove('visible');}
});

backToTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

document.querySelectorAll('[data-lightbox]').forEach(item=>{
  item.addEventListener('click',()=>{
    const src=item.getAttribute('data-lightbox');
    const img=item.querySelector('img');
    lightboxImg.src=src;
    lightboxImg.alt=img?.alt||'Image preview';
    lightbox?.classList.add('open');
    lightbox?.setAttribute('aria-hidden','false');
  });
});

function closeLightbox(){
  lightbox?.classList.remove('open');
  lightbox?.setAttribute('aria-hidden','true');
  lightboxImg.src='';
}

lightboxClose?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',(event)=>{if(event.target===lightbox){closeLightbox();}});
document.addEventListener('keydown',(event)=>{if(event.key==='Escape'){closeLightbox();}});
