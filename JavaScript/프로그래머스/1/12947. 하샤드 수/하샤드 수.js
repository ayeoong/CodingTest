const solution = x => !(x % [...x.toString()].map(Number).reduce((a, c) => a += c, 0));

    // const num = [...x.toString()].map(Number).reduce((a, c) => a += c, 0); // 자릿수의 합
 