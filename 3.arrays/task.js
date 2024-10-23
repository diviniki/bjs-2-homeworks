function compareArrays(arr1, arr2) {
  let answer = false;
    if ((arr1.length) === (arr2.length)) {
        for (let item in arr1) {
            //answer = arr1[item] === arr2[item]
            answer = item == arr2.indexOf(arr1[item]);
            if (answer == false) {
                break
            }
        }
    } else {
        answer;
    }
    return answer;
}

function getUsersNamesInAgeRange(users, gender) {
  let answer = 0;

	let filteredPeople = users.filter(users => users.gender === gender);
	//console.log(filteredPeople.length);  
	let ages = filteredPeople.map(filteredPeople => filteredPeople.age)
	//console.log(ages.length);  

	if (filteredPeople.length != 0, ages.length != 0) {
		function sum(thisarr) {
			return thisarr.reduce((accumulator, currentValue) => accumulator + currentValue)
		}
		answer = (sum(ages) / filteredPeople.length);
	} else {
		return answer;
	}
	return answer;
}
