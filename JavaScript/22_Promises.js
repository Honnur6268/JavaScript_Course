var promiseObj = new Promise(function (resolve, reject) {
  // resolve("Honnur")
  // reject("Error")

  resolve({
    status: true,
    data: "Promise Resolved",
  });

  // reject({
  //     status: false,
  //     data: "Promise Rejected"
  // })
});

// console.log(promiseObj)

promiseObj
  .then(function (success) {
    console.log("Promise Success", success);
  })
  .catch(function (error) {
    console.log("Promise Reject", error);
  });

// async and await
console.log("\n--------------- async await ---------------")
function createPromises() {
  return new Promise(function (resolve, reject) {
    resolve({
      status: true,
      data: [{ name: "Honnur" }, { name: "Bhavana" }],
    });
  });
}

async function getPromise(){
    try{
        var responseData = await createPromises()
        console.log(responseData)
    }
    catch(error){
        console.log(error)
    }
    
}

getPromise()


function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((success) => {
      return success.json();
    })
    .then((data) => {
      var ol = document.createElement("ol");
      ol.style.display = "grid";
      ol.style.justifyContent = "center";
      data.forEach((element) => {
        var li = document.createElement("li");
        li.innerText = element.name;
        ol.appendChild(li);
      });
      document.getElementById("body").appendChild(ol);
    })
    .catch((error) => {
      var h2 = document.createElement("h2");
      h2.innerText = "Something Went Wrong";
      h2.style.fontSize = "30px";
      h2.style.color = "red";
      document.getElementById("body").appendChild(ol);
    });
}
