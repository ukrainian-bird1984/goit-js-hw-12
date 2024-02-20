import{i,a as y,S as v}from"./assets/vendor-b42c18af.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const w={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:u,gallery:m,loader:d,btnElem:n}=w;d.classList.add("hidden");const o={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};u.addEventListener("submit",async e=>{if(e.preventDefault(),o.q=e.target.elements.input.value.trim(),o.q.trim()===""){e.target.elements.input.value="";return}if(!navigator.onLine){p();return}if(!o.q){i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}m.innerHTML="",d.classList.remove("hidden"),o.page=1;const a=await h();o.totalResults=a.totalHits,g(a),f(),e.target.reset()});n.addEventListener("click",async()=>{o.page+=1;const e=await h();g(e),f(),window.scrollBy({top:465,behavior:"smooth"}),u.elements.input.value=""});async function h(){try{const e=new URLSearchParams(o);return(await y.get(`https://pixabay.com/api/?${e}`)).data}catch(e){throw p(),e}}function g(e){if(e.hits.length===0)i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),n.classList.add("hidden");else{const c=e.hits.map(s=>`<a class="gallery-link" href="${s.largeImageURL}">
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
            </div>`).join("");m.insertAdjacentHTML("beforeend",c),n.classList.remove("hidden")}new v(".gallery-link").refresh(),d.classList.add("hidden")}function f(){Math.ceil(o.totalResults/o.per_page)===o.page&&(n.classList.add("hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}))}function p(){i.show({message:"Sorry, there is no internet connection. Please check your connection and try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"})}
//# sourceMappingURL=commonHelpers.js.map
