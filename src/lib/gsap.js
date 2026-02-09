import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export { gsap, ScrollTrigger, SplitText };
