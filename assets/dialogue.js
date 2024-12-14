let dateArray = [
    `01/01/1996`,
    `06/15/1996`,
    `09/27/1996`,
    `12/24/1996`,
    `01/01/1997`
]
let openingMessages = [
// DAY 1
`Welcome to <span class="red">BUSCO-TU</span>: Booming Utility Searching on Computers Online for Terminal Users. With search engines catering to a GUI audience. <span class="red">BUSCO-TU</span> uses those engines with your beloved text interface so you can search using only text!

NOTE: Due a high degree of users joining, we are limiting everyone to <span  class="yellow">THREE</span> searches per day. 

Hit <span class="green">ENTER</span> to setup your engine.
`,
// DAY 2
`BUSCO-TU Loaded. 
<span class="yellow">LATEST NEWS</span>
<span class="red">BUSCO-TU</span> is half-a-year old! Thanks to the support of users like you, we now allow FOUR search inputs daily. 

Please provide your first daily search.
`,
// DAY 3 
`BUSCO-TU LOADED. 

<span class="yellow">LATEST NEWS</span>
Due to a sudden drop because of competitor, <span class="red">BackRub</span>, we are experiencing server strain and can only accept two inputs. 

Please provide your first daily search.
`,
// DAY 4
`<span class="yellow">NEWS</span>
WeV;E maNagged to GET OUR SERVER BACKUP AND RUNNING! You have FOUR search inPut$ again.

Please provide your first daily search.
`
,
// DAY 5
`Hello <span class="red">BUSCO-TU</span> users. Due to pressure from competitors, we will be immediately shutting down. We hope we could show our users how technology can help with achieving your goals. 

NO FUTURE SEARCH INPUTS WILL BE REGISTERED.





<hr>

<p class="prompt" style="text-align:center">BUSCO-TU-AMOR BY <a class="green" href="https://kevincadena.com/">KEVIN CADENA</a> 
CLICK <a class="green" href="https://kevincadena.com/busco-tu-amor">HERE</a> TO START OVER.
</p>

<hr>
`
]

let buscoTuMessages = [
// DAY 1
[
// 0
'', 
// 1
`Select the search engine you use. We will pull in your history.
- <span  class="yellow">W3Catalog</span>
- <span  class="yellow">Aliweb</span>
- <span class="yellow">JumpStation</span>
- <span class="yellow">Infoseek</span>`,  
// 2
`In pulling in your search, it seems a lot revolves around with <span class="yellow">ROMANCE</span>, <span class="yellow">RELATIONSHIPS</span>, and <span class="yellow">SOCIAL SITUATIONS</span>.

Is this correct?`, 
// 3
`Search engine results brought in. Suggestion feature calibrated.

Hit <span class="green">ENTER</span> to start.`,
// 4 
`You'll see an auto-suggestion below in <span class="green">GREEN</span>. Please use them for now to help build our database.

<span class="red">BUSCO-TU</span> will provide the top result. When your quota is reached, <span class="red">BUSCO-TU</span> will ask if the results were helpful. 

Please type in the first suggested search.`,
//5
`<span class="yellow">RESULT FROM LOVEATFIRSTSITE.COM:</span> 
Yes, you can meet someone and have that lightning in a bottle feeling (note: That chemistry doesn't always come from a healthy place).

Hit <span class="green">ENTER</span> to Continue.
`,

//6
`The above will not count towards your quota. Please provide your first daily search. 
`,
// 7
`<span class="yellow">RESULT FROM THEPICKUPARTIST.COM: </span>
Just be yourself. Confidence is attractive.

TWO search inputs remaining.  
`,
//8
`<span class="yellow">RESULT FROM DATINGFORDUMMIES.COM: </span>
Just go for it. Though make sure that you've got a place in mind for the date. It'd be weird to ask someone out but then have them plan. 

ONE search input remaining.  
`,
//9
`<span class="yellow">RESULT FROM GEOLOCATE.COM:</span>
Going on a first date? Some great places include: 
- A museum
- A park
- A restaurant 

NO Search inputs remaining. Were today's results useful?`,

//10
`Thank you for your feedback. Hit <span class="green">ENTER</span> to close the program.`
],
// DAY 2
[
// 0
 ``,
// 1
`<span class="yellow">RESULT FROM DATINGFORDUMMIES.COM:</span>
Taking it slow is better, if you do move in together you WILL see a different side of them. 

THREE search inputs remaining.
`,
// 2 
`<span class="yellow">RESULT FROM THEPICKUPARTIST.COM:</span>
Be open to their concerns, but don't push if they seem hesitant!

TWO search inputs remaining. 
`,
// 4

`<span class="yellow">RESULT FROM CITYLIVING.COM:</span>
Breaking your lease early will come with penalties. Important things come up but this should not be a decision taken lightly. 

ONE search input remaining.
`,
// 3
`<span class="yellow">RESULT FROM GEOLOCATE.COM:</span>
No results found in your immediate area. 

NO Search inputs remaining. Were today's results useful? 
`,
// 5
`Thank you for your feedback. Hit <span class="green">ENTER</span> to close the program.`
],
// DAY 3
[
//0
``,
//1
`<span class="yellow">RESULTS FROM ROMANCERESULTS.COM:</span>
Try to EJKFNWF… EWLEW….
WW;ELRP….. RPPS;A////…..

ONE DJEWIKFNJW4E remaining
`,
//2
`
<span class="yellow">RESULT FROM QKFWEOFKEW…</span>
It's good to Jrfuiewfhu3… Takw a step back. It could still DDHDH…. EAAA..

No JEQJMWIKEUHQ3WI Remaining. Were n3nhijqwkhr3yiuq USEFUL??
`, 
//3
`JDI3QLkhurji3oqw… 
FENJWEKDN <span class="green">ENTER</span> To CLOSE
`
], 
// DAY 4
[
// 0
``,
//1
`<span class="yellow">RESULT FROM CITYLIVING.COM:</span>
If one tenant breaks the lease, the landlord can pursue the remaining tenant for the full amount.

THREE REMAINING...
`,
//2
`<span class="red">ERROR! RAN OUT OF MEMORY. </span>

TWO REMAINING...
`,
//3
`ERROR! RAN OUT OF MEMORY. 

ONE REMAINING….
`,

//4
`<span class="red">ERROR! NO AVAILABLE BANDWIDTH TO PULL IN DATA.</span>

NONE REMAINING.. HIT <span class="green">ENTER</span> TO CLOSE PROGRAM
`
],
// DAY 5
[
//0
``
,
// 1
``
] 
]

let userInput = [
// DAY 1
[
// 0
    '',
// 1
    ' Aliweb',
// 2
    ' Yes',
// 3
    '',
// 4
    ` You don't fall in love. You discover it.`,
// 5
    ``,
// 6
    ` How to impress someone`,
// 7
    ` How to ask someone on a date`,
// 8
    ` Good places for a date`,  
// 9
    ` YES`,
// 10 
    ``
],
// DAY 2
[
// 0
` Is it too soon to move in with partner`,
// 1
` Bringing up moving in together`,
//3
` How to break my lease`
,
//2
` Apartment listings for two`
,
//4
` NO`
,
//5
``
],
// DAY 3
[
// 0
` Having space issues with my partner`
, 
//1 
` What if living together was a mistake `
,
//2
` NO`
,
//3
``
],
// DAY 4
[
//0
` What happens if one person leaves lease`
 , 
 //1
 ` Looking for new roommates`
 ,
 //2
 ` Looking to meet new people`,
 //3

 ` How to not rush my next relationship`,
 //4
``
],
// DAY 5
[
// 0
`END`
]
]