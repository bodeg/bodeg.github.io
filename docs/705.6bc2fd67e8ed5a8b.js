"use strict";(self.webpackChunkGalbit=self.webpackChunkGalbit||[]).push([[705],{5705:(X,u,i)=>{i.r(u),i.d(u,{SettingManagementComponent:()=>x,SettingManagementModule:()=>U});var s=i(8609),p=i(1765),d=i(4508),g=i(9808),e=i(6435),M=i(6498),b=i(1086);const m=["*"];function y(t,o){1&t&&(e.ynx(0),e.Hsn(1,1),e.BQk())}function S(t,o){1&t&&(e.ynx(0),e.Hsn(1,2),e.BQk())}function Z(t,o){1&t&&(e.ynx(0),e.Hsn(1,3),e.BQk())}function D(t,o){if(1&t&&(e.TgZ(0,"div",4),e.YNc(1,y,2,0,"ng-container",5),e.YNc(2,S,2,0,"ng-container",5),e.YNc(3,Z,2,0,"ng-container",5),e.qZA()),2&t){const n=e.oxw(),a=e.MAs(3),c=e.MAs(5),r=e.MAs(7);e.xp6(1),e.Q6J("ngIf",n.customTitle)("ngIfElse",a),e.xp6(1),e.Q6J("ngIf",n.customBreadcrumb)("ngIfElse",c),e.xp6(1),e.Q6J("ngIf",n.customToolbar)("ngIfElse",r)}}function A(t,o){if(1&t&&(e.TgZ(0,"div",8),e.TgZ(1,"h1",9),e._uU(2),e.qZA(),e.qZA()),2&t){const n=e.oxw(3);e.xp6(2),e.hij(" ",n.title," ")}}function w(t,o){if(1&t&&(e.ynx(0),e.YNc(1,A,3,1,"div",7),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("abpPagePart",n.pageParts.title)}}function R(t,o){if(1&t&&e.YNc(0,w,2,1,"ng-container",6),2&t){const n=e.oxw();e.Q6J("ngIf",n.title)}}function Q(t,o){1&t&&(e.TgZ(0,"div",11),e._UZ(1,"abp-breadcrumb"),e.qZA())}function B(t,o){if(1&t&&(e.ynx(0),e.YNc(1,Q,2,0,"div",10),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("abpPagePart",n.pageParts.breadcrumb)}}function Y(t,o){if(1&t&&e.YNc(0,B,2,1,"ng-container",6),2&t){const n=e.oxw();e.Q6J("ngIf",n.breadcrumbVisible)}}function F(t,o){if(1&t&&(e.TgZ(0,"div",13),e._UZ(1,"abp-page-toolbar",14),e.qZA()),2&t){const n=e.oxw(3);e.xp6(1),e.Q6J("record",n.toolbarData)}}function J(t,o){if(1&t&&(e.ynx(0),e.YNc(1,F,2,1,"div",12),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("abpPagePart",n.pageParts.toolbar)("abpPagePartContext",n.toolbarData)}}function I(t,o){if(1&t&&e.YNc(0,J,2,2,"ng-container",6),2&t){const n=e.oxw();e.Q6J("ngIf",n.toolbarVisible)}}const N=["*",[["abp-page-title-container"]],[["abp-page-breadcrumb-container"]],[["abp-page-toolbar-container"]]],O=["*","abp-page-title-container","abp-page-breadcrumb-container","abp-page-toolbar-container"],E=new e.OlP("PAGE_RENDER_STRATEGY");let f=(()=>{class t{constructor(n,a,c,r){this.templateRef=n,this.viewContainer=a,this.renderLogic=c,this.injector=r,this.hasRendered=!1,this.render=T=>{T&&!this.hasRendered?(this.viewContainer.createEmbeddedView(this.templateRef),this.hasRendered=!0):!T&&this.hasRendered&&(this.viewContainer.clear(),this.hasRendered=!1)}}set abpPagePart(n){this.type=n,this.createRenderStream(n)}ngOnChanges({context:n}){var a;(null===(a=this.renderLogic)||void 0===a?void 0:a.onContextUpdate)&&this.renderLogic.onContextUpdate(n)}ngOnInit(){var n;(null===(n=this.renderLogic)||void 0===n?void 0:n.onInit)&&this.renderLogic.onInit(this.type,this.injector,this.context)}ngOnDestroy(){var n;this.clearSubscription(),(null===(n=this.renderLogic)||void 0===n?void 0:n.onDestroy)&&this.renderLogic.onDestroy(this.type,this.injector,this.context)}shouldRender(n){if(this.renderLogic){const a=this.renderLogic.shouldRender(n);return a instanceof M.y?a:(0,b.of)(a)}return(0,b.of)(!0)}createRenderStream(n){this.clearSubscription(),this.subscription=this.shouldRender(n).subscribe(this.render)}clearSubscription(){this.subscription&&this.subscription.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.Rgc),e.Y36(e.s_b),e.Y36(E,8),e.Y36(e.zs3))},t.\u0275dir=e.lG2({type:t,selectors:[["","abpPagePart",""]],inputs:{context:["abpPagePartContext","context"],abpPagePart:"abpPagePart"},features:[e.TTD]}),t})();var l=(()=>{return(t=l||(l={})).title="PageTitleContainerComponent",t.breadcrumb="PageBreadcrumbContainerComponent",t.toolbar="PageToolbarContainerComponent",l;var t})();let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["abp-page-title-container"]],ngContentSelectors:m,decls:1,vars:0,template:function(n,a){1&n&&(e.F$t(),e.Hsn(0))},encapsulation:2}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["abp-page-breadcrumb-container"]],ngContentSelectors:m,decls:1,vars:0,template:function(n,a){1&n&&(e.F$t(),e.Hsn(0))},encapsulation:2}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["abp-page-toolbar-container"]],ngContentSelectors:m,decls:1,vars:0,template:function(n,a){1&n&&(e.F$t(),e.Hsn(0))},encapsulation:2}),t})(),C=(()=>{class t{constructor(){this.toolbarVisible=!1,this.breadcrumbVisible=!0,this.pageParts={title:l.title,breadcrumb:l.breadcrumb,toolbar:l.toolbar}}set toolbarData(n){this._toolbarData=n,this.toolbarVisible=!0}get toolbarData(){return this._toolbarData}get shouldRenderRow(){return!!(this.title||this.toolbarVisible||this.breadcrumbVisible||this.customTitle||this.customBreadcrumb||this.customToolbar)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["abp-page"]],contentQueries:function(n,a,c){if(1&n&&(e.Suo(c,_,5),e.Suo(c,v,5),e.Suo(c,h,5)),2&n){let r;e.iGM(r=e.CRH())&&(a.customTitle=r.first),e.iGM(r=e.CRH())&&(a.customBreadcrumb=r.first),e.iGM(r=e.CRH())&&(a.customToolbar=r.first)}},inputs:{title:"title",toolbarData:["toolbar","toolbarData"],breadcrumbVisible:["breadcrumb","breadcrumbVisible"]},ngContentSelectors:O,decls:8,vars:1,consts:[["class","row entry-row",4,"ngIf"],["defaultTitleTemplate",""],["defaultBreadcrumbTemplate",""],["defaultPageToolbarTemplate",""],[1,"row","entry-row"],[4,"ngIf","ngIfElse"],[4,"ngIf"],["class","col-auto",4,"abpPagePart"],[1,"col-auto"],[1,"content-header-title"],["class","col-lg-auto ps-lg-0",4,"abpPagePart"],[1,"col-lg-auto","ps-lg-0"],["class","col",4,"abpPagePart","abpPagePartContext"],[1,"col"],[3,"record"]],template:function(n,a){1&n&&(e.F$t(N),e.YNc(0,D,4,6,"div",0),e.Hsn(1),e.YNc(2,R,1,1,"ng-template",null,1,e.W1O),e.YNc(4,Y,1,1,"ng-template",null,2,e.W1O),e.YNc(6,I,1,1,"ng-template",null,3,e.W1O)),2&n&&e.Q6J("ngIf",a.shouldRenderRow)},directives:[p.LI,d._V,g.O5,f],encapsulation:2}),t})(),L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,d.Ms,s.IR2,p.e2],d.Ms]}),t})();var k=i(2654),G=i(7193),P=i(1771);function H(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",11),e.NdJ("click",function(){e.CHM(n);const c=e.oxw().$implicit;return e.oxw().selected=c}),e.TgZ(1,"a",12),e._uU(2),e.ALo(3,"abpLocalization"),e.qZA(),e.qZA()}if(2&t){const n=e.oxw().$implicit,a=e.oxw();e.xp6(1),e.ekj("active",n.name===a.selected.name),e.Q6J("id",n.name+"-tab"),e.xp6(1),e.Oqu(e.lcZ(3,4,n.name))}}function V(t,o){if(1&t&&(e.ynx(0),e.YNc(1,H,4,6,"li",10),e.BQk()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("abpPermission",n.requiredPolicy)}}function $(t,o){1&t&&e.GkF(0)}function q(t,o){if(1&t&&(e.TgZ(0,"div",13),e.TgZ(1,"div",14),e.YNc(2,$,1,0,"ng-container",15),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("id",n.selected.name+"-tab"),e.xp6(1),e.Q6J("ngComponentOutlet",n.selected.component)}}let x=(()=>{class t{constructor(n){this.settingTabsService=n,this.subscription=new k.w,this.settings=[],this.trackByFn=(a,c)=>c.name}ngOnDestroy(){this.subscription.unsubscribe()}ngOnInit(){this.subscription.add(this.settingTabsService.visible$.subscribe(n=>{this.settings=n,this.selected||(this.selected=this.settings[0])}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(G.Yf))},t.\u0275cmp=e.Xpm({type:t,selectors:[["abp-setting-management"]],decls:11,vars:6,consts:[[3,"title"],["id","SettingManagementWrapper"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-12","col-md-3","mb-2","mb-md-0"],["id","nav-tab","role","tablist",1,"nav","flex-column","nav-pills"],[4,"abpFor","abpForOf","abpForTrackBy"],[1,"col-12","col-md-9"],["class","tab-content",4,"ngIf"],["class","nav-item pointer",3,"click",4,"abpPermission"],[1,"nav-item","pointer",3,"click"],["role","tab",1,"nav-link",3,"id"],[1,"tab-content"],["role","tabpanel",1,"tab-pane","fade","show","active",3,"id"],[4,"ngComponentOutlet"]],template:function(n,a){1&n&&(e.TgZ(0,"abp-page",0),e.ALo(1,"abpLocalization"),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"ul",6),e.YNc(8,V,2,1,"ng-container",7),e.qZA(),e.qZA(),e.TgZ(9,"div",8),e.YNc(10,q,3,2,"div",9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("title",e.lcZ(1,4,"AbpSettingManagement::Settings")),e.xp6(8),e.Q6J("abpForOf",a.settings)("abpForTrackBy",a.trackByFn),e.xp6(2),e.Q6J("ngIf",a.settings.length))},directives:[C,s.ycx,s.l97,g.O5,g.$G],pipes:[s.fuE],encapsulation:2}),t})();const j=[{path:"",component:s.O39,canActivate:[s.a1M],children:[{path:"",component:s.c$y,data:{requiredPolicy:"AbpAccount.SettingManagement",replaceableComponent:{key:"SettingManagement.SettingManagementComponent",defaultComponent:x}}}]}];let z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[P.Bz.forChild(j)],P.Bz]}),t})(),U=(()=>{class t{static forChild(){return{ngModule:t,providers:[]}}static forLazy(){return new s.Cgl(t.forChild())}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[z,s.IR2,p.e2,L]]}),t})()}}]);