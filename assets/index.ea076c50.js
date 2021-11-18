var rr=Object.defineProperty;var z=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var O=(e,o,t)=>o in e?rr(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,p=(e,o)=>{for(var t in o||(o={}))M.call(o,t)&&O(e,t,o[t]);if(z)for(var t of z(o))W.call(o,t)&&O(e,t,o[t]);return e};var L=(e,o)=>{var t={};for(var l in e)M.call(e,l)&&o.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&z)for(var l of z(e))o.indexOf(l)<0&&W.call(e,l)&&(t[l]=e[l]);return t};import{C as u,s as a,r as E,R as s,H as er,U as or,a as ar,j as D,b as f,c as G,d as U,e as V,f as X,g as tr}from"./vendor.2ad115a2.js";const lr=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const v of d.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function t(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(i){if(i.ep)return;i.ep=!0;const d=t(i);fetch(i.href,d)}};lr();const y=u`
	font-family: var(--font-sans-serif);
	line-height: 1.25;
	font-weight: 900;
	color: var(--color-gray-900);
`,nr=a.h1`
	${y}
	margin: var(--space-lg) 0;
	font-size: var(--font-2xl);
`,cr=a.h2`
	${y}
	margin: var(--space-lg) 0;
	font-size: var(--font-xl);
`,ir=a.h3`
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
`;const dr=a.ul`
	list-style-type: unset;
	margin: var(--space-md) 0 var(--space-md) var(--space-xl);
`,sr=a.ol`
	list-style-type: decimal;
	margin: var(--space-md) 0 var(--space-md) var(--space-xl);
`,Y=u`
	margin: var(--space-md) 0;
	line-height: 1.35;
	max-width: 60ch;
`,c=a.p`
	${Y}
	font-size: var(--font-base);
`,H=a.p`
	${Y}
	font-size: var(--font-sm);
	color: var(--color-gray-600);
`,ur=a.a`
	color: var(--color-blue-400);
	transition: color 100ms;

	&:hover {
		color: var(--color-blue-500);
	}

	&:active {
		color: var(--color-blue-600);
	}
`,B=a.strong`
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
`,hr=a.blockquote`
	position: relative;

	display: flex;
	background-color: var(--color-blue-100);
	padding: var(--space-lg) var(--space-3xl);
	border-radius: var(--rounded-sm);
	quotes: '“' '”';

	color: var(--color-gray-800);

	overflow: hidden;

	& > ${c}, & > ${H} {
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
`,vr=e=>e.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),br=a.a`
	position: absolute;

	width: calc(100% + 1em);
	margin-left: -1em;

	opacity: ${e=>e.isShown?"1":"0"};
	cursor: pointer;

	transition: opacity 100ms;

	& > svg {
		color: var(--color-gray-700);
	}
`,K=e=>{const o=a(e)`
		position: relative;
	`;return({children:l})=>{const i=vr(l),[d,v]=E.exports.useState(!1);return s.createElement(o,{id:i,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)},s.createElement(br,{isShown:d,href:`#${i}`},s.createElement(er,{size:".75em"})),l)}},gr=or`
  to {
    transform: rotate(360deg);
  }
`,N=a.div`
	width: 1.25rem;
	height: 1.25rem;

	border-radius: var(--rounded-full);
	animation: ${gr} 1s linear infinite;
`,C=u`
	padding: var(--space-sm) var(--space-md);
	border-radius: var(--rounded-sm);
	user-select: none;

	transition: border-color 100ms, background-color 100ms, color 100ms;
`,mr=a.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${C}

	${e=>{const o=e.loading?"var(--color-blue-300)":e.disabled?"var(--color-gray-400)":"var(--color-blue-400)";return u`
			background-color: ${o};
			border: 2px solid ${o};
		`}}

	color: var(--color-white);

	&:hover {
		${e=>{const o=e.loading?"var(--color-blue-400)":e.disabled?"var(--color-gray-500)":"var(--color-blue-500)";return u`
				background-color: ${o};
				border-color: ${o};
			`}}
	}

	${e=>!e.loading&&!e.disabled&&u`
			&:active {
				background-color: var(--color-blue-600);
				border-color: var(--color-blue-600);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`,pr=a.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${C}

	${e=>{const o=e.loading?"var(--color-blue-300)":e.disabled?"var(--color-gray-400)":"var(--color-blue-400)";return u`
			color: ${o};
			border: 2px solid ${o};

			&:hover {
				background-color: ${o};
			}
		`}}

	background-color: var(--color-white);

	&:hover {
		color: var(--color-white);
	}

	${e=>!e.loading&&!e.disabled&&u`
			&:active {
				background-color: var(--color-blue-500);
				border-color: var(--color-blue-500);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`,J=a.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${C}

	border: 2px solid transparent;

	&:hover {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}

	${e=>!e.loading&&!e.disabled&&u`
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
`,fr=a(N)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-white);
`,yr=a(N)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-blue-400);
`,kr=a(N)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-gray-400);
`,R=e=>({disabled:e==="disabled",loading:e==="loading"}),g=({variant:e="primary",state:o="normal",children:t,leftIcon:l,rightIcon:i})=>{const d=e==="primary"?mr:e==="secondary"?pr:J;if(l){const v=a(d)`
			display: flex;

			& > *:first-child {
				margin-right: var(--space-md);
			}
		`;return s.createElement(v,p({},R(o)),l," ",t)}if(i){const v=a(d)`
			display: flex;

			& > *:last-child {
				margin-left: var(--space-md);
			}
		`;return s.createElement(v,p({},R(o)),t," ",i)}return s.createElement(d,p({},R(o)),t)},wr=({children:e,isNavigatedTo:o,onNavigate:t})=>s.createElement(J,{onClick:t},o?s.createElement(B,null,e):e),m=a.button.attrs(e=>({disabled:e.loading||e.disabled}))`
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

	${e=>!e.loading&&!e.disabled&&u`
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
`,xr=a.div`
	position: relative;
	cursor: pointer;
`,$r=a(H)`
	position: absolute;
	z-index: 10;
	${({position:e})=>e==="top"?u`
				bottom: calc(100% + var(--space-sm));
				left: 50%;
				transform: translateX(-50%);
			`:e==="left"?u`
				top: 50%;
				transform: translateY(-50%);
				right: calc(100% + var(--space-sm));
			`:e==="right"?u`
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

	opacity: ${e=>e.isShown?"1":"0"};
	transition: 100ms opacity;
`,h=({children:e,content:o,position:t="bottom"})=>{const l=E.exports.useRef(null),[i,d]=E.exports.useState(!1);return s.createElement(xr,{ref:l,onPointerEnter:()=>{d(!0)},onPointerLeave:()=>{d(!1)}},e,s.createElement($r,{position:t,isShown:i},o))},j=a.div`
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
`,Ir=a.input.attrs(()=>({type:"checkbox"}))`
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
`,Sr=a.div`
	--width: 2.25rem;
	--height: calc(var(--width) / 2);
	--padding: var(--space-vsm);

	position: relative;
`,P=t=>{var l=t,{children:e}=l,o=L(l,["children"]);return s.createElement(Sr,null,s.createElement(Ir,p({},o)),s.createElement(j,null))},$=a.input`
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
`,zr=a.input.attrs(()=>({type:"checkbox"}))`
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
`,Lr=a.div`
	position: relative;
`,T=t=>{var l=t,{children:e}=l,o=L(l,["children"]);return s.createElement(Lr,null,s.createElement(zr,p({},o)),s.createElement(Q,null))},Z=a.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: calc(var(--size) - var(--padding) * 2);
	height: calc(var(--size) - var(--padding) * 2);
	background-color: var(--color-white);
	border-radius: var(--rounded-full);

	pointer-events: none;
`,Er=a.input.attrs(()=>({type:"radio"}))`
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
`,Br=a.div`
	--padding: var(--space-vsm);
	--size: 1.125rem;

	position: relative;
`,k=t=>{var l=t,{children:e}=l,o=L(l,["children"]);return s.createElement(Br,null,s.createElement(Er,p({},o)),s.createElement(Z,null))},r=D.exports.jsx,n=D.exports.jsxs,I=K(cr),b=K(ir),Hr=f.article`
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
`,A=f(S)``,x=f(S)``,Fr=["Home","Work","Blog","About"];function Nr(){const[e,o]=E.exports.useState("Home");return n(Hr,{children:[r(nr,{children:"Components"}),r(I,{children:"Typography"}),r(b,{children:"Paragraphs"}),r(c,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),r(H,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),r(b,{children:"Lists"}),n(c,{children:["Ways to declare"," ",r(ur,{href:"https://en.wikipedia.org/wiki/Variable_(mathematics)",target:"_blank",children:"variables"})," ",r(_,{children:"constants"})," in javascript:"]}),n(dr,{children:[n(c,{as:"li",children:[r(F,{children:"let"}),": a variable that can be changed later and"," ",r(B,{children:"block-scoped"}),"."]}),n(c,{as:"li",children:[r(F,{children:"const"}),": a constant that can't be changed later and ",r(B,{children:"block-scoped"}),"."]}),n(c,{as:"li",children:[r(F,{children:"var"}),": a variable that can't be changed later and ",r(B,{children:"function-scoped"}),"."]})]}),n(c,{children:["Steps to declare ",r(_,{children:"them"}),":"]}),n(sr,{children:[r(c,{as:"li",children:"Think of the the name of it."}),r(c,{as:"li",children:"Think whether it will change or not."})]}),r(b,{children:"Blockquote"}),r(hr,{children:r(c,{children:"Failure is better than doing nothing, because doing nothing is the ultimate failure."})}),r(I,{children:"Buttons"}),r(b,{children:"Primary Button"}),n(w,{children:[r(g,{children:"Normal"}),r(g,{state:"loading",leftIcon:r(fr,{}),children:"Loading"}),r(g,{state:"disabled",children:"Disabled"})]}),r(b,{children:"Secondary Button"}),n(w,{children:[r(g,{variant:"secondary",children:"Normal"}),r(g,{variant:"secondary",state:"loading",leftIcon:r(yr,{}),children:"Loading"}),r(g,{variant:"secondary",state:"disabled",children:"Disabled"})]}),r(b,{children:"Tertiary Button"}),n(w,{children:[r(g,{variant:"tertiary",children:"Normal"}),r(g,{variant:"tertiary",state:"loading",leftIcon:r(kr,{}),children:"Loading"}),r(g,{variant:"tertiary",state:"disabled",children:"Disabled"})]}),r(I,{children:"Nav Link"}),r(w,{children:Fr.map((t,l)=>r(wr,{isNavigatedTo:t===e,onNavigate:()=>o(t),children:t},l))}),r(I,{children:"Icon Button"}),n(w,{children:[r(h,{content:"Bottom",children:r(m,{children:r(G,{size:20})})}),r(h,{content:"Top",position:"top",children:r(m,{children:r(U,{size:20})})}),r(h,{content:"Right",position:"right",children:r(m,{children:r(V,{size:20})})}),r(h,{content:"Left",position:"left",children:r(m,{children:r(X,{size:20})})})]}),n(w,{children:[r(h,{content:"Bottom",children:r(m,{disabled:!0,children:r(G,{size:20})})}),r(h,{content:"Top",position:"top",children:r(m,{disabled:!0,children:r(U,{size:20})})}),r(h,{content:"Right",position:"right",children:r(m,{disabled:!0,children:r(V,{size:20})})}),r(h,{content:"Left",position:"left",children:r(m,{disabled:!0,children:r(X,{size:20})})})]}),r(I,{children:"Form Fields"}),r(b,{children:"Inputs"}),n(q,{children:[r($,{placeholder:"First Name"}),r($,{placeholder:"Last Name",disabled:!0})]}),n(q,{children:[r($,{type:"number",placeholder:"Age",min:3,max:100}),r($,{placeholder:"Phone number"})]}),r(q,{children:r($,{type:"email",placeholder:"Email"})}),r(b,{children:"Switch"}),n(S,{children:[r(P,{id:"switch-1"}),r(c,{as:"label",htmlFor:"switch-1",children:"I agree to sell my privacy"})]}),n(S,{children:[r(h,{content:"It's not your choice, it's ours",position:"left",children:r(P,{id:"switch-2",disabled:!0})}),r(c,{as:"label",htmlFor:"switch-2",children:"I agree to sell my privacy"})]}),n(S,{children:[r(h,{content:"It's not your choice, it's ours",position:"left",children:r(P,{id:"switch-3",checked:!0,disabled:!0})}),r(c,{as:"label",htmlFor:"switch-3",children:"I agree to sell my privacy"})]}),r(b,{children:"Checkbox"}),n(A,{children:[r(T,{id:"checkbox-1"}),r(c,{as:"label",htmlFor:"checkbox-1",children:"I agree to sell my privacy"})]}),n(A,{children:[r(h,{content:"It's not your choice, it's ours",position:"left",children:r(T,{id:"checkbox-2",disabled:!0})}),r(c,{as:"label",htmlFor:"checkbox-2",children:"I agree to sell my privacy"})]}),n(A,{children:[r(h,{content:"It's not your choice, it's ours",position:"left",children:r(T,{id:"checkbox-2",checked:!0,disabled:!0})}),r(c,{as:"label",htmlFor:"checkbox-2",children:"I agree to sell my privacy"})]}),r(b,{children:"Radio"}),r(c,{children:"What's your favorite javascript framework?"}),n(x,{children:[r(k,{name:"favorite-framework",value:"react",id:"react"}),r(c,{as:"label",htmlFor:"react",children:"React"})]}),n(x,{children:[r(k,{name:"favorite-framework",value:"vue",id:"vue"}),r(c,{as:"label",htmlFor:"vue",children:"Vue"})]}),n(x,{children:[r(k,{name:"favorite-framework",value:"angular",id:"angular"}),r(c,{as:"label",htmlFor:"angular",children:"Angular"})]}),n(x,{children:[r(k,{name:"favorite-framework",value:"svelte",id:"svelte"}),r(c,{as:"label",htmlFor:"svelte",children:"Svelte"})]}),n(x,{children:[r(h,{content:"Is Next.js even a standalone framework?",position:"left",children:r(k,{name:"favorite-framework",value:"next",id:"next",disabled:!0,defaultChecked:!0})}),r(c,{as:"label",htmlFor:"next",children:"Next.js"})]}),n(x,{children:[r(k,{name:"favorite-framework",value:"blitz",id:"blitz"}),r(c,{as:"label",htmlFor:"blitz",children:"Blitz.js"})]})]})}tr.render(r(s.StrictMode,{children:r(Nr,{})}),document.getElementById("root"));
