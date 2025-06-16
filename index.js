import{a as y,S as b,i as h}from"./assets/vendor-CnmvSTPy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function _(t){return y.get("https://pixabay.com/api/",{params:{key:"50866310-f6e992bbe1b9ca34c705df120",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const p=document.querySelector("ul.gallery"),g=document.querySelector("span.loader");function m(t){u(),console.log(p),p.innerHTML=t.map(({webformatURL:r,largeImageURL:n,tags:e,preview:o=r,original:a=n,description:f=e,likes:s,views:c,comments:l,downloads:d})=>`<li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${o}"
        data-source="${a}"
        alt="${f}"
      />
    </a>
      <!--<div class="image-info">
      <span>likes: ${s}</span>
      <span>vievs: ${c}</span>
      <span>comments: ${l}</span>
      <span">downloads: ${d}</span>
      </div>-->
      <ul class="image-info">
        <li><h4>Likes</h4><p>${s}</p></li>
        <li><h4>Views</h4><p>${c}</p></li>
        <li><h4>Comments</h4><p>${l}</p></li>
        <li><h4>Downloads</h4><p>${d}</p></li>
      </ul>
  </li>`).join(""),new b(".gallery a",{}).refresh()}function u(){p.innerHTML=""}function x(){g.classList.remove("hidden")}function v(){g.classList.add("hidden")}const j=document.querySelector("form.form");j.addEventListener("submit",t=>{t.preventDefault(),console.log(t.target.elements[0].value),t.target.elements[0].value?(u(),x(),_(t.target.elements[0].value).then(i=>{console.log(i),v(),m(i.data.hits)}).catch(i=>{h.error({title:"Error",message:String(i),position:"topRight"})})):h.error({message:"red",position:"topRight"})});const w=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];m(w);
//# sourceMappingURL=index.js.map
