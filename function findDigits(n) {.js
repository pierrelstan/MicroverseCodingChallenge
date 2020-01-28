function findDigits(n) {
    let stringNum = n.toString();
    let reminder = 0;
    let numReminders = 0;

    for(let i = 0; i < stringNum.length; i++){
        if(n % stringNum[i] === 0){
            numReminders++;
        }
    }
    return numReminders;
}