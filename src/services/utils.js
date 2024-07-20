export function makeId(len){
    const num=10**len-1
    return Math.floor(num + Math.random() * 9*num); 
}

