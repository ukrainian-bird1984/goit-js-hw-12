import{i as l,a as f,S as y}from"./assets/vendor-b42c18af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:v,gallery:d,loader:m,btnElem:u}=g;m.classList.add("hidden");const n={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,q:""},i=document.querySelector(".input-name");v.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements.input.value.trim();if(!o){l.show({message:"Please enter a valid search query.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}n.q=o,d.innerHTML="",m.classList.remove("hidden"),n.page=1;const a=await h();n.totalResults=a.totalHits,p(a),checkBtnStatus(),t.target.reset(),i.value=""});u.addEventListener("click",async()=>{n.page+=1;const t=await h();p(t),checkBtnStatus(),window.scrollBy({top:465,behavior:"smooth"}),i.value=""});async function h(){const t=new URLSearchParams(n);return(await f.get(`https://pixabay.com/api/?${t}`)).data}function p(t){if(t.hits.length===0)l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),u.classList.add("hidden");else{const a=t.hits.map(s=>`
                    <a class="gallery-link" href="${s.largeImageURL}">
                        <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}">
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
                `).join("");d.insertAdjacentHTML("beforeend",a),u.classList.remove("hidden")}if(new y,i.value.trim()===""){l.show({title:"Error",message:"Please enter a search query"});return}i.value=""}
//# sourceMappingURL=commonHelpers.js.map
