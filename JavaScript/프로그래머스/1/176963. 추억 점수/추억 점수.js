const solution = (name, yearning, photo) => {
    
    const data = name.reduce((a, c, i) => {
        a[c] = yearning[i];
        return a;
    }, {});
    
    return photo.map(a => a.reduce((acc, cur) => acc += data[cur] ?? 0, 0));
    
}