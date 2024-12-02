let arr = [2,3,6,9,15];
for(let i=0;i<=arr.length-1;i++){
    if (arr[i]%2==0) {
        continue;
    }
    else if (arr[i]% 3==0){
        console.log(arr[i]);
    } 
}