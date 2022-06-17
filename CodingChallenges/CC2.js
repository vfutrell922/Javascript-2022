/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

window.onload = main();

function main(){
    let markWeight = 78;
    let johnWeight = 92;
    let markHeight = 1.69;
    let johnHeight = 1.95;
    let markBMI = calculateBMI(markWeight, markHeight);
    let johnBMI = calculateBMI(johnWeight, johnHeight);

    printResults(markBMI, johnBMI);

    markWeight = 95;
    markHeight = 1.88;
    johnWeight = 85;
    johnHeight = 1.76;
    markBMI = calculateBMI(markWeight, markHeight);
    johnBMI = calculateBMI(johnWeight, johnHeight);

    printResults(markBMI, johnBMI);
}

function calculateBMI(weight, height)
{
    return weight / height ** 2;
}

function printResults(markBMI, johnBMI)
{
    let markHigherBMI = markBMI > johnBMI;
    if(markHigherBMI)
    {
        console.log(`Mark's BMI ${markBMI}, is higher than John's ${johnBMI}!`)
    }
    else
    {
        console.log(`John's BMI ${johnBMI}, is higher than Mark's ${markBMI}!`)
    }
}