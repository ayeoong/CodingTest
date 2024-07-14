const solution = s => {
    // const regex = /\d{4}$/;
    // const regex2 = /\d{6}$/;
    
    // return /^\d{4}$|^\d{6}$/.test(s);
    // if(regex.test(s) || regex2.test(s)) return true;
    // else return false;
    // console.log(regex.test(s));
    // console.log(regex2.test(s));
    
    
    // if(s.length === 4 || s.length === 6)   
    //     return [...s].every(v => !isNaN(v));
    
    // 전부 true면 숫자로만 된 거 ......?
    // [...s].filter(v => console.log(Nu mber(v)));
    // var answer = true;
    // return answer;
    
    // for(let i=0; i<s.length; i++) {
    //     if(s.length === 4 || s.length === 6) console.log(s[i]);
    //     else false;
    // }
    
    if((s.length === 4 || s.length === 6) && s == parseInt(s))
        return true;
    
    return false;
}