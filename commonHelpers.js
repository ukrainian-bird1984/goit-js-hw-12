import{i as c,a as y,S as v}from"./assets/vendor-b42c18af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const L={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn"),searchInput:document.querySelector(".input-name")},{form:w,gallery:h,loader:u,btnElem:i,searchInput:n}=L;u.classList.add("hidden");const a={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};w.addEventListener("submit",async t=>{if(t.preventDefault(),a.q=n.value.trim(),!navigator.onLine){f();return}if(!a.q){c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}h.innerHTML="",u.classList.remove("hidden"),a.page=1;const o=await m();a.totalResults=o.totalHits,g(o),p(),t.target.reset()});n.addEventListener("input",()=>{n.value=n.value.trim()});i.addEventListener("click",async()=>{a.page+=1;const t=await m();g(t),p(),window.scrollBy({top:465,behavior:"smooth"})});async function m(){try{const t=new URLSearchParams(a);return(await y.get(`https://pixabay.com/api/?${t}`)).data}catch(t){throw f(),t}}function g(t){if(t.hits.length===0)c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),i.classList.add("hidden");else{const l=t.hits.map(s=>`<a class="gallery-link" href="${s.largeImageURL}">
        <img class="gallery-image"
            src="${s.webformatURL}"
            alt="${s.tags}"
        </a>
        <div class="img-content">
            <div>
                <h3>Likes</h3>
                <p>${s.likes}</p>
            </div>

            <div>
                <h3>Views</h3>
                <p>${s.views}</p>
            </div>

            <div>
                <h3>Comments</h3>
                <p>${s.comments}</p>
            </div>

            <div>
                <h3>Downloads</h3>
                <p>${s.downloads}</p>
            </div>
        </div>
    `).join("");h.insertAdjacentHTML("beforeend",l),i.classList.remove("hidden")}new v(".gallery-link").refresh(),u.classList.add("hidden")}function p(){Math.ceil(a.totalResults/a.per_page)===a.page&&(i.classList.add("hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}))}function f(){c.show({message:"Sorry, there is no internet connection. Please check your connection and try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"})}
//# sourceMappingURL=commonHelpers.js.map
