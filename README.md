# Array-combinations

It seems silly to create a repo for this, but I was not able to find a simple solution for this on github :(

My function is tiny, readable and at least 8 times faster than yours :D


An example of how to use it:
![](https://i.imgur.com/m4YC0Ow.png)

```javascript
function combine(arr = []){
	let result = []
	function combine(sub = [], i = 0) {
		let c, v;
		while(v = arr[i++]){;
			result.push(c = [...sub, v])
			combine(c, i)
		};
	}; 
	combine();
	return result
};
```
The reason to keep it simple is ability to change it for any usecase without much effort:

If you need to limit results by array length:
```javascript
function combine(arr = [], limit){
	let result = []
	function combine(sub = [], i = 0) {
		let c, v;
		while(v = arr[i++]){;
			result.push(c = [...sub, v])
			c.length < limit && combine(c, i)
		};
	}; 
	combine();
	return result
};
```
![](https://i.imgur.com/462etkQ.png)

I wrote this to be able to get all possible classList combinations for DOM nodes
```javascript
function combine(arr = []){
	let result = []
	function combine(sub = [], i = 0) {
		let c, v;
		while(v = arr[i++]){
			c = [...sub, v]
			result.push('.'+c.join('.'))
			combine(c, i)
		};
	}; 
	combine();
	return result
};
```
![](https://i.imgur.com/V0DAqJ6.png)
