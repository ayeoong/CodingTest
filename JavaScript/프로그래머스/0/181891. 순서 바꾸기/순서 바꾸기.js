// 20:56 ~
const solution = (num_list, n) => [...num_list.slice(n), ...num_list.slice(0, n)];