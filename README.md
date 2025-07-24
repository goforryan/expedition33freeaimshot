<h1>I ran 1 Million Free Aim turns in a simulator to find out how many shots you really get in Expedition 33.</h1>

<h2>Purpose</h2>
I built a simulation in JavaScript that replicates every interaction — Energised, Marking, Rush, etc. Then I ran it over 1 million turns. 
The goal of this simulation is to model the complex web of effects — Energy Master, Mark, Burn, Rush, and Powerful — and determine:

<ul>
<li>✅ The average number of shots per turn </li>
<li>🔢 The probability distribution of shot counts</li>
<li>🔥 How often high-shot turns (e.g. 30+) occur</li>
<li>🧪 How effects like Energy Master skew outcomes</li>
</ul>

<h2>Key Findings</h2>
<ul>
  <li>The average number of shots for a sample size converges towards 23.11 shots.</li>
  <li>There's only a #% chance of getting 30 shots or higher.</li>
  <li>The highest number of shots I saw was 79, with a 0.0001% chance of occuring.</li>
  <li>Certain pictos like Beneficial Contamination aren't as impactful as they seem like they'd be because they usually trigger while you're AP is high and would have already maxed out at 9.</li>
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

Sample Size: 10. Average shots: 21.4
Sample Size: 100. Average shots: 23.43
Sample Size: 1000. Average shots: 23.257
Sample Size: 10000. Average shots: 23.15
Sample Size: 100000. Average shots: 23.11037
Sample Size: 1000000. Average shots: 23.106627
{9: 0.000006, 10: 0.000153, 11: 0.001289, 12: 0.004164, 13: 0.009664, 14: 0.018132, 15: 0.029094, 16: 0.040695, 17: 0.052909, 18: 0.062891, 19: 0.070407, 20: 0.074229, 21: 0.075588, 22: 0.074139, 23: 0.069453, 24: 0.064371, 25: 0.057635, 26: 0.050476, 27: 0.043937, 28: 0.037237, 29: 0.031408, 30: 0.026034, 31: 0.021391, 32: 0.017372, 33: 0.014121, 34: 0.011218, 35: 0.009002, 36: 0.007151, 37: 0.005754, 38: 0.004425, 39: 0.003429, 40: 0.002697, 41: 0.002116, 42: 0.001655, 43: 0.001348, 44: 0.000991, 45: 0.000761, 46: 0.000616, 47: 0.000437, 48: 0.000342, 49: 0.000278, 50: 0.00023, 51: 0.00016, 52: 0.000125, 53: 0.000115, 54: 0.000083, 55: 0.000057, 56: 0.000045, 57: 0.000035, 58: 0.000025, 59: 0.000027, 60: 0.000014, 61: 0.000013, 62: 0.000019, 63: 0.000009, 64: 0.000005, 65: 0.000004, 66: 0.000001, 67: 0.000005, 68: 0.000003, 69: 0.000003, 70: 0.000002, 72: 0.000002, 75: 0.000001, 83: 0.000001, 86: 0.000001}


<h2>📦 Files</h2>
<ul>
  <li>main.js – Core simulation logic</li>
  <li>README.md – You're here!</li>
  <li>chart.png – Distribution visualization</li>
</ul>



<h2>Next Steps?</h2>




One thing I'm unsure of is whether the Energising Powerful, Rush and Shell pictos can trigger multiple times per turn.

I’m wondering — are there any other pictos I missed that could make the "machine gun" free aim build better and increase the average number of shots even higher?

