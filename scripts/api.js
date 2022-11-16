// const seconds = 10;

// function getData() {
// 	console.log('Grabbing new userdata...');
	
// 	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data);
		
// 			let newArray = [];
            
//          data.forEach(item => {
//                 newArray.push(item["Soort drugs"])
//             })
                  
		
// 		const upper = newArray.map(element => {
// 			return element.charAt(0).toUpperCase() + element.slice(1);
// 		}).filter(element => {
//       return element !== "";
//     }).sort();
        
//       console.log(upper);
//     var options = [upper];
    
//     function makeUL(array) {
//     // Create the list element:
//     var list = document.createElement('ul');

//     for(var i = 0; i < array.length; i++) {
//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(array[i]));

//         // Add it to the list:
//         list.appendChild(item);
//     }

//     // Finally, return the constructed list:
//     return list;
// }

// document.getElementById('lijst').appendChild(makeUL(options[0]));
// 	})
// }


// setInterval(getData, seconds * 1000)

// getData();