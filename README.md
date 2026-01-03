# Interactive Image Particles

An interactive web experience that creates stunning particle effects from photographs using Three.js and WebGL. This project demonstrates how to transform static images into dynamic, responsive particle systems that react to user interactions.

## Features

- 🖼️ **Photograph to Particle Conversion**: Transform any image into interactive particles
- 🎯 **Mouse & Touch Interaction**: Particles react dynamically to user input
- ⚡ **High Performance**: Optimized rendering using off-screen textures
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Customizable Settings**: Adjustable particle behavior through interactive controls

## Demo

Live demo available at: [Your Demo URL Here]

## Installation

```bash
# Clone the repository
git clone https://github.com/thealpago/interactive-img-particles.git

# Navigate to the project directory
cd interactive-img-particles

# Install dependencies
npm install
```

## Usage

```bash
# Start the development server
npm start

# Or use the dev command
npm run dev

# Build for production
npm run build
```

Open your browser and navigate to `http://localhost:8080` to see the demo.

## Technology Stack

- **[Three.js](https://www.npmjs.com/package/three)** - 3D graphics library for WebGL
- **[GSAP](https://www.npmjs.com/package/gsap)** - Professional animation library
- **[GLSLify](https://www.npmjs.com/package/glslify)** - Module system for GLSL shaders
- **[Stats.js](https://www.npmjs.com/package/stats.js)** - Performance monitoring
- **[Webpack 5](https://webpack.js.org/)** - Module bundler and build tool
- **[Browser Detect](https://www.npmjs.com/package/browser-detect)** - Browser feature detection
- **[DOMReady](https://www.npmjs.com/package/domready)** - DOM ready event handler

## Project Structure

```
interactive-particles-with-photographs/
├── src/                    # Source code
│   ├── scripts/           # JavaScript files
│   ├── styles/            # CSS files
│   └── shaders/           # GLSL shader files
├── config/                # Webpack configuration
├── css/                   # Compiled styles
├── scripts/               # Built JavaScript
├── static/                # Static assets
├── images/                # Image assets
└── dist/                  # Production build
```

## Configuration

The project includes an interactive control panel where you can adjust:

- **Touch Radius**: Control the interaction radius for mouse/touch events
- **Particle Randomness**: Adjust the random movement of particles
- **Performance Settings**: Optimize for different devices

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with modern web technologies and best practices
- Inspired by creative coding and interactive art communities

## Contact

- Project Link: [https://github.com/thealpago/interactive-img-particles](https://github.com/thealpago/interactive-img-particles)
- Issues: [GitHub Issues](https://github.com/thealpago/interactive-img-particles/issues)
