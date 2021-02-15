// gsap.to(".front-animation", {duration: 2, x:300});
// gsap.staggerFrom(".front-animation", 1, {duration: 2, x:300, scale:0, transformOrigin:"center center"},-0.1)

gsap.from(".front-animation", {
	opacity: 0,
	x: 300,
	duration: 2
});

gsap.from(".cool-scroll", {
	scrollTrigger: {
		trigger: "#cover",
		toggleActions: "reverse restart reverse"
	},
	duration: 0.3,
	delay: 0.3,
	opacity: 0,
	y: 100
})
