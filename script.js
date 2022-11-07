// gsap.to('#room',{duration:5,rotateY:360,repeat:-1,repeatDelay:2, ease:'none'});

gsap.timeline({defaults:{ease:'none'},repeat:-1,repeatDelay:.5})
.to('#room',{rotateY:0,duration:2})
.to('#room',{rotateY:90,duration:2},">.5")
.to('#room',{rotateY:180,duration:2},">.5")
.to('#room',{rotateY:270,duration:2},">.5")
.to('#room',{rotateY:360,duration:2},">.5")

// gsap.set('#room',{rotateY:180})

