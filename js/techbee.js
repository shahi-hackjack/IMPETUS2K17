'use strict';
$(document).ready(function(){

var wings = new TimelineLite({ onComplete: wingLoop });
var wingSpeed = .05;
function wingLoop() {
wings.to('#Wing_right', wingSpeed, {
rotation: '30',
y: -20,
transformOrigin: '97% 97%'
}).to('#Wing_right', wingSpeed, {
rotation: '-30',
y: -15,
transformOrigin: '97% 97%',
delay: wingSpeed
});
wings.to('#Wing_left', wingSpeed, {
rotation: '-20',
y: -15,
transformOrigin: '50% 97%'
}).to('#Wing_left', wingSpeed, {
rotation: '20',
y: -20,
transformOrigin: '50% 97%',
delay: wingSpeed
});
}

var head = new TimelineLite({ onComplete: headLoop });
var headSpeed = 3;
function headLoop() {
head.to('#Head', headSpeed, {
rotation: '30',
y: -12,
transformOrigin: '30% 90%'
}).to('#Head', headSpeed, {
rotation: '-10',
y: 5,
transformOrigin: '30% 90%',
delay: headSpeed
}).to('#Head', headSpeed, {
rotation: '5',
y: -4,
transformOrigin: '30% 90%',
delay: headSpeed
}).to('#Head', headSpeed, {
rotation: '10',
y: 4,
transformOrigin: '30% 90%',
delay: headSpeed
});
}

var glasses = new TimelineLite({ onComplete: glassesLoop });
var glassesSpeed = 4;
function glassesLoop() {
glasses.to('#Glasses', glassesSpeed, {
rotation: '2',
y: -2,
transformOrigin: '0% 50%'
}).to('#Glasses', glassesSpeed, {
rotation: '-4',
y: 5,
transformOrigin: '0% 50%',
delay: glassesSpeed
});
}

var arms = new TimelineLite({ onComplete: armsLoop });
var armsSpeed = 1;
function armsLoop() {
arms.to('#Arm_right_front', armsSpeed, {
rotation: '22',
transformOrigin: '0% 100%'
}).to('#Arm_right_back_lower', armsSpeed, {
rotation: '-3',
transformOrigin: '50% 0%'
}).to('#Arm_right_front', armsSpeed, {
rotation: '-4',
transformOrigin: '0% 100%'
}).to('#Arm_left_back', armsSpeed / 2, {
rotation: '-33',
transformOrigin: '50% 0%',
delay: armsSpeed * -1
}).to('#Arm_right_back', armsSpeed, {
rotation: '4',
transformOrigin: '50% 0%'
}).to('#Arm_right_front_lower', armsSpeed / 2, {
rotation: '-4',
transformOrigin: '0% 100%'
}).to('#Arm_left_front', armsSpeed, {
rotation: '-4',
transformOrigin: '0% 0%',
delay: armsSpeed * -1
}).to('#Arm_right_front_lower', armsSpeed, {
rotation: '-24',
transformOrigin: '0% 100%'
}).to('#Arm_left_front', armsSpeed, {
rotation: '-24',
transformOrigin: '0% 0%'
}).to('#Arm_left_back', armsSpeed, {
rotation: '3',
transformOrigin: '50% 0%',
delay: armsSpeed * -1
}).to('#Arm_right_back', armsSpeed, {
rotation: '-24',
transformOrigin: '50% 0%'
}).to('#Arm_right_back_lower', armsSpeed / 2, {
rotation: '-34',
transformOrigin: '50% 0%',
delay: armsSpeed * -1
});
}

var legs = new TimelineLite({ onComplete: legsLoop });
var legsSpeed = 1;
function legsLoop() {
legs.to('#Leg_right', legsSpeed, {
rotation: '22',
transformOrigin: '50% 0%'
}).to('#Leg_right', legsSpeed, {
rotation: '-3',
transformOrigin: '50% 0%'
}).to('#Leg_left', legsSpeed, {
rotation: '18',
transformOrigin: '50% 0%',
delay: legsSpeed / -2 * 3
}).to('#Leg_left', legsSpeed, {
rotation: '-3',
transformOrigin: '50% 0%',
delay: legsSpeed / -2
});
}

var body = new TimelineLite({ onComplete: bodyLoop });
var bodySpeed = .4;
function bodyLoop() {
body.to('#Body_lower', bodySpeed, {
rotation: '-2',
transformOrigin: '90% 30%'
}).to('#Body_upper', bodySpeed / 2, {
rotation: '-6',
transformOrigin: '40% 70%'
}).to('#Body_lower', bodySpeed, {
rotation: '4',
transformOrigin: '90% 30%'
}).to('#Body_upper', bodySpeed, {
rotation: '-1',
transformOrigin: '40% 70%'
});
}

var eyes = new TimelineLite({ onComplete: eyeLoop });
var eyeSpeed = .4;
function eyeLoop() {
eyes.to('#Eye_right_pupil', eyeSpeed, {
y: '+=5',
transformOrigin: '90% 30%'
}).to('#Eye_left_pupil', eyeSpeed / 2, {
y: '+=5',
transformOrigin: '40% 70%'
}).to('#Eye_right_pupil', eyeSpeed, {
y: '-=5',
transformOrigin: '90% 30%'
}).to('#Eye_left_pupil', eyeSpeed, {
y: '-=5',
transformOrigin: '40% 70%'
});
}

var bug = new TimelineLite({ onComplete: bugLoop });
var bugSpeed_intro = 2;
var bugSpeed_loop = 5;
function bugLoop() {
bug.to('#the_technichian', bugSpeed_intro, {
rotation: -10,
x: '100',
y: '0',
transformOrigin: '50% 50%'
}).to('#the_technichian', bugSpeed_loop, {
rotation: 0,
x: '0',
y: '50',
transformOrigin: '50% 50%'
});
}
});
