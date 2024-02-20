import{i,a as y,S as p}from"./assets/vendor-b42c18af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const w={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:L,gallery:u,loader:d,btnElem:n}=w;d.classList.add("hidden");const a={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};L.addEventListener("submit",async t=>{if(t.preventDefault(),a.q=t.target.elements.input.value.trim(),!navigator.onLine){f();return}if(!a.q){i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}u.innerHTML="",d.classList.remove("hidden"),a.page=1;const o=await h();a.totalResults=o.totalHits,m(o),g(),t.target.reset()});n.addEventListener("click",async()=>{a.page+=1;const t=await h();m(t),g(),window.scrollBy({top:465,behavior:"smooth"})});async function h(){try{const t=new URLSearchParams(a);return(await y.get(`https://pixabay.com/api/?${t}`)).data}catch(t){throw f(),t}}function m(t){if(t.hits.length===0)i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),n.classList.add("hidden");else{const c=t.hits.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
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
            </div>`).join("");u.insertAdjacentHTML("beforeend",c),n.classList.remove("hidden")}new p(".gallery-link").refresh(),d.classList.add("hidden")}function g(){Math.ceil(a.totalResults/a.per_page)===a.page&&(n.classList.add("hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}))}function f(){i.show({message:"Sorry, there is no internet connection. Please check your connection and try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"})}
//# sourceMappingURL=commonHelpers.js.map
