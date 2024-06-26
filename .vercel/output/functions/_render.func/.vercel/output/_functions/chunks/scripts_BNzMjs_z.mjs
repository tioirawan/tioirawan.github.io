const scripts = [["/_astro/ec.dy9ns.js","(()=>{function i(n){let e=document.createElement(\"pre\");Object.assign(e.style,{opacity:\"0\",pointerEvents:\"none\",position:\"absolute\",overflow:\"hidden\",left:\"0\",top:\"0\",width:\"20px\",height:\"20px\",webkitUserSelect:\"auto\",userSelect:\"all\"}),e.ariaHidden=\"true\",e.textContent=n,document.body.appendChild(e);let r=document.createRange();r.selectNode(e);let o=getSelection();if(!o)return!1;o.removeAllRanges(),o.addRange(r);let a=!1;try{a=document.execCommand(\"copy\")}finally{o.removeAllRanges(),document.body.removeChild(e)}return a}async function l(n){let e=n.currentTarget,r=e.dataset,o=!1,a=r.code.replace(/\\u007f/g,`\n`);try{await navigator.clipboard.writeText(a),o=!0}catch{o=i(a)}if(!o||e.parentNode?.querySelector(\".feedback\"))return;let t=document.createElement(\"div\");t.classList.add(\"feedback\"),t.append(r.copied),e.before(t),t.offsetWidth,requestAnimationFrame(()=>t?.classList.add(\"show\"));let c=()=>!t||t.classList.remove(\"show\"),d=()=>{!t||parseFloat(getComputedStyle(t).opacity)>0||(t.remove(),t=void 0)};setTimeout(c,1500),setTimeout(d,2500),e.addEventListener(\"blur\",c),t.addEventListener(\"transitioncancel\",d),t.addEventListener(\"transitionend\",d)}var s=n=>{n.querySelectorAll&&n.querySelectorAll(\".expressive-code .copy button\").forEach(e=>e.addEventListener(\"click\",l))};s(document);var u=new MutationObserver(n=>n.forEach(e=>e.addedNodes.forEach(r=>{s(r)})));u.observe(document.body,{childList:!0,subtree:!0});document.addEventListener(\"astro:page-load\",()=>{s(document)});})();"]];

const prerender = true;
const GET = ({ url }) => {
  const match = scripts.find(([route]) => url.pathname.endsWith(route));
  if (!match) throw new Error(`No scripts found for route ${url.pathname}`);
  return new Response(match[1], { headers: { "Content-Type": "text/javascript", "Cache-Control": "public,max-age=31536000,immutable" } });
};

export { GET, prerender };
