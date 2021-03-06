let empPayrollList;
window.addEvenListener('DOMContentLoaded',(event) =>{
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

// //Templete features 
// const createInnerHtml = () =>{
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
//                         "<th>Salary</th><th>Start Date</th><th>Actions</th>";

// const innerHtml = `'${headerHtml}
//     <tr>
//         <td><img class="profile" src="Asset/Profile pic/Ellipse -2.png" alt=""></td> 
//         <td>Narayan Mahadevan</td>
//         <td>Male</td>
//         <td><div class="dept-label">HR<</div><div class='dept-label'>Finance</div></td> 
//         <td>3000000</td>
//         <td>1 Nov 2020</td>
//         <td>
//         <img name="1" onclick="remove(this)" src="Asset/icons/delete-black-18dp.svg" alt="delete">
//         <img name="1" onclick="update(this)" src="Asset/icons/create-black-18dp.svg" alt="edit">
// </td>
// </tr>
// `;
//     document.querySelector('#table-display').innerHtml = innerHtml;
// }

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList')?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}


const createInnerHtml = () =>{
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(employeePayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollList of empPayrollList){
        innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td> 
        <td>"${empPayrollData._name}"</td>
        <td>"${empPayrollData._gender}"</td>
        <td>${getDeptHtml(empPayrollData._department)}</td> 
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)" 
            src="Asset/icons/delete-black-18dp.svg" alt="delete">
            <img name="${empPayrollData._id}" onclick="update(this)" 
            src="Asset/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>`; 
    }
    document.querySelector('#table-display').innerHtml = innerHtml;
}

const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);    
    if (!empPayrollData) return;
    const index = empPayrollList
        .map (empData => empData._id)
        .indexOf(empPayrollData._id);
    empPayrollList.splice (index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify (empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length; 
    createInnerHtml();
}