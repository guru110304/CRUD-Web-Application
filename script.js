const students = [];
let editingIndex = -1;

function add() {
    let first = document.querySelector("#first").value.trim();
    let last = document.querySelector("#last").value.trim();
    let email = document.querySelector("#email").value.trim();
    let inputs = document.querySelectorAll("input");

    if (!first || !last || !email) {
        alert("Please fill the required fields");
        return;
    }

    const student = { first, last, email };

    if (editingIndex === -1) {
        students.push(student);
    } else {
        students[editingIndex] = student;
        editingIndex = -1;
        document.querySelector("button").innerText = "Add Student";
    }

    rander();
    inputs.forEach((input) => input.value = "");
}


function rander() {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    students.forEach((data, ind) => {
        tbody.innerHTML += `
        <tr>
       <td>${ind + 1}</td>
       <td>${data.first}</td>
       <td>${data.last}</td>
       <td>${data.email}</td>
       <td>
         <i class="ri-edit-2-line" onclick="editFunc(${ind});"></i>
        <i class="ri-delete-bin-6-line" onclick="deleteFunc(${ind});"></i>
       </td>
       </tr>
       `;
    });
}



function deleteFunc(i) {
    students.splice(i, 1);
    rander();
}



function editFunc(i) {
    let edit = students[i];
    document.querySelector("#first").value = edit.first;
    document.querySelector("#last").value = edit.last;
    document.querySelector("#email").value = edit.email;
    editingIndex = i;
    document.querySelector("button").innerText = "Update Student";
}