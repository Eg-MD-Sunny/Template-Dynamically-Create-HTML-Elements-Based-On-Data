//==========>>Start API Fetching
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userDataShow(data))
//==========>>End Api Fetching


//==========>>API Data Fatching function Create (Starting)
function userDataShow(allInfos){
    console.log(allInfos)

    let userDataList = '';
//==========>> DataBase All Data get Usung forEach Loop (Starting)   
    allInfos.forEach(singleInfo => {
        userDataList = userDataList + `<li>${singleInfo.name}</br>
                                           ${singleInfo.email}</br>
                                           ${singleInfo.phone}</br>
                                       </li>`
    });
    console.log(userDataList)
//==========>> DataBase All Data get Usung forEach Loop (Ending)       

//==========>>Any Div or ul data UI show (Starting)
    const ul = document.getElementById('data-list');
    ul.innerHTML = userDataList;
//==========>>Any Div or ul data UI show (Ending)   
}
//==========>>API Data Fatching function Create (Ending)
