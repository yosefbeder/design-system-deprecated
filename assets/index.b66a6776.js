var Z=Object.defineProperty;var L=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var O=(o,e,n)=>e in o?Z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,p=(o,e)=>{for(var n in e||(e={}))M.call(e,n)&&O(o,n,e[n]);if(L)for(var n of L(e))W.call(e,n)&&O(o,n,e[n]);return o};var z=(o,e)=>{var n={};for(var t in o)M.call(o,t)&&e.indexOf(t)<0&&(n[t]=o[t]);if(o!=null&&L)for(var t of L(o))e.indexOf(t)<0&&W.call(o,t)&&(n[t]=o[t]);return n};import{C as h,s as a,r as B,R as s,H as rr,U as or,a as er,j as D,b as f,u as ar,L as tr,c as G,d as U,e as V,f as X,g as lr,h as nr}from"./vendor.e0c8554d.js";const cr=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const v of d.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&t(v)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}};cr();const y=h`
	font-family: var(--font-sans-serif);
	line-height: 1.25;
	font-weight: 900;
	color: var(--color-gray-900);
`,ir=a.h1`
	${y}
	margin: var(--space-lg) 0;
	font-size: var(--font-2xl);
`,dr=a.h2`
	${y}
	margin: var(--space-lg) 0;
	font-size: var(--font-xl);
`,sr=a.h3`
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
`,ur=a.ol`
	list-style-type: decimal;
	margin: var(--space-md) 0 var(--space-md) var(--space-xl);
`,Y=h`
	margin: var(--space-md) 0;
	line-height: 1.35;
	max-width: 60ch;
`,c=a.p`
	${Y}
	font-size: var(--font-base);
`,E=a.p`
	${Y}
	font-size: var(--font-sm);
	color: var(--color-gray-600);
`,vr=a.a`
	color: var(--color-blue-400);
	transition: color 100ms;

	&:hover {
		color: var(--color-blue-500);
	}

	&:active {
		color: var(--color-blue-600);
	}
`,H=a.strong`
	font-weight: 600;
	color: var(--color-gray-800);
`,_=a.em`
	font-style: italic;
	font-weight: 200;
`,F=a.code`
	background-color: var(--color-blue-200);
	font-family: var(--font-monospace);

	&::before,
	&::after {
		content: '\`';
	}
`,br=a.blockquote`
	position: relative;

	display: flex;
	background-color: var(--color-blue-100);
	padding: var(--space-lg) var(--space-3xl);
	border-radius: var(--rounded-sm);
	quotes: '“' '”';

	color: var(--color-gray-800);

	overflow: hidden;

	& > ${c}, & > ${E} {
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
`,gr=o=>o.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),mr=a.a`
	position: absolute;

	width: calc(100% + 1em);
	margin-left: -1em;

	opacity: ${o=>o.isShown?"1":"0"};
	cursor: pointer;

	transition: opacity 100ms;

	& > svg {
		color: var(--color-gray-700);
	}
`,K=o=>{const e=a(o)`
		position: relative;
	`;return({children:t})=>{const i=gr(t),[d,v]=B.exports.useState(!1);return s.createElement(e,{id:i,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)},s.createElement(mr,{isShown:d,href:`#${i}`},s.createElement(rr,{size:".75em"})),t)}},pr=or`
  to {
    transform: rotate(360deg);
  }
`,N=a.div`
	width: 1.25rem;
	height: 1.25rem;

	border-radius: var(--rounded-full);
	animation: ${pr} 1s linear infinite;
`,C=h`
	padding: var(--space-sm) var(--space-md);
	border-radius: var(--rounded-sm);
	user-select: none;

	transition: border-color 100ms, background-color 100ms, color 100ms;
`,fr=a.button.attrs(o=>({disabled:o.loading||o.disabled}))`
	${C}

	${o=>{const e=o.loading?"var(--color-blue-300)":o.disabled?"var(--color-gray-400)":"var(--color-blue-400)";return h`
			background-color: ${e};
			border: 2px solid ${e};
		`}}

	color: var(--color-white);

	&:hover {
		${o=>{const e=o.loading?"var(--color-blue-400)":o.disabled?"var(--color-gray-500)":"var(--color-blue-500)";return h`
				background-color: ${e};
				border-color: ${e};
			`}}
	}

	${o=>!o.loading&&!o.disabled&&h`
			&:active {
				background-color: var(--color-blue-600);
				border-color: var(--color-blue-600);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`,yr=a.button.attrs(o=>({disabled:o.loading||o.disabled}))`
	${C}

	${o=>{const e=o.loading?"var(--color-blue-300)":o.disabled?"var(--color-gray-400)":"var(--color-blue-400)";return h`
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

	${o=>!o.loading&&!o.disabled&&h`
			&:active {
				background-color: var(--color-blue-500);
				border-color: var(--color-blue-500);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`,kr=a.button.attrs(o=>({disabled:o.loading||o.disabled}))`
	${C}

	border: 2px solid transparent;

	&:hover {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}

	${o=>!o.loading&&!o.disabled&&h`
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
`,wr=a(N)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-white);
`,xr=a(N)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-blue-400);
`,$r=a(N)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-gray-400);
`,R=o=>({disabled:o==="disabled",loading:o==="loading"}),g=({variant:o="primary",state:e="normal",children:n,leftIcon:t,rightIcon:i})=>{const d=o==="primary"?fr:o==="secondary"?yr:kr;if(t){const v=a(d)`
			display: flex;

			& > *:first-child {
				margin-right: var(--space-md);
			}
		`;return s.createElement(v,p({},R(e)),t," ",n)}if(i){const v=a(d)`
			display: flex;

			& > *:last-child {
				margin-left: var(--space-md);
			}
		`;return s.createElement(v,p({},R(e)),n," ",i)}return s.createElement(d,p({},R(e)),n)},Ir=a.a`
	padding: var(--space-sm) var(--space-md);
	border: 2px solid transparent;
	border-radius: var(--rounded-sm);

	user-select: none;
	transition: border-color 100ms, background-color 100ms, color 100ms;

	${o=>o.isNavigatedTo?h`
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
`,m=a.button.attrs(o=>({disabled:o.loading||o.disabled}))`
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

	${o=>!o.loading&&!o.disabled&&h`
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
`,Sr=a.div`
	position: relative;
	cursor: pointer;
`,Lr=a(E)`
	position: absolute;
	z-index: 10;
	${({position:o})=>o==="top"?h`
				bottom: calc(100% + var(--space-sm));
				left: 50%;
				transform: translateX(-50%);
			`:o==="left"?h`
				top: 50%;
				transform: translateY(-50%);
				right: calc(100% + var(--space-sm));
			`:o==="right"?h`
				top: 50%;
				transform: translateY(-50%);
				left: calc(100% + var(--space-sm));
			`:h`
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
`,u=({children:o,content:e,position:n="bottom"})=>{const t=B.exports.useRef(null),[i,d]=B.exports.useState(!1);return s.createElement(Sr,{ref:t,onPointerEnter:()=>{d(!0)},onPointerLeave:()=>{d(!1)}},o,s.createElement(Lr,{position:n,isShown:i},e))},j=a.div`
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
`,zr=a.input.attrs(()=>({type:"checkbox"}))`
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

	&:checked + ${j} {
		transform: translate(calc(var(--width) - 100% - var(--padding) * 2), -50%);
	}

	&:disabled + ${j} {
		background-color: var(--color-gray-100);
	}
`,Br=a.div`
	--width: 2.25rem;
	--height: calc(var(--width) / 2);
	--padding: var(--space-vsm);

	position: relative;
`,P=n=>{var t=n,{children:o}=t,e=z(t,["children"]);return s.createElement(Br,null,s.createElement(zr,p({},e)),s.createElement(j,null))},$=a.input`
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
`,J=a(er)`
	position: absolute;
	display: block;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: var(--color-white);
	pointer-events: none;
`,Er=a.input.attrs(()=>({type:"checkbox"}))`
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

	&:disabled + ${J} {
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
`,Hr=a.div`
	position: relative;
`,T=n=>{var t=n,{children:o}=t,e=z(t,["children"]);return s.createElement(Hr,null,s.createElement(Er,p({},e)),s.createElement(J,null))},Q=a.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: calc(var(--size) - var(--padding) * 2);
	height: calc(var(--size) - var(--padding) * 2);
	background-color: var(--color-white);
	border-radius: var(--rounded-full);

	pointer-events: none;
`,Fr=a.input.attrs(()=>({type:"radio"}))`
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

	&:disabled + ${Q} {
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
`,Nr=a.div`
	--padding: var(--space-vsm);
	--size: 1.125rem;

	position: relative;
`,k=n=>{var t=n,{children:o}=t,e=z(t,["children"]);return s.createElement(Nr,null,s.createElement(Fr,p({},e)),s.createElement(Q,null))},r=D.exports.jsx,l=D.exports.jsxs,I=K(dr),b=K(sr),Cr=f.article`
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
`,q=f.div`
	display: flex;
	gap: var(--space-sm);
	max-width: calc(30rem + var(--space-sm));
	margin: var(--space-md) 0;
`,S=f.div`
	display: flex;
	align-items: center;
	gap: var(--space-md);
	margin: var(--space-sm) 0;

	& > ${c} {
		margin: 0;
		user-select: none;
	}
`,A=f(S)``,x=f(S)``,Rr=[{path:"/",name:"Home"},{path:"/work",name:"Work"},{path:"/blog",name:"Blog"},{path:"/about",name:"About"}];function jr(){const o=ar();return l(Cr,{children:[r(ir,{children:"Components"}),r(I,{children:"Typography"}),r(b,{children:"Paragraphs"}),r(c,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),r(E,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),r(b,{children:"Lists"}),l(c,{children:["Ways to declare"," ",r(vr,{href:"https://en.wikipedia.org/wiki/Variable_(mathematics)",target:"_blank",children:"variables"})," ",r(_,{children:"constants"})," in javascript:"]}),l(hr,{children:[l(c,{as:"li",children:[r(F,{children:"let"}),": a variable that can be changed later and"," ",r(H,{children:"block-scoped"}),"."]}),l(c,{as:"li",children:[r(F,{children:"const"}),": a constant that can't be changed later and ",r(H,{children:"block-scoped"}),"."]}),l(c,{as:"li",children:[r(F,{children:"var"}),": a variable that can't be changed later and ",r(H,{children:"function-scoped"}),"."]})]}),l(c,{children:["Steps to declare ",r(_,{children:"them"}),":"]}),l(ur,{children:[r(c,{as:"li",children:"Think of the the name of it."}),r(c,{as:"li",children:"Think whether it will change or not."})]}),r(b,{children:"Blockquote"}),r(br,{children:r(c,{children:"Failure is better than doing nothing, because doing nothing is the ultimate failure."})}),r(I,{children:"Buttons"}),r(b,{children:"Primary Button"}),l(w,{children:[r(g,{children:"Normal"}),r(g,{state:"loading",leftIcon:r(wr,{}),children:"Loading"}),r(g,{state:"disabled",children:"Disabled"})]}),r(b,{children:"Secondary Button"}),l(w,{children:[r(g,{variant:"secondary",children:"Normal"}),r(g,{variant:"secondary",state:"loading",leftIcon:r(xr,{}),children:"Loading"}),r(g,{variant:"secondary",state:"disabled",children:"Disabled"})]}),r(b,{children:"Tertiary Button"}),l(w,{children:[r(g,{variant:"tertiary",children:"Normal"}),r(g,{variant:"tertiary",state:"loading",leftIcon:r($r,{}),children:"Loading"}),r(g,{variant:"tertiary",state:"disabled",children:"Disabled"})]}),r(I,{children:"Nav Link"}),r(w,{children:Rr.map(e=>r(tr,{to:e.path,children:r(Ir,{isNavigatedTo:o.pathname===e.path,children:e.name})},e.path))}),r(I,{children:"Icon Button"}),l(w,{children:[r(u,{content:"Bottom",children:r(m,{children:r(G,{size:20})})}),r(u,{content:"Top",position:"top",children:r(m,{children:r(U,{size:20})})}),r(u,{content:"Right",position:"right",children:r(m,{children:r(V,{size:20})})}),r(u,{content:"Left",position:"left",children:r(m,{children:r(X,{size:20})})})]}),l(w,{children:[r(u,{content:"Bottom",children:r(m,{disabled:!0,children:r(G,{size:20})})}),r(u,{content:"Top",position:"top",children:r(m,{disabled:!0,children:r(U,{size:20})})}),r(u,{content:"Right",position:"right",children:r(m,{disabled:!0,children:r(V,{size:20})})}),r(u,{content:"Left",position:"left",children:r(m,{disabled:!0,children:r(X,{size:20})})})]}),r(I,{children:"Form Fields"}),r(b,{children:"Inputs"}),l(q,{children:[r($,{placeholder:"First Name"}),r($,{placeholder:"Last Name",disabled:!0})]}),l(q,{children:[r($,{type:"number",placeholder:"Age",min:3,max:100}),r($,{placeholder:"Phone number"})]}),r(q,{children:r($,{type:"email",placeholder:"Email"})}),r(b,{children:"Switch"}),l(S,{children:[r(P,{id:"switch-1"}),r(c,{as:"label",htmlFor:"switch-1",children:"I agree to sell my privacy"})]}),l(S,{children:[r(u,{content:"It's not your choice, it's ours",position:"left",children:r(P,{id:"switch-2",disabled:!0})}),r(c,{as:"label",htmlFor:"switch-2",children:"I agree to sell my privacy"})]}),l(S,{children:[r(u,{content:"It's not your choice, it's ours",position:"left",children:r(P,{id:"switch-3",checked:!0,disabled:!0})}),r(c,{as:"label",htmlFor:"switch-3",children:"I agree to sell my privacy"})]}),r(b,{children:"Checkbox"}),l(A,{children:[r(T,{id:"checkbox-1"}),r(c,{as:"label",htmlFor:"checkbox-1",children:"I agree to sell my privacy"})]}),l(A,{children:[r(u,{content:"It's not your choice, it's ours",position:"left",children:r(T,{id:"checkbox-2",disabled:!0})}),r(c,{as:"label",htmlFor:"checkbox-2",children:"I agree to sell my privacy"})]}),l(A,{children:[r(u,{content:"It's not your choice, it's ours",position:"left",children:r(T,{id:"checkbox-2",checked:!0,disabled:!0})}),r(c,{as:"label",htmlFor:"checkbox-2",children:"I agree to sell my privacy"})]}),r(b,{children:"Radio"}),r(c,{children:"What's your favorite javascript framework?"}),l(x,{children:[r(k,{name:"favorite-framework",value:"react",id:"react"}),r(c,{as:"label",htmlFor:"react",children:"React"})]}),l(x,{children:[r(k,{name:"favorite-framework",value:"vue",id:"vue"}),r(c,{as:"label",htmlFor:"vue",children:"Vue"})]}),l(x,{children:[r(k,{name:"favorite-framework",value:"angular",id:"angular"}),r(c,{as:"label",htmlFor:"angular",children:"Angular"})]}),l(x,{children:[r(k,{name:"favorite-framework",value:"svelte",id:"svelte"}),r(c,{as:"label",htmlFor:"svelte",children:"Svelte"})]}),l(x,{children:[r(u,{content:"Is Next.js even a standalone framework?",position:"left",children:r(k,{name:"favorite-framework",value:"next",id:"next",disabled:!0,defaultChecked:!0})}),r(c,{as:"label",htmlFor:"next",children:"Next.js"})]}),l(x,{children:[r(k,{name:"favorite-framework",value:"blitz",id:"blitz"}),r(c,{as:"label",htmlFor:"blitz",children:"Blitz.js"})]})]})}lr.render(r(s.StrictMode,{children:r(nr,{children:r(jr,{})})}),document.getElementById("root"));
