document.addEventListener("DOMContentLoaded", function () {
  // Initialize particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#6c5ce7",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6c5ce7",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  // Theme switcher
  const themeSwitch = document.getElementById("theme-switch");
  const html = document.documentElement;

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    html.setAttribute("data-theme", "dark");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", function () {
    if (this.checked) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  });

  // Typing effect
  const typingText = document.querySelector(".typing-text");
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Vue",
    "Laravel",
    "Node.js",
    "Python",
  ];
  let techIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentTech = technologies[techIndex];

    if (isDeleting) {
      typingText.textContent = currentTech.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentTech.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentTech.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      techIndex = (techIndex + 1) % technologies.length;
      setTimeout(type, 500);
    } else {
      const speed = isDeleting ? 100 : 150;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 1000);

  // Technologies data
  const techData = [
    {
      id: "html5",
      name: "HTML5",
      icon: "fab fa-html5",
      color: "#e34f26",
      options: [
        {
          type: "checkbox",
          id: "html-semantic",
          label: "Semantic HTML5",
          checked: true,
        },
        {
          type: "checkbox",
          id: "html-meta",
          label: "Meta Tags",
          checked: true,
        },
        {
          type: "checkbox",
          id: "html-responsive",
          label: "Responsive Meta",
          checked: true,
        },
        {
          type: "checkbox",
          id: "html-favicon",
          label: "Favicon Link",
          checked: true,
        },
        {
          type: "select",
          id: "html-doctype",
          label: "Doctype",
          options: [
            { value: "html", label: "HTML5" },
            { value: "xhtml", label: "XHTML" },
          ],
          selected: "html",
        },
      ],
      boilerplate: function (options) {
        let html = `<!DOCTYPE html>\n`;
        html += `<html lang="en">\n`;
        html += `<head>\n`;
        html += `    <meta charset="UTF-8">\n`;

        if (options["html-responsive"]) {
          html += `    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
        }

        if (options["html-meta"]) {
          html += `    <meta name="description" content="Your website description">\n`;
          html += `    <meta name="keywords" content="keywords, for, your, website">\n`;
          html += `    <meta name="author" content="Your Name">\n`;
        }

        if (options["html-favicon"]) {
          html += `    <link rel="icon" href="favicon.ico" type="image/x-icon">\n`;
        }

        html += `    <title>Your Website Title</title>\n`;
        html += `</head>\n`;
        html += `<body>\n`;

        if (options["html-semantic"]) {
          html += `    <header>\n`;
          html += `        <nav>\n`;
          html += `            <!-- Navigation content -->\n`;
          html += `        </nav>\n`;
          html += `    </header>\n\n`;
          html += `    <main>\n`;
          html += `        <!-- Main content -->\n`;
          html += `    </main>\n\n`;
          html += `    <footer>\n`;
          html += `        <!-- Footer content -->\n`;
          html += `    </footer>\n`;
        } else {
          html += `    <!-- Your content here -->\n`;
        }

        html += `</body>\n`;
        html += `</html>`;

        return html;
      },
    },
    {
      id: "css3",
      name: "CSS3",
      icon: "fab fa-css3-alt",
      color: "#2965f1",
      options: [
        {
          type: "checkbox",
          id: "css-reset",
          label: "CSS Reset",
          checked: true,
        },
        {
          type: "checkbox",
          id: "css-variables",
          label: "CSS Variables",
          checked: true,
        },
        {
          type: "checkbox",
          id: "css-flexbox",
          label: "Flexbox Helpers",
          checked: true,
        },
        {
          type: "checkbox",
          id: "css-grid",
          label: "Grid Helpers",
          checked: true,
        },
        {
          type: "select",
          id: "css-preprocessor",
          label: "Preprocessor",
          options: [
            { value: "none", label: "None (Pure CSS)" },
            { value: "scss", label: "SCSS" },
            { value: "less", label: "LESS" },
          ],
          selected: "none",
        },
      ],
      boilerplate: function (options) {
        let css = `/* CSS Boilerplate */\n`;

        if (options["css-reset"]) {
          css += `\n/* Reset & Base Styles */\n`;
          css += `* {\n`;
          css += `    margin: 0;\n`;
          css += `    padding: 0;\n`;
          css += `    box-sizing: border-box;\n`;
          css += `}\n\n`;
          css += `body {\n`;
          css += `    font-family: 'Arial', sans-serif;\n`;
          css += `    line-height: 1.6;\n`;
          css += `    color: #333;\n`;
          css += `    background: #fff;\n`;
          css += `}\n`;
        }

        if (options["css-variables"]) {
          css += `\n/* CSS Variables */\n`;
          css += `:root {\n`;
          css += `    --primary-color: #6c5ce7;\n`;
          css += `    --secondary-color: #00cec9;\n`;
          css += `    --text-color: #333;\n`;
          css += `    --light-color: #f4f4f4;\n`;
          css += `    --dark-color: #222;\n`;
          css += `    --max-width: 1200px;\n`;
          css += `    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n`;
          css += `}\n`;
        }

        if (options["css-flexbox"]) {
          css += `\n/* Flexbox Helpers */\n`;
          css += `.flex {\n`;
          css += `    display: flex;\n`;
          css += `}\n\n`;
          css += `.flex-center {\n`;
          css += `    display: flex;\n`;
          css += `    align-items: center;\n`;
          css += `    justify-content: center;\n`;
          css += `}\n\n`;
          css += `.flex-column {\n`;
          css += `    display: flex;\n`;
          css += `    flex-direction: column;\n`;
          css += `}\n\n`;
          css += `.flex-between {\n`;
          css += `    display: flex;\n`;
          css += `    justify-content: space-between;\n`;
          css += `}\n`;
        }

        if (options["css-grid"]) {
          css += `\n/* Grid Helpers */\n`;
          css += `.grid {\n`;
          css += `    display: grid;\n`;
          css += `}\n\n`;
          css += `.grid-2 {\n`;
          css += `    grid-template-columns: repeat(2, 1fr);\n`;
          css += `    gap: 1rem;\n`;
          css += `}\n\n`;
          css += `.grid-3 {\n`;
          css += `    grid-template-columns: repeat(3, 1fr);\n`;
          css += `    gap: 1rem;\n`;
          css += `}\n\n`;
          css += `.grid-4 {\n`;
          css += `    grid-template-columns: repeat(4, 1fr);\n`;
          css += `    gap: 1rem;\n`;
          css += `}\n`;
        }

        if (options["css-preprocessor"] !== "none") {
          const ext = options["css-preprocessor"];
          css = `/* ${ext.toUpperCase()} Boilerplate */\n\n` + css;

          if (ext === "scss") {
            css += `\n/* SCSS Variables */\n`;
            css += `$primary-color: #6c5ce7;\n`;
            css += `$secondary-color: #00cec9;\n`;
            css += `$text-color: #333;\n`;
            css += `$light-color: #f4f4f4;\n`;
            css += `$dark-color: #222;\n\n`;

            css += `/* Mixins */\n`;
            css += `@mixin flex-center {\n`;
            css += `    display: flex;\n`;
            css += `    align-items: center;\n`;
            css += `    justify-content: center;\n`;
            css += `}\n\n`;

            css += `@mixin transition($property: all, $duration: 0.3s, $timing: ease) {\n`;
            css += `    transition: $property $duration $timing;\n`;
            css += `}\n`;
          } else if (ext === "less") {
            css += `\n/* LESS Variables */\n`;
            css += `@primary-color: #6c5ce7;\n`;
            css += `@secondary-color: #00cec9;\n`;
            css += `@text-color: #333;\n`;
            css += `@light-color: #f4f4f4;\n`;
            css += `@dark-color: #222;\n\n`;

            css += `/* Mixins */\n`;
            css += `.flex-center() {\n`;
            css += `    display: flex;\n`;
            css += `    align-items: center;\n`;
            css += `    justify-content: center;\n`;
            css += `}\n\n`;

            css += `.transition(@property: all, @duration: 0.3s, @timing: ease) {\n`;
            css += `    transition: @property @duration @timing;\n`;
            css += `}\n`;
          }
        }

        return css;
      },
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: "fab fa-js",
      color: "#f0db4f",
      options: [
        {
          type: "checkbox",
          id: "js-modules",
          label: "ES Modules",
          checked: true,
        },
        {
          type: "checkbox",
          id: "js-class",
          label: "Class Structure",
          checked: true,
        },
        {
          type: "checkbox",
          id: "js-events",
          label: "Event Listeners",
          checked: true,
        },
        {
          type: "select",
          id: "js-version",
          label: "JavaScript Version",
          options: [
            { value: "es6", label: "ES6+" },
            { value: "es5", label: "ES5" },
          ],
          selected: "es6",
        },
        {
          type: "select",
          id: "js-framework",
          label: "Framework",
          options: [
            { value: "none", label: "Vanilla JS" },
            { value: "jquery", label: "jQuery" },
          ],
          selected: "none",
        },
      ],
      boilerplate: function (options) {
        let js = "";

        if (options["js-version"] === "es6") {
          if (options["js-modules"]) {
            js += `// Import statements\n`;
            js += `// import { functionName } from './module';\n\n`;
          }

          if (options["js-class"]) {
            js += `class App {\n`;
            js += `    constructor() {\n`;
            js += `        this.init();\n`;
            js += `    }\n\n`;
            js += `    init() {\n`;

            if (options["js-events"]) {
              js += `        this.setupEventListeners();\n`;
            }

            js += `        // Initialize your app here\n`;
            js += `    }\n\n`;

            if (options["js-events"]) {
              js += `    setupEventListeners() {\n`;
              js += `        // Add event listeners\n`;
              js += `        document.addEventListener('DOMContentLoaded', () => {\n`;
              js += `            // DOM ready\n`;
              js += `        });\n\n`;
              js += `        window.addEventListener('load', () => {\n`;
              js += `            // Page fully loaded\n`;
              js += `        });\n`;
              js += `    }\n\n`;
            }

            js += `    // Add your methods here\n`;
            js += `}\n\n`;

            if (options["js-modules"]) {
              js += `// Export if using modules\n`;
              js += `// export default App;\n\n`;
            }

            js += `// Instantiate the app\n`;
            js += `const app = new App();\n`;
          } else {
            js += `document.addEventListener('DOMContentLoaded', () => {\n`;
            js += `    // Your code here\n`;

            if (options["js-events"]) {
              js += `\n    // Event listeners\n`;
              js += `    document.querySelector('.button').addEventListener('click', (e) => {\n`;
              js += `        e.preventDefault();\n`;
              js += `        // Handle click\n`;
              js += `    });\n`;
            }

            js += `});\n`;
          }
        } else {
          // ES5
          js += `// ES5 JavaScript Boilerplate\n`;
          js += `(function() {\n`;
          js += `    'use strict';\n\n`;
          js += `    function init() {\n`;

          if (options["js-events"]) {
            js += `        setupEventListeners();\n`;
          }

          js += `        // Initialize your app here\n`;
          js += `    }\n\n`;

          if (options["js-events"]) {
            js += `    function setupEventListeners() {\n`;
            js += `        // Add event listeners\n`;
            js += `        document.addEventListener('DOMContentLoaded', function() {\n`;
            js += `            // DOM ready\n`;
            js += `        });\n\n`;
            js += `        window.addEventListener('load', function() {\n`;
            js += `            // Page fully loaded\n`;
            js += `        });\n`;
            js += `    }\n\n`;
          }

          js += `    // Start the app\n`;
          js += `    init();\n`;
          js += `})();\n`;
        }

        if (options["js-framework"] === "jquery") {
          js = `// jQuery Boilerplate\n`;
          js += `$(document).ready(function() {\n`;
          js += `    // Your jQuery code here\n`;

          if (options["js-events"]) {
            js += `\n    // Event handlers\n`;
            js += `    $('.button').on('click', function(e) {\n`;
            js += `        e.preventDefault();\n`;
            js += `        // Handle click\n`;
            js += `    });\n`;
          }

          js += `});\n`;
        }

        return js;
      },
    },
    {
      id: "react",
      name: "React",
      icon: "fab fa-react",
      color: "#61dafb",
      options: [
        {
          type: "checkbox",
          id: "react-hooks",
          label: "React Hooks",
          checked: true,
        },
        {
          type: "checkbox",
          id: "react-router",
          label: "React Router",
          checked: true,
        },
        {
          type: "checkbox",
          id: "react-context",
          label: "Context API",
          checked: false,
        },
        {
          type: "select",
          id: "react-style",
          label: "Styling Method",
          options: [
            { value: "css", label: "CSS" },
            { value: "scss", label: "SCSS" },
            { value: "styled", label: "Styled Components" },
            { value: "module", label: "CSS Modules" },
          ],
          selected: "css",
        },
      ],
      boilerplate: function (options) {
        let react = "";

        if (options["react-hooks"]) {
          react += `import React, { useState, useEffect } from 'react';\n`;
        } else {
          react += `import React, { Component } from 'react';\n`;
        }

        if (options["react-router"]) {
          react += `import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';\n`;
        }

        if (options["react-context"]) {
          react += `import { createContext, useContext } from 'react';\n\n`;
          react += `// Create context\n`;
          react += `const AppContext = createContext();\n\n`;
          react += `// Context provider component\n`;
          react += `function AppProvider({ children }) {\n`;
          react += `    const [state, setState] = useState({});\n\n`;
          react += `    return (\n`;
          react += `        <AppContext.Provider value={{ state, setState }}>\n`;
          react += `            {children}\n`;
          react += `        </AppContext.Provider>\n`;
          react += `    );\n`;
          react += `}\n\n`;
          react += `// Custom hook to use context\n`;
          react += `function useAppContext() {\n`;
          react += `    return useContext(AppContext);\n`;
          react += `}\n`;
        }

        if (options["react-style"] === "styled") {
          react += `import styled from 'styled-components';\n\n`;
          react += `// Styled components\n`;
          react += `const Container = styled.div\`\n`;
          react += `    max-width: 1200px;\n`;
          react += `    margin: 0 auto;\n`;
          react += `    padding: 0 1rem;\n`;
          react += `\`;\n\n`;
        } else if (options["react-style"] === "module") {
          react += `import styles from './App.module.${
            options["react-style"] === "scss" ? "scss" : "css"
          };\n\n`;
        } else if (options["react-style"] !== "css") {
          react += `import './App.${options["react-style"]}';\n\n`;
        }

        if (options["react-hooks"]) {
          react += `function App() {\n`;
          react += `    const [state, setState] = useState({});\n\n`;
          react += `    useEffect(() => {\n`;
          react += `        // Component did mount\n`;
          react += `        return () => {\n`;
          react += `            // Component will unmount\n`;
          react += `        };\n`;
          react += `    }, []);\n\n`;

          if (options["react-router"]) {
            react += `    return (\n`;
            react += `        <Router>\n`;
            react += `            <div${
              options["react-style"] === "module"
                ? " className={styles.container}"
                : ""
            }>\n`;
            react += `                <nav>\n`;
            react += `                    <ul>\n`;
            react += `                        <li><Link to="/">Home</Link></li>\n`;
            react += `                        <li><Link to="/about">About</Link></li>\n`;
            react += `                    </ul>\n`;
            react += `                </nav>\n\n`;
            react += `                <Switch>\n`;
            react += `                    <Route exact path="/">\n`;
            react += `                        <Home />\n`;
            react += `                    </Route>\n`;
            react += `                    <Route path="/about">\n`;
            react += `                        <About />\n`;
            react += `                    </Route>\n`;
            react += `                </Switch>\n`;
            react += `            </div>\n`;
            react += `        </Router>\n`;
            react += `    );\n`;
          } else {
            react += `    return (\n`;
            react += `        <div${
              options["react-style"] === "module"
                ? " className={styles.container}"
                : ""
            }>\n`;
            react += `            <h1>Hello React</h1>\n`;
            react += `        </div>\n`;
            react += `    );\n`;
          }

          react += `}\n\n`;
        } else {
          react += `class App extends Component {\n`;
          react += `    constructor(props) {\n`;
          react += `        super(props);\n`;
          react += `        this.state = {};\n`;
          react += `    }\n\n`;
          react += `    componentDidMount() {\n`;
          react += `        // Run when component mounts\n`;
          react += `    }\n\n`;
          react += `    componentWillUnmount() {\n`;
          react += `        // Run when component unmounts\n`;
          react += `    }\n\n`;

          if (options["react-router"]) {
            react += `    render() {\n`;
            react += `        return (\n`;
            react += `            <Router>\n`;
            react += `                <div${
              options["react-style"] === "module"
                ? " className={styles.container}"
                : ""
            }>\n`;
            react += `                    <nav>\n`;
            react += `                        <ul>\n`;
            react += `                            <li><Link to="/">Home</Link></li>\n`;
            react += `                            <li><Link to="/about">About</Link></li>\n`;
            react += `                        </ul>\n`;
            react += `                    </nav>\n\n`;
            react += `                    <Switch>\n`;
            react += `                        <Route exact path="/" component={Home} />\n`;
            react += `                        <Route path="/about" component={About} />\n`;
            react += `                    </Switch>\n`;
            react += `                </div>\n`;
            react += `            </Router>\n`;
            react += `        );\n`;
            react += `    }\n`;
          } else {
            react += `    render() {\n`;
            react += `        return (\n`;
            react += `            <div${
              options["react-style"] === "module"
                ? " className={styles.container}"
                : ""
            }>\n`;
            react += `                <h1>Hello React</h1>\n`;
            react += `            </div>\n`;
            react += `        );\n`;
            react += `    }\n`;
          }

          react += `}\n\n`;
        }

        react += `export default App;\n`;

        if (options["react-context"]) {
          react += `\n// Example usage in child component\n`;
          react += `function ChildComponent() {\n`;
          react += `    const { state, setState } = useAppContext();\n`;
          react += `    return <div>Context Value: {state.value}</div>;\n`;
          react += `}\n`;
        }

        return react;
      },
    },
    {
      id: "vue",
      name: "Vue",
      icon: "fab fa-vuejs",
      color: "#42b883",
      options: [
        {
          type: "checkbox",
          id: "vue-router",
          label: "Vue Router",
          checked: true,
        },
        {
          type: "checkbox",
          id: "vuex",
          label: "Vuex",
          checked: false,
        },
        {
          type: "select",
          id: "vue-version",
          label: "Vue Version",
          options: [
            { value: "3", label: "Vue 3" },
            { value: "2", label: "Vue 2" },
          ],
          selected: "3",
        },
        {
          type: "select",
          id: "vue-style",
          label: "Styling Method",
          options: [
            { value: "css", label: "CSS" },
            { value: "scss", label: "SCSS" },
            { value: "module", label: "CSS Modules" },
          ],
          selected: "css",
        },
      ],
      boilerplate: function (options) {
        let vue = "";

        if (options["vue-version"] === "3") {
          vue += `<script>\n`;
          vue += `import { ref, reactive, onMounted } from 'vue';\n`;

          if (options["vue-router"]) {
            vue += `import { useRouter } from 'vue-router';\n`;
          }

          if (options["vuex"]) {
            vue += `import { useStore } from 'vuex';\n`;
          }

          vue += `\nexport default {\n`;
          vue += `    setup() {\n`;

          if (options["vue-router"]) {
            vue += `        const router = useRouter();\n`;
          }

          if (options["vuex"]) {
            vue += `        const store = useStore();\n`;
          }

          vue += `        const state = reactive({\n`;
          vue += `            // Your reactive state here\n`;
          vue += `        });\n\n`;
          vue += `        const count = ref(0);\n\n`;
          vue += `        onMounted(() => {\n`;
          vue += `            // Component is mounted\n`;
          vue += `        });\n\n`;
          vue += `        const increment = () => {\n`;
          vue += `            count.value++;\n`;
          vue += `        };\n\n`;
          vue += `        return {\n`;
          vue += `            state,\n`;
          vue += `            count,\n`;
          vue += `            increment\n`;
          vue += `        };\n`;
          vue += `    }\n`;
          vue += `}\n`;
          vue += `</script>\n\n`;
        } else {
          // Vue 2
          vue += `<script>\n`;
          vue += `export default {\n`;
          vue += `    data() {\n`;
          vue += `        return {\n`;
          vue += `            count: 0\n`;
          vue += `        };\n`;
          vue += `    },\n`;
          vue += `    methods: {\n`;
          vue += `        increment() {\n`;
          vue += `            this.count++;\n`;
          vue += `        }\n`;
          vue += `    },\n`;
          vue += `    mounted() {\n`;
          vue += `        // Component is mounted\n`;
          vue += `    }\n`;
          vue += `};\n`;
          vue += `</script>\n\n`;
        }

        vue += `<template>\n`;
        vue += `    <div class="container">\n`;
        vue += `        <h1>Vue App</h1>\n`;
        vue += `        <p>Count: {{ count }}</p>\n`;
        vue += `        <button @click="increment">Increment</button>\n`;
        vue += `    </div>\n`;
        vue += `</template>\n\n`;

        vue += `<style${options["vue-style"] === "module" ? " module" : ""}${
          options["vue-style"] === "scss" ? ' lang="scss"' : ""
        }>\n`;
        vue += `.container {\n`;
        vue += `    max-width: 1200px;\n`;
        vue += `    margin: 0 auto;\n`;
        vue += `    padding: 0 1rem;\n`;
        vue += `}\n`;
        vue += `</style>`;

        return vue;
      },
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: "fab fa-node-js",
      color: "#68a063",
      options: [
        {
          type: "checkbox",
          id: "node-express",
          label: "Express.js",
          checked: true,
        },
        {
          type: "checkbox",
          id: "node-mongoose",
          label: "Mongoose (MongoDB)",
          checked: false,
        },
        {
          type: "checkbox",
          id: "node-auth",
          label: "Authentication",
          checked: false,
        },
        {
          type: "select",
          id: "node-modules",
          label: "Module System",
          options: [
            { value: "commonjs", label: "CommonJS" },
            { value: "esm", label: "ES Modules" },
          ],
          selected: "commonjs",
        },
      ],
      boilerplate: function (options) {
        let node = "";

        if (options["node-modules"] === "esm") {
          node += `// package.json\n`;
          node += `{\n`;
          node += `  "type": "module"\n`;
          node += `}\n\n`;

          node += `import express from 'express';\n`;

          if (options["node-mongoose"]) {
            node += `import mongoose from 'mongoose';\n`;
          }

          node += `\nconst app = express();\n`;
          node += `const PORT = process.env.PORT || 3000;\n\n`;
        } else {
          node += `const express = require('express');\n`;

          if (options["node-mongoose"]) {
            node += `const mongoose = require('mongoose');\n`;
          }

          node += `\nconst app = express();\n`;
          node += `const PORT = process.env.PORT || 3000;\n\n`;
        }

        node += `// Middleware\n`;
        node += `app.use(express.json());\n`;
        node += `app.use(express.urlencoded({ extended: true }));\n\n`;

        if (options["node-mongoose"]) {
          node += `// MongoDB connection\n`;
          node += `mongoose.connect('mongodb://localhost:27017/mydatabase', {\n`;
          node += `    useNewUrlParser: true,\n`;
          node += `    useUnifiedTopology: true\n`;
          node += `}).then(() => {\n`;
          node += `    console.log('Connected to MongoDB');\n`;
          node += `}).catch(err => {\n`;
          node += `    console.error('MongoDB connection error:', err);\n`;
          node += `});\n\n`;

          node += `// Example Mongoose model\n`;
          node += `const UserSchema = new mongoose.Schema({\n`;
          node += `    name: String,\n`;
          node += `    email: String,\n`;
          node += `    password: String\n`;
          node += `});\n\n`;
          node += `const User = mongoose.model('User', UserSchema);\n\n`;
        }

        if (options["node-auth"]) {
          node += `// Authentication middleware\n`;
          node += `const authenticate = (req, res, next) => {\n`;
          node += `    // Implement your authentication logic\n`;
          node += `    next();\n`;
          node += `};\n\n`;
        }

        node += `// Routes\n`;
        node += `app.get('/', (req, res) => {\n`;
        node += `    res.send('Hello World!');\n`;
        node += `});\n\n`;

        if (options["node-auth"]) {
          node += `app.post('/login', (req, res) => {\n`;
          node += `    // Handle login\n`;
          node += `    res.json({ token: 'sample-jwt-token' });\n`;
          node += `});\n\n`;

          node += `app.get('/protected', authenticate, (req, res) => {\n`;
          node += `    res.send('Protected route');\n`;
          node += `});\n\n`;
        }

        node += `// Start server\n`;
        node += `app.listen(PORT, () => {\n`;
        node += `    console.log(\`Server running on port \${PORT}\`);\n`;
        node += `});\n`;

        return node;
      },
    },
    {
      id: "python",
      name: "Python",
      icon: "fab fa-python",
      color: "#3776ab",
      options: [
        {
          type: "checkbox",
          id: "python-flask",
          label: "Flask",
          checked: true,
        },
        {
          type: "checkbox",
          id: "python-django",
          label: "Django",
          checked: false,
        },
        {
          type: "checkbox",
          id: "python-sqlalchemy",
          label: "SQLAlchemy",
          checked: false,
        },
        {
          type: "select",
          id: "python-version",
          label: "Python Version",
          options: [
            { value: "3", label: "Python 3" },
            { value: "2", label: "Python 2" },
          ],
          selected: "3",
        },
      ],
      boilerplate: function (options) {
        let python = "";

        if (options["python-django"]) {
          python += `# Django boilerplate\n`;
          python += `# settings.py\n\n`;
          python += `INSTALLED_APPS = [\n`;
          python += `    'django.contrib.admin',\n`;
          python += `    'django.contrib.auth',\n`;
          python += `    'django.contrib.contenttypes',\n`;
          python += `    'django.contrib.sessions',\n`;
          python += `    'django.contrib.messages',\n`;
          python += `    'django.contrib.staticfiles',\n`;
          python += `    'myapp',\n`;
          python += `]\n\n`;

          python += `# urls.py\n`;
          python += `from django.urls import path\n`;
          python += `from . import views\n\n`;
          python += `urlpatterns = [\n`;
          python += `    path('', views.index, name='index'),\n`;
          python += `]\n\n`;

          python += `# views.py\n`;
          python += `from django.shortcuts import render\n`;
          python += `from django.http import HttpResponse\n\n`;
          python += `def index(request):\n`;
          python += `    return HttpResponse("Hello, Django!")\n`;
        } else if (options["python-flask"]) {
          python += `# Flask boilerplate\n`;
          python += `from flask import Flask, jsonify, request\n\n`;
          python += `app = Flask(__name__)\n\n`;

          if (options["python-sqlalchemy"]) {
            python += `from flask_sqlalchemy import SQLAlchemy\n\n`;
            python += `app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'\n`;
            python += `app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False\n`;
            python += `db = SQLAlchemy(app)\n\n`;
            python += `class User(db.Model):\n`;
            python += `    id = db.Column(db.Integer, primary_key=True)\n`;
            python += `    username = db.Column(db.String(80), unique=True, nullable=False)\n`;
            python += `    email = db.Column(db.String(120), unique=True, nullable=False)\n\n`;
            python += `    def __repr__(self):\n`;
            python += `        return f'<User {self.username}>'\n\n`;
          }

          python += `@app.route('/')\n`;
          python += `def home():\n`;
          python += `    return "Hello, Flask!"\n\n`;

          python += `@app.route('/api/data')\n`;
          python += `def get_data():\n`;
          python += `    return jsonify({'data': 'Sample data'})\n\n`;

          python += `if __name__ == '__main__':\n`;
          python += `    app.run(debug=True)\n`;
        } else {
          python += `# Python script boilerplate\n`;
          python += `def main():\n`;
          python += `    print("Hello, World!")\n\n`;
          python += `if __name__ == "__main__":\n`;
          python += `    main()\n`;
        }

        return python;
      },
    },
  ];

  // Render technology cards
  const techGrid = document.getElementById("tech-grid");

  techData.forEach((tech) => {
    const techCard = document.createElement("div");
    techCard.className = "tech-card";
    techCard.innerHTML = `
            <i class="${tech.icon} tech-icon" style="color: ${tech.color}"></i>
            <span class="tech-name">${tech.name}</span>
        `;

    techCard.addEventListener("click", () => {
      // Remove active class from all cards
      document.querySelectorAll(".tech-card").forEach((card) => {
        card.classList.remove("active");
      });

      // Add active class to clicked card
      techCard.classList.add("active");

      // Show options panel
      showOptionsPanel(tech);
    });

    techGrid.appendChild(techCard);
  });

  // Show options panel
  function showOptionsPanel(tech) {
    const optionsPanel = document.getElementById("options-panel");
    const panelContent = document.getElementById("panel-content");

    // Set panel content
    panelContent.innerHTML = "";

    tech.options.forEach((option) => {
      const optionGroup = document.createElement("div");
      optionGroup.className = "option-group";

      const optionTitle = document.createElement("h4");
      optionTitle.textContent = option.label;
      optionGroup.appendChild(optionTitle);

      if (option.type === "checkbox") {
        const optionItem = document.createElement("div");
        optionItem.className = "option-item";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = option.id;
        input.checked = option.checked;

        const label = document.createElement("label");
        label.htmlFor = option.id;
        label.textContent = option.label;

        optionItem.appendChild(input);
        optionItem.appendChild(label);
        optionGroup.appendChild(optionItem);
      } else if (option.type === "select") {
        const optionItem = document.createElement("div");
        optionItem.className = "option-item";

        const select = document.createElement("select");
        select.id = option.id;

        option.options.forEach((opt) => {
          const optionEl = document.createElement("option");
          optionEl.value = opt.value;
          optionEl.textContent = opt.label;
          if (opt.value === option.selected) {
            optionEl.selected = true;
          }
          select.appendChild(optionEl);
        });

        optionItem.appendChild(select);
        optionGroup.appendChild(optionItem);
      }

      panelContent.appendChild(optionGroup);
    });

    // Set generate button click handler
    const generateBtn = document.getElementById("generate-btn");
    generateBtn.onclick = function () {
      generateBoilerplate(tech);
    };

    // Show panel with animation
    optionsPanel.classList.add("active");
  }

  // Close options panel
  const closePanel = document.getElementById("close-panel");
  closePanel.addEventListener("click", () => {
    const optionsPanel = document.getElementById("options-panel");
    optionsPanel.classList.remove("active");

    // Remove active class from all cards
    document.querySelectorAll(".tech-card").forEach((card) => {
      card.classList.remove("active");
    });
  });

  // Generate boilerplate
  function generateBoilerplate(tech) {
    const options = {};

    tech.options.forEach((option) => {
      if (option.type === "checkbox") {
        const input = document.getElementById(option.id);
        options[option.id] = input.checked;
      } else if (option.type === "select") {
        const select = document.getElementById(option.id);
        options[option.id] = select.value;
      }
    });

    // Generate the boilerplate
    const boilerplate = tech.boilerplate(options);

    // Show output section
    const outputSection = document.getElementById("output-section");
    const outputCode = document.getElementById("output-code");

    outputCode.textContent = boilerplate;
    outputSection.classList.add("active");

    // Highlight the code
    hljs.highlightElement(outputCode);

    // Scroll to output section
    outputSection.scrollIntoView({ behavior: "smooth" });

    // Set up copy button
    const copyBtn = document.getElementById("copy-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(boilerplate).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      });
    });

    // Set up download button
    const downloadBtn = document.getElementById("download-btn");
    downloadBtn.addEventListener("click", () => {
      let extension = "";
      let mimeType = "";

      switch (tech.id) {
        case "html5":
          extension = "html";
          mimeType = "text/html";
          break;
        case "css3":
          extension = "css";
          mimeType = "text/css";
          break;
        case "javascript":
          extension = "js";
          mimeType = "text/javascript";
          break;
        case "react":
          extension = "jsx";
          mimeType = "text/javascript";
          break;
        case "vue":
          extension = "vue";
          mimeType = "text/javascript";
          break;
        case "laravel":
          extension = "php";
          mimeType = "text/php";
          break;
        case "nodejs":
          extension = "js";
          mimeType = "text/javascript";
          break;
        case "python":
          extension = "py";
          mimeType = "text/python";
          break;
        default:
          extension = "txt";
          mimeType = "text/plain";
      }

      const blob = new Blob([boilerplate], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `boilerplate.${extension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // Tech search functionality
  const techSearch = document.getElementById("tech-search");
  techSearch.addEventListener("input", () => {
    const searchTerm = techSearch.value.toLowerCase();

    document.querySelectorAll(".tech-card").forEach((card) => {
      const techName = card
        .querySelector(".tech-name")
        .textContent.toLowerCase();
      if (techName.includes(searchTerm)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Initialize code highlighting
  hljs.highlightAll();
});
