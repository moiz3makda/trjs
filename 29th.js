// splice method

// splice method is used for deleting and inserting the items at the same time or you can use it to only delete the item or to only insert the item
// splice method changes the original array when used
// splice method returns the item you deleted using splice method




const myarray = ['item1','item2','item3','item4'];
console.log(myarray);
// delete 
// syntax = splice(starting index,how many items to be deleted,)
// const deleteditem = myarray.splice(1,2);
// console.log(myarray);
// console.log("this is deleted item = ",deleteditem);

// insert
// syntax = splice(where to insert,delete count(or you can say how many items do you wnat to delete),what to insert)

// myarray.splice(1,0,'inserted item')
// console.log(myarray);

// insert and delete togather

const query = myarray.splice(1,2,'1st inserted item','2nd inserted item','3rd inserted item');
console.log(myarray)
console.log(query);