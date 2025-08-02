//The Free Aim Shot Model for Expedition 33

/*Assumptions:
Targeting one enemy that doesn't die before you finish your turn. If you could target 2 enemies and kill one, Dead Energy would come into play.
Target does not break during this turn. If a tareget breaks it is possible to trigger Energising Break and Energising Stun. However, modeling this would require whole builds and specific enemies. 
*/

//Objective 1: Create an algorithm to simulate one turn of shots in the Free Aim Shot build.

function MachineGun() {
    //start of turn
    //Assumptions:
    //Starting AP is 9. If counter reaches 0, end loop and algorithm.
    //Enemy starts off with no mark or burn.
    let shotCounter = 0;
    let AP = 9;
    //console.log(`AP = ${AP}`);

    //enemy starting status
    let enemyMark = false;
    let enemyBurn = 0;
    let burnsThisTurn = 0;

    //AP gain values
    let energyMaster = 1; //Energy Master: Every AP gain is increased by 1.
    let rewardedMarks = 0;
    let energisedBurns = 0;
    let statusEffectsThisShot = 0;
    let benefitedContaminations = 0;
    let isPowerful = false;
    let powerfulThisTurn = 0;
    let energisedPowerful = 0;
    let isRush = false;
    let rushThisTurn = 0;
    let energisedRush = 0;
    let isShell = false;
    let shellThisTurn = 0;
    let energisedShell = 0;

    //console.log("START LOOP");

    //starts firing. Every occurence of the loop is one shot
    for (; AP > 0;) {
        shotCounter += 1;
        statusEffectsThisShot = 0;
        //console.log(`Shots = ${shotCounter}`);
        //initial AP Cost
        AP -= 1;
        //console.log(`Shot Start AP = ${AP}`); //after the -1 from shooting

        //Energising Shots: 20% chance to gain 1AP on free aim shot.
        if (Math.random() < 0.2) {
            //console.log('Energised shot');
            AP = AP + 1 + energyMaster;
        }

        //Rewarding Mark: 2AP on dealing damage to a marked target. Once per turn.
        //Rewarding Mark goes before the Energising Mark because you need to apply mark before you benefit from it.
        if (enemyMark === true && rewardedMarks === 0) {
            AP = AP + 2 + energyMaster;
            rewardedMarks += 1;
            enemyMark = false;
            //console.log('Rewarded Mark');
        }
        
        //Removes mark if Rewarding Mark already occured
        if (enemyMark === true && rewardedMarks > 0) {
            enemyMark = false;
        }

        //Marking Shots: 20% chance to apply mark on free aim shots.
        if (Math.random() < 0.2 && enemyMark === false) {
            enemyMark = true;
            statusEffectsThisShot += 1;
            //console.log('Enemy Marked');
        }

        //Burning Shots: 20% chance to Burn on Free Aim shot.
        if (Math.random() < 0.2) {
            enemyBurn += 1;
            burnsThisTurn += 1;
            statusEffectsThisShot += 1;
            //console.log('Enemy Burned');
        }
        
        //Energising Burn: 1 AP on Applying Burn. Once per turn.        
        if (burnsThisTurn >= 1 && energisedBurns === 0) {
            AP = AP + 1 + energyMaster;
            energisedBurns += 1
            //console.log('Energised Burn');
        }
        
        //Beneficial Contamination: 2AP on applying a status effect. Once per turn.
        if (statusEffectsThisShot === 1 && benefitedContaminations === 0) {
            AP = AP + 2 + 1;
            //console.log('Benefited Contamination')
            benefitedContaminations += 1;
        }

        //Powerful Shots: 20% chance to gain Powerful on Free Aim shot.
        if (Math.random() < 0.2) {
            isPowerful = true;
            powerfulThisTurn += 1;
            //console.log('Powerful Applied');
        }
        
        //Engergising Powerful: Give 2 AP on applying Powerful.
        if (powerfulThisTurn === 1 && energisedPowerful === 0) {
            AP = AP + 2 + energyMaster;
            energisedPowerful += 1;
            //console.log('Energised Powerful');
        }

        //Accelerating Shots: 20% chance to gain Rush on Free Aim Shot.
        if (Math.random() < 0.2) {
            isRush = true;
            rushThisTurn += 1;
            //console.log('Rush Applied');
        }

        //Energising Rush: Give 2 AP on applying Rush.
        if (rushThisTurn === 1 && energisedRush === 0) {
            AP = AP + 2 + energyMaster;
            energisedRush += 1;
            //console.log('Energised Rush');
        }

        //Protecting Shots: 20% chance to gain Shell on Free Aim shot.
        if (Math.random() < 0.2) {
            isShell = true;
            shellThisTurn += 1;
            //console.log('Shell Applied');
        }

        //Energising Shell: Give 2 AP on applying Shell.
        if (shellThisTurn === 1 && energisedShell === 0) {
            AP = AP + 2 + energyMaster;
            energisedShell += 1;
            //console.log('Energised Shell');
        }

        //Cap AP at 9
        AP = Math.min(AP, 9);
        //Show final value before each loop
        //console.log(`Shot End AP = ${AP}`);
    }
    return shotCounter;
}

//Objective 2: Using the algorithm, calculate the average number of shots given multiple different sample sizes.
//Calculate Averages Based on the same array.

function runSimulation(sampleSize) {
    const results = [];

    //Creates Array of Outputs
    for (let i = 0; i < sampleSize; i++) {
        results.push(MachineGun());
    
    }
    return results;
}

const sampleSize = 1000000;
const results = runSimulation(sampleSize);

function averageOutputsByLength(sampleSize2){
    let sum = 0

    for (let i = 0; i<sampleSize2; i++){
        sum = sum + results[i];
        
        /*
        //Averages the array together
        const total = results.reduce((acc, val) => acc + val, 0);
        const average = total / sampleSize;
        */
        
    }
    let average = sum/sampleSize2
    console.log(`Sample Size: ${sampleSize2}. Average shots: ${average}`);
}

averageOutputsByLength(10); //Sample Size of 10
averageOutputsByLength(100); //Sample Size of 100
averageOutputsByLength(1000); //Sample Size of 1,000
averageOutputsByLength(10000); //Sample Size of 10,000
averageOutputsByLength(100000); //Sample Size of 100,000
averageOutputsByLength(1000000); //Sample Size of 1,000,000

//Objective 3: Calculate the probability distribution of a given number of shots occuring based on the sample data.
function calculateProbability(results) {

    //Create Frequency Object
    const frequencies = {};
    for (let shots of results) {
        frequencies[shots] = (frequencies[shots] || 0) + 1;
    }

    //Calculate Probabilities
    const probabilities = {};
    for (let shots in frequencies) {
        probabilities[shots] = frequencies[shots] / results.length;
    }
    //console.log(probabilities);
    //Print in Organized Way
    for (let shots in probabilities) {
        console.log(`${shots}: ${probabilities[shots]}`)
    }

    return probabilities; 
}

    /* Print as an Object
    const probabilityDistribution = calculateProbability(results);
    console.log(probabilityDistribution);*/

//Probability Distribution Output
console.log("Probability Distribution for Sample Size of 1 Million:")
//calculateProbability(results);
const probabilityDistribution = calculateProbability(results);

//Objective 4: Probability Distribution Data Visualization
const probabilityLabels = Object.keys(probabilityDistribution);
const probabilityData = Object.values(probabilityDistribution);
//console.log(probabilityLabels);
//console.log(probabilityData);

