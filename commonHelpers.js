import{i as n,a as g,S as f}from"./assets/vendor-b42c18af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:y,gallery:d,loader:m,btnElem:c}=p;m.classList.add("hidden");const a={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,q:""};y.addEventListener("submit",async r=>{r.preventDefault();const s=r.target.elements.input.value.trim();if(!s){n.show({message:"Please enter a valid search query.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}a.q=s,d.innerHTML="",m.classList.remove("hidden"),a.page=1;try{const t=await u();a.totalResults=t.totalHits,h(t),checkBtnStatus()}catch{n.show({message:"Error: Unable to fetch images. Please check your internet connection and try again.",backgroundColor:"#FF0000",messageColor:"white",messageSize:"25"})}r.target.reset()});c.addEventListener("click",async()=>{a.page+=1;try{const r=await u();h(r),checkBtnStatus(),window.scrollBy({top:465,behavior:"smooth"})}catch{n.show({message:"Error: Unable to fetch more images. Please check your internet connection and try again.",backgroundColor:"#FF0000",messageColor:"white",messageSize:"25"})}});async function u(){const r=new URLSearchParams(a);try{return(await g.get(`https://pixabay.com/api/?${r}`)).data}catch(s){throw s}}function h(r){if(r.hits.length===0)n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),c.classList.add("hidden");else{const s=r.hits.map(t=>`
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
                `).join("");d.insertAdjacentHTML("beforeend",s),c.classList.remove("hidden")}new f}
//# sourceMappingURL=commonHelpers.js.map
