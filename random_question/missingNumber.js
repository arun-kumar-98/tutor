class Solution{
    missingNumber(array,n){
        //code here
        
        let arraySum=0
        let actual_sum=Math.floor(n*(n+1)/2)
        
        for(let i=0;i<array.length;i++){
            
            arraySum+=array[i]
        }
        
        let diffNumber=actual_sum-arraySum
        return diffNumber
    }
}

//try solving using bitwise operator 

class Solution{
    missingNumber(array,n){
        let xor=0
        
        for(let i=0;i<=n;i++){
            xor=xor^i^array[i];
        }
    return xor
    }
}

//Sove by Using hashmap 


class Solution{
    missingNumber(array,n){
        
        
        //create empty hashmap
        
        
        const map={}
        
        //storing this in nhashmap
        // we can find   the missing  element 
        for(let num of array){
            map[num]=true;
        }
        
        //now iterate the till nth to check missing number 
        
        for(let i=1;i<=n;i++){
            if(!(i in map)){
                return i
            }
        }        
    return -1
    }
}

