function getArrayParams(...arr) {
	function toArr(...theArgs) {
		let arrArgs = [];
		for (let i = 0; i < theArgs.length; i++) {
			arrArgs.push(theArgs[i])
		}
		return arrArgs;
	}

	let arguments = (toArr(arr)[0]);

	// MIN
	function min(thisarr) {
		return Math.min(...thisarr)
	}

	// MAX
	function max(thisarr) {
		return Math.max(...thisarr)
	}

	//SUM
	function sum(thisarr) {
		return thisarr.reduce((accumulator, currentValue) => accumulator + currentValue)
	}

	// AVG
	function avg(thisarr) {
		return parseFloat((sum(thisarr) / (thisarr.length)).toFixed(2))
	}

	let answer = {
		min: min(arguments),
		max: max(arguments),
		//sum: sum(arguments),
		avg: avg(arguments)
	}
	return answer;
}

function summElementsWorker(...arr) {
	if (arr == 0) {
		return 0
	} else {
		// SUM
		function sum(thisarr) {
			return thisarr.reduce((accumulator, currentValue) => accumulator + currentValue)
		}

		return sum(arr);
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr == 0) {
		return 0
	} else {

		// MIN
		function min(thisarr) {
			return Math.min(...thisarr)
		}

		// MAX
		function max(thisarr) {
			return Math.max(...thisarr)
		}

		return max(arr) - min(arr)
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;

	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement = sumEvenElement + arr[i];
		} else {
			sumOddElement = sumOddElement + arr[i];
		}
	}

	return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
	if (arr == 0) {
		return 0
	} else {
		let sumEvenElement = 0;

		let countEvenElement = 0;

		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement = sumEvenElement + arr[i];
				countEvenElement++;
			} else {}
		}

		return sumEvenElement / countEvenElement
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = 0;
	let newArr = [];

	for (let i = 0; i < arrOfArr.length; i++) {
		let arrOfArr2 = func(...arrOfArr[i]);
		newArr.push(arrOfArr2);
		for (let i = 0; i < newArr.length; i++) {
			if (newArr[i] > maxWorkerResult) {
				maxWorkerResult = newArr[i];
			} else {
				maxWorkerResult;
			}
		}
	}
	return maxWorkerResult

}
