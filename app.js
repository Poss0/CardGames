(function()
{
	var app = angular.module('welcomeApp',[]);

	app.controller('cardDisplayCtrl',function()
	{
		this.cards = cards;

		this.distribution = function(){
			var playerCard = 0;
			var alphaCard = 0;
			var betaCard = 0;
			var gammaCard = 0;
			var latestCard = 0;
			var decide = 0;
			for(i=0;i<cards.length;i++){
				cards[i].owner = '';
			}
			while(playerCard < 6){
				decide = Math.floor((cards.length)*Math.random());
				if(cards[decide].owner == ''){
					cards[decide].owner = 'player';
					playerCard++;
				}
			}
			while(alphaCard < 6){
				decide = Math.floor((cards.length)*Math.random());
				if(cards[decide].owner == ''){
					cards[decide].owner = 'alpha';
					alphaCard++;
				}
			}
			while(betaCard < 6){
				decide = Math.floor((cards.length)*Math.random());
				if(cards[decide].owner == ''){
					cards[decide].owner = 'beta';
					betaCard++;
				}
			}
			while(gammaCard < 6){
				decide = Math.floor((cards.length)*Math.random());
				if(cards[decide].owner == ''){
					cards[decide].owner = 'gamma';
					gammaCard++;
				}
			}
			while(latestCard < 1){
				decide = Math.floor((cards.length)*Math.random());
				if(cards[decide].owner == ''){
					cards[decide].owner = 'latest';
					latestCard++;
				}
			}
		};

		this.getLatest = function(){
			for(i=0;i<cards.length;i++){
				if(cards[i].owner == 'latest'){
					cards[i].owner = 'player';
				}
			}
		};

		this.getFromStack = function(){
			var playerCard = 0;
			while(playerCard < 1){
				decide = Math.floor((cards.length)*Math.random());
				if(cards[decide].owner == ''){
					cards[decide].owner = 'player';
					playerCard++;
				}
			}
		}

		this.cardsInStack = function(){
			var stackCard = 0;
			for(i=0;i<cards.length;i++){
				if(cards[i].owner == ''){
					stackCard++;
				}
			}
			return stackCard;
		}
	});

	var cards =
	[
		{
		 name: 'As de coeur',
		 color: 'coeur',
		 value: 1,
		 owner: 'alpha',
		 img: 'img/asCoeur.png',
		},
		{
		 name: 'As de pique',
		 color: 'pique',
		 value: 1,
		 owner: 'beta',
		 img: 'img/asPique.png',
		},
		{
		 name: 'As de carreau',
		 color: 'carreau',
		 value: 1,
		 owner: 'beta',
		 img: 'img/asCarreau.png',
		},
		{
		 name: 'As de trefle',
		 color: 'trefle',
		 value: 1,
		 owner: 'gamma',
		 img: 'img/asTrefle.png',
		},
		{
		 name: '2 de coeur',
		 color: 'coeur',
		 value: 2,
		 owner: 'gamma',
		 img: 'img/2Coeur.png',
		},
		{
		 name: '2 de pique',
		 color: 'pique',
		 value: 2,
		 owner: 'gamma',
		 img: 'img/2Pique.png',
		},
		{
		 name: '2 de carreau',
		 color: 'carreau',
		 value: 2,
		 owner: 'gamma',
		 img: 'img/2Carreau.png',
		},
		{
		 name: '2 de trefle',
		 color: 'trefle',
		 value: 2,
		 owner: 'gamma',
		 img: 'img/2Trefle.png',
		},
		{
		 name: '3 de coeur',
		 color: 'coeur',
		 value: 3,
		 owner: 'gamma',
		 img: 'img/3Coeur.png',
		},
		{
		 name: '3 de pique',
		 color: 'pique',
		 value: 3,
		 owner: 'latest',
		 img: 'img/3Pique.png',
		},
		{
		 name: '3 de carreau',
		 color: 'carreau',
		 value: 3,
		 owner: 'beta',
		 img: 'img/3Carreau.png',
		},
		{
		 name: '3 de trefle',
		 color: 'trefle',
		 value: 3,
		 owner: 'beta',
		 img: 'img/3Trefle.png',
		},
		{
		 name: '4 de coeur',
		 color: 'coeur',
		 value: 4,
		 owner: '',
		 img: 'img/4Coeur.png',
		},
		{
		 name: '4 de pique',
		 color: 'pique',
		 value: 4,
		 owner: 'alpha',
		 img: 'img/4Pique.png',
		},
		{
		 name: '4 de carreau',
		 color: 'carreau',
		 value: 4,
		 owner: 'alpha',
		 img: 'img/4Carreau.png',
		},
		{
		 name: '4 de trefle',
		 color: 'trefle',
		 value: 4,
		 owner: 'alpha',
		 img: 'img/4Trefle.png',
		},
		{
		 name: '5 de coeur',
		 color: 'coeur',
		 value: 5,
		 owner: 'beta',
		 img: 'img/5Coeur.png',
		},
		{
		 name: '5 de pique',
		 color: 'pique',
		 value: 5,
		 owner: 'player',
		 img: 'img/5Pique.png',
		},
		{
		 name: '5 de carreau',
		 color: 'carreau',
		 value: 5,
		 owner: 'alpha',
		 img: 'img/5Carreau.png',
		},
		{
		 name: '5 de trefle',
		 color: 'trefle',
		 value: 5,
		 owner: '',
		 img: 'img/5Trefle.png',
		},
		{
		 name: '6 de coeur',
		 color: 'coeur',
		 value: 6,
		 owner: '',
		 img: 'img/6Coeur.png',
		},
		{
		 name: '6 de pique',
		 color: 'pique',
		 value: 6,
		 owner: '',
		 img: 'img/6Pique.png',
		},
		{
		 name: '6 de carreau',
		 color: 'carreau',
		 value: 6,
		 owner: 'beta',
		 img: 'img/6Carreau.png',
		},
		{
		 name: '6 de trefle',
		 color: 'trefle',
		 value: 6,
		 owner: 'player',
		 img: 'img/6Trefle.png',
		},
		{
		 name: '7 de coeur',
		 color: 'coeur',
		 value: 7,
		 owner: '',
		 img: 'img/7Coeur.png',
		},
		{
		 name: '7 de pique',
		 color: 'pique',
		 value: 7,
		 owner: 'player',
		 img: 'img/7Pique.png',
		},
		{
		 name: '7 de carreau',
		 color: 'carreau',
		 value: 7,
		 owner: 'player',
		 img: 'img/7Carreau.png',
		},
		{
		 name: '7 de trefle',
		 color: 'trefle',
		 value: 7,
		 owner: '',
		 img: 'img/7Trefle.png',
		},
		{
		 name: '8 de coeur',
		 color: 'coeur',
		 value: 8,
		 owner: 'player',
		 img: 'img/8Coeur.png',
		},
		{
		 name: '8 de pique',
		 color: 'pique',
		 value: 8,
		 owner: '',
		 img: 'img/8Pique.png',
		},
		{
		 name: '8 de carreau',
		 color: 'carreau',
		 value: 8,
		 owner: '',
		 img: 'img/8Carreau.png',
		},
		{
		 name: '8 de trefle',
		 color: 'trefle',
		 value: 8,
		 owner: '',
		 img: 'img/8Trefle.png',
		},
		{
		 name: '9 de coeur',
		 color: 'coeur',
		 value: 9,
		 owner: '',
		 img: 'img/9Coeur.png',
		},
		{
		 name: '9 de pique',
		 color: 'pique',
		 value: 9,
		 owner: '',
		 img: 'img/9Pique.png',
		},
		{
		 name: '9 de carreau',
		 color: 'carreau',
		 value: 9,
		 owner: '',
		 img: 'img/9Carreau.png',
		},
		{
		 name: '9 de trefle',
		 color: 'trefle',
		 value: 9,
		 owner: '',
		 img: 'img/9Trefle.png',
		},
		{
		 name: '10 de coeur',
		 color: 'coeur',
		 value: 10,
		 owner: '',
		 img: 'img/10Coeur.png',
		},
		{
		 name: '10 de pique',
		 color: 'pique',
		 value: 10,
		 owner: '',
		 img: 'img/10Pique.png',
		},
		{
		 name: '10 de carreau',
		 color: 'carreau',
		 value: 10,
		 owner: '',
		 img: 'img/10Carreau.png',
		},
		{
		 name: '10 de trefle',
		 color: 'trefle',
		 value: 10,
		 owner: '',
		 img: 'img/10Trefle.png',
		},
		{
		 name: 'Valet de coeur',
		 color: 'coeur',
		 value: 11,
		 owner: '',
		 img: 'img/valetCoeur.png',
		},
		{
		 name: 'Valet de pique',
		 color: 'pique',
		 value: 11,
		 owner: '',
		 img: 'img/valetPique.png',
		},
		{
		 name: 'Valet de carreau',
		 color: 'carreau',
		 value: 11,
		 owner: '',
		 img: 'img/valetCarreau.png',
		},
		{
		 name: 'Valet de trefle',
		 color: 'trefle',
		 value: 11,
		 owner: '',
		 img: 'img/valetTrefle.png',
		},
		{
		 name: 'Dame de coeur',
		 color: 'coeur',
		 value: 12,
		 owner: '',
		 img: 'img/dameCoeur.png',
		},
		{
		 name: 'Dame de pique',
		 color: 'pique',
		 value: 12,
		 owner: '',
		 img: 'img/damePique.png',
		},
		{
		 name: 'Dame de carreau',
		 color: 'carreau',
		 value: 12,
		 owner: '',
		 img: 'img/dameCarreau.png',
		},
		{
		 name: 'Dame de trefle',
		 color: 'trefle',
		 value: 12,
		 owner: '',
		 img: 'img/dameTrefle.png',
		},
		{
		 name: 'Roi de coeur',
		 color: 'coeur',
		 value: 13,
		 owner: '',
		 img: 'img/roiCoeur.png',
		},
		{
		 name: 'Roi de pique',
		 color: 'pique',
		 value: 13,
		 owner: 'player',
		 img: 'img/roiPique.png',
		},
		{
		 name: 'Roi de carreau',
		 color: 'carreau',
		 value: 13,
		 owner: '',
		 img: 'img/roiCarreau.png',
		},
		{
		 name: 'Roi de trefle',
		 color: 'trefle',
		 value: 13,
		 owner: '',
		 img: 'img/roiTrefle.png',
		}
	];
})();
