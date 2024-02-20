import{i,a as f,S as y}from"./assets/vendor-b42c18af.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const v={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn"),searchInput:document.querySelector(".input-name")},{form:L,gallery:u,loader:d,btnElem:n,searchInput:w}=v;d.classList.add("hidden");const s={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};w.addEventListener("input",e=>{s.q=e.target.value.trim()});L.addEventListener("submit",async e=>{if(e.preventDefault(),s.q=e.target.elements.input.value.trim(),!navigator.onLine){p();return}if(!s.q||/^\s*$/.test(s.q)){i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}u.innerHTML="",d.classList.remove("hidden"),s.page=1;const a=await h();s.totalResults=a.totalHits,m(a),g(),e.target.reset()});n.addEventListener("click",async()=>{s.page+=1;const e=await h();m(e),g(),window.scrollBy({top:465,behavior:"smooth"})});async function h(){try{const e=new URLSearchParams(s);return(await f.get(`https://pixabay.com/api/?${e}`)).data}catch(e){throw p(),e}}function m(e){if(e.hits.length===0)i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),n.classList.add("hidden");else{const c=e.hits.map(o=>`<a class="gallery-link" href="${o.largeImageURL}">
        <img class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
        </a>
        <div class="img-content">
            <div>
                <h3>Likes</h3>
                <p>${o.likes}</p>
            </div>

            <div>
                <h3>Views</h3>
                <p>${o.views}</p>
            </div>

            <div>
                <h3>Comments</h3>
                <p>${o.comments}</p>
            </div>

            <div>
                <h3>Downloads</h3>
                <p>${o.downloads}</p>
            </div>
        </div>
    `).join("");u.insertAdjacentHTML("beforeend",c),n.classList.remove("hidden")}new y(".gallery-link").refresh(),d.classList.add("hidden")}function g(){Math.ceil(s.totalResults/s.per_page)===s.page&&(n.classList.add("hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}))}function p(){i.show({message:"Sorry, there is no internet connection. Please check your connection and try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"})}
//# sourceMappingURL=commonHelpers.js.map
