var nr=Object.defineProperty;var E=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var Y=(e,o,n)=>o in e?nr(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,f=(e,o)=>{for(var n in o||(o={}))D.call(o,n)&&Y(e,n,o[n]);if(E)for(var n of E(o))G.call(o,n)&&Y(e,n,o[n]);return e};var $=(e,o)=>{var n={};for(var l in e)D.call(e,l)&&o.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&E)for(var l of E(e))o.indexOf(l)<0&&G.call(e,l)&&(n[l]=e[l]);return n};import{r as C,R as d,H as cr,a as ir,j as U,u as dr,b,L as sr,c as V,d as X,e as _,f as K,g as hr,h as ur}from"./vendor.17465ea3.js";import a,{css as h,keyframes as vr}from"styled-components";const br=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};br();const y=h`
	font-family: var(--font-sans-serif);
	line-height: 1.25;
	font-weight: 900;
	color: var(--color-gray-900);
`,mr=a.h1`
	${y}
	margin: var(--space-lg) 0;
	font-size: var(--font-2xl);
`,gr=a.h2`
	${y}
	margin: var(--space-lg) 0;
	font-size: var(--font-xl);
`,pr=a.h3`
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
`;const J=h`
	margin: var(--space-md) 0;
	line-height: 1.35;
	max-width: 60ch;
`,c=a.p`
	${J}
	font-size: var(--font-base);
`,B=a.p`
	${J}
	font-size: var(--font-sm);
	color: var(--color-gray-600);
`,Q=h`
	margin: var(--space-md) 0 var(--space-md) var(--space-xl);
	line-height: 1.5;

	& ${c}, & ${B} {
		margin: 0;
	}
`,H=a.ul`
	${Q}
`,Z=a.ol`
	${Q}
`,N=a.a`
	color: var(--color-blue-400);
	text-decoration: underline;
	transition: color 100ms;

	&:hover {
		color: var(--color-blue-500);
	}

	&:active {
		color: var(--color-blue-600);
	}
`,F=a.strong`
	font-weight: 600;
	color: var(--color-gray-800);
`,rr=a.em`
	font-style: italic;
	font-weight: 200;
`,S=a.code`
	background-color: var(--color-blue-200);
	font-family: var(--font-monospace);

	&::before,
	&::after {
		content: '\`';
	}
`,fr=a.blockquote`
	position: relative;

	display: flex;
	background-color: var(--color-blue-100);
	padding: var(--space-lg) var(--space-3xl);
	border-radius: var(--rounded-sm);
	quotes: '“' '”';

	color: var(--color-gray-800);

	overflow: hidden;

	& > ${c}, & > ${B} {
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
`,yr=e=>String(e).toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),kr=a.a`
	position: absolute;

	width: calc(100% + 0.75em);
	margin-left: -0.75em;

	opacity: ${e=>e.isShown?"1":"0"};
	cursor: pointer;

	transition: opacity 100ms;

	& > svg {
		color: var(--color-gray-700);
	}
`,er=e=>{const o=a(e)`
		position: relative;
	`;return({children:l})=>{const i=yr(l),[s,p]=C.exports.useState(!1);return d.createElement(o,{id:i,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1)},d.createElement(kr,{isShown:s,href:`#${i}`},d.createElement(cr,{size:".65em"})),l)}},wr=vr`
  to {
    transform: rotate(360deg);
  }
`,R=a.div`
	width: 1.25rem;
	height: 1.25rem;

	border-radius: var(--rounded-full);
	animation: ${wr} 1s linear infinite;
`,j=h`
	display: flex;
	padding: var(--space-sm) var(--space-md);
	border-radius: var(--rounded-sm);
	user-select: none;

	transition: border-color 100ms, background-color 100ms, color 100ms;
`,xr=a.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${j}

	${e=>{const o=e.loading?"var(--color-blue-300)":e.disabled?"var(--color-gray-400)":"var(--color-blue-400)";return h`
			background-color: ${o};
			border: 2px solid ${o};
		`}}

	color: var(--color-white);

	&:hover {
		${e=>{const o=e.loading?"var(--color-blue-400)":e.disabled?"var(--color-gray-500)":"var(--color-blue-500)";return h`
				background-color: ${o};
				border-color: ${o};
			`}}
	}

	${e=>!e.loading&&!e.disabled&&h`
			&:active {
				background-color: var(--color-blue-600);
				border-color: var(--color-blue-600);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`,$r=a.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${j}

	${e=>{const o=e.loading?"var(--color-blue-300)":e.disabled?"var(--color-gray-400)":"var(--color-blue-400)";return h`
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

	${e=>!e.loading&&!e.disabled&&h`
			&:active {
				background-color: var(--color-blue-500);
				border-color: var(--color-blue-500);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`,Sr=a.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${j}

	border: 2px solid transparent;

	&:hover {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}

	${e=>!e.loading&&!e.disabled&&h`
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
`,Ir=a(R)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-white);
`,zr=a(R)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-blue-400);
`,Lr=a(R)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-gray-400);
`,or=a.span`
	margin-left: ${e=>e.leftSpacing?"var(--space-md)":"0"};
	margin-right: ${e=>e.rightSpacing?"var(--space-md)":"0"};
`,m=p=>{var W=p,{variant:e="primary",children:o,leftIcon:n,rightIcon:l,loading:i}=W,s=$(W,["variant","children","leftIcon","rightIcon","loading"]);const O=e==="primary"?xr:e==="secondary"?$r:Sr;if(i){const lr=e==="primary"?Ir:e==="secondary"?zr:Lr;return d.createElement(O,f({loading:!0},s),d.createElement(lr,null),d.createElement(or,{leftSpacing:!0,rightSpacing:!!l},o),l&&l)}return d.createElement(O,f({},s),n&&n,d.createElement(or,{leftSpacing:!!n,rightSpacing:!!l},o),l&&l)},Er=a.a`
	display: inline-block;
	padding: var(--space-sm) var(--space-md);
	border: 2px solid transparent;
	border-radius: var(--rounded-sm);

	user-select: none;
	transition: border-color 100ms, background-color 100ms, color 100ms;

	${e=>e.isNavigatedTo?h`
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
`,g=a.button.attrs(e=>({disabled:e.loading||e.disabled}))`
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

	${e=>!e.loading&&!e.disabled&&h`
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
`,Br=a.div`
	position: relative;
	cursor: pointer;
`,Hr=a(B)`
	position: absolute;
	z-index: 10;
	${({position:e})=>e==="top"?h`
				bottom: calc(100% + var(--space-sm));
				left: 50%;
				transform: translateX(-50%);
			`:e==="left"?h`
				top: 50%;
				transform: translateY(-50%);
				right: calc(100% + var(--space-sm));
			`:e==="right"?h`
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

	opacity: ${e=>e.isShown?"1":"0"};
	transition: 100ms opacity;
`,u=({children:e,content:o,position:n="bottom"})=>{const l=C.exports.useRef(null),[i,s]=C.exports.useState(!1);return d.createElement(Br,{ref:l,onPointerEnter:()=>{s(!0)},onPointerLeave:()=>{s(!1)}},e,d.createElement(Hr,{position:n,isShown:i},o))},T=a.div`
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
`,Fr=a.input.attrs(()=>({type:"checkbox"}))`
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
`,Cr=a.div`
	--width: 2.25rem;
	--height: calc(var(--width) / 2);
	--padding: var(--space-vsm);

	position: relative;
`,P=n=>{var l=n,{children:e}=l,o=$(l,["children"]);return d.createElement(Cr,null,d.createElement(Fr,f({},o)),d.createElement(T,null))},I=a.input`
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
`,ar=a(ir)`
	position: absolute;
	display: block;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: var(--color-white);
	pointer-events: none;
`,Nr=a.input.attrs(()=>({type:"checkbox"}))`
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

	&:disabled + ${ar} {
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
`,Rr=a.div`
	position: relative;
`,q=n=>{var l=n,{children:e}=l,o=$(l,["children"]);return d.createElement(Rr,null,d.createElement(Nr,f({},o)),d.createElement(ar,null))},tr=a.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: calc(var(--size) - var(--padding) * 2);
	height: calc(var(--size) - var(--padding) * 2);
	background-color: var(--color-white);
	border-radius: var(--rounded-full);

	pointer-events: none;
`,jr=a.input.attrs(()=>({type:"radio"}))`
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

	&:disabled + ${tr} {
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
`,Tr=a.div`
	--padding: var(--space-vsm);
	--size: 1.125rem;

	position: relative;
`,k=n=>{var l=n,{children:e}=l,o=$(l,["children"]);return d.createElement(Tr,null,d.createElement(jr,f({},o)),d.createElement(tr,null))},r=U.exports.jsx,t=U.exports.jsxs,z=er(gr),v=er(pr),Pr=a.article`
	width: 100%;
	max-width: 45rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0.05px;
	padding-bottom: var(--space-3xl);
`,w=a.div`
	display: flex;
	gap: var(--space-sm);
	margin: var(--space-md) 0;
`,A=a.div`
	display: flex;
	gap: var(--space-sm);
	max-width: calc(30rem + var(--space-sm));
	margin: var(--space-md) 0;
`,L=a.div`
	display: flex;
	align-items: center;
	gap: var(--space-md);
	margin: var(--space-sm) 0;

	& > ${c} {
		margin: 0;
		user-select: none;
	}
`,M=a(L)``,x=a(L)``,qr=[{path:"/",name:"Home"},{path:"/work",name:"Work"},{path:"/blog",name:"Blog"},{path:"/about",name:"About"}];function Ar(){const e=dr();return t(Pr,{children:[r(mr,{children:"Components"}),r(z,{children:"Typography"}),r(v,{children:"Paragraphs"}),r(c,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),r(B,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),r(v,{children:"Lists"}),t(c,{children:["Ways to declare"," ",r(N,{href:"https://en.wikipedia.org/wiki/Variable_(mathematics)",target:"_blank",children:"variables"})," ",r(rr,{children:"constants"})," in javascript:"]}),t(H,{children:[t("li",{children:[r(S,{children:"let"}),": a variable that can be changed later and"," ",r(F,{children:"function-scoped"}),"."]}),t("li",{children:[r(S,{children:"const"}),": a constant that can't be changed later and ",r(F,{children:"function-scoped"}),"."]}),t("li",{children:[t(c,{children:[r(S,{children:"var"}),": a variable that can't be changed later and ",r(F,{children:"block-scoped"}),"."]}),r(H,{children:t("li",{children:[r(c,{children:"Why shouldn't you use it?"}),t(Z,{children:[t("li",{children:["You'll face some strange behavior due to being"," ",r(F,{children:"block-scoped"})]}),r("li",{children:"It's awful."}),r("li",{children:"It's the worst."})]})]})}),r(H,{children:t("li",{children:[r(c,{children:"What should you use instead?"}),t(H,{children:[t("li",{children:[r(S,{children:"var"})," for variables (",r(N,{href:"https://www.merriam-webster.com/dictionary/mutable",children:"mutable"}),")."]}),t("li",{children:[r(S,{children:"const"})," for constants (",r(N,{href:"https://www.merriam-webster.com/dictionary/immutable",children:"immutable"}),")."]})]})]})})]})]}),t(c,{children:["Steps to declare ",r(rr,{children:"them"}),":"]}),t(Z,{children:[r("li",{children:"Think of the the name of it."}),r("li",{children:"Think whether it will change or not."})]}),r(v,{children:"Blockquote"}),r(fr,{children:r(c,{children:"Failure is better than doing nothing, because doing nothing is the ultimate failure."})}),r(z,{children:"Buttons"}),r(v,{children:"Primary Button"}),t(w,{children:[r(m,{leftIcon:r(b,{size:20}),children:"Normal"}),r(m,{leftIcon:r(b,{size:20}),loading:!0,children:"Loading"}),r(m,{leftIcon:r(b,{size:20}),disabled:!0,children:"Disabled"})]}),r(v,{children:"Secondary Button"}),t(w,{children:[r(m,{leftIcon:r(b,{size:20}),variant:"secondary",children:"Normal"}),r(m,{leftIcon:r(b,{size:20}),variant:"secondary",loading:!0,children:"Loading"}),r(m,{leftIcon:r(b,{size:20}),variant:"secondary",disabled:!0,children:"Disabled"})]}),r(v,{children:"Tertiary Button"}),t(w,{children:[r(m,{leftIcon:r(b,{size:20}),variant:"tertiary",children:"Normal"}),r(m,{leftIcon:r(b,{size:20}),variant:"tertiary",loading:!0,children:"Loading"}),r(m,{leftIcon:r(b,{size:20}),variant:"tertiary",disabled:!0,children:"Disabled"})]}),r(z,{children:"Nav Link"}),r(w,{children:qr.map(o=>r(sr,{to:o.path,children:r(Er,{isNavigatedTo:e.pathname===o.path,children:o.name})},o.path))}),r(z,{children:"Icon Button"}),t(w,{children:[r(u,{content:"Bottom",children:r(g,{children:r(V,{size:20})})}),r(u,{content:"Top",position:"top",children:r(g,{children:r(X,{size:20})})}),r(u,{content:"Right",position:"right",children:r(g,{children:r(_,{size:20})})}),r(u,{content:"Left",position:"left",children:r(g,{children:r(K,{size:20})})})]}),t(w,{children:[r(u,{content:"Bottom",children:r(g,{disabled:!0,children:r(V,{size:20})})}),r(u,{content:"Top",position:"top",children:r(g,{disabled:!0,children:r(X,{size:20})})}),r(u,{content:"Right",position:"right",children:r(g,{disabled:!0,children:r(_,{size:20})})}),r(u,{content:"Left",position:"left",children:r(g,{disabled:!0,children:r(K,{size:20})})})]}),r(z,{children:"Form Fields"}),r(v,{children:"Inputs"}),t(A,{children:[r(I,{placeholder:"First Name"}),r(I,{placeholder:"Last Name",disabled:!0})]}),t(A,{children:[r(I,{type:"number",placeholder:"Age",min:3,max:100}),r(I,{placeholder:"Phone number"})]}),r(A,{children:r(I,{type:"email",placeholder:"Email"})}),r(v,{children:"Switch"}),t(L,{children:[r(P,{id:"switch-1"}),r(c,{as:"label",htmlFor:"switch-1",children:"I agree to sell my privacy"})]}),t(L,{children:[r(u,{content:"It's not your choice, it's ours",position:"left",children:r(P,{id:"switch-2",disabled:!0})}),r(c,{as:"label",htmlFor:"switch-2",children:"I agree to sell my privacy"})]}),t(L,{children:[r(u,{content:"It's not your choice, it's ours",position:"left",children:r(P,{id:"switch-3",checked:!0,disabled:!0})}),r(c,{as:"label",htmlFor:"switch-3",children:"I agree to sell my privacy"})]}),r(v,{children:"Checkbox"}),t(M,{children:[r(q,{id:"checkbox-1"}),r(c,{as:"label",htmlFor:"checkbox-1",children:"I agree to sell my privacy"})]}),t(M,{children:[r(u,{content:"It's not your choice, it's ours",position:"left",children:r(q,{id:"checkbox-2",disabled:!0})}),r(c,{as:"label",htmlFor:"checkbox-2",children:"I agree to sell my privacy"})]}),t(M,{children:[r(u,{content:"It's not your choice, it's ours",position:"left",children:r(q,{id:"checkbox-2",checked:!0,disabled:!0})}),r(c,{as:"label",htmlFor:"checkbox-2",children:"I agree to sell my privacy"})]}),r(v,{children:"Radio"}),r(c,{children:"What's your favorite javascript framework?"}),t(x,{children:[r(k,{name:"favorite-framework",value:"react",id:"react"}),r(c,{as:"label",htmlFor:"react",children:"React"})]}),t(x,{children:[r(k,{name:"favorite-framework",value:"vue",id:"vue"}),r(c,{as:"label",htmlFor:"vue",children:"Vue"})]}),t(x,{children:[r(k,{name:"favorite-framework",value:"angular",id:"angular"}),r(c,{as:"label",htmlFor:"angular",children:"Angular"})]}),t(x,{children:[r(k,{name:"favorite-framework",value:"svelte",id:"svelte"}),r(c,{as:"label",htmlFor:"svelte",children:"Svelte"})]}),t(x,{children:[r(u,{content:"Is Next.js even a standalone framework?",position:"left",children:r(k,{name:"favorite-framework",value:"next",id:"next",disabled:!0,defaultChecked:!0})}),r(c,{as:"label",htmlFor:"next",children:"Next.js"})]}),t(x,{children:[r(k,{name:"favorite-framework",value:"blitz",id:"blitz"}),r(c,{as:"label",htmlFor:"blitz",children:"Blitz.js"})]})]})}hr.render(r(d.StrictMode,{children:r(ur,{children:r(Ar,{})})}),document.getElementById("root"));
