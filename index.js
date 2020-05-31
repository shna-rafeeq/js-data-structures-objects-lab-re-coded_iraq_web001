// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(obj,key,value){
    return Object.assign({}, obj, { [key]: value });
}
updateDriverWithKeyAndValue(driver, 'name','Sam');

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  return Object.assign(obj, { [key]: value });
}
destructivelyUpdateDriverWithKeyAndValue(driver,'name','Sam');

 function deleteFromDriverByKey(obj,key){
   let newObj =Object.assign({}, obj, { key });
   delete newObj[key];
   return newObj;
 }
 deleteFromDriverByKey(driver, 'name');
 
 
  function destructivelyDeleteFromDriverByKey(obj,key){
    
   delete obj[key];
    return obj;
  }
  destructivelyDeleteFromDriverByKey(driver,'name');
  