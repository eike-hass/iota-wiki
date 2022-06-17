"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46103,27918],{85982:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(67294),r=n(57728),l=n(58573),o=n(87462),i=n(11614),c=n(61428);function s(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(c.Z,(0,o.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(c.Z,(0,o.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var m=n(44873),u=n(18015),d=n(78473),g=n(86010);function v(e){var t,n=e.content,r=n.assets,l=n.metadata,o=l.title,i=l.description,c=l.date,s=l.tags,u=l.authors,d=l.frontMatter,g=d.keywords,v=null!=(t=r.image)?t:d.image;return a.createElement(m.d,{title:o,description:i,keywords:g,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((function(e){return e.label})).join(",")}))}function f(e){var t=e.content,n=e.sidebar,o=t.assets,i=t.metadata,c=i.nextItem,m=i.prevItem,u=i.frontMatter,g=u.hide_table_of_contents,v=u.toc_min_heading_level,f=u.toc_max_heading_level;return a.createElement(r.Z,{sidebar:n,toc:!g&&t.toc&&t.toc.length>0?a.createElement(d.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:f}):void 0},a.createElement(l.Z,{frontMatter:u,assets:o,metadata:i,isBlogPostPage:!0},a.createElement(t,null)),(c||m)&&a.createElement(s,{nextItem:c,prevItem:m}))}function p(e){return a.createElement(m.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},a.createElement(v,e),a.createElement(f,e))}},78473:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(91553),c="tableOfContents_cNA8",s=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar",t)},l.createElement(i.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},91553:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(87462),r=n(63366),l=n(67294);function o(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var i=l.memo(o),c=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,c);n>=0?t[n].children.push(l):a.push(l)})),a}function m(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=m({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var u=n(96793);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function g(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function v(){var e=(0,l.useRef)(0),t=(0,u.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,l.useRef)(void 0),n=v();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=g(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function b(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,g=e.linkActiveClassName,v=void 0===g?void 0:g,b=e.minHeadingLevel,h=e.maxHeadingLevel,E=(0,r.Z)(e,p),N=(0,u.L)(),L=null!=b?b:N.tableOfContents.minHeadingLevel,_=null!=h?h:N.tableOfContents.maxHeadingLevel,P=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return m({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:L,maxHeadingLevel:_});return f((0,l.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:_}}),[d,v,L,_])),l.createElement(i,(0,a.Z)({toc:P,className:o,linkClassName:d},E))}},58573:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r=n(86010),l=n(3905),o=n(11614),i=n(88746),c=n(51402),s=n(57880),m=n(38181),u=n(12937),d={blogHeader:"blogHeader_DLm6",blogPostTitle:"blogPostTitle_uMeh",blogPost__body:"blogPost__body_teCM",blogPostData:"blogPostData_Vfxe",blogPostDetailsFull:"blogPostDetailsFull_enUA",blogPostDataContainer:"blogPostDataContainer_yN0d"},g=n(41921),v=n(87983);var f=function(e){var t,n,f,p,b=(f=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,c.C)().withBaseUrl,E=e.children,N=e.frontMatter,L=e.assets,_=e.metadata,P=e.truncated,Z=e.isBlogPostPage,x=void 0!==Z&&Z,k=_.date,H=_.formattedDate,C=_.permalink,y=_.tags,w=_.readingTime,T=_.title,M=_.editUrl,I=_.authors,A=null!=(t=L.image)?t:N.image,O=N.url;return a.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(p=x?"h1":"h2",a.createElement("header",{className:d.blogHeader},a.createElement(p,{className:d.blogPostTitle,itemProp:"headline"},x?T:a.createElement(i.Z,{itemProp:"url",to:O||C},T)),a.createElement("div",{className:"row row--no-gutters"},a.createElement("div",{className:"col"},a.createElement(v.Z,{authors:I,assets:L})),a.createElement("div",{className:(0,r.Z)(d.blogPostData,"margin-vert--md","col")},a.createElement("div",{className:d.blogPostDataContainer},a.createElement("time",{dateTime:k,itemProp:"datePublished"},H),void 0!==w&&a.createElement(a.Fragment,null," \xb7 ",b(w))))))),A&&a.createElement("meta",{itemProp:"image",content:h(A,{absolute:!0})}),a.createElement("div",{className:(0,r.Z)("markdown",[d.blogPost__body]),itemProp:"articleBody"},a.createElement(l.Zo,{components:m.Z},E)),(y.length>0||P)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(n={},n[d.blogPostDetailsFull]=x,n))},y.length>0&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":!x})},a.createElement("div",{className:d.tagsList},a.createElement(g.Z,{tags:y}))),x&&M&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:M})),!x&&P&&a.createElement("div",{className:"col col--3 text--right"},a.createElement(i.Z,{to:_.permalink,"aria-label":"Read more about "+T},a.createElement("b",null,a.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},12937:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(11614),l=n(88584),o=n(15987);function i(e){var t=e.editUrl,n=function(e){var t=new RegExp("content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/","i");return e.replace(t,"")}(t);return a.createElement(a.Fragment,null,function(e){return new RegExp("content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/","i").test(e)}(t)?a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a.createElement(l.Z,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):a.createElement(o.Z,{editUrl:t}))}}}]);