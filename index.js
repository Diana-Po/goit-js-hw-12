import{a as f,S as y,i}from"./assets/vendor-CrAdtshy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const L="49001064-c7b72e374a4ae6399075933f6",w="https://pixabay.com/api/";let a=1;function E(){a=1}async function p(o){const t={key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:a};try{const r=await f.get(w,{params:t});return a+=1,r.data}catch(r){throw console.error("Error fetching images:",r),r}}const g=document.querySelector(".loader");function m(){g.classList.remove("hidden")}function u(){g.classList.add("hidden")}function v(){document.getElementById("gallery").innerHTML=""}function h(o){const t=document.getElementById("gallery");o.forEach(s=>{const e=document.createElement("li");e.classList.add("gallery-item"),e.innerHTML=`
      <a href="${s.largeImageURL}" class="gallery-link">
          <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-image" />
      </a>
      <div class="info">
          <p>Likes <span>${s.likes}</span></p>
          <p>Views <span>${s.views}</span></p>
          <p>Comments <span>${s.comments}</span></p>
          <p>Downloads <span>${s.downloads}</span></p>
      </div>
  `,t.appendChild(e)}),new y(".gallery-link",{captionsData:"alt"}).refresh()}function I(){const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}const b=document.getElementById("search-form"),P=document.getElementById("search-input");document.querySelector(".loader");const l=document.getElementById("load-more");let c="";b.addEventListener("submit",async o=>{if(o.preventDefault(),c=P.value.trim(),c===""){i.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}v(),l.classList.add("hidden"),m(),E();try{const t=await p(c),r=t.hits;if(r.length===0)i.error({title:"Error",message:"No images found. Try another search!",position:"topRight"});else{h(r);const s=Math.ceil(t.totalHits/40);a<=s&&l.classList.remove("hidden")}}catch{i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{u()}});l.addEventListener("click",async()=>{m();try{const o=await p(c),t=o.hits,r=Math.ceil(o.totalHits/40);t.length===0||a>r?(i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.classList.add("hidden")):(h(t),I(),a>r&&(i.info({title:"Info",message:"No more images to load.",position:"topRight"}),l.classList.add("hidden")))}catch{i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{u()}});
//# sourceMappingURL=index.js.map
