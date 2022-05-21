


function removeRedundant(arr){
    const hp = new Map();

    const ans = new Array();
    
    arr.map((e)=>{
        if(hp.has(e)){
            hp.set(e, hp.get(e)+1);
        }
        else{
            hp.set(e,1);
        }
    })
    
    
    const sortedMap = new Map([...hp].sort((a,b)=>b[1]-a[1]));
    
    let i=0;
    for (let key of sortedMap.keys()){
        i++;
        ans.push(key);
        if(i>=k)
            break;
        
    }

    return ans;
}


const arr = [8, 1, 2, 8];
const k =2;

const ans = removeRedundant(arr);

console.log(ans);