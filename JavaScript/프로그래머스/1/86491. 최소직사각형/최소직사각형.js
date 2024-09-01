function solution(sizes) {
    
    // console.log(sizes.map(([w, h]) => [w, h]))
    let width = 0;
    let height = 0;
    
    // sizes.map(([w, j]) => [])
    sizes.forEach(([w, h]) => {
        // console.log(Math.max(w, h));
        // console.log(width);
        width = Math.max(width, Math.max(w, h));
        height = Math.max(height, Math.min(w, h));
    })
    
    return width * height;
}          