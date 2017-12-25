let person = {
    name: "saso",
    lastName: "jovanoski",
    married: true,
    phones:[ "070123456", "071123456"]

};
let ulTag = document.getElementById("listaTel");

console.log("Name = " + person.name);

for(let i = 0; i < person.phones.length; i++) {
    let phoneItem = document.createElement("li");
    ulTag.appendChild(phoneItem);
    phoneItem.innerHTML = person.phones[i];
}
