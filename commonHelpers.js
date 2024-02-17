import{A as h,S as b,i as u}from"./assets/vendor-db5ad915.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p=h.create({baseURL:"https://pixabay.com",params:{key:"42310325-d8e2b88bd4f4d7db9639050a5",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1}});let v=new b(".image-link",{captionsData:"alt",captionDelay:250});const L=document.querySelector(".form"),w=document.querySelector(".input-name"),n=document.querySelector(".loader"),S=document.querySelector(".gallery"),c=document.querySelector(".load-btn");let l=1,d="";L.addEventListener("submit",q);async function q(o){o.preventDefault();const t=w.value.trim();if(t===""){u.show({title:"Error",message:"Please enter a search query"});return}t!==d&&(l=1,d=t),n.classList.add("visible");try{const i=(await p.get("/api/",{params:{q:t,page:l}})).data;m(i.hits)}catch(r){console.log("Error fetching data:",r)}finally{n.classList.remove("visible")}}c.addEventListener("click",E);async function E(){const o=d;n.classList.add("visible");try{const r=(await p.get("/api/",{params:{q:o,page:l+=1}})).data;m(r.hits)}catch(t){console.log("Error fetching data:",t)}finally{n.classList.remove("visible")}}function P(o,t,r,i,e,s,a){return`<li class="photo">
    <div class="photo-card">
      <a class="image-link" data-lightbox="image" href="${t}">
        <img class="gallery-image" data-source="${t}" src="${o}" alt="${r}"></img>
      </a>
    </div>
    <div class="description">
      <p class="description-item"> Likes ${i}</p>
      <p class="description-item"> Views ${e}</p>
      <p class="description-item"> Comments ${s}</p>
      <p class="description-item"> Downloads ${a}</p>
    </div>
  </li>`}function m(o){o.length===0&&l===1?(u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",messageSize:"25"}),c.style.visibility="hidden"):c.style.visibility="visible",o.forEach(t=>{const{webformatURL:r,largeImageURL:i,tags:e,likes:s,views:a,comments:f,downloads:y}=t,g=P(r,i,e,s,a,f,y);S.insertAdjacentHTML("beforeend",g)}),v.refresh()}c.style.visibility="hidden";
//# sourceMappingURL=commonHelpers.js.map
