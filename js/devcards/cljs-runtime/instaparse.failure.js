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
var G__55938 = (line + (1));
var G__55939 = (1);
var G__55940 = (counter + (1));
line = G__55938;
col = G__55939;
counter = G__55940;
continue;
} else {
var G__55941 = line;
var G__55942 = (col + (1));
var G__55943 = (counter + (1));
line = G__55941;
col = G__55942;
counter = G__55943;
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
var G__55945 = cljs.core.next(chars);
var G__55946 = (n__$1 - (1));
chars = G__55945;
n__$1 = G__55946;
continue;
} else {
var G__55947 = cljs.core.next(chars);
var G__55948 = n__$1;
chars = G__55947;
n__$1 = G__55948;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55927){
var map__55928 = p__55927;
var map__55928__$1 = (((((!((map__55928 == null))))?(((((map__55928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55928):map__55928);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55928__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55928__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55928__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55928__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55930_55951 = cljs.core.seq(full_reasons);
var chunk__55931_55952 = null;
var count__55932_55953 = (0);
var i__55933_55954 = (0);
while(true){
if((i__55933_55954 < count__55932_55953)){
var r_55955 = chunk__55931_55952.cljs$core$IIndexed$_nth$arity$2(null,i__55933_55954);
instaparse.failure.print_reason(r_55955);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55956 = seq__55930_55951;
var G__55957 = chunk__55931_55952;
var G__55958 = count__55932_55953;
var G__55959 = (i__55933_55954 + (1));
seq__55930_55951 = G__55956;
chunk__55931_55952 = G__55957;
count__55932_55953 = G__55958;
i__55933_55954 = G__55959;
continue;
} else {
var temp__5735__auto___55960 = cljs.core.seq(seq__55930_55951);
if(temp__5735__auto___55960){
var seq__55930_55961__$1 = temp__5735__auto___55960;
if(cljs.core.chunked_seq_QMARK_(seq__55930_55961__$1)){
var c__4609__auto___55962 = cljs.core.chunk_first(seq__55930_55961__$1);
var G__55963 = cljs.core.chunk_rest(seq__55930_55961__$1);
var G__55964 = c__4609__auto___55962;
var G__55965 = cljs.core.count(c__4609__auto___55962);
var G__55966 = (0);
seq__55930_55951 = G__55963;
chunk__55931_55952 = G__55964;
count__55932_55953 = G__55965;
i__55933_55954 = G__55966;
continue;
} else {
var r_55967 = cljs.core.first(seq__55930_55961__$1);
instaparse.failure.print_reason(r_55967);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55968 = cljs.core.next(seq__55930_55961__$1);
var G__55969 = null;
var G__55970 = (0);
var G__55971 = (0);
seq__55930_55951 = G__55968;
chunk__55931_55952 = G__55969;
count__55932_55953 = G__55970;
i__55933_55954 = G__55971;
continue;
}
} else {
}
}
break;
}

var seq__55934 = cljs.core.seq(partial_reasons);
var chunk__55935 = null;
var count__55936 = (0);
var i__55937 = (0);
while(true){
if((i__55937 < count__55936)){
var r = chunk__55935.cljs$core$IIndexed$_nth$arity$2(null,i__55937);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55972 = seq__55934;
var G__55973 = chunk__55935;
var G__55974 = count__55936;
var G__55975 = (i__55937 + (1));
seq__55934 = G__55972;
chunk__55935 = G__55973;
count__55936 = G__55974;
i__55937 = G__55975;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55934);
if(temp__5735__auto__){
var seq__55934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55934__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55934__$1);
var G__55976 = cljs.core.chunk_rest(seq__55934__$1);
var G__55977 = c__4609__auto__;
var G__55978 = cljs.core.count(c__4609__auto__);
var G__55979 = (0);
seq__55934 = G__55976;
chunk__55935 = G__55977;
count__55936 = G__55978;
i__55937 = G__55979;
continue;
} else {
var r = cljs.core.first(seq__55934__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55980 = cljs.core.next(seq__55934__$1);
var G__55981 = null;
var G__55982 = (0);
var G__55983 = (0);
seq__55934 = G__55980;
chunk__55935 = G__55981;
count__55936 = G__55982;
i__55937 = G__55983;
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