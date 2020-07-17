const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get('path')
const preview = document.getElementById('imagePreview')
const screenName = document.getElementById('screenName')
const literalScreenName = myParam.split('/')[myParam.split('/').length - 1]

preview.src = `${window.location.origin}/images/${myParam}/default.jpg`
screenName.innerText = `Now looking at ${literalScreenName}`
console.log(urlParams)
