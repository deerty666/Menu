// الأقسام
const sections = [
{ id: "chicken", name: "قسم الدجاج" },
{ id: "meat", name: "قسم اللحم" },
{ id: "grill", name: "قسم المشويات" },
];


// الأصناف
const items = {
chicken: [
{ name: "نص حبة مظبي", price: 24, img: "/Menu/placeholder.png" },
{ name: "دجاج شواية", price: 18, img: "/Menu/placeholder.png" }
],
meat: [
{ name: "لحم مقلقل", price: 22, img: "/Menu/placeholder.png" }
],
grill: [
{ name: "كباب مشوي", price: 20, img: "/Menu/placeholder.png" }
]
};


// تحميل الأقسام
const secContainer = document.getElementById("sections");
secContainer.innerHTML = sections.map(s => `
<div class="sec-card" onclick="loadSection('${s.id}')">${s.name}</div>
`).join('');


// تحميل الأصناف
function loadSection(id) {
const list = document.getElementById("menuList");
list.innerHTML = items[id].map(i => `
<div class="item-card">
<img src="${i.img}">
<h3>${i.name}</h3>
<p>${i.price} ريال</p>
</div>
`).join('');
}


// سلة (مؤقتة)
document.getElementById("cartBtn").addEventListener("click", () => alert("السلة تعمل"));
