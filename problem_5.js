function canPay(changeArray, totalDue) {
    if ( changeArray.length === 0 || !Array.isArray(changeArray) ){
        return "please provide array of number(Not Empty)"
    }else{
        let totalMoney = 0;
        for ( let i = 0 ; i < changeArray.length ; i++ ){
            let element = changeArray[i];
            totalMoney = totalMoney + element   
        }
        if (totalMoney >= totalDue){
            return true;
        }else if(totalMoney < totalDue){
            return false;
        }
    } 
}
const result = canPay([],40);
console.log(result);