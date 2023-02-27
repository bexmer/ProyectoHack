// import { createClient } from '@supabase/supabase-js'

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnZnpmYXRqYmxtb2djeHhmcmVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTg0MDksImV4cCI6MTk5Mjk3NDQwOX0.fA0-DHfmV6lijx3ok4JzOas-Y5l-EMERdPv5aBxZ2ws";

const url = "https://zgfzfatjblmogcxxfreq.supabase.co";

const database = supabase.createClient(url, key);

let save = document.querySelector("#save");
save.addEventListener("click", async (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let pass = document.querySelector("#age").value;
    save.innerText = "Saveing....";
    save.setAttribute("disabled", true);
    

    if (res) {
        alert("User Add Successfully")
        save.innerText = "Save"
        save.setAttribute("disabled", false);
        name = "";
        pass = "";
        getUser();
        getTotalCount();

    } else {
        alert("User Not Add Successfully")
        save.innerText = "Save"
        save.setAttribute("disabled", false);
    }
 })

const getUser = async () => {
    let tbody = document.getElementById("tbody");
    let loading = document.getElementById("loading");
    let tr = "";

    loading.innerText = "Loadding...."
    const res = await database.from("usuarios").select("*");

    console.log(res)
    
    if (res) {
        for (var i in res.data) {
            tr += `<tr>
         <td>${parseInt(i) + 1}</td>
         <td>${res.data[i].name}</td>
         <td>${res.data[i].pass}</td>
         <td><button class="btn btn-primary" data-bs-toggle="modal"
         onclick='editUser(${res.data[i].id})' data-bs-target="#editModel">Edit</button></td>
         <td><button onclick='deleteUser(${res.data[i].id})' class="btn btn-danger">Delete</button></td>
         </tr>`;
        }
        tbody.innerHTML = tr;
        loading.innerText = ""

    }

}

getUser();

const getTotalCount = async () => {
    let total = document.querySelector("#total");
    const res = await database.from("usuarios").select("*", { count: "exact" });
    total.innerText = res.data.length;
}

getTotalCount();

const editUser = async (id) => {


    const res = await database.from("usuarios").select("*").eq("id", id);
    if (res) {
        document.getElementById("id").value = res.data[0].id;
        document.getElementById("edit-name").value = res.data[0].name;
        document.getElementById("edit-age").value = res.data[0].age;
    }
}

const update = document.getElementById("update");

update.addEventListener("click", async () => {
    let id = document.getElementById("id").value;
    let name = document.getElementById("edit-name").value
    let pass = document.getElementById("edit-age").value;
    update.innerText = "Updateing...."
    update.setAttribute("disabled", true);
    const res = await database.from("usuarios").update({
        nombre:name, contra:pass
    }).eq("id", id)

    if (res) {
        alert("Student Update Successfully")
        update.innerText = "Update"
        update.setAttribute("disabled", false);
        name = "";
        pass = "";
        getUser();
        getTotalCount();

    } else {
        alert("Student Not Update Successfully")
        update.innerText = "Update"
        update.setAttribute("disabled", false);
    }
})


const deleteUser = async (id) => {
    const res = await database.from("usuarios").delete().eq("id", id)

    if (res) {
        alert("Delete successfully")
        getUser();
        getTotalCount();

    } else {
        alert("Delete successfully")
    }
}