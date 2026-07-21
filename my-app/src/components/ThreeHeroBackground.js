import React, { useEffect, useRef } from "react";

const ThreeHeroBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for global THREE & postprocessing from script tags if needed
    let initAttempts = 0;
    const initTimer = setInterval(() => {
      const THREE = window.THREE;
      if (THREE && THREE.EffectComposer && THREE.UnrealBloomPass) {
        clearInterval(initTimer);
        initThreeScene(THREE);
      } else {
        initAttempts++;
        if (initAttempts > 50) {
          clearInterval(initTimer);
          console.warn("Three.js scripts failed to load cleanly within timeout.");
        }
      }
    }, 50);

    let animationFrameId;
    let renderer, composer;
    let onMouseMove, onWindowResize;

    function initThreeScene(THREE) {
      if (!container) return;
      container.innerHTML = ""; // Clear any previous canvas on hot reload

      // 1. Scene Setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x04060d, 0.0015);

      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
      camera.position.z = 400;

      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ReinhardToneMapping;
      container.appendChild(renderer.domElement);

      // 2. Post-Processing Setup (ENHANCED GLOW)
      const renderScene = new THREE.RenderPass(scene, camera);

      const bloomPass = new THREE.UnrealBloomPass(
        new THREE.Vector2(width, height),
        2.8,  // Strength
        0.8,  // Radius
        0.0   // Threshold
      );

      composer = new THREE.EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      // Main groups
      const wrapperGroup = new THREE.Group();
      const coreGroup = new THREE.Group();
      const floatGroup = new THREE.Group();
      const backgroundGroup = new THREE.Group();

      scene.add(wrapperGroup);
      wrapperGroup.add(coreGroup);
      wrapperGroup.add(floatGroup);
      scene.add(backgroundGroup);

      // Colors
      const colorWhite = new THREE.Color(0xffffff);
      const colorPink = new THREE.Color(0xff2a7a);
      const colorBlue = new THREE.Color(0x44aaff);

      // 3. Background Constellation/Grid
      const bgParticleCount = 1000;
      const bgGeometry = new THREE.BufferGeometry();
      const bgPositions = new Float32Array(bgParticleCount * 3);

      for (let i = 0; i < bgParticleCount; i++) {
        bgPositions[i * 3] = (Math.random() - 0.5) * 2000;
        bgPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        bgPositions[i * 3 + 2] = (Math.random() - 0.5) * 1000 - 500;
      }

      bgGeometry.setAttribute("position", new THREE.BufferAttribute(bgPositions, 3));
      const bgMaterial = new THREE.PointsMaterial({
        color: 0x335588,
        size: 1.5,
        transparent: true,
        opacity: 0.4,
      });
      const bgParticles = new THREE.Points(bgGeometry, bgMaterial);
      backgroundGroup.add(bgParticles);

      // 4. Shared Shader Material for Particles
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0.0 },
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (350.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            gl_FragColor = vec4(vColor * 2.5, 1.0 - (dist * 2.0));
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      // 5. Core Sphere Construction
      const radius = 130;
      const particleCount = 2500;
      const geometry = new THREE.BufferGeometry();

      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const originalPositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        originalPositions[i * 3] = x;
        originalPositions[i * 3 + 1] = y;
        originalPositions[i * 3 + 2] = z;

        let mixedColor = colorWhite.clone();
        const noiseVal = Math.sin(x * 0.05) * Math.cos(y * 0.05);

        if (noiseVal > 0.5) {
          mixedColor = colorPink;
          sizes[i] = Math.random() * 3.5 + 2.0;
        } else if (noiseVal < -0.3) {
          mixedColor = colorBlue;
          sizes[i] = Math.random() * 3.0 + 1.5;
        } else {
          mixedColor = colorWhite;
          sizes[i] = Math.random() * 2.5 + 1.0;
        }

        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const particleSystem = new THREE.Points(geometry, shaderMaterial);
      coreGroup.add(particleSystem);

      // 6. Floating Orbit Particles
      const floatParticleCount = 400;
      const floatGeometry = new THREE.BufferGeometry();
      const floatPositions = new Float32Array(floatParticleCount * 3);
      const floatColors = new Float32Array(floatParticleCount * 3);
      const floatSizes = new Float32Array(floatParticleCount);

      for (let i = 0; i < floatParticleCount; i++) {
        const r = 160 + Math.random() * 140;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(Math.random() * 2 - 1);

        floatPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        floatPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        floatPositions[i * 3 + 2] = r * Math.cos(phi);

        let fCol = colorWhite.clone();
        const randColor = Math.random();
        if (randColor > 0.6) fCol = colorPink;
        else if (randColor > 0.3) fCol = colorBlue;

        floatColors[i * 3] = fCol.r;
        floatColors[i * 3 + 1] = fCol.g;
        floatColors[i * 3 + 2] = fCol.b;
        floatSizes[i] = Math.random() * 3.5 + 1.5;
      }

      floatGeometry.setAttribute("position", new THREE.BufferAttribute(floatPositions, 3));
      floatGeometry.setAttribute("color", new THREE.BufferAttribute(floatColors, 3));
      floatGeometry.setAttribute("size", new THREE.BufferAttribute(floatSizes, 1));

      const floatParticleSystem = new THREE.Points(floatGeometry, shaderMaterial);
      floatGroup.add(floatParticleSystem);

      // 7. Connecting Lines
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x4466aa,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
      });

      const icosahedronGeo = new THREE.IcosahedronGeometry(radius * 0.98, 4);
      const wireframe = new THREE.LineSegments(
        new THREE.WireframeGeometry(icosahedronGeo),
        lineMaterial
      );
      coreGroup.add(wireframe);

      // 8. Interaction Variables & Logic
      let time = 0;
      let targetScale = 1.0;
      let currentScale = 1.0;
      let targetRotationSpeed = 0.002;
      let currentRotationSpeed = 0.002;

      const mouse = new THREE.Vector2(-9999, -9999);
      const targetMouse = new THREE.Vector2(0, 0);
      const raycaster = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const mouse3D = new THREE.Vector3(-9999, -9999, 0);

      onMouseMove = (event) => {
        const rect = container.getBoundingClientRect();
        targetMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        targetMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };

      window.addEventListener("mousemove", onMouseMove);

      // 9. Resize Handler
      onWindowResize = () => {
        if (!container) return;
        const newW = container.clientWidth || window.innerWidth;
        const newH = container.clientHeight || window.innerHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
        composer.setSize(newW, newH);
      };

      window.addEventListener("resize", onWindowResize, false);

      // 10. Render Loop
      function animate() {
        animationFrameId = requestAnimationFrame(animate);
        time += 0.015;
        shaderMaterial.uniforms.time.value = time;

        mouse.lerp(targetMouse, 0.1);

        // --- NEW LOGIC: Hover Center to Expand ---
        const distFromCenter = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
        const hoverThreshold = 0.3; // Defines the "center" hit area

        if (distFromCenter < hoverThreshold) {
            targetScale = 4.0; // Spread into full screen
            targetRotationSpeed = 0.01; 
            bloomPass.strength = 4.0; // Intensify glow when expanding
        } else {
            targetScale = 1.0; // Resize to original
            targetRotationSpeed = 0.002;
            bloomPass.strength = 2.8; // Revert to normal glow
        }

        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, mouse3D);

        // Parallax wrapper
        wrapperGroup.rotation.x += (mouse.y * 0.4 - wrapperGroup.rotation.x) * 0.05;
        wrapperGroup.rotation.y += (mouse.x * 0.4 - wrapperGroup.rotation.y) * 0.05;

        // Smoothly interpolate scale and rotation
        currentScale += (targetScale - currentScale) * 0.05;
        currentRotationSpeed += (targetRotationSpeed - currentRotationSpeed) * 0.05;

        coreGroup.scale.set(currentScale, currentScale, currentScale);
        floatGroup.scale.set(currentScale, currentScale, currentScale);

        // Rotations
        coreGroup.rotation.y += currentRotationSpeed;
        coreGroup.rotation.x += currentRotationSpeed * 0.5;

        floatGroup.rotation.y -= currentRotationSpeed * 0.8;
        floatGroup.rotation.z += currentRotationSpeed * 0.4;
        floatGroup.rotation.x -= currentRotationSpeed * 0.2;

        backgroundGroup.rotation.y -= 0.0008;

        const posAttribute = geometry.attributes.position;
        const positionsArray = posAttribute.array;

        const displacementStrength = currentScale > 1.2 ? 15.0 : 5.0;
        const speed = currentScale > 1.2 ? 3.0 : 1.2;

        const localMouse = mouse3D.clone();
        coreGroup.worldToLocal(localMouse);

        for (let i = 0; i < particleCount; i++) {
          const ix = i * 3;
          const iy = i * 3 + 1;
          const iz = i * 3 + 2;

          const ox = originalPositions[ix];
          const oy = originalPositions[iy];
          const oz = originalPositions[iz];

          // Noise-based breathing effect
          const noise =
            Math.sin(time * speed + ox * 0.02) *
            Math.cos(time * speed + oy * 0.02);

          const distanceCenter = Math.sqrt(ox * ox + oy * oy + oz * oz);
          const nx = ox / distanceCenter;
          const ny = oy / distanceCenter;
          const nz = oz / distanceCenter;

          // Mouse Repulsion
          const dx = ox - localMouse.x;
          const dy = oy - localMouse.y;
          const dz = oz - localMouse.z;
          const distToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);

          let repulseX = 0,
            repulseY = 0,
            repulseZ = 0;

          const repulseRadius = 140.0;

          if (distToMouse < repulseRadius && distToMouse > 0) {
            const force =
              Math.pow(1.0 - distToMouse / repulseRadius, 2.5) * 120.0;
            repulseX = (dx / distToMouse) * force;
            repulseY = (dy / distToMouse) * force;
            repulseZ = (dz / distToMouse) * force;
          }

          positionsArray[ix] =
            ox + nx * noise * displacementStrength + repulseX;
          positionsArray[iy] =
            oy + ny * noise * displacementStrength + repulseY;
          positionsArray[iz] =
            oz + nz * noise * displacementStrength + repulseZ;
        }

        posAttribute.needsUpdate = true;

        const wireScale = 1.0 + Math.sin(time * 2.5) * 0.025;
        wireframe.scale.set(wireScale, wireScale, wireScale);

        composer.render();
      }

      animate();
    }

    return () => {
      clearInterval(initTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (onMouseMove) window.removeEventListener("mousemove", onMouseMove);
      if (onWindowResize) window.removeEventListener("resize", onWindowResize);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden cursor-crosshair bg-[#04060d]"
    />
  );
};

export default ThreeHeroBackground;
