// threee.js

function one() {
	function two() {
		function three() {
			console.log("3.");
		}
		console.log("2.");
		three();
	}
	console.log("1.");
	two();
}

one();