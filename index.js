
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray
function map(array, iteratee){
    //create an empty array
    let newArray = [];
    //loop through the array, doing iteratee to it each time
    //after iteratee has been run on the array index, push that new value into the new array
    for (i = 0; i < array.length; i++) {
        newArray.push(iteratee(arr[i]));
    }
    return newArray;
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
function filter(array, iteratee){
    //create an empty array
    let newArray =[];
    //loop through array, returning true or fales on iteratee
    //If true add value to newArray, if false do nothing
    for (i = 0; i < array.length; i++){
        if (iteratee(array[i])) {
            newArray.push(array[i])
        }  
    }
    return newArray;
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
function find(theArray, fnc){
    //create a new empty array
    let newArray = [];
    //loop through the array, running a function to find a vlaue that meets the function
    for (i = 0; i < array.length; i++) {
        if (fnc(arr[i])){
            return(arr[i])
        }
    }
    return null;
}


//return the last item in theArray
function findLast(theArray){
    //returns the last value in the array
    return theArray[theArray.length -1];
}


//return the first element of the array
function head(theArray){
    //returns the first value in the array
    return theArray[0];
}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
function reverse(theArray){
    let newArray = [];
    //loop through the array, starting from the end moving to the beginning
    for (i = theArray.length - 1; i >= 0; i--) {
        //pushes the reversed values to the new array
        newArray.push(theArray[i]);
    }
    return newArray;
}  

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
function tail(theArray){
    //create a new array to put all of your outputs into
    let newArray = [];
    //loop through the array starting at index 1, skipping the first value
    for (i = 1; i < theArray.length; i++) {
        //push all the values after index 0 into the new array
        newArray.push(theArray[i]);
    }
    return newArray;
}

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
const sort = (theArray) => {
    let swap = false;
    while (!swap) {
        //only sort the array if swap = false
        swap = true;
        //change swap to true for the time being
        for (i = 0; i < theArray.length; i++) {
            if (theArray[i] > theArray[i+1]) {
                //house the original value in a new variable to call for i+1
                let iPersist = theArray[i];
                //make i equal i+1, which flips the lower value to the lower index
                theArray[i] = theArray[i+1];
                //gives our saved value to i+1, putting the higher value in the higher index
                theArray[i+1] = iPersist;
                //change swap back to false to keep the while loop running
                swap = false
            }
        }
    }
    return theArray;
}


exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;