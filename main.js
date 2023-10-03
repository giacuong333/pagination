/*
          Recipe: 
          Limit: 6 (The amount of products will be displayed in each page)
          Page 1: 0 - 5
          Page 2: 6 - 11
          Page 3: 12 - 17

          BeginGet = limit * (page - 1)
          EndGet = limit * page - 1
*/

let thisPage = 1
let limit = 6
let listItem = document.querySelectorAll(".list .item")

function loadItem() {
          let begin = limit * (thisPage - 1)
          let end = limit * thisPage - 1

          listItem.forEach((item, index) => {
                    if (index >= begin && index <= end) {
                              item.style.display = "block"
                    } else {
                              item.style.display = "none"
                    }
          })

          listPage()
}
loadItem()

function listPage() {
          let count = Math.ceil(listItem.length / limit)
          document.querySelector(".list-page").innerHTML = ""

          if (thisPage !== 1) {
                    let prev = document.createElement("li")
                    prev.innerText = "Prev"
                    prev.setAttribute("onclick", `changePage(${thisPage - 1})`)
                    document.querySelector(".list-page").appendChild(prev)
          }

          for (i = 1; i <= count; i++) {
                    let newPage = document.createElement("li")
                    newPage.innerText = i
                    if (i === thisPage) {
                              newPage.classList.add("active")
                    }
                    newPage.setAttribute("onclick", `changePage(${i})`)
                    document.querySelector(".list-page").appendChild(newPage)
          }

          if (thisPage !== count) {
                    let next = document.createElement("li")
                    next.innerText = "Next"
                    next.setAttribute("onclick", `changePage(${thisPage + 1})`)
                    document.querySelector(".list-page").appendChild(next)
          }
}

function changePage(i) {
          thisPage = i
          loadItem()
}