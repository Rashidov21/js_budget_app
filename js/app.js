// localStorage - bu brauzerni local xotirasi va unga text ko'rinishida istalgan narsani 
// saqlasa bo'ladi
// localStorage : 
//     setItem - yangi narsa yozish uchun 
//     getItem - narsa olish uchun 
//     removeItem - o'chirish uchun 
//     clear - xotirani tozalash uchun

// console.log(typeof localStorage)
// localStorage.setItem("expends", JSON.stringify([]))
// localStorage.setItem("budget", 0)
// localStorage.removeItem("budget")
function budget() {
    let newValue = document.querySelector("#budgetValue").value
    let budget = parseInt(JSON.parse(localStorage.getItem("budget")))
    budget = parseInt(newValue)
    localStorage.setItem("budget", budget)
}


function addExpendToStorage() {
    let cost = document.querySelector("#expendValue").value
    let desc = document.querySelector("#expendDesc").value
    // console.log(cost, desc)
    let obj = JSON.parse(localStorage.getItem("expends"))
    obj.push({
        cost: cost,
        desc: desc
    })
    // JSON.stringify(obj) bu js ovyektni json yani oddiy ko'rinishiga olib o'tish
    localStorage.setItem("expends", JSON.stringify(obj))
    // console.log(localStorage.getItem("expends"))
}
// localStorage.clear() //- butunlay tozalash

function addIncomeToStorage() {

}



function mainApp() {
    // budget show 
    let bdg = document.querySelector("#budget")
    bdg.innerHTML = localStorage.getItem("budget")

    if (JSON.parse(localStorage.getItem("expends"))) {
        let expends = JSON.parse(localStorage.getItem("expends"))
        let list = document.querySelector("#expendList")
        for (let item of expends) {
            totalExpend += parseInt(item.cost)
            let li = document.createElement("li")
            li.className = "list-group-item d-flex justify-content-between align-items-start"
            li.innerHTML = `
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                ${item.desc}
            </div>
        
        </div>
        <span class="badge bg-primary badge-lg rounded-pill fs-5">$ ${item.cost}</span>
        `
            list.appendChild(li)
        }
    } else {
        let expends = localStorage.setItem("expends", JSON.stringify([]))
    }

    let totalExpend = 0
    document.querySelector("#totalExpend").innerText = totalExpend

}

window.addEventListener("DOMContentLoaded", () => {
    mainApp()
})