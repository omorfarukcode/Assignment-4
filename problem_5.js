function canPay(changeArray, totalDue) {
    if ( changeArray.length === 0 || !Array.isArray(changeArray) ){
        return "please provide array of number(Not Empty)"
    }else{
        let totalAmount = 0;
        for ( let i = 0 ; i < changeArray.length ; i++ ){
            let element = changeArray[i];
            totalAmount = totalAmount + element   
        }
        if (totalAmount >= totalDue){
            return true;
        }else if(totalAmount < totalDue){
            return false;
        }
    } 
}
const result = canPay([1,5,5],10);
console.log(result);