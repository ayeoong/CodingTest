function solution(t, p) {
    
    // [...t].map(v => )
    let count = 0;
    const limit = p.length;
    for(let i=0; i<=t.length - limit; i++) {
        // console.log(t.substr(i, limit))
        // if(+(t[i] + t[i + 1] + t[i + 2]) <= +p) count += 1; // 이건 1번만 통과되는 거잖아....... 바보 아님????
        if(+t.substr(i, limit) <= +p) count++;
    }
    
    return count;
}