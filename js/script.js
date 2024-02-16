fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data =>{
  data.forEach(data => {
    const table = document.createElement("tr");
    table.innerHTML = `
        <tr>
        <th>${data.id}</th>
        <td style="font-size:14px;"><img src="https://fakestoreapi.com/${data.image}" " width="50">${data.title} "</td>
        <th>${data.category}</th>
        <th>${data.price}</th>
        <th>${data.rating.rate}</th>
        <th>${data.rating.count}</th>
        <th class="del">Delivered</th>
        <th><i class="fa-regular fa-pen-to-square"></i><i class='far fa-trash-alt' style='font-size:24px'></i></th>
        </tr>
        `;
    document.body.appendChild(table);
  });  
 
  })




