// 

const smallPizzaButton =  document.querySelector('.small_pizza_button');
const mediumPizzaButton =  document.querySelector('.medium_pizza_button');
const largePizzaButton =  document.querySelector('.large_pizza_button');
const totalCostText =  document.querySelector('.totalCost');
const moneyLeftText =  document.querySelector('.moneyLeft');
const totalBudgetInput =  document.querySelector('.totalBudget');
const errorElem =  document.querySelector('.error');

let totalBudget = 0;
let totalCost  = 0;

totalBudgetInput.addEventListener('blur', function(){
	totalBudget = Number(totalBudgetInput.value);
	moneyLeftText.innerHTML = totalBudget;
	errorElem.innerHTML = '';
});

function buyPizza(price) {

	if (totalBudget > 0) {
		totalCost += price;
		totalCostText.innerHTML = totalCost;
		moneyLeftText.innerHTML = totalBudget - totalCost;
	}
	else {
		errorElem.innerHTML = "Please enter a budget";
	}
}

smallPizzaButton.addEventListener('click', function(){
	buyPizza(49.00);
});

mediumPizzaButton.addEventListener('click', function(){
	buyPizza(89.00);
});

largePizzaButton.addEventListener('click', function(){
	buyPizza(129.00);
});

