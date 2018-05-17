
//dice=Math.floor(Math.random() *6)+1;
//console.log(dice);

//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

//var x=document.querySelector('#score-0').textContent;
//console.log(x);


var dice,activePlayer,currentScore,holdedScore,gamePlaying;

gamePlaying=true;
holdedScore=[0,0];
currentScore=0;
activePlayer=0;

document.querySelector('.dice').style.display='none';

document.getElementById('current-0').textContent=0;
document.getElementById('score-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');




document.querySelector('.btn-roll').addEventListener('click',function()
{
    if(gamePlaying)
    {
    	dice=Math.floor(Math.random()*6)+1;

		document.querySelector('.dice').style.display= 'block';
	    document.querySelector('.dice').src= 'dice-'+dice+'.png';

	    if(dice!==1)
	    {
	    	currentScore= currentScore + dice;
	        document.querySelector('#current-'+activePlayer).textContent=currentScore;
	    }
	    else
	    {
	    	currentScore=0;
	    	document.getElementById('current-'+activePlayer).textContent=0;
	    	
	    	if(activePlayer===0)
	    		activePlayer=1;
	    	else
	    		activePlayer=0;

	    	document.querySelector('.player-0-panel').classList.toggle('active');
	    	document.querySelector('.player-1-panel').classList.toggle('active');
	    	document.querySelector('.dice').style.display= 'none';
	    }

    }
	
    
});



document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(gamePlaying)
    {
    	holdedScore[activePlayer]+=currentScore;
		document.getElementById('score-'+activePlayer).textContent=holdedScore[activePlayer];


	    if(holdedScore[activePlayer]>=20)
	    {
	    	document.querySelector('#name-'+activePlayer).textContent='winner!';
	        document.querySelector('.dice').style.display= 'none';
	        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
	        document.querySelector('.player-0-panel').classList.add('active');
	        document.querySelector('.player-1-panel').classList.add('active');

	        gamePlaying=false;
	    }

		currentScore=0;
		document.getElementById('current-'+activePlayer).textContent=0;

		if(activePlayer===0)
			activePlayer=1;
		else
			activePlayer=0;

		document.querySelector('.player-0-panel').classList.toggle('active');
	    document.querySelector('.player-1-panel').classList.toggle('active');
	    document.querySelector('.dice').style.display= 'none';
	}
});



document.querySelector('.btn-new').addEventListener('click',function()
{
	gamePlaying=true;
	holdedScore=[0,0];
	currentScore=0;
	activePlayer=0;


	document.querySelector('.dice').style.display='none';

	document.getElementById('current-0').textContent=0;
	document.getElementById('score-0').textContent=0;
	document.getElementById('current-1').textContent=0;
	document.getElementById('score-1').textContent=0;
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

});




