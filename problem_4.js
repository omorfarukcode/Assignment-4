function findAddress(obj) {
    if(typeof obj !== "object"){
        return "please provide me an array of number"
    }else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street + "," + house + "," + society;
    }
}
const object = {
    street: 10,
    house:"15A",
    society:"Earth Perfect"
}
const result = findAddress(object);
console.log(result);

  