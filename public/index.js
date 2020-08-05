const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get('path')
const preview = document.getElementById('imagePreview')
const screenName = document.getElementById('screenName')
const literalScreenName = myParam ? myParam.split('/')[myParam.split('/').length - 1] : null
const goTo = document.getElementById('goto')
const paths = {
  '4.6.0': {
    start: 'menuTitle',
    Back: 'host'
  },
  menuTitle: {
    'Game Start': 'gameStart',
    'Fitness Mode': 'fitnessMode',
    Options: 'options',
    'Edit/Share': 'editShare',
    'Select Game': 'selectGame',
    Jukebox: 'jukebox',
    Back: '4.6.0'
  },
  gameStart: {
    Easy: 'easy',
    Extended: 'extended',
    Normal: 'normal',
    Oni: 'oni',
    'Select Profile': 'selectProfile',
    Back: 'menuTitle'
  },
  selectProfile: {
    Back: 'gameStart'
  },
  easy: {
    'Sort Menu': 'sortMenu',
    'Sort Mode Menu': 'sortModeMenu',
    Springtime: 'springtime',
    Back: 'gameStart'
  },
  springtime: {
    'Gameplay Intro': 'gameplayIntro',
    'Player Options': 'playerOptions',
    Back: ''
  },
  playerOptions: {
    'Additional Options': 'additionalOptions',
    Effects: 'effects',
    'Song Options': 'songOptions',
    Back: './'
  },
  additionalOptions: {
    Back: 'playerOptions'
  },
  effects: {
    Back: 'playerOptions'
  },
  extended: {
    'Sort Menu': 'sortMenu',
    'Sort Mode Menu': 'sortModeMenu',
    'Stepmania 5 Random': 'stepmania5Random',
    Back: './'
  },
  stepmania5Random: {
    'Gameplay Intro': 'gameplayIntro',
    'Player Options': 'playerOptions',
    Back: 'playerOptions'
  },
  sortMenu: {
    Back: './'
  },
  sortModeMenu: {
    Back: './'
  },
  normal: {
    'Sort Menu': 'sortMenu',
    'Sort Mode Menu': 'sortModeMenu',
    Springtime: 'springtime',
    Back: 'playerOptions'
  },
  oni: {
    'Challenging Random 5': 'challengingRandom5',
    Back: 'playerOptions'
  },
  challengingRandom5: {
    Gameplay: 'gameplay',
    Back: 'playerOptions'
  },
  songOptions: {
    Back: 'playerOptions'
  },
  gameplayIntro: {
    Gameplay: 'gameplay',
    Back: './'
  },
  gameplay: {
    Pause: 'pause',
    Back: 'gameplayIntro'
  },
  pause: {
    Evaluation: 'evaluation',
    Back: 'gameplay'
  },
  evaluation: {
    Back: 'pause'
  },
  fitnessMode: {
    'Fitness Setup': 'fitnessSetup',
    Back: 'menuTitle'
  },
  fitnessSetup: {
    'Select Mode': 'selectMode',
    Back: 'fitnessMode'
  },
  selectMode: {
    Easy: 'easy',
    Extended: 'extended',
    Normal: 'normal',
    Oni: 'oni',
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
    'Edit Existing': 'editExisting', 
    Back: 'editShare'
  },
  practiceSongsSteps: {
    'Enter Menu': 'enterMenuPractice',
    Back: 'editShare'
  },
  enterMenu: {
    'Edit Steps Information': 'editStepsInformation',
    Options: 'optionsStepsEdit',
    Back: './'
  },
  enterMenuPractice: {
    'Edit Steps Information': 'editStepsInformation',
    Options: 'optionsStepsEdit',
    Back: './'
  },
  editExisting: {
    'Enter Menu': 'enterMenuSongsSteps',
    'Esc Menu': 'escMenuSongsSteps',
    Back: './'
  },
  enterMenuSongsSteps: {
    'Modify Attack at Current Beat': 'modifyAttackAtCurrentBeat',
    'Modify Keysounds at Current Beat': 'modifyKeysoundsAtCurrentBeat',
    Back: './'
  },
  modifyAttackAtCurrentBeat: {
    'Add Attack': 'addAttack',
    'Beat Attack': 'beatAttack',
    Back: './'
  },
  modifyKeysoundsAtCurrentBeat: {
    'Track 1': 'track1',
    Back: './'
  },
  track1: {
    Back: './'
  },
  addAttack: {
    Back: './'
  },
  beatAttack: {
    Back: './'
  },
  escMenuSongsSteps: {
    'Edit Song Info': 'editSongInfo',
    'Edit Steps Information': 'editStepsInformationSongsSteps',
    'Edit Timing Data': 'editTimingData',
    Options: 'optionsStepsEdit',
    'View Steps Data': 'viewStepsData',
    Back: './'
  },
  editSongInfo: {
    Artist: 'artist',
    'Artist Transliteration': 'artistTransliteration',
    Credit: 'credit',
    Genre: 'genre',
    'Last Second Hint': 'lastSecondHint',
    'Main Title': 'mainTitle',
    'Main Title Transliteration': 'mainTitleTransliteration',
    'Max Specified BPM': 'maxSpecifiedBPM',
    'Min Specified BPM': 'minSpecifiedBPM',
    Origin: 'origin',
    Preview: 'preview',
    'Preview Length': 'previewLength',
    'Preview Start': 'previewStart',
    SubTitle: 'subTitle',
    'SubTitle Transliteration': 'subTitleTransliteration',
    Back: './'
  },
  artist: {
    Back: './'
  },
  artistTransliteration: {
    Back: './'
  },
  credit: {
    Back: './'
  },
  genre: {
    Back: './'
  },
  lastSecondHint: {
    Back: './'
  },
  mainTitle: {
    Back: './'
  },
  mainTitleTransliteration: {
    Back: './'
  },
  maxSpecifiedBPM: {
    Back: './'
  },
  minSpecifiedBPM: {
    Back: './'
  },
  origin: {
    Back: './'
  },
  preview: {
    Back: './'
  },
  previewLength: {
    Back: './'
  },
  pewviewStart: {
    Back: './'
  },
  subTitle: {
    Back: './'
  },
  subTitleTransliteration: {
    Back: './'
  },
  editStepsInformationSongsSteps: {
    'Chart Name': 'chartName',
    'Chart Style': 'chartStyle',
    Description: 'description',
    'Max Specified BPM': 'maxSpecifiedBPM',
    Meter: 'meter',
    'Min Specified BPM': 'minSpecifiedBPM',
    'Music File': 'musicFile',
    'Step Author': 'stepAuthor',
    Back: 'Back'
  },
  chartName: {
    Back: './'
  },
  chartStyle: {
    Back: './'
  },
  description: {
    Back: './'
  },
  maxSpecifiedBPM: {
    Back: './'
  },
  minSpecifiedBPM: {
    Back: './'
  },
  musicFile: {
    Back: './'
  },
  stepAuthor: {
    Back: './'
  },
  editTimingData: {
    'Beat 0 Offset': 'beat0Offset',
    'Clear Timing In Region': 'clearTimingInRegion',
    'Copy Timing In Region': 'copyTimingInRegion',
    'Edit BPM Change': 'editBPMChange',
    'Edit Combo': 'editCombo',
    'Edit Delay': 'editDelay',
    'Edit Fake Segment': 'editFakeSegment',
    'Edit Label': 'editLabel',
    'Edit Scrolling Factor': 'editScrollingFactor',
    'Edit Speed Length': 'editSpeedLength',
    'Edit Speed Percent': 'editSpeedPercent',
    'Edit Stop': 'editStop',
    'Edit Tickcount': 'editTickcount',
    'Edit Warp': 'editWarp',
    Back: './'
  },
  beat0Offset: {
    Back: './'
  },
  clearTimingInRegion: {
    Back: './'
  },
  copyTimingInRegion: {
    Back: './'
  },
  editBPMChange: {
    Back: './'
  },
  editCombo: {
    Back: './'
  },
  editDelay: {
    Back: './'
  },
  editFakeSegment: {
    Back: './'
  },
  editLabel: {
    Back: './'
  },
  editScrollingFactor: {
    Back: './'
  },
  editSpeedLength: {
    Back: './'
  },
  editSpeedPercent: {
    Back: './'
  },
  editStop: {
    Back: './'
  },
  editTickcount: {
    Back: './'
  },
  editWarp: {
    Back: './'
  },
  optionsStepsEdit: {
    Back: './'
  },
  viewStepsData: {
    Back: './'
  },
  editStepsInformation: {
    Back: 'enterMenu'
  },
  editCoursesMods: {
    'Edit Existing': 'editExisting',
    Back: 'editShare'
  },
  editExistingCourses: {
    'Enter Menu': 'enterMenuCourses',
    Back: 'editCoursesMods'
  },
  enterMenuCourses: {
    'Edit Steps Information': 'editStepsInformationCourses',
    'Options': 'optionsCourses',
    Back: './'
  },
  editStepsInformationCourses: {
    Back: './'
  },
  optionsCourses: {
    Back: './'
  },
  selectGame: {
    Back: 'menuTitle'
  },
  jukebox: {
    Back: 'menuTitle'
  }
}
const availableThemes = {
  soundwaves: {
    versions: ['4.6.0']
  }
}
const updateTextAndPreview = () => {
  // localhost:52332/images/soundwaves/4.6.0
  preview.src = `${window.location.origin}/images/${myParam}/default.jpg`
  screenName.innerText = `Now looking at ${literalScreenName}`
}

if (literalScreenName && Object.keys(paths).includes(literalScreenName)) {
  const keys = Object.keys(paths[literalScreenName])
  const values = Object.values(paths[literalScreenName])

  for (let i = 0; i < keys.length; i++) {
    const screenNameAnchor = document.createElement('a')
    const goToScreenName = document.createElement('li')
    goToScreenName.appendChild(document.createTextNode(keys[i]))
    screenNameAnchor.appendChild(goToScreenName)

    if (keys[i] === 'Back') {
      if (values[i] === 'host') {
        screenNameAnchor.href = `${window.location.origin}`
      } else {
        screenNameAnchor.href = `${window.location.origin}?path=${myParam.split('/').slice(0, myParam.split('/').length - 1).join('/')}`
      }
    } else {
      screenNameAnchor.href = `${window.location.origin}?path=${myParam}/${values[i]}`
    }
    goTo.appendChild(screenNameAnchor)
  }

  updateTextAndPreview()
}

if (!literalScreenName) {
  const themes = Object.keys(availableThemes)
  const themeName = document.createElement('li')
  const themeNameAnchor = document.createElement('a')
  const versionsHolder = document.createElement('ul')
  for (let i = 0; i < themes.length; i++) {
    const version = document.createElement('li')
    const currentTheme = availableThemes[([themes][i])]
    themeName.appendChild(document.createTextNode(themes[i]))
    for (let o = 0; o < currentTheme.versions.length; o++) {
      version.appendChild(document.createTextNode(currentTheme.versions[o]))
      themeNameAnchor.appendChild(version)
      themeNameAnchor.href = `${window.location.origin}?path=${themes[o]}/${currentTheme.versions[o]}`
      versionsHolder.appendChild(themeNameAnchor)
      themeName.appendChild(versionsHolder)
    }
    goTo.appendChild(themeName)
  }
}
console.log(urlParams)
