function showPage (page) {
console.log(page)
document.querySelectorAll(".page").forEach((pageElement) => {
    const pageId = pageElement.getAttribute("id")
    console.log(pageId, page)
    if (pageId === page) {      
        pageElement.style.display = "block"
    }else{
        pageElement.style.display = "none"
    }
})
}