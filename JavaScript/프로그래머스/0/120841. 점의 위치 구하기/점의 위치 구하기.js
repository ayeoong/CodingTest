// 시작 시간 14:45 종료 시간 14:47
function solution(dot) {
    // if(dot[0] > 0 && dot[1] > 0) return 1;
    // else if(dot[0] < 0 && dot[1] > 0) return 2;
    // else if(dot[0] < 0 && dot[1] < 0) return 3;
    // else return 4;
    
    return dot[0] > 0? dot[1] > 0? 1 : 4 : dot[1] > 0? 2 : 3;
}