import{i as c,a as f,S as g}from"./assets/vendor-b42c18af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:v,gallery:u,loader:m,btnElem:d}=y;m.classList.add("hidden");const i={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,q:""},n=document.querySelector(".input-name");v.addEventListener("submit",async t=>{t.preventDefault();const s=t.target.elements.input.value.trim();if(!s){c.show({message:"Please enter a valid search query.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),n.clear();return}i.q=s,u.innerHTML="",m.classList.remove("hidden"),i.page=1;const a=await h();i.totalResults=a.totalHits,p(a),checkBtnStatus(),t.target.reset(),n.clear()});d.addEventListener("click",async()=>{i.page+=1;const t=await h();p(t),checkBtnStatus(),window.scrollBy({top:465,behavior:"smooth"}),n.clear()});async function h(){const t=new URLSearchParams(i);try{return(await f.get(`https://pixabay.com/api/?${t}`)).data}catch(s){return console.log("Error fetching data:",s),c.show({title:"Error",message:"Oops, something went wrong"}),n.clear(),{hits:[]}}}function p(t){if(t.hits.length===0)c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),d.classList.add("hidden");else{const a=t.hits.map(o=>`
                    <a class="gallery-link" href="${o.largeImageURL}">
                        <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}">
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
                `).join("");u.insertAdjacentHTML("beforeend",a),d.classList.remove("hidden")}new g,n.value.trim()===""&&(c.show({title:"Error",message:"Please enter a search query"}),n.clear())}
//# sourceMappingURL=commonHelpers.js.map
