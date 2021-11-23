var rr=Object.defineProperty;var z=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var D=(o,e,n)=>e in o?rr(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,p=(o,e)=>{for(var n in e||(e={}))W.call(e,n)&&D(o,n,e[n]);if(z)for(var n of z(e))O.call(e,n)&&D(o,n,e[n]);return o};var $=(o,e)=>{var n={};for(var t in o)W.call(o,t)&&e.indexOf(t)<0&&(n[t]=o[t]);if(o!=null&&z)for(var t of z(o))e.indexOf(t)<0&&O.call(o,t)&&(n[t]=o[t]);return n};import{C as u,s as a,r as H,R as d,H as or,U as er,a as ar,j as G,b as f,u as tr,L as lr,c as U,d as V,e as X,f as Y,g as nr,h as cr}from"./vendor.e0c8554d.js";const ir=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const b of s.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&t(b)}).observe(document,{childList:!0,subtree:!0});function n(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(c){if(c.ep)return;c.ep=!0;const s=n(c);fetch(c.href,s)}};ir();const y=u`
	font-family: var(--font-sans-serif);
	line-height: 1.25;
	font-weight: 900;
	color: var(--color-gray-900);
`,dr=a.h1`
	${y}
	margin: var(--space-lg) 0;
	font-size: var(--font-2xl);
`,sr=a.h2`
	${y}
	margin: var(--space-lg) 0;
	font-size: var(--font-xl);
`,ur=a.h3`
	${y}
	margin: var(--space-md) 0;
	font-size: var(--font-lg);
`;a.h4`
	${y}
	margin: var(--space-md) 0;
	font-size: var(--font-md);
`;a.h5`
	${y}
	margin: var(--space-md) 0;
	font-size: var(--font-base);
`;a.h6`
	${y}
	margin: var(--space-md) 0;
	font-size: var(--font-sm);
`;const hr=a.ul`
	list-style-type: unset;
	margin: var(--space-md) 0 var(--space-md) var(--space-xl);
`,vr=a.ol`
	list-style-type: decimal;
	margin: var(--space-md) 0 var(--space-md) var(--space-xl);
`,_=u`
	margin: var(--space-md) 0;
	line-height: 1.35;
	max-width: 60ch;
`,i=a.p`
	${_}
	font-size: var(--font-base);
`,F=a.p`
	${_}
	font-size: var(--font-sm);
	color: var(--color-gray-600);
`,br=a.a`
	color: var(--color-blue-400);
	transition: color 100ms;

	&:hover {
		color: var(--color-blue-500);
	}

	&:active {
		color: var(--color-blue-600);
	}
`,N=a.strong`
	font-weight: 600;
	color: var(--color-gray-800);
`,K=a.em`
	font-style: italic;
	font-weight: 200;
`,C=a.code`
	background-color: var(--color-blue-200);
	font-family: var(--font-monospace);

	&::before,
	&::after {
		content: '\`';
	}
`,mr=a.blockquote`
	position: relative;

	display: flex;
	background-color: var(--color-blue-100);
	padding: var(--space-lg) var(--space-3xl);
	border-radius: var(--rounded-sm);
	quotes: '“' '”';

	color: var(--color-gray-800);

	overflow: hidden;

	& > ${i}, & > ${F} {
		margin: 0;
		max-width: 100%;
	}

	::before {
		content: open-quote;
		color: var(--color-blue-200);
		position: absolute;
		top: -1.15rem;
		left: -0.75rem;
		font-family: var(--font-monospace);
		font-size: var(--font-4xl);
		pointer-events: none;
	}
`,gr=o=>o.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),pr=a.a`
	position: absolute;

	width: calc(100% + 0.75em);
	margin-left: -0.75em;

	opacity: ${o=>o.isShown?"1":"0"};
	cursor: pointer;

	transition: opacity 100ms;

	& > svg {
		color: var(--color-gray-700);
	}
`,J=o=>{const e=a(o)`
		position: relative;
	`;return({children:t})=>{const c=gr(t),[s,b]=H.exports.useState(!1);return d.createElement(e,{id:c,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1)},d.createElement(pr,{isShown:s,href:`#${c}`},d.createElement(or,{size:".65em"})),t)}},fr=er`
  to {
    transform: rotate(360deg);
  }
`,R=a.div`
	width: 1.25rem;
	height: 1.25rem;

	border-radius: var(--rounded-full);
	animation: ${fr} 1s linear infinite;
`,j=u`
	padding: var(--space-sm) var(--space-md);
	border-radius: var(--rounded-sm);
	user-select: none;

	transition: border-color 100ms, background-color 100ms, color 100ms;
`,yr=a.button.attrs(o=>({disabled:o.loading||o.disabled}))`
	${j}

	${o=>{const e=o.loading?"var(--color-blue-300)":o.disabled?"var(--color-gray-400)":"var(--color-blue-400)";return u`
			background-color: ${e};
			border: 2px solid ${e};
		`}}

	color: var(--color-white);

	&:hover {
		${o=>{const e=o.loading?"var(--color-blue-400)":o.disabled?"var(--color-gray-500)":"var(--color-blue-500)";return u`
				background-color: ${e};
				border-color: ${e};
			`}}
	}

	${o=>!o.loading&&!o.disabled&&u`
			&:active {
				background-color: var(--color-blue-600);
				border-color: var(--color-blue-600);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`,kr=a.button.attrs(o=>({disabled:o.loading||o.disabled}))`
	${j}

	${o=>{const e=o.loading?"var(--color-blue-300)":o.disabled?"var(--color-gray-400)":"var(--color-blue-400)";return u`
			color: ${e};
			border: 2px solid ${e};

			&:hover {
				background-color: ${e};
			}
		`}}

	background-color: var(--color-white);

	&:hover {
		color: var(--color-white);
	}

	${o=>!o.loading&&!o.disabled&&u`
			&:active {
				background-color: var(--color-blue-500);
				border-color: var(--color-blue-500);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`,wr=a.button.attrs(o=>({disabled:o.loading||o.disabled}))`
	${j}

	border: 2px solid transparent;

	&:hover {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}

	${o=>!o.loading&&!o.disabled&&u`
			&:active {
				background-color: var(--color-gray-300);
				border-color: var(--color-gray-300);
			}
		`}

	&:disabled {
		background-color: var(--color-gray-100);
		color: var(--color-gray-400);
		cursor: not-allowed;
	}

	&:hover:disabled {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}
`,xr=a(R)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-white);
`,$r=a(R)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-blue-400);
`,Ir=a(R)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-gray-400);
`,m=s=>{var b=s,{variant:o="primary",children:e,leftIcon:n,rightIcon:t}=b,c=$(b,["variant","children","leftIcon","rightIcon"]);const B=o==="primary"?yr:o==="secondary"?kr:wr;if(n){const E=a(B)`
			display: flex;

			& > *:first-child {
				margin-right: var(--space-md);
			}
		`;return d.createElement(E,p({},c),n," ",e)}if(t){const E=a(B)`
			display: flex;

			& > *:last-child {
				margin-left: var(--space-md);
			}
		`;return d.createElement(E,p({},c),e," ",t)}return d.createElement(B,p({},c),e)},Sr=a.a`
	padding: var(--space-sm) var(--space-md);
	border: 2px solid transparent;
	border-radius: var(--rounded-sm);

	user-select: none;
	transition: border-color 100ms, background-color 100ms, color 100ms;

	${o=>o.isNavigatedTo?u`
					font-weight: 600;
					color: var(--color-gray-800);
			  `:""}

	&:hover {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}

	&:active {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}
`,g=a.button.attrs(o=>({disabled:o.loading||o.disabled}))`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 2.25rem;
	height: 2.25rem;
	border: 2px solid transparent;
	border-radius: var(--rounded-sm);

	&:hover {
		background-color: var(--color-gray-200);
	}

	${o=>!o.loading&&!o.disabled&&u`
			&:active {
				background-color: var(--color-gray-300);
			}
		`}

	&:disabled {
		background-color: var(--color-gray-100);
		color: var(--color-gray-400);
		cursor: not-allowed;
	}

	&:hover:disabled {
		background-color: var(--color-gray-200);
	}

	transition: background-color 100ms;
`,Lr=a.div`
	position: relative;
	cursor: pointer;
`,zr=a(F)`
	position: absolute;
	z-index: 10;
	${({position:o})=>o==="top"?u`
				bottom: calc(100% + var(--space-sm));
				left: 50%;
				transform: translateX(-50%);
			`:o==="left"?u`
				top: 50%;
				transform: translateY(-50%);
				right: calc(100% + var(--space-sm));
			`:o==="right"?u`
				top: 50%;
				transform: translateY(-50%);
				left: calc(100% + var(--space-sm));
			`:u`
			top: calc(100% + var(--space-sm));
			left: 50%;
			transform: translateX(-50%);
		`}
	margin: 0;
	padding: var(--space-sm) var(--space-md);
	border-radius: var(--rounded-sm);
	background-color: var(--color-gray-600);

	pointer-events: none;

	white-space: nowrap;
	line-height: 1;
	color: var(--color-gray-100);

	opacity: ${o=>o.isShown?"1":"0"};
	transition: 100ms opacity;
`,h=({children:o,content:e,position:n="bottom"})=>{const t=H.exports.useRef(null),[c,s]=H.exports.useState(!1);return d.createElement(Lr,{ref:t,onPointerEnter:()=>{s(!0)},onPointerLeave:()=>{s(!1)}},o,d.createElement(zr,{position:n,isShown:c},e))},T=a.div`
	position: absolute;
	content: '';
	top: 50%;
	left: var(--padding);

	width: calc(var(--height) - var(--padding) * 2);
	height: calc(var(--height) - var(--padding) * 2);
	border-radius: var(--rounded-full);
	background-color: var(--color-white);

	transform: translate(0, -50%);
	pointer-events: none;

	transition: transform 100ms ease-out;
`,Br=a.input.attrs(()=>({type:"checkbox"}))`
	display: block;
	width: var(--width);
	height: var(--height);
	border-radius: var(--rounded-full);
	background-color: var(--color-gray-200);
	border: 1px solid var(--color-gray-200);
	transition: background-color 100ms, border-color 100ms;
	cursor: pointer;

	&:hover {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:checked:hover {
		background-color: var(--color-blue-500);
		border-color: var(--color-blue-500);
	}

	&:disabled {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
		cursor: not-allowed;
	}

	&:disabled:hover {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:disabled:checked {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:disabled:checked:hover {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}

	&:checked + ${T} {
		transform: translate(calc(var(--width) - 100% - var(--padding) * 2), -50%);
	}

	&:disabled + ${T} {
		background-color: var(--color-gray-100);
	}
`,Er=a.div`
	--width: 2.25rem;
	--height: calc(var(--width) / 2);
	--padding: var(--space-vsm);

	position: relative;
`,q=n=>{var t=n,{children:o}=t,e=$(t,["children"]);return d.createElement(Er,null,d.createElement(Br,p({},e)),d.createElement(T,null))},I=a.input`
	width: 100%;
	min-width: 10rem;
	padding: var(--space-sm) var(--space-md);
	border: 1px solid var(--color-gray-200);
	border-radius: var(--rounded-sm);
	background-color: var(--color-white);

	font-size: var(--font-sm);

	transition: border-color 100ms;

	&:disabled {
		background-color: var(--color-gray-100);
		cursor: not-allowed;
	}

	&:disabled:hover,
	&:disabled:active,
	&:disabled:focus {
		border-color: var(--color-gray-400);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:active,
	&:focus {
		border-color: var(--color-blue-400);
	}
`,Q=a(ar)`
	position: absolute;
	display: block;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: var(--color-white);
	pointer-events: none;
`,Hr=a.input.attrs(()=>({type:"checkbox"}))`
	display: block;

	width: 1.125rem;
	height: 1.125rem;
	background-color: var(--color-white);
	border-radius: var(--rounded-sm);
	border: 1px solid var(--color-gray-200);
	transition: border-color 100ms, background-color 100ms;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-gray-100);
	}

	&:disabled + ${Q} {
		color: var(--color-gray-100);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:disabled:checked {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}
`,Fr=a.div`
	position: relative;
`,A=n=>{var t=n,{children:o}=t,e=$(t,["children"]);return d.createElement(Fr,null,d.createElement(Hr,p({},e)),d.createElement(Q,null))},Z=a.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: calc(var(--size) - var(--padding) * 2);
	height: calc(var(--size) - var(--padding) * 2);
	background-color: var(--color-white);
	border-radius: var(--rounded-full);

	pointer-events: none;
`,Nr=a.input.attrs(()=>({type:"radio"}))`
	display: block;
	width: var(--size);
	height: var(--size);
	border-radius: var(--rounded-full);
	border: 1px solid var(--color-gray-200);
	background-color: var(--color-white);

	transition: border-color 100ms, background-color 100ms;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-gray-100);
	}

	&:disabled + ${Z} {
		background-color: var(--color-gray-100);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:disabled:checked {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}
`,Cr=a.div`
	--padding: var(--space-vsm);
	--size: 1.125rem;

	position: relative;
`,k=n=>{var t=n,{children:o}=t,e=$(t,["children"]);return d.createElement(Cr,null,d.createElement(Nr,p({},e)),d.createElement(Z,null))},r=G.exports.jsx,l=G.exports.jsxs,S=J(sr),v=J(ur),Rr=f.article`
	width: 100%;
	max-width: 45rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0.05px;
	padding-bottom: var(--space-3xl);
`,w=f.div`
	display: flex;
	gap: var(--space-sm);
	margin: var(--space-md) 0;
`,P=f.div`
	display: flex;
	gap: var(--space-sm);
	max-width: calc(30rem + var(--space-sm));
	margin: var(--space-md) 0;
`,L=f.div`
	display: flex;
	align-items: center;
	gap: var(--space-md);
	margin: var(--space-sm) 0;

	& > ${i} {
		margin: 0;
		user-select: none;
	}
`,M=f(L)``,x=f(L)``,jr=[{path:"/",name:"Home"},{path:"/work",name:"Work"},{path:"/blog",name:"Blog"},{path:"/about",name:"About"}];function Tr(){const o=tr();return l(Rr,{children:[r(dr,{children:"Components"}),r(S,{children:"Typography"}),r(v,{children:"Paragraphs"}),r(i,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),r(F,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),r(v,{children:"Lists"}),l(i,{children:["Ways to declare"," ",r(br,{href:"https://en.wikipedia.org/wiki/Variable_(mathematics)",target:"_blank",children:"variables"})," ",r(K,{children:"constants"})," in javascript:"]}),l(hr,{children:[l(i,{as:"li",children:[r(C,{children:"let"}),": a variable that can be changed later and"," ",r(N,{children:"block-scoped"}),"."]}),l(i,{as:"li",children:[r(C,{children:"const"}),": a constant that can't be changed later and ",r(N,{children:"block-scoped"}),"."]}),l(i,{as:"li",children:[r(C,{children:"var"}),": a variable that can't be changed later and ",r(N,{children:"function-scoped"}),"."]})]}),l(i,{children:["Steps to declare ",r(K,{children:"them"}),":"]}),l(vr,{children:[r(i,{as:"li",children:"Think of the the name of it."}),r(i,{as:"li",children:"Think whether it will change or not."})]}),r(v,{children:"Blockquote"}),r(mr,{children:r(i,{children:"Failure is better than doing nothing, because doing nothing is the ultimate failure."})}),r(S,{children:"Buttons"}),r(v,{children:"Primary Button"}),l(w,{children:[r(m,{children:"Normal"}),r(m,{loading:!0,leftIcon:r(xr,{}),children:"Loading"}),r(m,{disabled:!0,children:"Disabled"})]}),r(v,{children:"Secondary Button"}),l(w,{children:[r(m,{variant:"secondary",children:"Normal"}),r(m,{variant:"secondary",loading:!0,leftIcon:r($r,{}),children:"Loading"}),r(m,{variant:"secondary",disabled:!0,children:"Disabled"})]}),r(v,{children:"Tertiary Button"}),l(w,{children:[r(m,{variant:"tertiary",children:"Normal"}),r(m,{variant:"tertiary",loading:!0,leftIcon:r(Ir,{}),children:"Loading"}),r(m,{variant:"tertiary",disabled:!0,children:"Disabled"})]}),r(S,{children:"Nav Link"}),r(w,{children:jr.map(e=>r(lr,{to:e.path,children:r(Sr,{isNavigatedTo:o.pathname===e.path,children:e.name})},e.path))}),r(S,{children:"Icon Button"}),l(w,{children:[r(h,{content:"Bottom",children:r(g,{children:r(U,{size:20})})}),r(h,{content:"Top",position:"top",children:r(g,{children:r(V,{size:20})})}),r(h,{content:"Right",position:"right",children:r(g,{children:r(X,{size:20})})}),r(h,{content:"Left",position:"left",children:r(g,{children:r(Y,{size:20})})})]}),l(w,{children:[r(h,{content:"Bottom",children:r(g,{disabled:!0,children:r(U,{size:20})})}),r(h,{content:"Top",position:"top",children:r(g,{disabled:!0,children:r(V,{size:20})})}),r(h,{content:"Right",position:"right",children:r(g,{disabled:!0,children:r(X,{size:20})})}),r(h,{content:"Left",position:"left",children:r(g,{disabled:!0,children:r(Y,{size:20})})})]}),r(S,{children:"Form Fields"}),r(v,{children:"Inputs"}),l(P,{children:[r(I,{placeholder:"First Name"}),r(I,{placeholder:"Last Name",disabled:!0})]}),l(P,{children:[r(I,{type:"number",placeholder:"Age",min:3,max:100}),r(I,{placeholder:"Phone number"})]}),r(P,{children:r(I,{type:"email",placeholder:"Email"})}),r(v,{children:"Switch"}),l(L,{children:[r(q,{id:"switch-1"}),r(i,{as:"label",htmlFor:"switch-1",children:"I agree to sell my privacy"})]}),l(L,{children:[r(h,{content:"It's not your choice, it's ours",position:"left",children:r(q,{id:"switch-2",disabled:!0})}),r(i,{as:"label",htmlFor:"switch-2",children:"I agree to sell my privacy"})]}),l(L,{children:[r(h,{content:"It's not your choice, it's ours",position:"left",children:r(q,{id:"switch-3",checked:!0,disabled:!0})}),r(i,{as:"label",htmlFor:"switch-3",children:"I agree to sell my privacy"})]}),r(v,{children:"Checkbox"}),l(M,{children:[r(A,{id:"checkbox-1"}),r(i,{as:"label",htmlFor:"checkbox-1",children:"I agree to sell my privacy"})]}),l(M,{children:[r(h,{content:"It's not your choice, it's ours",position:"left",children:r(A,{id:"checkbox-2",disabled:!0})}),r(i,{as:"label",htmlFor:"checkbox-2",children:"I agree to sell my privacy"})]}),l(M,{children:[r(h,{content:"It's not your choice, it's ours",position:"left",children:r(A,{id:"checkbox-2",checked:!0,disabled:!0})}),r(i,{as:"label",htmlFor:"checkbox-2",children:"I agree to sell my privacy"})]}),r(v,{children:"Radio"}),r(i,{children:"What's your favorite javascript framework?"}),l(x,{children:[r(k,{name:"favorite-framework",value:"react",id:"react"}),r(i,{as:"label",htmlFor:"react",children:"React"})]}),l(x,{children:[r(k,{name:"favorite-framework",value:"vue",id:"vue"}),r(i,{as:"label",htmlFor:"vue",children:"Vue"})]}),l(x,{children:[r(k,{name:"favorite-framework",value:"angular",id:"angular"}),r(i,{as:"label",htmlFor:"angular",children:"Angular"})]}),l(x,{children:[r(k,{name:"favorite-framework",value:"svelte",id:"svelte"}),r(i,{as:"label",htmlFor:"svelte",children:"Svelte"})]}),l(x,{children:[r(h,{content:"Is Next.js even a standalone framework?",position:"left",children:r(k,{name:"favorite-framework",value:"next",id:"next",disabled:!0,defaultChecked:!0})}),r(i,{as:"label",htmlFor:"next",children:"Next.js"})]}),l(x,{children:[r(k,{name:"favorite-framework",value:"blitz",id:"blitz"}),r(i,{as:"label",htmlFor:"blitz",children:"Blitz.js"})]})]})}nr.render(r(d.StrictMode,{children:r(cr,{children:r(Tr,{})})}),document.getElementById("root"));
