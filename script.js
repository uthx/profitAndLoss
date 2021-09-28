let initialPrice = document.querySelector('#initial-price');
let currentPrice = document.querySelector('#current-price');
let stockQuantity = document.querySelector('#stock-quantity');
let outputDiv = document.querySelector('#output-box');
let calculateButton = document.querySelector('#calculate');


const validateInputs = () => {
    let initPriceNum = Number(initialPrice.value);
    let currPirceNum = Number(currentPrice.value);
    let stockQtyNum = Number(stockQuantity.value);
    if(initPriceNum >= 1 && currPirceNum >= 1 && stockQtyNum >= 1){
        calculateProfitLoss(initPriceNum,currPirceNum,stockQtyNum)
    }else{
        showOutput("Entries should be greater than 0")
    }
}

calculateButton.addEventListener('click',validateInputs);

const calculateProfitLoss = (costPrice,sellingPrice,quantity) => {
    
    if(sellingPrice > costPrice){
        let profit = sellingPrice - costPrice;
        let profitPercentage = (profit * 100)/costPrice;
        console.log("Profit on 1 qty => ",profit);
        console.log("Overall Profit => ",profit * quantity)
        console.log("Profit Percentage => ",profitPercentage)
        showOutput(`Profit is ${profit * quantity} and Profit Percentage is ${profitPercentage}%`)
    }else if(costPrice > sellingPrice) {
        let loss = costPrice - sellingPrice;
        let lossPercentage = (loss * 100)/costPrice;
        console.log("loss on 1 qty => ",loss);
        console.log("Overall loss => ",loss * quantity)
        console.log("loss Percentage => ",lossPercentage)
        showOutput(`Loss is ${loss * quantity} and Loss Percentage is ${lossPercentage}%`)
    }else {
        showOutput("Your Portfolio is better still better than mine, Yeah you're not into loss 😒 \n Now Go Celebrate🥳")
    }
}

const showOutput = (msg) => {
    outputDiv.innerHTML = msg 
}


