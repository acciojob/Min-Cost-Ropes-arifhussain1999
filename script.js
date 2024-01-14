function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost=0;
  while (arr.length>1) {
  	arr.sort((a,b)=>a-b)
	  let e1=arr[0];
	  let e2=arr[1];
	  arr.splice(0,2);
	  arr.push(e1+e2);
	  totalCost+=e1+e2;
  }
	return totalCost;
}

module.exports=mincost;
