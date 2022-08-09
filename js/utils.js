function getUniquesMenu(df,thisVariable){
    var thisList=df.map(function(o) {
        return o[thisVariable]
    })

    function uniq(a) {
        return a.sort().filter(function(item, pos,ary){
            return !pos || item !=ary[pos-1];
        });
        
    }
    
    var uniqueList=uniq(thisList);

    return uniqueList;
}

