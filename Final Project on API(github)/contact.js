contain = document.querySelector(".contains")

let arr = []

const get = async()=>{

   await fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
        arr = data
        
        // const UserDetails = JSON.parse(arr)

        let Rowdiv = document.querySelector(".first")

        Rowdiv.classList.add("row")

                    let displayUser =""

        

                    arr.forEach(books => {
                displayUser += `
                <br><br><br>
                <div class="col">
                        <div class="card mb-4" style=" border-radius: 10px;
                        width: 18rem;background-color:rgb(45, 51, 56); color:white; margin-left:2%; border: 0.5px solid orange">
                        <div class="card-body">
                        <h5 class="card-title">id: ${books.id}</h5>
                        <br>
                        <img class="img-fluid" src=${books.avatar_url} alt="" style: "border-radius: 10px;" height="95%" width="97%">
                        <br>
                        <hr>
                        <br>
                        <h5 class="card-title">User Name: ${books.login}</h5>
                        <br>
                        <a href="${books.html_url}" class="btn btn-primary">See More</a>
                        </div>
                    </div>
                </div>
                
                `
                Rowdiv.innerHTML= displayUser

                contain.append(Rowdiv) 
            });


    })

    console.log(arr)
    
}

get()

contain = document.querySelector(".contains")

// function displayUsers(){
//     const xhr = new XMLHttpRequest()

//     xhr.open("GET", "purchases.json", true)

//     xhr.onload = function(){
//         if(this.status === 200){
            
//             const UserDetails = JSON.parse(this.responseText)

//             console.log(UserDetails)

//             let displayUser =""

//             let Rowdiv = document.querySelector(".first")

//             Rowdiv.className= "container row" 

            

//             UserDetails.forEach(books => {
//                 displayUser += `
//                 <br><br><br>
//                 <div class="col">
//                         <div style:"margin-left:2%;" class="card mb-4" style="    border-radius: 10px;
//                         width: 18rem;background-color:rgb(45, 51, 56); color:white;">
//                         <img class="img-fluid" src=${books.img} alt="" style: "border-radius: 10px;">
//                         <div class="card-body">
//                         <h5 class="card-title">${books.title}</h5>
//                         <h5 class="card-title">${books.price}</h5>
                        
//                         </div>
//                     </div>
//                 </div>
                
//                 `
//                 Rowdiv.innerHTML= displayUser

//                 contain.append(Rowdiv) 
//             });

//         }
//     }


//     xhr.send()
// }

// displayUsers()
