// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(){
    var newname = prompt('Which name would you like to add')
    roster.push(newname)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove(){
    var remname = prompt('Which name would you like to remove')
    var pos = roster.indexOf(remname)
    roster.splice(pos, 1)
    }

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(){
    console.log(roster)
}


// Start by asking if they want to use the web app
var use = prompt("Do you want to use the web app? Enter y or n")
if(use !='y'){
    alert("Quitting app")
}

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while(use == 'y'){
    var app = prompt("Which app would you like to use (1:add, 2:remove, 3:display, 4:quit")
    if(app ==1){
        addNew()
    }
    else if(app ==2){
        remove()
    }
    else if(app ==3){
        display()
    }
    else if(app ==4){
        use = 'n'
        break
    }
    else{
        alert("Input not understood")
        continue
    }
}