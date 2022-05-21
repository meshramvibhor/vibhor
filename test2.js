const arr = [1,0,0,0,1]
const k = 2;
let possiblePlaces = 0;
const ans = canCriminalPlace();

console.log(ans);

function canCriminalPlace (){

    if(arr.length<=2){
        return false;
    }

    for(let i=1;i<arr.length-1;i++){
        if(arr[i]==0 && arr[i+1]== 0 && arr[i-1]==0){
            arr[i]=1;
            possiblePlaces++;
        }
    }

    if(possiblePlaces>=k)
        return true;
    else
        return false
}