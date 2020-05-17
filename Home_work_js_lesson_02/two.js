var employeeSalaries = {'Ivan':2500,
		'Ruslan': 3000,
		'Vasyl': 3500};

var sum = 0;

for(var key in employeeSalaries){
	sum += employeeSalaries[key];
}

console.log('All salaries = ' + sum + ' $');