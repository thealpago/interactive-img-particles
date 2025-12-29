import 'three';
import { TweenLite } from 'gsap/TweenMax';

import InteractiveControls from './controls/InteractiveControls';
import Particles from './particles/Particles';

const glslify = require('glslify');

export default class WebGLView {

	constructor(app) {
		this.app = app;

		this.samples = [
			'images/sample-01.jpg',
			'images/sample-02.jpg',
			'images/sample-03.jpg',
			'images/sample-04.jpg',
			'images/sample-05.jpg',
			'images/sample-06.jpg',
			'images/sample-07.jpg',
			'images/sample-08.jpg',
			'images/sample-09.jpg',
			'images/sample-10.jpg',
			'images/sample-11.jpg',
			'images/sample-12.jpg',
			'images/sample-13.jpg',
			'images/sample-14.jpg',


		];

		this.photoNames = [
			'M. K. Atatürk',
			'M. K. Atatürk 2',
			'Albert Einstein',
			'The Tenth Doctor',
			'Brad Pitt',
			'John Wick',
			'AI Girl',
			'AI Girl 2',
			'AI Girl 3',
			'Tatsumaki',
			'Shanks',
			'Shanks 2',
			'Luffy',
			'Luffy 2',
		];

		this.initThree();
		this.initParticles();
		this.initControls();
		this.initNav();

		const rnd = ~~(Math.random() * this.samples.length);
		this.goto(rnd);
	}

	initNav() {
		this.navContainer = document.getElementById('photo-nav');
		this.titleElement = document.getElementById('photo-title');
		this.prevBtn = document.getElementById('prev-btn');
		this.nextBtn = document.getElementById('next-btn');

		// Arrow Navigation
		if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.previous());
		if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

		// Keyboard Navigation
		window.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowLeft') this.previous();
			if (e.key === 'ArrowRight') this.next();
		});

		this.navDots = [];

		this.samples.forEach((sample, index) => {
			const wrapper = document.createElement('div');
			wrapper.className = 'nav-dot-wrapper';

			const dot = document.createElement('div');
			dot.className = 'nav-dot';

			const ring = document.createElement('div');
			ring.className = 'active-ring';

			wrapper.appendChild(dot);
			wrapper.appendChild(ring);

			wrapper.addEventListener('click', (e) => {
				e.stopPropagation(); // Prevent trigger click on renderer
				this.goto(index);
			});

			this.navContainer.appendChild(wrapper);
			this.navDots.push(wrapper);
		});
	}

	// ... (rest of code)

	previous() {
		if (this.currSample > 0) this.goto(this.currSample - 1);
		else this.goto(this.samples.length - 1);
	}

	next() {
		if (this.currSample < this.samples.length - 1) this.goto(this.currSample + 1);
		else this.goto(0);
	}

	updateTitle(index) {
		if (!this.titleElement) return;

		this.titleElement.classList.remove('visible');

		setTimeout(() => {
			this.titleElement.innerText = this.photoNames[index] || '';
			this.titleElement.classList.add('visible');
		}, 300);
	}

	updateNav(index) {
		this.navDots.forEach((dot, i) => {
			if (i === index) dot.classList.add('active');
			else dot.classList.remove('active');
		});

		this.updateTitle(index);
	}

	initThree() {
		// scene
		this.scene = new THREE.Scene();

		// camera
		this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
		this.camera.position.z = 300;

		// renderer
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

		// clock
		this.clock = new THREE.Clock(true);
	}

	initControls() {
		this.interactive = new InteractiveControls(this.camera, this.renderer.domElement);
	}

	initParticles() {
		this.particles = new Particles(this);
		this.scene.add(this.particles.container);
	}

	// ---------------------------------------------------------------------------------------------
	// PUBLIC
	// ---------------------------------------------------------------------------------------------

	update() {
		const delta = this.clock.getDelta();

		if (this.particles) this.particles.update(delta);
	}

	draw() {
		this.renderer.render(this.scene, this.camera);
	}


	goto(index) {
		// init next
		if (this.currSample == null) this.particles.init(this.samples[index]);
		// hide curr then init next
		else {
			this.particles.hide(true).then(() => {
				this.particles.init(this.samples[index]);
			});
		}

		this.currSample = index;
		if (this.app.gui) this.app.gui.loadSettingsForIndex(index);
		this.updateNav(index);
	}



	// ---------------------------------------------------------------------------------------------
	// EVENT HANDLERS
	// ---------------------------------------------------------------------------------------------

	resize() {
		if (!this.renderer) return;
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.fovHeight = 2 * Math.tan((this.camera.fov * Math.PI) / 180 / 2) * this.camera.position.z;

		this.renderer.setSize(window.innerWidth, window.innerHeight);

		if (this.interactive) this.interactive.resize();
		if (this.particles) this.particles.resize();
	}
}
