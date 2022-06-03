import{S as L,O as l,A as F,a as S,i as d,E as z,b as Y,c as P,m as T,s as G,o as J,d as K,e as b,f as H,p as $,g as X,h as Z,j as _,k as ee,l as ne,n as te,q as W,r as re,t as ae,u as q,v as ie,w as U,x as se,y as ue,z as oe,B as C,C as ce}from"./zipWith-5711df41.js";import{P as cn,d as fn,G as ln,D as mn,u as dn,E as vn,Q as hn,N as pn,L as bn,T as gn,O as yn,R as An,J as wn,U as En,f as In,K as xn,S as Fn,V as Sn,W as Tn,H as qn,I as kn,a6 as On,a7 as Ln,a8 as Mn,a9 as Wn,aa as Cn,ab as jn,ac as Vn,ad as Rn,ae as zn,X as Pn,af as Un,ag as Nn,Y as Dn,ah as Bn,ai as Qn,aj as Yn,ak as Gn,a5 as Jn,al as Kn,am as Hn,an as $n,ao as Xn,ap as Zn,aq as _n,ar as et,as as nt,at as tt,au as rt,av as at,aw as it,Z as st,ax as ut,ay as ot,az as ct,aA as ft,aB as lt,aC as mt,B as dt,aD as vt,aE as ht,aF as pt,aG as bt,aP as gt,w as yt,aH as At,q as wt,aI as Et,_ as It,aJ as xt,aK as Ft,aL as St,aM as Tt,aN as qt,aO as kt,v as Ot,l as Lt,aQ as Mt,aR as Wt,aS as Ct,aT as jt,aU as Vt,x as Rt,F as zt,o as Pt,$ as Ut,aV as Nt,M as Dt,aW as Bt,aX as Qt,aY as Yt,aZ as Gt,a_ as Jt,a0 as Kt,a$ as Ht,b0 as $t,b5 as Xt,b1 as Zt,b2 as _t,b3 as er,b4 as nr,b6 as tr,b7 as rr,b8 as ar,a4 as ir,b9 as sr,ba as ur,bb as or,bc as cr,bd as fr,be as lr,bf as mr,bg as dr,bh as vr,s as hr,bi as pr,bj as br,bk as gr,bl as yr,bm as Ar,bn as wr,bo as Er,bp as Ir,bq as xr,br as Fr,bs as Sr,a1 as Tr,bt as qr,bu as kr,bv as Or,bw as Lr,a2 as Mr,bx as Wr,by as Cr,bz as jr,bA as Vr,bB as Rr,bC as zr,bD as Pr,bE as Ur,a3 as Nr,bF as Dr,bG as Br}from"./zipWith-5711df41.js";import{j as A,k as w,l as h,n as fe}from"./web3-db635edc.js";import"./preload-helper-f8a04cdf.js";import"./index-e63e67ba.js";import"./index-46a986ed.js";var N={now:function(){return(N.delegate||performance).now()},delegate:void 0},y={schedule:function(n){var t=requestAnimationFrame,e=cancelAnimationFrame,a=y.delegate;a&&(t=a.requestAnimationFrame,e=a.cancelAnimationFrame);var r=t(function(i){e=void 0,n(i)});return new L(function(){return e==null?void 0:e(r)})},requestAnimationFrame:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=y.delegate;return((e==null?void 0:e.requestAnimationFrame)||requestAnimationFrame).apply(void 0,A([],w(n)))},cancelAnimationFrame:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=y.delegate;return((e==null?void 0:e.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,A([],w(n)))},delegate:void 0};function Pe(n){return n?D(n):le}function D(n){var t=y.schedule;return new l(function(e){var a=new L,r=n||N,i=r.now(),s=function(u){var o=r.now();e.next({timestamp:n?o:u,elapsed:o-i}),e.closed||a.add(t(s))};return a.add(t(s)),a})}var le=D(),me=1,k,O={};function j(n){return n in O?(delete O[n],!0):!1}var B={setImmediate:function(n){var t=me++;return O[t]=!0,k||(k=Promise.resolve()),k.then(function(){return j(t)&&n()}),t},clearImmediate:function(n){j(n)}},de=B.setImmediate,ve=B.clearImmediate,I={setImmediate:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=I.delegate;return((e==null?void 0:e.setImmediate)||de).apply(void 0,A([],w(n)))},clearImmediate:function(n){var t=I.delegate;return((t==null?void 0:t.clearImmediate)||ve)(n)},delegate:void 0},he=function(n){h(t,n);function t(e,a){var r=n.call(this,e,a)||this;return r.scheduler=e,r.work=a,r}return t.prototype.requestAsyncId=function(e,a,r){return r===void 0&&(r=0),r!==null&&r>0?n.prototype.requestAsyncId.call(this,e,a,r):(e.actions.push(this),e._scheduled||(e._scheduled=I.setImmediate(e.flush.bind(e,void 0))))},t.prototype.recycleAsyncId=function(e,a,r){if(r===void 0&&(r=0),r!=null&&r>0||r==null&&this.delay>0)return n.prototype.recycleAsyncId.call(this,e,a,r);e.actions.some(function(i){return i.id===a})||(I.clearImmediate(a),e._scheduled=void 0)},t}(F),pe=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.flush=function(e){this._active=!0;var a=this._scheduled;this._scheduled=void 0;var r=this.actions,i;e=e||r.shift();do if(i=e.execute(e.state,e.delay))break;while((e=r[0])&&e.id===a&&r.shift());if(this._active=!1,i){for(;(e=r[0])&&e.id===a&&r.shift();)e.unsubscribe();throw i}},t}(S),be=new pe(he),Ue=be,ge=function(n){h(t,n);function t(e,a){var r=n.call(this,e,a)||this;return r.scheduler=e,r.work=a,r}return t.prototype.schedule=function(e,a){return a===void 0&&(a=0),a>0?n.prototype.schedule.call(this,e,a):(this.delay=a,this.state=e,this.scheduler.flush(this),this)},t.prototype.execute=function(e,a){return a>0||this.closed?n.prototype.execute.call(this,e,a):this._execute(e,a)},t.prototype.requestAsyncId=function(e,a,r){return r===void 0&&(r=0),r!=null&&r>0||r==null&&this.delay>0?n.prototype.requestAsyncId.call(this,e,a,r):e.flush(this)},t}(F),ye=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t}(S),Ae=new ye(ge),Ne=Ae,we=function(n){h(t,n);function t(e,a){var r=n.call(this,e,a)||this;return r.scheduler=e,r.work=a,r}return t.prototype.requestAsyncId=function(e,a,r){return r===void 0&&(r=0),r!==null&&r>0?n.prototype.requestAsyncId.call(this,e,a,r):(e.actions.push(this),e._scheduled||(e._scheduled=y.requestAnimationFrame(function(){return e.flush(void 0)})))},t.prototype.recycleAsyncId=function(e,a,r){if(r===void 0&&(r=0),r!=null&&r>0||r==null&&this.delay>0)return n.prototype.recycleAsyncId.call(this,e,a,r);e.actions.some(function(i){return i.id===a})||(y.cancelAnimationFrame(a),e._scheduled=void 0)},t}(F),Ee=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.flush=function(e){this._active=!0;var a=this._scheduled;this._scheduled=void 0;var r=this.actions,i;e=e||r.shift();do if(i=e.execute(e.state,e.delay))break;while((e=r[0])&&e.id===a&&r.shift());if(this._active=!1,i){for(;(e=r[0])&&e.id===a&&r.shift();)e.unsubscribe();throw i}},t}(S),Ie=new Ee(we),De=Ie,Be=function(n){h(t,n);function t(e,a){e===void 0&&(e=xe),a===void 0&&(a=1/0);var r=n.call(this,e,function(){return r.frame})||this;return r.maxFrames=a,r.frame=0,r.index=-1,r}return t.prototype.flush=function(){for(var e=this,a=e.actions,r=e.maxFrames,i,s;(s=a[0])&&s.delay<=r&&(a.shift(),this.frame=s.delay,!(i=s.execute(s.state,s.delay))););if(i){for(;s=a.shift();)s.unsubscribe();throw i}},t.frameTimeFactor=10,t}(S),xe=function(n){h(t,n);function t(e,a,r){r===void 0&&(r=e.index+=1);var i=n.call(this,e,a)||this;return i.scheduler=e,i.work=a,i.index=r,i.active=!0,i.index=e.index=r,i}return t.prototype.schedule=function(e,a){if(a===void 0&&(a=0),Number.isFinite(a)){if(!this.id)return n.prototype.schedule.call(this,e,a);this.active=!1;var r=new t(this.scheduler,this.work);return this.add(r),r.schedule(e,a)}else return L.EMPTY},t.prototype.requestAsyncId=function(e,a,r){r===void 0&&(r=0),this.delay=e.frame+r;var i=e.actions;return i.push(this),i.sort(t.sortActions),!0},t.prototype.recycleAsyncId=function(e,a,r){},t.prototype._execute=function(e,a){if(this.active===!0)return n.prototype._execute.call(this,e,a)},t.sortActions=function(e,a){return e.delay===a.delay?e.index===a.index?0:e.index>a.index?1:-1:e.delay>a.delay?1:-1},t}(F);function Qe(n){return!!n&&(n instanceof l||d(n.lift)&&d(n.subscribe))}function Ye(n,t){var e=typeof t=="object";return new Promise(function(a,r){var i=!1,s;n.subscribe({next:function(u){s=u,i=!0},error:r,complete:function(){i?a(s):e?a(t.defaultValue):r(new z)}})})}function Ge(n,t){var e=typeof t=="object";return new Promise(function(a,r){var i=new Y({next:function(s){a(s),i.unsubscribe()},error:r,complete:function(){e?a(t.defaultValue):r(new z)}});n.subscribe(i)})}function x(n,t,e,a){if(e)if(P(e))a=e;else return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return x(n,t,a).apply(this,r).pipe(T(e))};return a?function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return x(n,t).apply(this,r).pipe(G(a),J(a))}:function(){for(var r=this,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var u=new K,o=!0;return new l(function(f){var c=u.subscribe(f);if(o){o=!1;var m=!1,E=!1;t.apply(r,A(A([],w(i)),[function(){for(var v=[],p=0;p<arguments.length;p++)v[p]=arguments[p];if(n){var g=v.shift();if(g!=null){u.error(g);return}}u.next(1<v.length?v:v[0]),E=!0,m&&u.complete()}])),E&&u.complete(),m=!0}return c})}}function Je(n,t,e){return x(!1,n,t,e)}function Ke(n,t,e){return x(!0,n,t,e)}function M(n){return new l(function(t){b(n()).subscribe(t)})}var Fe={connector:function(){return new H},resetOnDisconnect:!0};function He(n,t){t===void 0&&(t=Fe);var e=null,a=t.connector,r=t.resetOnDisconnect,i=r===void 0?!0:r,s=a(),u=new l(function(o){return s.subscribe(o)});return u.connect=function(){return(!e||e.closed)&&(e=M(function(){return n}).subscribe(s),i&&e.add(function(){return s=a()})),e},u}function $e(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=$(n),a=X(n),r=a.args,i=a.keys,s=new l(function(u){var o=r.length;if(!o){u.complete();return}for(var f=new Array(o),c=o,m=o,E=function(p){var g=!1;b(r[p]).subscribe(Z(u,function(Q){g||(g=!0,m--),f[p]=Q},function(){return c--},void 0,function(){(!c||!g)&&(m||u.next(i?_(i,f):f),u.complete())}))},v=0;v<o;v++)E(v)});return e?s.pipe(T(e)):s}var Se=["addListener","removeListener"],Te=["addEventListener","removeEventListener"],qe=["on","off"];function V(n,t,e,a){if(d(e)&&(a=e,e=void 0),a)return V(n,t,e).pipe(T(a));var r=w(Le(n)?Te.map(function(u){return function(o){return n[u](t,o,e)}}):ke(n)?Se.map(R(n,t)):Oe(n)?qe.map(R(n,t)):[],2),i=r[0],s=r[1];if(!i&&ee(n))return ne(function(u){return V(u,t,e)})(b(n));if(!i)throw new TypeError("Invalid event target");return new l(function(u){var o=function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return u.next(1<f.length?f:f[0])};return i(o),function(){return s(o)}})}function R(n,t){return function(e){return function(a){return n[e](t,a)}}}function ke(n){return d(n.addListener)&&d(n.removeListener)}function Oe(n){return d(n.on)&&d(n.off)}function Le(n){return d(n.addEventListener)&&d(n.removeEventListener)}function Me(n,t,e){return e?Me(n,t).pipe(T(e)):new l(function(a){var r=function(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return a.next(s.length===1?s[0]:s)},i=n(r);return d(t)?function(){return t(r,i)}:void 0})}function Xe(n,t,e,a,r){var i,s,u,o;arguments.length===1?(i=n,o=i.initialState,t=i.condition,e=i.iterate,s=i.resultSelector,u=s===void 0?W:s,r=i.scheduler):(o=n,!a||P(a)?(u=W,r=a):u=a);function f(){var c;return fe(this,function(m){switch(m.label){case 0:c=o,m.label=1;case 1:return!t||t(c)?[4,u(c)]:[3,4];case 2:m.sent(),m.label=3;case 3:return c=e(c),[3,1];case 4:return[2]}})}return M(r?function(){return te(f(),r)}:f)}function Ze(n,t,e){return M(function(){return n()?t:e})}function _e(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=re(n),a=ae(n,1/0),r=n;return r.length?r.length===1?b(r[0]):ie(a)(U(r,e)):q}var We=new l(se);function en(){return We}function nn(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return ue(oe(n))(q)}function tn(n,t){return U(Object.entries(n),t)}function rn(n,t,e){return[C(t,e)(b(n)),C(ce(t,e))(b(n))]}function an(n,t,e){if(t==null&&(t=n,n=0),t<=0)return q;var a=t+n;return new l(e?function(r){var i=n;return e.schedule(function(){i<a?(r.next(i++),this.schedule()):r.complete()})}:function(r){for(var i=n;i<a&&!r.closed;)r.next(i++);r.complete()})}function sn(n,t){return new l(function(e){var a=n(),r=t(a),i=r?b(r):q;return i.subscribe(e),function(){a&&a.unsubscribe()}})}export{cn as ArgumentOutOfRangeError,fn as AsyncSubject,ln as BehaviorSubject,mn as ConnectableObservable,dn as EMPTY,vn as EmptyError,We as NEVER,hn as NotFoundError,pn as Notification,bn as NotificationKind,gn as ObjectUnsubscribedError,yn as Observable,An as ReplaySubject,wn as Scheduler,En as SequenceError,In as Subject,xn as Subscriber,Fn as Subscription,Sn as TimeoutError,Tn as UnsubscriptionError,xe as VirtualAction,Be as VirtualTimeScheduler,De as animationFrame,Ie as animationFrameScheduler,Pe as animationFrames,Ue as asap,be as asapScheduler,qn as async,kn as asyncScheduler,On as audit,Ln as auditTime,Je as bindCallback,Ke as bindNodeCallback,Mn as buffer,Wn as bufferCount,Cn as bufferTime,jn as bufferToggle,Vn as bufferWhen,Rn as catchError,zn as combineAll,Pn as combineLatest,Un as combineLatestAll,Nn as combineLatestWith,Dn as concat,Bn as concatAll,Qn as concatMap,Yn as concatMapTo,Gn as concatWith,Jn as config,Kn as connect,He as connectable,Hn as count,$n as debounce,Xn as debounceTime,Zn as defaultIfEmpty,M as defer,_n as delay,et as delayWhen,nt as dematerialize,tt as distinct,rt as distinctUntilChanged,at as distinctUntilKeyChanged,it as elementAt,st as empty,ut as endWith,ot as every,ct as exhaust,ft as exhaustAll,lt as exhaustMap,mt as expand,dt as filter,vt as finalize,ht as find,pt as findIndex,bt as first,Ge as firstValueFrom,gt as flatMap,$e as forkJoin,yt as from,V as fromEvent,Me as fromEventPattern,Xe as generate,At as groupBy,wt as identity,Et as ignoreElements,Ze as iif,It as interval,xt as isEmpty,Qe as isObservable,Ft as last,Ye as lastValueFrom,St as map,Tt as mapTo,qt as materialize,kt as max,_e as merge,Ot as mergeAll,Lt as mergeMap,Mt as mergeMapTo,Wt as mergeScan,Ct as mergeWith,jt as min,Vt as multicast,en as never,Rt as noop,zt as observable,Pt as observeOn,Ut as of,nn as onErrorResumeNext,tn as pairs,Nt as pairwise,rn as partition,Dt as pipe,Bt as pluck,Qt as publish,Yt as publishBehavior,Gt as publishLast,Jt as publishReplay,Ne as queue,Ae as queueScheduler,Kt as race,Ht as raceWith,an as range,$t as reduce,Xt as refCount,Zt as repeat,_t as repeatWhen,er as retry,nr as retryWhen,tr as sample,rr as sampleTime,ar as scan,ir as scheduled,sr as sequenceEqual,ur as share,or as shareReplay,cr as single,fr as skip,lr as skipLast,mr as skipUntil,dr as skipWhile,vr as startWith,hr as subscribeOn,pr as switchAll,br as switchMap,gr as switchMapTo,yr as switchScan,Ar as take,wr as takeLast,Er as takeUntil,Ir as takeWhile,xr as tap,Fr as throttle,Sr as throttleTime,Tr as throwError,qr as throwIfEmpty,kr as timeInterval,Or as timeout,Lr as timeoutWith,Mr as timer,Wr as timestamp,Cr as toArray,sn as using,jr as window,Vr as windowCount,Rr as windowTime,zr as windowToggle,Pr as windowWhen,Ur as withLatestFrom,Nr as zip,Dr as zipAll,Br as zipWith};
