"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7821],{7821:(o,e,r)=>{r.d(e,{Ay:()=>Lo});var t=function(){function o(o){var e=this;this._insertTag=function(o){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(o,r),e.tags.push(o)},this.isSpeedy=void 0===o.speedy||o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var e=o.prototype;return e.hydrate=function(o){o.forEach(this._insertTag)},e.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(o){var e=document.createElement("style");return e.setAttribute("data-emotion",o.key),void 0!==o.nonce&&e.setAttribute("nonce",o.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(o){if(o.sheet)return o.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===o)return document.styleSheets[e]}(e);try{r.insertRule(o,r.cssRules.length)}catch(t){0}}else e.appendChild(document.createTextNode(o));this.ctr++},e.flush=function(){this.tags.forEach((function(o){return o.parentNode&&o.parentNode.removeChild(o)})),this.tags=[],this.ctr=0},o}(),n=Math.abs,c=String.fromCharCode,a=Object.assign;function i(o){return o.trim()}function l(o,e,r){return o.replace(e,r)}function s(o,e){return o.indexOf(e)}function d(o,e){return 0|o.charCodeAt(e)}function u(o,e,r){return o.slice(e,r)}function v(o){return o.length}function g(o){return o.length}function f(o,e){return e.push(o),o}var y=1,h=1,B=0,m=0,p=0,z="";function C(o,e,r,t,n,c,a){return{value:o,root:e,parent:r,type:t,props:n,children:c,line:y,column:h,length:a,return:""}}function _(o,e){return a(C("",null,null,"",null,null,0),o,{length:-o.length},e)}function b(){return p=m>0?d(z,--m):0,h--,10===p&&(h=1,y--),p}function A(){return p=m<B?d(z,m++):0,h++,10===p&&(h=1,y++),p}function k(){return d(z,m)}function H(){return m}function w(o,e){return u(z,o,e)}function x(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(o){return y=h=1,B=v(z=o),m=0,[]}function T(o){return z="",o}function S(o){return i(w(m-1,N(91===o?o+2:40===o?o+1:o)))}function $(o){for(;(p=k())&&p<33;)A();return x(o)>2||x(p)>3?"":" "}function I(o,e){for(;--e&&A()&&!(p<48||p>102||p>57&&p<65||p>70&&p<97););return w(o,H()+(e<6&&32==k()&&32==A()))}function N(o){for(;A();)switch(p){case o:return m;case 34:case 39:34!==o&&39!==o&&N(p);break;case 40:41===o&&N(o);break;case 92:A()}return m}function R(o,e){for(;A()&&o+p!==57&&(o+p!==84||47!==k()););return"/*"+w(e,m-1)+"*"+c(47===o?o:A())}function W(o){for(;!x(k());)A();return w(o,m)}var O="-ms-",L="-moz-",M="-webkit-",j="comm",q="rule",F="decl",G="@keyframes";function U(o,e){for(var r="",t=g(o),n=0;n<t;n++)r+=e(o[n],n,o,e)||"";return r}function D(o,e,r,t){switch(o.type){case"@layer":if(o.children.length)break;case"@import":case F:return o.return=o.return||o.value;case j:return"";case G:return o.return=o.value+"{"+U(o.children,t)+"}";case q:o.value=o.props.join(",")}return v(r=U(o.children,t))?o.return=o.value+"{"+r+"}":""}function P(o){return T(V("",null,null,null,[""],o=E(o),0,[0],o))}function V(o,e,r,t,n,a,i,u,g){for(var y=0,h=0,B=i,m=0,p=0,z=0,C=1,_=1,w=1,x=0,E="",T=n,N=a,O=t,L=E;_;)switch(z=x,x=A()){case 40:if(108!=z&&58==d(L,B-1)){-1!=s(L+=l(S(x),"&","&\f"),"&\f")&&(w=-1);break}case 34:case 39:case 91:L+=S(x);break;case 9:case 10:case 13:case 32:L+=$(z);break;case 92:L+=I(H()-1,7);continue;case 47:switch(k()){case 42:case 47:f(J(R(A(),H()),e,r),g);break;default:L+="/"}break;case 123*C:u[y++]=v(L)*w;case 125*C:case 59:case 0:switch(x){case 0:case 125:_=0;case 59+h:-1==w&&(L=l(L,/\f/g,"")),p>0&&v(L)-B&&f(p>32?K(L+";",t,r,B-1):K(l(L," ","")+";",t,r,B-2),g);break;case 59:L+=";";default:if(f(O=Z(L,e,r,y,h,n,u,E,T=[],N=[],B),a),123===x)if(0===h)V(L,e,O,O,T,a,B,u,N);else switch(99===m&&110===d(L,3)?100:m){case 100:case 108:case 109:case 115:V(o,O,O,t&&f(Z(o,O,O,0,0,n,u,E,n,T=[],B),N),n,N,B,u,t?T:N);break;default:V(L,O,O,O,[""],N,0,u,N)}}y=h=p=0,C=w=1,E=L="",B=i;break;case 58:B=1+v(L),p=z;default:if(C<1)if(123==x)--C;else if(125==x&&0==C++&&125==b())continue;switch(L+=c(x),x*C){case 38:w=h>0?1:(L+="\f",-1);break;case 44:u[y++]=(v(L)-1)*w,w=1;break;case 64:45===k()&&(L+=S(A())),m=k(),h=B=v(E=L+=W(H())),x++;break;case 45:45===z&&2==v(L)&&(C=0)}}return a}function Z(o,e,r,t,c,a,s,d,v,f,y){for(var h=c-1,B=0===c?a:[""],m=g(B),p=0,z=0,_=0;p<t;++p)for(var b=0,A=u(o,h+1,h=n(z=s[p])),k=o;b<m;++b)(k=i(z>0?B[b]+" "+A:l(A,/&\f/g,B[b])))&&(v[_++]=k);return C(o,e,r,0===c?q:d,v,f,y)}function J(o,e,r){return C(o,e,r,j,c(p),u(o,2,-2),0)}function K(o,e,r,t){return C(o,e,r,F,u(o,0,t),u(o,t+1,-1),t)}var Q=function(o,e,r){for(var t=0,n=0;t=n,n=k(),38===t&&12===n&&(e[r]=1),!x(n);)A();return w(o,m)},X=function(o,e){return T(function(o,e){var r=-1,t=44;do{switch(x(t)){case 0:38===t&&12===k()&&(e[r]=1),o[r]+=Q(m-1,e,r);break;case 2:o[r]+=S(t);break;case 4:if(44===t){o[++r]=58===k()?"&\f":"",e[r]=o[r].length;break}default:o[r]+=c(t)}}while(t=A());return o}(E(o),e))},Y=new WeakMap,oo=function(o){if("rule"===o.type&&o.parent&&!(o.length<1)){for(var e=o.value,r=o.parent,t=o.column===r.column&&o.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==o.props.length||58===e.charCodeAt(0)||Y.get(r))&&!t){Y.set(o,!0);for(var n=[],c=X(e,n),a=r.props,i=0,l=0;i<c.length;i++)for(var s=0;s<a.length;s++,l++)o.props[l]=n[i]?c[i].replace(/&\f/g,a[s]):a[s]+" "+c[i]}}},eo=function(o){if("decl"===o.type){var e=o.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(o.return="",o.value="")}};function ro(o,e){switch(function(o,e){return 45^d(o,0)?(((e<<2^d(o,0))<<2^d(o,1))<<2^d(o,2))<<2^d(o,3):0}(o,e)){case 5103:return M+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return M+o+L+o+O+o+o;case 6828:case 4268:return M+o+O+o+o;case 6165:return M+o+O+"flex-"+o+o;case 5187:return M+o+l(o,/(\w+).+(:[^]+)/,M+"box-$1$2"+O+"flex-$1$2")+o;case 5443:return M+o+O+"flex-item-"+l(o,/flex-|-self/,"")+o;case 4675:return M+o+O+"flex-line-pack"+l(o,/align-content|flex-|-self/,"")+o;case 5548:return M+o+O+l(o,"shrink","negative")+o;case 5292:return M+o+O+l(o,"basis","preferred-size")+o;case 6060:return M+"box-"+l(o,"-grow","")+M+o+O+l(o,"grow","positive")+o;case 4554:return M+l(o,/([^-])(transform)/g,"$1"+M+"$2")+o;case 6187:return l(l(l(o,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),o,"")+o;case 5495:case 3959:return l(o,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return l(l(o,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+o+o;case 4095:case 3583:case 4068:case 2532:return l(o,/(.+)-inline(.+)/,M+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(o)-1-e>6)switch(d(o,e+1)){case 109:if(45!==d(o,e+4))break;case 102:return l(o,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+L+(108==d(o,e+3)?"$3":"$2-$3"))+o;case 115:return~s(o,"stretch")?ro(l(o,"stretch","fill-available"),e)+o:o}break;case 4949:if(115!==d(o,e+1))break;case 6444:switch(d(o,v(o)-3-(~s(o,"!important")&&10))){case 107:return l(o,":",":"+M)+o;case 101:return l(o,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(45===d(o,14)?"inline-":"")+"box$3$1"+M+"$2$3$1"+O+"$2box$3")+o}break;case 5936:switch(d(o,e+11)){case 114:return M+o+O+l(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return M+o+O+l(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return M+o+O+l(o,/[svh]\w+-[tblr]{2}/,"lr")+o}return M+o+O+o+o}return o}var to=[function(o,e,r,t){if(o.length>-1&&!o.return)switch(o.type){case F:o.return=ro(o.value,o.length);break;case G:return U([_(o,{value:l(o.value,"@","@"+M)})],t);case q:if(o.length)return function(o,e){return o.map(e).join("")}(o.props,(function(e){switch(function(o,e){return(o=e.exec(o))?o[0]:o}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([_(o,{props:[l(e,/:(read-\w+)/,":-moz-$1")]})],t);case"::placeholder":return U([_(o,{props:[l(e,/:(plac\w+)/,":"+M+"input-$1")]}),_(o,{props:[l(e,/:(plac\w+)/,":-moz-$1")]}),_(o,{props:[l(e,/:(plac\w+)/,O+"input-$1")]})],t)}return""}))}}],no=function(o){var e=o.key;if("css"===e){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(o){-1!==o.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(o),o.setAttribute("data-s",""))}))}var n=o.stylisPlugins||to;var c,a,i={},l=[];c=o.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(o){for(var e=o.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)i[e[r]]=!0;l.push(o)}));var s,d,u,v,f=[D,(v=function(o){s.insert(o)},function(o){o.root||(o=o.return)&&v(o)})],y=(d=[oo,eo].concat(n,f),u=g(d),function(o,e,r,t){for(var n="",c=0;c<u;c++)n+=d[c](o,e,r,t)||"";return n});a=function(o,e,r,t){s=r,U(P(o?o+"{"+e.styles+"}":e.styles),y),t&&(h.inserted[e.name]=!0)};var h={key:e,sheet:new t({key:e,container:c,nonce:o.nonce,speedy:o.speedy,prepend:o.prepend,insertionPoint:o.insertionPoint}),nonce:o.nonce,inserted:i,registered:{},insert:a};return h.sheet.hydrate(l),h};var co={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ao(o){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=o(r)),e[r]}}var io=/[A-Z]|^ms/g,lo=/_EMO_([^_]+?)_([^]*?)_EMO_/g,so=function(o){return 45===o.charCodeAt(1)},uo=function(o){return null!=o&&"boolean"!=typeof o},vo=ao((function(o){return so(o)?o:o.replace(io,"-$&").toLowerCase()})),go=function(o,e){switch(o){case"animation":case"animationName":if("string"==typeof e)return e.replace(lo,(function(o,e,r){return yo={name:e,styles:r,next:yo},e}))}return 1===co[o]||so(o)||"number"!=typeof e||0===e?e:e+"px"};function fo(o,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return yo={name:r.name,styles:r.styles,next:yo},r.name;if(void 0!==r.styles){var t=r.next;if(void 0!==t)for(;void 0!==t;)yo={name:t.name,styles:t.styles,next:yo},t=t.next;return r.styles+";"}return function(o,e,r){var t="";if(Array.isArray(r))for(var n=0;n<r.length;n++)t+=fo(o,e,r[n])+";";else for(var c in r){var a=r[c];if("object"!=typeof a)null!=e&&void 0!==e[a]?t+=c+"{"+e[a]+"}":uo(a)&&(t+=vo(c)+":"+go(c,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=e&&void 0!==e[a[0]]){var i=fo(o,e,a);switch(c){case"animation":case"animationName":t+=vo(c)+":"+i+";";break;default:t+=c+"{"+i+"}"}}else for(var l=0;l<a.length;l++)uo(a[l])&&(t+=vo(c)+":"+go(c,a[l])+";")}return t}(o,e,r);case"function":if(void 0!==o){var n=yo,c=r(o);return yo=n,fo(o,e,c)}}if(null==e)return r;var a=e[r];return void 0!==a?a:r}var yo,ho=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var Bo=function(o,e,r){if(1===o.length&&"object"==typeof o[0]&&null!==o[0]&&void 0!==o[0].styles)return o[0];var t=!0,n="";yo=void 0;var c=o[0];null==c||void 0===c.raw?(t=!1,n+=fo(r,e,c)):n+=c[0];for(var a=1;a<o.length;a++)n+=fo(r,e,o[a]),t&&(n+=c[a]);ho.lastIndex=0;for(var i,l="";null!==(i=ho.exec(n));)l+="-"+i[1];var s=function(o){for(var e,r=0,t=0,n=o.length;n>=4;++t,n-=4)e=1540483477*(65535&(e=255&o.charCodeAt(t)|(255&o.charCodeAt(++t))<<8|(255&o.charCodeAt(++t))<<16|(255&o.charCodeAt(++t))<<24))+(59797*(e>>>16)<<16),r=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(n){case 3:r^=(255&o.charCodeAt(t+2))<<16;case 2:r^=(255&o.charCodeAt(t+1))<<8;case 1:r=1540483477*(65535&(r^=255&o.charCodeAt(t)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(n)+l;return{name:s,styles:n,next:yo}};function mo(o,e,r){var t="";return r.split(" ").forEach((function(r){void 0!==o[r]?e.push(o[r]+";"):t+=r+" "})),t}function po(o,e){if(void 0===o.inserted[e.name])return o.insert("",e,o.sheet,!0)}function zo(o,e,r){var t=[],n=mo(o,t,r);return t.length<2?r:n+e(t)}var Co,_o,bo=function o(e){for(var r="",t=0;t<e.length;t++){var n=e[t];if(null!=n){var c=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))c=o(n);else for(var a in c="",n)n[a]&&a&&(c&&(c+=" "),c+=a);break;default:c=n}c&&(r&&(r+=" "),r+=c)}}return r},Ao=function(o){var e=no(o);e.sheet.speedy=function(o){this.isSpeedy=o},e.compat=!0;var r=function(){for(var o=arguments.length,r=new Array(o),t=0;t<o;t++)r[t]=arguments[t];var n=Bo(r,e.registered,void 0);return function(o,e,r){!function(o,e,r){var t=o.key+"-"+e.name;!1===r&&void 0===o.registered[t]&&(o.registered[t]=e.styles)}(o,e,r);var t=o.key+"-"+e.name;if(void 0===o.inserted[e.name]){var n=e;do{o.insert(e===n?"."+t:"",n,o.sheet,!0),n=n.next}while(void 0!==n)}}(e,n,!1),e.key+"-"+n.name};return{css:r,cx:function(){for(var o=arguments.length,t=new Array(o),n=0;n<o;n++)t[n]=arguments[n];return zo(e.registered,r,bo(t))},injectGlobal:function(){for(var o=arguments.length,r=new Array(o),t=0;t<o;t++)r[t]=arguments[t];var n=Bo(r,e.registered);po(e,n)},keyframes:function(){for(var o=arguments.length,r=new Array(o),t=0;t<o;t++)r[t]=arguments[t];var n=Bo(r,e.registered),c="animation-"+n.name;return po(e,{name:n.name,styles:"@keyframes "+c+"{"+n.styles+"}"}),c},hydrate:function(o){o.forEach((function(o){e.inserted[o]=!0}))},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:mo.bind(null,e.registered),merge:zo.bind(null,e.registered,r)}}({key:"css"}),ko=(Ao.flush,Ao.hydrate,Ao.cx),Ho=(Ao.merge,Ao.getRegisteredStyles,Ao.injectGlobal,Ao.keyframes,Ao.css),wo=(Ao.sheet,Ao.cache,r(5556)),xo=r(6540);!function(o){o.fontFamilyCode="--yozora_fontFamilyCode",o.fontFamilyHeading="--yozora_fontFamilyHeading",o.fontFamilyBody="--yozora_fontFamilyBody",o.fontSizeCode="--yozora_fontSizeCode",o.fontSizeBody="--yozora_fontSizeBody",o.lineHeightCode="--yozora_lineHeightCode",o.marginBlockNode="--yozora_marginBlockNode",o.marginEmphasis="--yozora_marginEmphasis",o.marginThematicBreak="--yozora_marginThematicBreak"}(Co||(Co={})),function(o){o.colorNote="--yozora_colorNote",o.colorNoteActive="--yozora_colorNoteActive",o.colorNoteHover="--yozora_colorNoteHover",o.colorInfo="--yozora_colorInfo",o.colorInfoActive="--yozora_colorInfoActive",o.colorInfoHover="--yozora_colorInfoHover",o.colorSuccess="--yozora_colorSuccess",o.colorSuccessActive="--yozora_colorSuccessActive",o.colorSuccessHover="--yozora_colorSuccessHover",o.colorWarning="--yozora_colorWarning",o.colorWarningActive="--yozora_colorWarningActive",o.colorWarningHover="--yozora_colorWarningHover",o.colorError="--yozora_colorError",o.colorErrorActive="--yozora_colorErrorActive",o.colorErrorHover="--yozora_colorErrorHover",o.colorBody="--yozora_colorBody",o.colorBodyActive="--yozora_colorBodyActive",o.colorBodyHover="--yozora_colorBodyHover",o.colorCodeCaret="--yozora_colorCodeCaret",o.colorCodeCaretActive="--yozora_colorCodeCaretActive",o.colorCodeCaretHover="--yozora_colorCodeCaretHover",o.colorCodeSelection="--yozora_colorCodeSelection",o.colorCodeSelectionActive="--yozora_colorCodeSelectionActive",o.colorCodeSelectionHover="--yozora_colorCodeSelectionHover",o.colorCodeTitle="--yozora_colorCodeTitle",o.colorCodeTitleActive="--yozora_colorCodeTitleActive",o.colorCodeTitleHover="--yozora_colorCodeTitleHover",o.colorDelete="--yozora_colorDelete",o.colorDeleteActive="--yozora_colorDeleteActive",o.colorDeleteHover="--yozora_colorDeleteHover",o.colorHeading="--yozora_colorHeading",o.colorHeadingActive="--yozora_colorHeadingActive",o.colorHeadingHover="--yozora_colorHeadingHover",o.colorImageTitle="--yozora_colorImageTitle",o.colorImageTitleActive="--yozora_colorImageTitleActive",o.colorImageTitleHover="--yozora_colorImageTitleHover",o.colorInlineCode="--yozora_colorInlineCode",o.colorInlineCodeActive="--yozora_colorInlineCodeActive",o.colorInlineCodeHover="--yozora_colorInlineCodeHover",o.colorLink="--yozora_colorLink",o.colorLinkActive="--yozora_colorLinkActive",o.colorLinkHover="--yozora_colorLinkHover",o.colorLinkVisited="--yozora_colorLinkVisited",o.colorMath="--yozora_colorMath",o.colorMathActive="--yozora_colorMathActive",o.colorMathHover="--yozora_colorMathHover",o.colorBgNote="--yozora_colorBgNote",o.colorBgNoteActive="--yozora_colorBgNoteActive",o.colorBgNoteHover="--yozora_colorBgNoteHover",o.colorBgInfo="--yozora_colorBgInfo",o.colorBgInfoActive="--yozora_colorBgInfoActive",o.colorBgInfoHover="--yozora_colorBgInfoHover",o.colorBgSuccess="--yozora_colorBgSuccess",o.colorBgSuccessActive="--yozora_colorBgSuccessActive",o.colorBgSuccessHover="--yozora_colorBgSuccessHover",o.colorBgWarning="--yozora_colorBgWarning",o.colorBgWarningActive="--yozora_colorBgWarningActive",o.colorBgWarningHover="--yozora_colorBgWarningHover",o.colorBgError="--yozora_colorBgError",o.colorBgErrorActive="--yozora_colorBgErrorActive",o.colorBgErrorHover="--yozora_colorBgErrorHover",o.colorBgBody="--yozora_colorBgBody",o.colorBgBodyActive="--yozora_colorBgBodyActive",o.colorBgBodyHover="--yozora_colorBgBodyHover",o.colorBgBlockquote="--yozora_colorBgBlockquote",o.colorBgBlockquoteActive="--yozora_colorBgBlockquoteActive",o.colorBgBlockquoteHover="--yozora_colorBgBlockquoteHover",o.colorBgCode="--yozora_colorBgCode",o.colorBgCodeActive="--yozora_colorBgCodeActive",o.colorBgCodeHover="--yozora_colorBgCodeHover",o.colorBgCodeHighlight="--yozora_colorBgCodeHighlight",o.colorBgCodeHighlightActive="--yozora_colorBgCodeHighlightActive",o.colorBgCodeHighlightHover="--yozora_colorBgCodeHighlightHover",o.colorBgInlineCode="--yozora_colorBgInlineCode",o.colorBgInlineCodeActive="--yozora_colorBgInlineCodeActive",o.colorBgInlineCodeHover="--yozora_colorBgInlineCodeHover",o.colorBgTableHead="--yozora_colorBgTableHead",o.colorBgTableHeadActive="--yozora_colorBgTableHeadActive",o.colorBgTableHeadHover="--yozora_colorBgTableHeadHover",o.colorBgTableOddRow="--yozora_colorBgTableOddRow",o.colorBgTableOddRowActive="--yozora_colorBgTableOddRowActive",o.colorBgTableOddRowHover="--yozora_colorBgTableOddRowHover",o.colorBgTableEvenRow="--yozora_colorBgTableEvenRow",o.colorBgTableEvenRowActive="--yozora_colorBgTableEvenRowActive",o.colorBgTableEvenRowHover="--yozora_colorBgTableEvenRowHover",o.colorBorderNote="--yozora_colorBorderNote",o.colorBorderNoteActive="--yozora_colorBorderNoteActive",o.colorBorderNoteHover="--yozora_colorBorderNoteHover",o.colorBorderInfo="--yozora_colorBorderInfo",o.colorBorderInfoActive="--yozora_colorBorderInfoActive",o.colorBorderInfoHover="--yozora_colorBorderInfoHover",o.colorBorderSuccess="--yozora_colorBorderSuccess",o.colorBorderSuccessActive="--yozora_colorBorderSuccessActive",o.colorBorderSuccessHover="--yozora_colorBorderSuccessHover",o.colorBorderWarning="--yozora_colorBorderWarning",o.colorBorderWarningActive="--yozora_colorBorderWarningActive",o.colorBorderWarningHover="--yozora_colorBorderWarningHover",o.colorBorderError="--yozora_colorBorderError",o.colorBorderErrorActive="--yozora_colorBorderErrorActive",o.colorBorderErrorHover="--yozora_colorBorderErrorHover",o.colorBorderBlockquote="--yozora_colorBorderBlockquote",o.colorBorderBlockquoteActive="--yozora_colorBorderBlockquoteActive",o.colorBorderBlockquoteHover="--yozora_colorBorderBlockquoteHover",o.colorBorderCode="--yozora_colorBorderCode",o.colorBorderCodeActive="--yozora_colorBorderCodeActive",o.colorBorderCodeHover="--yozora_colorBorderCodeHover",o.colorBorderCodeLineno="--yozora_colorBorderCodeLineno",o.colorBorderCodeLinenoActive="--yozora_colorBorderCodeLinenoActive",o.colorBorderCodeLinenoHover="--yozora_colorBorderCodeLinenoHover",o.colorBorderHeading="--yozora_colorBorderHeading",o.colorBorderHeadingActive="--yozora_colorBorderHeadingActive",o.colorBorderHeadingHover="--yozora_colorBorderHeadingHover",o.colorBorderImage="--yozora_colorBorderImage",o.colorBorderImageActive="--yozora_colorBorderImageActive",o.colorBorderImageHover="--yozora_colorBorderImageHover",o.colorBorderTable="--yozora_colorBorderTable",o.colorBorderTableActive="--yozora_colorBorderTableActive",o.colorBorderTableHover="--yozora_colorBorderTableHover",o.colorBorderThematicBreak="--yozora_colorBorderThematicBreak",o.colorBorderThematicBreakActive="--yozora_colorBorderThematicBreakActive",o.colorBorderThematicBreakHover="--yozora_colorBorderThematicBreakHover"}(_o||(_o={}));Object.fromEntries([...Object.entries(Co),...Object.entries(_o)].filter((([o])=>Number.isNaN(Number(o)))).map((([o,e])=>[o,`var(${e})`])));class Eo extends xo.Component{shouldComponentUpdate(){return!1}render(){return xo.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},xo.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}))}}class To extends xo.Component{shouldComponentUpdate(){return!1}render(){return xo.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},xo.createElement("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"}))}}class So extends xo.Component{shouldComponentUpdate(){return!1}render(){return xo.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},xo.createElement("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))}}class $o extends xo.Component{shouldComponentUpdate(){return!1}render(){return xo.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},xo.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}))}}class Io extends xo.Component{shouldComponentUpdate(){return!1}render(){return xo.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px"},xo.createElement("g",null,xo.createElement("rect",{fill:"none",height:"24",width:"24",y:"0"})),xo.createElement("g",null,xo.createElement("path",{d:"M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z"})))}}const No={note:{modifier:"note",title:"NOTE",icon:xo.createElement(Eo,null)},info:{modifier:"info",title:"INFO",icon:xo.createElement(So,null)},tip:{modifier:"tip",title:"TIP",icon:xo.createElement(To,null)},caution:{modifier:"caution",title:"CAUTION",icon:xo.createElement($o,null)},danger:{modifier:"danger",title:"DANGER",icon:xo.createElement(Io,null)}};const Ro={border:"5px solid transparent",cautionBackground:`var(${_o.colorBgWarning}, #fff8e6)`,dangerBackground:`var(${_o.colorBgError}, #ffebec)`,infoBackground:`var(${_o.colorBgInfo}, #eef9fd)`,noteBackground:`var(${_o.colorBgNote}, #fdfdfe)`,tipBackground:`var(${_o.colorBgSuccess}, #e6f6e6)`,cautionBorderColor:`var(${_o.colorBorderWarning}, #e6a700)`,dangerBorderColor:`var(${_o.colorBorderError}, #e13238)`,infoBorderColor:`var(${_o.colorBorderInfo}, #4cb3d4)`,noteBorderColor:`var(${_o.colorBorderNote}, #d4d5d8)`,tipBorderColor:`var(${_o.colorBorderSuccess}, #009400)`,cautionTextColor:`var(${_o.colorWarning}, #4d3800)`,dangerTextColor:`var(${_o.colorError}, #4d3800)`,infoTextColor:`var(${_o.colorInfo}, #4d3800)`,noteTextColor:`var(${_o.colorNote}, #4d3800)`,tipTextColor:`var(${_o.colorSuccess}, #4d3800)`},Wo=Ho({display:"flex",alignItems:"flex-start",lineHeight:1.6,fontSize:"0.857rem",margin:"0 0 8px 0",verticalAlign:"middle",letterSpacing:"1px",textRendering:"optimizeLegibility",textSizeAdjust:"100%",textTransform:"none",overflowWrap:"break-word",fontFamily:"system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif"}),Oo={container:Ho({padding:"1em",borderLeft:Ro.border,borderRadius:"6px",margin:"0 0 1.25em 0",boxShadow:"0 1px 2px 0 hsla(0deg, 0%, 0%, 0.1)"}),note:Ho({borderColor:Ro.noteBorderColor,backgroundColor:Ro.noteBackground,color:Ro.noteTextColor,[`.${Wo}`]:{color:Ro.noteBorderColor}}),info:Ho({borderColor:Ro.infoBorderColor,backgroundColor:Ro.infoBackground,color:Ro.infoTextColor,[`.${Wo}`]:{color:Ro.infoBorderColor}}),tip:Ho({borderColor:Ro.tipBorderColor,backgroundColor:Ro.tipBackground,color:Ro.tipTextColor,[`.${Wo}`]:{color:Ro.tipBorderColor}}),caution:Ho({borderColor:Ro.cautionBorderColor,backgroundColor:Ro.cautionBackground,color:Ro.cautionTextColor,[`.${Wo}`]:{color:Ro.cautionBorderColor}}),danger:Ho({borderColor:Ro.dangerBorderColor,backgroundColor:Ro.dangerBackground,color:Ro.dangerTextColor,[`.${Wo}`]:{color:Ro.dangerBorderColor}}),heading:Wo,body:Ho({}),icon:Ho({marginRight:"0.5rem","> svg:first-child path":{fill:"currentColor"}}),title:Ho({display:"block"})};class Lo extends xo.Component{static displayName="Admonition";static propTypes={keyword:wo.string,title:wo.node,icon:wo.node,className:wo.string,children:wo.node};shouldComponentUpdate(o){const e=this.props;return e.keyword!==o.keyword||e.title!==o.title||e.icon!==o.icon||e.className!==o.className||e.children!==o.children}render(){const{className:o,keyword:e,children:r}=this.props,t=Array.isArray(this.props.title)?this.props.title.length>0:Boolean(this.props.title),n=function(o="default"){const e=o.trim().toLowerCase();switch(e){case"":case"default":case"note":return No.note;case"important":case"info":return No.info;case"success":case"tip":return No.tip;case"warning":case"caution":return No.caution;case"error":case"danger":return No.danger;default:return{modifier:e,title:e.toUpperCase(),icon:xo.createElement(xo.Fragment,null)}}}(e),c=this.props.icon??n.icon,a=t?this.props.title:n.title,i=ko("yozora-admonition",Oo.container,Oo[n.modifier],o);return xo.createElement("div",{className:i},xo.createElement("div",{key:"heading",className:Oo.heading},xo.createElement("span",{key:"icon",className:Oo.icon},c),xo.createElement("span",{key:"title",className:Oo.title},a)),xo.createElement("div",{key:"main",className:Oo.body},r))}}}}]);