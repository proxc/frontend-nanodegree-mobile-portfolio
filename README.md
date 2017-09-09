## Website Performance Optimization portfolio project

# Startup 
requires <a href="https://gulpjs.com/">gulp</a>
from the console run `npm install`
when complete run `gulp`
this should start browsersync 
navigate to <a href="http://localhost:3000/">http://localhost:3000/</a>

# index.html
removed unneccary google analytics
moved render blocking js and css to footer
compress images
load size approperate images

#pizza.html
updated images to fit the size better
compress images

## main.js
updated to save pizza items when they are first created make sure we dont have to keep finding them when we need to move them.

`changePizzaSizes()` removed unnessary calculations
`updatePositions()` use prestored pizza items instead of finding them for everytime we have to update positions
use transform to move them instead of position