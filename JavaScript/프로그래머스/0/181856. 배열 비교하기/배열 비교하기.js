// 11:56 ~ 12:08
function solution(arr1, arr2) {
    // 두 배열의 길이를 비교
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length < arr2.length) {
        return -1;
    }

    // 두 배열의 길이가 같을 경우, 원소의 합을 비교
    const sum1 = arr1.reduce((a, c) => a + c, 0);
    const sum2 = arr2.reduce((a, c) => a + c, 0);

    if(sum1 > sum2)
        return 1;
    else if(sum1 < sum2)
        return -1;
    else
        return 0;
    
}
