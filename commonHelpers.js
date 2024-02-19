import{i as n,a as f,S as p}from"./assets/vendor-b42c18af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const y={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:v,gallery:d,loader:u,btnElem:i}=y;u.classList.add("hidden");const a={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};v.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements.input.value.trim();if(!o||o===""){n.show({message:"Please enter a valid search query.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}if(!navigator.onLine){n.show({message:"No internet connection. Please check your connection and try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}a.q=o,d.innerHTML="",u.classList.remove("hidden"),a.page=1;try{const t=await m();a.totalResults=t.totalHits,g(t),h(),r.target.reset()}catch(t){console.error("Error fetching images:",t),n.show({message:"An error occurred while fetching images. Please try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"})}});i.addEventListener("click",async()=>{a.page+=1;const r=await m();g(r),h(),window.scrollBy({top:465,behavior:"smooth"})});async function m(){const r=new URLSearchParams(a);return(await f.get(`https://pixabay.com/api/?${r}`)).data}function g(r){if(r.hits.length===0)n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),i.classList.add("hidden");else{const o=r.hits.map(t=>`
                    <a class="gallery-link" href="${t.largeImageURL}">
                        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
                    </a>
                    <div class="img-content">
                        <div>
                            <h3>Likes</h3>
                            <p>${t.likes}</p>
                        </div>
                        <div>
                            <h3>Views</h3>
                            <p>${t.views}</p>
                        </div>
                        <div>
                            <h3>Comments</h3>
                            <p>${t.comments}</p>
                        </div>
                        <div>
                            <h3>Downloads</h3>
                            <p>${t.downloads}</p>
                        </div>
                    </div>
                `).join("");d.insertAdjacentHTML("beforeend",o),i.classList.remove("hidden")}new p}function h(){a.page*a.per_page>=a.totalResults&&i.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
