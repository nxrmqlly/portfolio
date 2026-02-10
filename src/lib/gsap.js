import { browser } from '$app/environment';

let gsap;
let ScrollTrigger;
let SplitText;

if (browser) {
	const gsapModule = await import('gsap');
	const scrollTriggerModule = await import('gsap/dist/ScrollTrigger');
	const splitTextModule = await import('gsap/dist/SplitText');

	gsap = gsapModule.gsap || gsapModule.default;
	ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
	SplitText = splitTextModule.SplitText || splitTextModule.default;

	gsap.registerPlugin(ScrollTrigger, SplitText);
}

export { gsap, ScrollTrigger, SplitText };
