//Section 1
//1. The difference between interpolation and concatentation is interpolation is
// used for combining small amounts of string, while concatenation string goes
// through a series of string thats interconnected. 
//2. Don't repeat yourself. It means keep your code as clean as possible.
// ex. less repetition

//Section 2

/*
oper = function() {
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
};

boop();
*/

//Section 3
//1. This code would cause a infinite loop, because a while loop loops through the 
//code as long as its condition is true.
//2. The code would not cause a infinite loop because after the code is used
// once, the runProgram condition would change to false

var letters = "A";
var i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

//Section 4
//A while loop will continue to run the code block as long as the condition stays
//true, while a for loop only runs without its own condition, (i = 0; i < elementname.length; i++)

for (var i = 0; i < 999; i++) {
  console.log(i); 

//The first part of the control statement is: what the value of i is before the code runs
//The second part of the control statement is: putting a limit on how many times the code can run
//The third part of the control statement is: inceases the value of i after every time the code is ran

for (i = 999; i > 0; i--) {
    console.log(i);


for (var i = 1; i < 10; i++) {
  console.log(i); 

  console.log(The value of i is:+ "i" +of 10);

  //Section 5
// mkdir homework_part_2
// cd homework_part_2
// mkdir death_star
// touch death_star/darth_vader.txt death_star/princess_leia.txt death_star/storm_trooper.txt
// mkdir galaxy_far_far_away
// cd galaxy_far_far_away/
// mkdir tatooine
// touch tatooine/luke.txt tatooine/ben_kenobi.txt
// cd tatooine/
// mkdir millenium_falcon
// touch millenium_falcon/han_solo.txt millenium_falcon/chewbaca.txt
// mv ben_kenobi.txt obi_wan.txt
// cd ../../death_star
// cp storm_trooper.txt ../galaxy_far_far_away/tatooine/
// cd ../galaxy_far_far_away/tatooine/
// mv luke.txt millenium_falcon/
// mv obi_wan.txt millenium_falcon/
// mv millenium_falcon ../
// mv millenium_falcon ../death_star/
// mv princess_leia.txt millenium_falcon/
// rm millenium_falcon/obi_wan.txt
// cd ../galaxy_far_far_away/
// mkdir yavin_4
//  cd ../death_star/mv millenium_falcon ../galaxy_far_far_away/yavin_4/
// mkdir x_wing
// mv princess_leia.txt ../
// mv luke.txt ../x_wing/
// mv x_wing ../
// mv millenium_falcon ../
// mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
// mv darth_vader.txt tie_fighter_1
// cp storm_trooper.txt tie_fighter_2
// cp storm_trooper.txt tie_fighter_3
// mv tie_fighter_1 ../galaxy_far_far_away
// mv tie_fighter_2 ../galaxy_far_far_away
// mv tie_fighter_3 ../galaxy_far_far_away
// rm -r tie_fighter_2
// rm -r tie_fighter_3
// cd x_wing/
// touch the_force.txt
// rm -r death_star/
// mv x_wing yavin_4/
// mv millenium_falcon/ yavin_4/












