// 16:23 ~ 16:28
const solution = (rsp) => [...rsp].reduce((a, c) =>  a += c === "2" ? "0" : c === "0" ? "5" : "2", "");