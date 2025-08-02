<h1>I simulated 1 Million Free Aim turns to find out how many shots you really can get in Expedition 33.</h1>

<h2>Purpose</h2>
One of the best builds in Expedition 33 is the free aim shot or machine build, where you fire as many energy shots as you can in a single turn. I've seen some debate online about how many free aim shots are possible in an average turn. To settle the debate once and for all, I created an algorithm in JavaScript that replicates every interaction — Energised, Marking, Rush, etc. Then I ran it over 1 million turns. 

The goal of this simulation is to model the complex web of picto effects and determine:

<ul>
<li> The average number of shots per turn </li>
<li> The probability distribution of shot counts</li>
<li> How often high-shot turns (e.g. 30+) occur</li>
<li> Which pictos have the biggest impact on shot counts.</li>
</ul>

<h2>Key Findings</h2>
<ul>
  <li>The average number of shots per turn is 23.1.</li>
  <li>There's only a 13.2% chance of getting 30 shots or higher.</li>
  <li>There's only a 0.0006% chance of getting only 9 shots because no effects occured.</li>
  <li>The highest number of shots I saw was 80, with a 0.0001% chance of occuring.</li>
  <li>The most impactful pictos were  Energising Shots and Energy Master. Disabling them led to a 35.1% and 20% decrease in average shot count, respectively.</li>
  <li>Beneficial Contamination is the least impactful because it usually triggers while you're AP is high and another boost was already going to max out your AP.</li>
  <li>There's a 99.58% chance of getting 10 or more shots with 2 AP remaining. This means you're essentially guaranteed to get the maximum damage boost of +500% on Verso's skill Follow Up.</li> 
  <li>The more pictos you add, the less impactful each new one becomes.</li>
</ul>

<h2>🛠️ How It Works</h2>
<ul>
<li>The first function simulates one turn of shooting, starting at 9 AP and ending at 0 AP.</li>
<li>The following pictos are modeled:</li>
  <ul>
    <li>Energy Master: Every AP gain is increased by 1.</li>
    <li>Energising Shots: 20% chance to gain 1AP on Free aim shot.</li>
    <li>Beneficial Contamination: 2AP on applying a status effect. Once per turn.</li>
    <li>Marking Shots: 20% chance to apply mark on free aim shots.</li>
    <li>Rewarding Mark: 2AP on dealing damage to a marked target. Once per turn.</li>
    <li>Double Mark: Mark requires 1 more hit to be removed.</li>
    <li>Burning Shots: 20% chance to Burn on Free Aim shot.</li>
    <li>Energising Burn: 1 AP on Applying Burn. Once per turn.</li>
    <li>Powerful Shots: 20% chance to gain Powerful on Free Aim shot.</li>
    <li>Engergising Powerful: Give 2 AP on applying Powerful.</li>
    <li>Accelerating Shots: 20% chance to gain Rush on Free Aim Shot.</li>
    <li>Energising Rush: Give 2 AP on applying Rush.</li>
    <li>Protecting Shots: 20% chance to gain Shell on Free Aim shot.</li>
    <li>Energising Shell: Give 2 AP on applying Shell.</li>
    <li>Caps AP at 9 and loops until AP is gone.</li>
  </ul>
  <li>The second function runs one million simulations and calculates the average number of shots for multiple sample sizes.</li>
  <li>The third function creates a probability distribution for a given number of shots occuring.</li>  
</ul>

<h2>📈 Example Output</h2>

Sample Size: 10. Average shots: 22.4
Sample Size: 100. Average shots: 23.04
Sample Size: 1000. Average shots: 23.03
Sample Size: 10000. Average shots: 23.1584
Sample Size: 100000. Average shots: 23.11117
Sample Size: 1000000. Average shots: 23.101594
9: 0.000005
10: 0.00014
11: 0.001115
12: 0.004078
13: 0.00972
14: 0.01845
15: 0.028638
16: 0.041118
17: 0.052829
18: 0.062978
19: 0.069966
20: 0.075149
21: 0.075294
22: 0.074139
23: 0.06972
24: 0.063951
25: 0.05758
26: 0.05041
27: 0.044151
28: 0.037194
29: 0.031594
30+: Rare but possible!

<h2>Assumptions</h2>
<ul>
  <li>Targets one enemy that doesn't die before you finish your turn. If you could target 2 enemies and kill one, Dead Energy would come into play.</li>
  <li>Enemy does not break during the turn. If a tareget breaks it is possible to trigger Energising Break and Energising Stun. However, modeling this would require modeling specific builds and enemies.</li>
</ul>
  
<h2>📦 Files</h2>
<ul>
  <li><a href="https://github.com/goforryan/expedition33freeaimshot/blob/main/README.md">README.md</a> – You're here!</li>
  <li><a href="https://github.com/goforryan/expedition33freeaimshot/blob/main/FreeAimShot.js">FreeAimShot.js</a> – Core algorithm that ends the turn on reaching 0 AP</li>
  <li><a href="https://github.com/goforryan/expedition33freeaimshot/blob/main/FreeAimShotTwoRemaining.js">FreeAimShotTwoRemaining.js</a> – Modified algorithm that ends the turn on reaching 2 AP</li>
  <li><a href="https://goforryan.github.io/expedition33freeaimshot/DataVisualization.html">Data Visualization</a> - Visual of Probability Distribution</li>
  <li><a href="https://github.com/goforryan/expedition33freeaimshot/blob/main/DataVisualization.html">DataVisualization.html</a> - Data Visualization Source Code</li>
</ul>
