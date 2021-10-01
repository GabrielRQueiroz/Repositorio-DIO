const students = [
	{
		name: 'João',
		grade: 5,
		class: '1B',
	},
   {
		name: 'Sofia',
		grade: 9,
		class: '1B',
	},
   {
		name: 'Paulo',
		grade: 6,
		class: '2C',
	},
   {
		name: 'Gabriel',
		grade: 4,
		class: '1C',
	},
];

function averageCalc(students, average) {
   let approved = [];

   for(let i = 0; i < students.length; i++) {

      const { grade, name } = students[i];

      if(students[i].grade >= average) {
         approved.push(name);
      }

   }

   return approved

}

console.log(averageCalc(students, 6))