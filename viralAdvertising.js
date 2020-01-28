function viralAdvertising(n) {
    let PeopleRecievedTheAds=0;
    let PeopleLikedTheAds=0;
    let People = 5;
    let num = 0;
    
    for(let i = 0 ; i< n ; i++){
    
     PeopleLikedTheAds =Math.floor( People / 2);
    
     PeopleRecievedTheAds = PeopleLikedTheAds * 3;
     People=PeopleRecievedTheAds
     num+= PeopleLikedTheAds;
     
    }
    return num;
    
}

let a = viralAdvertising(5)
console.log(a)