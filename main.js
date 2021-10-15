let callSql = document.getElementById('callSql')
let callJs = document.getElementById('callJs')
let callHtml = document.getElementById('callHtml')

callSql.addEventListener('click',function(){
    let calledContent = document.getElementById('calledContent')
    calledContent.src = './pages/js.html'
    let headTitle = document.getElementById('headTitle')
    headTitle.textContent = 'SQL'
})

callJs.addEventListener('click', function(){
    let calledContent = document.getElementById('calledContent')
    calledContent.src = './pages/comingsoon.html'
    let headTitle = document.getElementById('headTitle')
    headTitle.textContent = 'Çok Yakında'
})

callHtml.addEventListener('click', function(){
    let calledContent = document.getElementById('calledContent')
    calledContent.src = './pages/comingsoon.html'
    let headTitle = document.getElementById('headTitle')
    headTitle.textContent = 'Çok Yakında'
})
