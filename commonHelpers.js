import{i,a as p,S as y}from"./assets/vendor-b42c18af.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const v={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:w,gallery:u,loader:d,btnElem:n}=v;d.classList.add("hidden");const o={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};w.addEventListener("submit",async e=>{if(e.preventDefault(),o.q=e.target.elements.input.value.trim(),o.q===""){e.target.elements.input.value="";return}if(!navigator.onLine){f();return}if(!o.q){i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}u.innerHTML="",d.classList.remove("hidden"),o.page=1;const a=await h();o.totalResults=a.totalHits,m(a),g(),e.target.reset()});n.addEventListener("click",async()=>{o.page+=1;const e=await h();m(e),g(),window.scrollBy({top:465,behavior:"smooth"})});async function h(){try{const e=new URLSearchParams(o);return(await p.get(`https://pixabay.com/api/?${e}`)).data}catch(e){throw f(),e}}function m(e){if(e.hits.length===0)i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),n.classList.add("hidden");else{const c=e.hits.map(s=>`<a class="gallery-link" href="${s.largeImageURL}">
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
            </div>`).join("");u.insertAdjacentHTML("beforeend",c),n.classList.remove("hidden")}new y(".gallery-link").refresh(),d.classList.add("hidden")}function g(){Math.ceil(o.totalResults/o.per_page)===o.page&&(n.classList.add("hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}))}function f(){i.show({message:"Sorry, there is no internet connection. Please check your connection and try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"})}
//# sourceMappingURL=commonHelpers.js.map
