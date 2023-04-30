let boton = document.getElementById("buttonMenu")
let shortcutMax = document.getElementById("shortcutMax")
let shortcutMin = document.getElementById("shortcutMin")
let buttonBar = document.getElementById("buttons-bar")
let mainGrid = document.getElementById("mainGrid")
let gridVideos = document.getElementById("gridVideos")


// Tamaño shorcuts
boton.addEventListener('click', function () {
    if (shortcutMax.classList.contains('ocultar'))        {
        shortcutMax.classList.remove ('ocultar')
        shortcutMin.classList.add('ocultar')
    }
    else {
        shortcutMax.classList.add('ocultar')
        shortcutMin.classList.remove ('ocultar')
    }
})

// Tamaño grid principal
boton.addEventListener('click', function () {
    if (mainGrid.classList.contains('main-grid'))        {
        mainGrid.classList.remove ('main-grid')
        mainGrid.classList.add('main-grid2')
    }
    else {
        mainGrid.classList.add('main-grid')
        mainGrid.classList.remove ('main-grid2')
    }
})

// Tamaño button bar
boton.addEventListener('click', function () {
    if (buttonBar.classList.contains('buttons-bar'))        {
        buttonBar.classList.remove ('buttons-bar')
        buttonBar.classList.add('buttons-bar2')
    }
    else {
        buttonBar.classList.add('buttons-bar')
        buttonBar.classList.remove ('buttons-bar2')
    }
})

// Tamaño grid de videos

boton.addEventListener('click', function () {
    if (gridVideos.classList.contains('gridVideos'))        {
        gridVideos.classList.remove ('gridVideos')
        gridVideos.classList.add('gridVideos2')
    }
    else {
        gridVideos.classList.add('gridVideos')
        gridVideos.classList.remove ('gridVideos2')
    }
})