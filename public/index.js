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
  gameStart: {
    Back: 'menuTitle'
  },
  fitnessMode: {
    Back: 'menuTitle'
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
    'Outfox Credits': 'outfoxCredits',
    Back: 'menuTitle'
  },
  displayGraphics: {
    'Display And Resolution': 'displayAndResolution',
    'Graphics Settings': 'graphicsSettings',
    'Overscan Correction': 'overscanCorrection',
    Back: 'options'
  },
  displayAndResolution: {
    Back: 'options'
  },
  graphicsSettings: {
    Back: 'options'
  },
  overscanCorrection: {
    Back: 'options'
  },
  inputCalibration: {
    'Config Key/Joy Mappings': 'configKeyJoyMappings',
    'Test Input': 'testInput',
    'Input Settings': 'inputSettings',
    'Calibrate Audio Sync': 'calibrateAudioSync',
    'Map Controller': 'mapController',
    Back: 'options'
  },
  configKeyJoyMappings: {
    Back: 'options'
  },
  testInput: {
    Back: 'options'
  },
  inputSettings: {
    Back: 'options'
  },
  calibrateAudioSync: {
    Back: 'options'
  },
  mapController: {
    Back: 'options'
  },
  sound: {
    Back: 'options'
  },
  userExperience: {
    'Appearance Options': 'appearanceOptions',
    'Interface Options': 'interfaceOptions',
    'Background Options': 'backgroundOptions',
    'Set BG Fit Mode': 'setBGFitMode',
    'Theme Options': 'themeOptions',
    Back: 'options'
  },
  appearanceOptions: {
    Back: 'options'
  },
  interfaceOptions: {
    Back: 'options'
  },
  backgroundOptions: {
    Back: 'options'
  },
  setBGFitMode: {
    Back: 'options'
  },
  themeOptions: {
    Back: 'options'
  },
  systemSettings: {
    'StepMania Settings': 'stepmaniaSettings',
    'Gameplay Settings': 'gameplaySettings',
    'Reload Songs/Courses': 'reloadSongsCourses',
    'Select Game': 'selectGame',
    'Timing Adjustment': 'timingAdjustment',
    Back: 'options'
  },
  stepmaniaSettings: {
    Back: 'systemSettings'
  },
  gameplaySettings: {
    Back: 'systemSettings'
  },
  timingAdjustment: {
    Back: 'systemSettings'
  },
  profiles: {
    Back: 'options'
  },
  networkOptions: {
    Back: 'options'
  },
  arcadeOptions: {
    Back: 'options'
  },
  experimentalSettings: {
    Back: 'options'
  },
  reloadSongsCourses: {
    Back: 'options'
  },
  outfoxCredits: {
    Back: 'options'
  },
  editShare: {
    'Edit Songs/Steps': 'editSongsSteps',
    'Practice Songs/Steps': 'practiceSongsSteps',
    'Edit Courses/Mods': 'editCoursesMods',
    Back: 'menuTitle'
  },
  editSongsSteps: {
    Back: 'editShare'
  },
  practiceSongsSteps: {
    Back: 'editShare'
  },
  editCoursesMods: {
    Back: 'editShare'
  },
  selectGame: {
    Back: 'menuTitle'
  },
  jukebox: {
    Back: 'menuTitle'
  }
}
const updateTextAndPreview = () => {
  // localhost:52332/images/soundwaves/4.6.0
  preview.src = `${window.location.origin}/images/${myParam}/default.jpg`
  screenName.innerText = `Now looking at ${literalScreenName}`
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

    if (keys[i] === 'Back') {
      console.log(`myParam.split(/) = ${myParam.split('/')}`)
      screenNameAnchor.href = `${window.location.origin}?path=${myParam.split('/').slice(0, myParam.split('/').length - 1).join('/')}`
    } else {
      screenNameAnchor.href = `${window.location.origin}?path=${myParam}/${values[i]}`
    }
    goTo.appendChild(screenNameAnchor)
  }
}

updateTextAndPreview()
console.log(urlParams)
