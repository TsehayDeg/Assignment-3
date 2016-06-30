//Q 1
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex"];
console.log(movies[1]);*/

//Q 2
/*var movies = [];
movies[0] = "Goal";
movies[1] = "Men of Honor";
movies[2] = "Peaceful Warrior";
movies[3] = "Jhon Q";
movies[4] = "My Odipus Complex";
console.log(movies[0]); */


//Q 3
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex"];
movies.splice(2, 0, "Acapulco Bay");
console.log(movies.length);*/
//Q 4
/*var movies = [];
movies[0] = "Goal";
movies[1] = "Men of Honor";
movies[2] = "Peaceful Warrior";
movies[3] = "Jhon Q";
movies[4] = "My Odipus Complex";
movies.shift();
console.log(movies);*/

//Q 5
/*var movies = [];
movies[0] = "Goal";
movies[1] = "Men of Honor";
movies[2] = "Peaceful Warrior";
movies[3] = "Jhon Q";
movies[4] = "My Odipus Complex";
movies[5] = "Acapulco Bay";
movies[6] = "Finding Nimo";
var text = "";
var i;
for (i = 0; i < movies.length; i++) {
    text = movies[i];
    console.log(text);
}*/



//Q 6
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex"];
var text = "";
var i;
for (i in movies) {
    text += movies[i] + ", ";
}
console.log(text);*/

//Q 7
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex"];
var myMovies = movies.sort();
var text = "";
var i;
for (i in myMovies) {
    text = myMovies[i];
    console.log(text);
    
}*/

//Q 8
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex"];
var leastFavMovies = ["Space 1999", "Acapulco Bay"];
var text = "";
var text1 = "";
for (i = 0; i < movies.length; i++) {
    text = text + movies[i] + "\n";
}
console.log("Movies I like:\n\n" + text); 

for (i = 0; i < leastFavMovies.length; i++) {
    text1 = text1 + leastFavMovies[i] + "\n";
}
console.log("Movies I regret watching:\n\n" + text1);*/

//Q 9
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex"];
var leastFavMovies = ["Space 1999", "Acapulco Bay"];
var myMovies = movies.concat(leastFavMovies);
console.log(myMovies.reverse());*/

//Q 10
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex"];
console.log(movies[4]);*/

//Q 11
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex"];
console.log(movies[0]);*/

//Q 12
/*var movies = ["Goal", "Men of Honor", "Peaceful Warrior", "Jhon Q", "My Odipus Complex", "Space 1999", "Acapulco Bay"];
movies.indexOf("Acapulco Bay");
movies.indexOf("Space 1999");
movies[5] = "In Pursuit of Happiness";
movies[6] = "Full House";
console.log(movies);*/

//Q 13
/*var employee1 = [];
employee1["id"] = 3625;
employee1["name"] = "Tony";
employee1["title"] = "Manager";
employee1["department"] = "Admin";
employee1["status"] = "Active";

var employee2 = [];
employee2["id"] = 6674;
employee2["name"] = "Adam";
employee2["title"] = "Secretary";
employee2["department"] = "SupportStaff";
employee2["status"] = "Active";

var employees = [employee1, employee2]

console.log(employees[1]["name"]);*/

//Q 14

/*var employee1 = [];
employee1["id"] = 3625;
employee1["name"] = "Tony";
employee1["title"] = "Manager";
employee1["department"] = "Admin";
employee1["status"] = "Active";

var employee2 = [];
employee2["id"] = 6674;
employee2["name"] = "Adam";
employee2["title"] = "Secretary";
employee2["department"] = "SupportStaff";
employee2["status"] = "Active";

var employees = [employee1, employee2];
var text = "";
for(i = 0; i < employees.length; i++) {
    text = employees[i];
    console.log(text["name"]);
}*/

//Q 15
/*var employee1 = [];
employee1["id"] = 3625;
employee1["name"] = "Tony";
employee1["title"] = "Manager";
employee1["department"] = "Admin";
employee1["status"] = true;

var employee2 = [];
employee2["id"] = 3655;
employee2["name"] = "Josh";
employee2["title"] = "V. Manager";
employee2["department"] = "Admin";
employee2["status"] = true;

var employee3 = [];
employee3["id"] = 6674;
employee3["name"] = "Adam";
employee3["title"] = "Secretary";
employee3["department"] = "SupportStaff";
employee3["status"] = false;

var employees = [employee1, employee2, employee3];

for(i = 0; i < employees.length; i++) {
    if (employees[i]["status"] === false) {
        continue;
    } else{
    
    console.log(employees[i]["name"]);
        }
}*/

//Q 16

/*var movies = [["Goal", 1], ["Men of Honor", 2], ["Peaceful Warrior", 3], ["Jhon Q", 4], ["My Odipus Complex", 5]];

var i;
for (i = 0; i < movies.length; i++) {
    for (var x = 0; x < movies[i].length; x++){
        movies[i].filter(function (titles) {
            if(typeof titles == "string"){
                console.log(titles);
            }
        }); 
    }
   
}*/


// --------Function--------

//Q 1

/*function displayMessage() {
    console.log("Don't mess with function.");
}
displayMessage();*/

//Q 2

/*function calculate(x, y) {
    console.log(x % y);
}
calculate(14, 3);*/

//Q 3?

var employees = ["Zak", "Stacy", "Moringa", "Jack", "Jenny"];


function showEmployee() {
 var text = ""; 
var i;  
for (i = 0; i < employees.length; i++) {
    text = text + employees[i] + "\n";
    
} 
 console.log("Employees:\n\n" + text);  
};

showEmployee(employees);
 

