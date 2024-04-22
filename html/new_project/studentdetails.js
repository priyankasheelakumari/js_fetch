fetch("studentdetails.json")
    .then(function(response){
    return response.json();
    })
    .then(function(details){
    let placeholder=document.querySelector("#data-output");
    let out="";
    for(let detail of details){
        console.log(detail);
        out+= `
        <tr>
            <td>${detail.id}</td>
            <td>${detail.name}</td>
            <td>${detail.place}</td>
            <td>${detail.class}</td>
        </tr>    
        `;
      
    }
    
    
    placeholder.innerHTML=out;
});
