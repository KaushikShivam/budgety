var budgetController = (function() {
	//Some code
})();

var UIController = (function() {
	/// Some code
})();

var controller = (function(budgetCtrl, UICtrl) {
	var ctrlAddItem = function() {
		// 1. Get field input data
		// 2. Get item to budget controller
		// 3. Add item to user interface
		// 4. Calculate the budget
		// 5. Display budget on the UI
	};

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});
})(budgetController, UIController);
