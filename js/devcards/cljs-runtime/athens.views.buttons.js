goog.provide('athens.views.buttons');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('garden.selectors');
goog.require('stylefy.core');
athens.views.buttons.button_icons_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"-0.0835em",new cljs.core.Keyword(null,"margin-block-end","margin-block-end",-1287470806),"-0.0835em"], null);
athens.views.buttons.button_icons_not_last_child_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),"0.251em"], null);
athens.views.buttons.button_icons_not_first_child_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-inline-style","margin-inline-style",-1796496677),"0.251em"], null);
athens.views.buttons.button_icons_only_child_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),"-0.25rem",new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),"-0.25rem"], null);
athens.views.buttons.buttons_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],["center",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),"inherit","all 0.075s ease","500","transparent","pointer","0.375rem 0.625rem",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:active","&:active",-1687810105),new cljs.core.Keyword(null,"&:hover:active","&:hover:active",1452946359),new cljs.core.Keyword(null,"&.is-active","&.is-active",-1077675743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.Keyword(null,"&:disabled:active","&:disabled:active",1835593169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),0.3),new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 0 auto",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"85%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),athens.views.buttons.button_icons_style,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45513 = (function (){var G__45514 = (garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.last_child.call(null));
return (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(G__45514) : garden.selectors.not.call(null,G__45514));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__45513) : garden.selectors._AMPERSAND_.call(null,G__45513));
})(),athens.views.buttons.button_icons_not_last_child_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45515 = (function (){var G__45516 = (garden.selectors.first_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.first_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.first_child.call(null));
return (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(G__45516) : garden.selectors.not.call(null,G__45516));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__45515) : garden.selectors._AMPERSAND_.call(null,G__45515));
})(),athens.views.buttons.button_icons_not_first_child_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45519 = (function (){var fexpr__45521 = (function (){var G__45523 = (garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.last_child.call(null));
return (garden.selectors.first_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.first_child.cljs$core$IFn$_invoke$arity$1(G__45523) : garden.selectors.first_child.call(null,G__45523));
})();
return (fexpr__45521.cljs$core$IFn$_invoke$arity$0 ? fexpr__45521.cljs$core$IFn$_invoke$arity$0() : fexpr__45521.call(null));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__45519) : garden.selectors._AMPERSAND_.call(null,G__45519));
})(),athens.views.buttons.button_icons_only_child_style], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-primary","&.is-primary",-8529929),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:active","&:active",-1687810105),new cljs.core.Keyword(null,"&:hover:active","&:hover:active",1452946359),new cljs.core.Keyword(null,"&.is-active","&.is-active",-1077675743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.Keyword(null,"&:disabled:active","&:disabled:active",1835593169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),0.3),new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null)], null)], null),"inline-flex","none","0.25rem","inherit","0"]);
stylefy.core.class$("button",athens.views.buttons.buttons_style);
/**
 * Keep button interface as close to vanilla hiccup as possible.
 *   Dissoc :style :active and :class because we don't want to merge them in directly.
 *   Can pass in a :key prop to make react happy, as a :key or ^{:key}. Just works
 */
athens.views.buttons.button = (function athens$views$buttons$button(var_args){
var G__45528 = arguments.length;
switch (G__45528) {
case 1:
return athens.views.buttons.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.views.buttons.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.views.buttons.button.cljs$core$IFn$_invoke$arity$1 = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,cljs.core.PersistentArrayMap.EMPTY,children], null);
}));

(athens.views.buttons.button.cljs$core$IFn$_invoke$arity$2 = (function (p__45529,children){
var map__45530 = p__45529;
var map__45530__$1 = (((((!((map__45530 == null))))?(((((map__45530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45530):map__45530);
var props = map__45530__$1;
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45530__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45530__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var primary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45530__$1,new cljs.core.Keyword(null,"primary","primary",817773892));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45530__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var props_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"class","class",-2030961996)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.buttons.buttons_style,style], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec(cljs.core.flatten(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(active)?"is-active":null),(cljs.core.truth_(primary)?"is-primary":null),class$], null)))], null)], 0))),children], null);
}));

(athens.views.buttons.button.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=athens.views.buttons.js.map