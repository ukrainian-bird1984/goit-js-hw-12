import{i,a as p,S as y}from"./assets/vendor-b42c18af.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const v={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:w,gallery:u,loader:d,btnElem:n}=v;d.classList.add("hidden");const o={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};w.addEventListener("submit",async e=>{if(e.preventDefault(),o.q=e.target.elements.input.value.trim(),!navigator.onLine){f();return}if(!o.q||/^\s*$/.test(o.q)){i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),e.target.elements.input.value="";return}u.innerHTML="",d.classList.remove("hidden"),o.page=1;const a=await h();o.totalResults=a.totalHits,m(a),g(),e.target.reset()});n.addEventListener("click",async()=>{o.page+=1;const e=await h();m(e),g(),window.scrollBy({top:465,behavior:"smooth"})});async function h(){try{const e=new URLSearchParams(o);return(await p.get(`https://pixabay.com/api/?${e}`)).data}catch(e){throw f(),e}}function m(e){if(e.hits.length===0)i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),n.classList.add("hidden");else{const c=e.hits.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
        </a>
        <div class="img-content">
            <div>
                <h3>Likes</h3>
                <p>${r.likes}</p>
            </div>

            <div>
                <h3>Views</h3>
                <p>${r.views}</p>
            </div>

            <div>
                <h3>Comments</h3>
                <p>${r.comments}</p>
            </div>

            <div>
                <h3>Downloads</h3>
                <p>${r.downloads}</p>
            </div>
        </div>
    `).join("");u.insertAdjacentHTML("beforeend",c),n.classList.remove("hidden")}new y(".gallery-link").refresh(),d.classList.add("hidden")}function g(){Math.ceil(o.totalResults/o.per_page)===o.page&&(n.classList.add("hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}))}function f(){i.show({message:"Sorry, there is no internet connection. Please check your connection and try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"})}
//# sourceMappingURL=commonHelpers.js.map
