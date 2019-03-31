let arr=[1,2,3,12,13,21,22]
let arr2= arr.sort()
console.log(arr2)//by default lexographical sort
function compare(a,b){
    return a-b
}
console.log(arr.sort(compare))
function comp(a,b){
    return b-a
}
console.log(arr.sort(comp))
console.log(arr)//it will change the actual array
