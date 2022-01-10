

function cal(){

    // fetch value of amount input
    let amt = parseInt(document.getElementById('bill-amt').value);

    // fetch value of tip percantage
    let ser = document.getElementById('service').value;
        // set parcantage according to value
        if(ser === 'exe'){
            ser = 20;
        }else if(ser === 'med'){
            ser = 10;
        }else{
            ser = 5;
        }

    // calculate intrest on amount
    let tip =(amt/100)*ser;
    // devide inters amout in people
    let devideTip = parseInt(document.getElementById('bill-share').value)
    let eachTip = tip / devideTip;
    // set amount of tip in html
    document.getElementById('tip').innerHTML = eachTip.toFixed(2) + "/-";


}