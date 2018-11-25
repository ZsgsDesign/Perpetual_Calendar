const {remote} = require('electron')
const {Menu,MenuItem} = remote

// const BrowserWindow = require('electron').remote.BrowserWindow


// const path = require('path')

// Add the listener
document.addEventListener('DOMContentLoaded', function () {

  let filesContext = document.querySelectorAll('.file_arq');
  
  filesContext.forEach(function(el){
    el.addEventListener('click', function (event) {
      event.preventDefault()
      menu.popup(remote.getCurrentWindow());
    })
  })
})
