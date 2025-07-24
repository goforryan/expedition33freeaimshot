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


Key Findings:
**The average number of shots for a sample size converges towards 23.11 shots.**

There's only a #% chance of getting 30 shots or higher.
The highest number of shots I saw was 79, with a 0.0001% chance of occuring.
Certain pictos like Beneficial Contamination aren't as impactful as they seem like they'd be because they usually trigger while you're AP is high and would have already maxed out at 9.






One thing I'm unsure of is whether the Energising Powerful, Rush and Shell pictos can trigger multiple times per turn.

I’m wondering — are there any other pictos I missed that could make the "machine gun" free aim build better and increase the average number of shots even higher?

