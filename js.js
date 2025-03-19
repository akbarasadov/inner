let items = document.querySelectorAll("#item")

let students = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"]
let colors = ["red", "green", "blue", "black", "yellow", "red"]

items.forEach((item, index) => {
    let a = Math.floor( Math.random() * students.length)
    item.innerHTML = `<p style="color: ${colors[a]} ">${students[a]}</p>`
})