import{a as u,S as p,i as o}from"./assets/vendor-CoqG6WdV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="54240480-a4799bfc66af4dde196d1db7d",g="https://pixabay.com/api/";async function y(i){return(await u.get(g,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const s=i.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${r}" alt="${e}" />
        </a>
        <div class="info">
  <div class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${t}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${a}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${d}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${f}</span>
  </div>
</div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",i=>{i.preventDefault();const s=i.target.elements["search-text"].value.trim();if(!s){o.warning({message:"Please enter a search query!",position:"topRight"});return}L(),b(),y(s).then(r=>{if(r.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}).catch(()=>{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
