/* esm.sh - esbuild bundle(emfed@1.3.0) es2022 production */
import f from"https://esm.sh/dompurify@2.4.1";function o(a){return Object.assign(new String(a),{__safe:null})}function u(a){return typeof a>"u"||a===null?"":typeof a=="string"||a instanceof String?a.hasOwnProperty("__safe")?a:a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"):a.map(u).join("")}function i(a,...e){let t=a[0];for(let n=1;n<a.length;++n)t+=u(e[n-1]),t+=a[n];return o(t)}function h(a){let e=null;a.reblog&&(e={avatar:a.account.avatar,username:a.account.username,display_name:a.account.display_name,user_url:a.account.url},a=a.reblog);let t=new Date(a.created_at).toLocaleString(),n=a.media_attachments.filter(s=>s.type==="image");return i`
<li class="toot">
  <a class="permalink" href="${a.url}">
    <time datetime="${a.created_at}">${t}</time>
  </a>
  ${e&&i`
  <a class="user boost" href="${e.user_url}">
    <img class="avatar" width="23" height="23" src="${e.avatar}">
    <span class="display-name">${e.display_name}</span>
    <span class="username">@${e.username}</span>
  </a>`}
  <a class="user" href="${a.account.url}">
    <img class="avatar" width="46" height="46" src="${a.account.avatar}">
    <span class="display-name">${a.account.display_name}</span>
    <span class="username">@${a.account.username}</span>
  </a>
  <div class="body">${o(f.sanitize(a.content))}</div>
  ${n.map(s=>i`
  <a class="attachment" href="${s.url}"
   target="_blank" rel="noopener noreferrer">
    <img class="attachment" src="${s.preview_url}"
      alt="${s.description}">
  </a>`)}
</li>`.toString()}async function $(a){let e=a,t=new URL(e.href),n=e.dataset.tootAccountId??await(async()=>{let r=/@(\w+)$/.exec(t.pathname);if(!r)throw"not a Mastodon user URL";let l=r[1],d=Object.assign(new URL(t),{pathname:"/api/v1/accounts/lookup",search:`?acct=${l}`});return(await(await fetch(d)).json()).id})(),s=e.dataset.tootLimit??"5",m=Object.assign(new URL(t),{pathname:`/api/v1/accounts/${n}/statuses`,search:`?limit=${s}`}),p=await(await fetch(m)).json(),c=document.createElement("ol");c.classList.add("toots"),e.replaceWith(c);for(let r of p){let l=h(r);c.insertAdjacentHTML("beforeend",l)}}document.querySelectorAll("a.mastodon-feed").forEach($);
