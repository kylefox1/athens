goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__55807 = (line + (1));
var G__55808 = (1);
var G__55809 = (counter + (1));
line = G__55807;
col = G__55808;
counter = G__55809;
continue;
} else {
var G__55810 = line;
var G__55811 = (col + (1));
var G__55812 = (counter + (1));
line = G__55810;
col = G__55811;
counter = G__55812;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__55813 = cljs.core.next(chars);
var G__55814 = (n__$1 - (1));
chars = G__55813;
n__$1 = G__55814;
continue;
} else {
var G__55815 = cljs.core.next(chars);
var G__55816 = n__$1;
chars = G__55815;
n__$1 = G__55816;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55793){
var map__55794 = p__55793;
var map__55794__$1 = (((((!((map__55794 == null))))?(((((map__55794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55794):map__55794);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55794__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55794__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55794__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55794__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__55796_55817 = cljs.core.seq(full_reasons);
var chunk__55797_55818 = null;
var count__55798_55819 = (0);
var i__55799_55820 = (0);
while(true){
if((i__55799_55820 < count__55798_55819)){
var r_55821 = chunk__55797_55818.cljs$core$IIndexed$_nth$arity$2(null,i__55799_55820);
instaparse.failure.print_reason(r_55821);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55822 = seq__55796_55817;
var G__55823 = chunk__55797_55818;
var G__55824 = count__55798_55819;
var G__55825 = (i__55799_55820 + (1));
seq__55796_55817 = G__55822;
chunk__55797_55818 = G__55823;
count__55798_55819 = G__55824;
i__55799_55820 = G__55825;
continue;
} else {
var temp__5735__auto___55826 = cljs.core.seq(seq__55796_55817);
if(temp__5735__auto___55826){
var seq__55796_55827__$1 = temp__5735__auto___55826;
if(cljs.core.chunked_seq_QMARK_(seq__55796_55827__$1)){
var c__4609__auto___55828 = cljs.core.chunk_first(seq__55796_55827__$1);
var G__55829 = cljs.core.chunk_rest(seq__55796_55827__$1);
var G__55830 = c__4609__auto___55828;
var G__55831 = cljs.core.count(c__4609__auto___55828);
var G__55832 = (0);
seq__55796_55817 = G__55829;
chunk__55797_55818 = G__55830;
count__55798_55819 = G__55831;
i__55799_55820 = G__55832;
continue;
} else {
var r_55833 = cljs.core.first(seq__55796_55827__$1);
instaparse.failure.print_reason(r_55833);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55834 = cljs.core.next(seq__55796_55827__$1);
var G__55835 = null;
var G__55836 = (0);
var G__55837 = (0);
seq__55796_55817 = G__55834;
chunk__55797_55818 = G__55835;
count__55798_55819 = G__55836;
i__55799_55820 = G__55837;
continue;
}
} else {
}
}
break;
}

var seq__55803 = cljs.core.seq(partial_reasons);
var chunk__55804 = null;
var count__55805 = (0);
var i__55806 = (0);
while(true){
if((i__55806 < count__55805)){
var r = chunk__55804.cljs$core$IIndexed$_nth$arity$2(null,i__55806);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55838 = seq__55803;
var G__55839 = chunk__55804;
var G__55840 = count__55805;
var G__55841 = (i__55806 + (1));
seq__55803 = G__55838;
chunk__55804 = G__55839;
count__55805 = G__55840;
i__55806 = G__55841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55803);
if(temp__5735__auto__){
var seq__55803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55803__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55803__$1);
var G__55842 = cljs.core.chunk_rest(seq__55803__$1);
var G__55843 = c__4609__auto__;
var G__55844 = cljs.core.count(c__4609__auto__);
var G__55845 = (0);
seq__55803 = G__55842;
chunk__55804 = G__55843;
count__55805 = G__55844;
i__55806 = G__55845;
continue;
} else {
var r = cljs.core.first(seq__55803__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55846 = cljs.core.next(seq__55803__$1);
var G__55847 = null;
var G__55848 = (0);
var G__55849 = (0);
seq__55803 = G__55846;
chunk__55804 = G__55847;
count__55805 = G__55848;
i__55806 = G__55849;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
