const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get('path')
const preview = document.getElementById('imagePreview')
const screenName = document.getElementById('screenName')
const literalScreenName = myParam.split('/')[myParam.split('/').length - 1]
const paths = {
  menuTitle: {
    'Game Start': 'gameStart',
    'Fitness Mode': 'fitnessMode',
    Options: 'options',
    'Edit/Share': 'editShare',
    'Select Game': 'selectGame',
    Jukebox: 'jukebox'
  },
  options: {
    'Display & Graphics': 'displayGraphics',
    'Input & Calibration': 'inputCalibration',
    Sound: 'sound',
    'User Experience': 'userExperience',
    'System Settings': 'systemSettings',
    Profiles: 'profiles',
    'Network Options': 'networkOptions',
    'Arcade Options': 'arcadeOptions',
    'Experimental Settings': 'experimentalSettings',
    'Reload Songs/Courses': 'reloadSongsCourses',
    'Outfox Credits': 'outfoxCredits'
  }
}

if (literalScreenName && Object.keys(paths).includes(literalScreenName)) {
  const goTo = document.getElementById('goto')
  const keys = Object.keys(paths[literalScreenName])
  const values = Object.values(paths[literalScreenName])

  for (let i = 0; i < keys.length; i++) {
    const screenNameAnchor = document.createElement('a')
    const goToScreenName = document.createElement('li')
    goToScreenName.appendChild(document.createTextNode(keys[i]))
    screenNameAnchor.appendChild(goToScreenName)
    screenNameAnchor.href = `${window.location.origin}/images/${myParam}/${values[i]}`
    goTo.appendChild(screenNameAnchor)
  }
}

preview.src = `${window.location.origin}/images/${myParam}/default.jpg`
screenName.innerText = `Now looking at ${literalScreenName}`
console.log(urlParams)
