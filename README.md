<h1>I ran 1 Million Free Aim turns in a simulator to find out how many shots you really can get in Expedition 33.</h1>

<h2>Purpose</h2>
I've seen some debate online about how many free aim shots are possible in an average turn. To settle the debate once and for all, I built an algorithm in JavaScript that replicates every interaction — Energised, Marking, Rush, etc —. Then I ran it over 1 million turns. 

The goal of this simulation is to model the complex web of picto effects — Energy Master, Mark, Burn, Rush — and determine:

<ul>
<li>✅ The average number of shots per turn </li>
<li>🔢 The probability distribution of shot counts</li>
<li>🔥 How often high-shot turns (e.g. 30+) occur</li>
<li>🧪 Whicch pictos have the largest impact on shot counts.</li>
</ul>

<h2>Key Findings</h2>
<ul>
  <li>The average number of shots for a sample size of 1 million turns is 23.1 shots.</li>
  <li>There's only a #% chance of getting 30 shots or higher.</li>
  <li>The highest number of shots I saw was 80, with a 0.0001% chance of occuring.</li>
  <li>Certain pictos like Beneficial Contamination aren't as impactful as they seem like they'd be because they usually trigger while you're AP is high and would have already maxed out at 9.</li>
  <li>The more pictos you add, the less impactful each new one becomes. Energy Master and Energising Shots are doing most of the work.</li>
</ul>

<h2>🛠️ How It Works</h2>

Each simulation:
<ul>
<li>Starts with 9 AP.</li>
<li>Simulates one turn of shooting using the following pictos:</li>
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
  </ul>  
<li>Caps AP at 9 and loops until AP is gone.
  
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

<h2>📦 Files</h2>
<ul>
  <li><a href="https://github.com/goforryan/expedition33freeaimshot/blob/main/FreeAimShot.js">FreeAimShot.js</a> – Core simulation logic</li>
  <li><a href="https://github.com/goforryan/expedition33freeaimshot/blob/main/README.md">README.md</a> – You're here!</li>
  <li>chart.png – Distribution visualization</li>
</ul>



<h2>Next Steps?</h2>




One thing I'm unsure of is whether the Energising Powerful, Rush and Shell pictos can trigger multiple times per turn.

I’m wondering — are there any other pictos I missed that could make the "machine gun" free aim build better and increase the average number of shots even higher?

