import React, { useEffect, useRef } from "react";

const ThreeHeroBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const container = containerRef.current;
    if (!container) return;

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
        }
      }
    }, 50);

    let renderer, composer;
    let onMouseMove, onMouseDown, onWindowResize;

    function initThreeScene(THREE) {
      if (!container) return;
      container.innerHTML = "";

      // 1. Scene Setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x020308, 0.0015);

      const getWidth = () => container.clientWidth || window.innerWidth;
      const getHeight = () => container.clientHeight || window.innerHeight;

      const camera = new THREE.PerspectiveCamera(60, getWidth() / getHeight(), 1, 2500);
      camera.position.z = 400;

      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(getWidth(), getHeight());
      renderer.toneMapping = THREE.ReinhardToneMapping;
      container.appendChild(renderer.domElement);

      // 2. Post-Processing Setup
      const renderScene = new THREE.RenderPass(scene, camera);
      
      const bloomPass = new THREE.UnrealBloomPass(
        new THREE.Vector2(getWidth(), getHeight()),
        2.8,  
        0.8,  
        0.0   
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

      const colorWhite = new THREE.Color(0xffffff);
      const colorArticNavy = new THREE.Color(0x1E2A39); 
      const colorBlue = new THREE.Color(0x44aaff); 

      // 3. Background Constellation 
      const bgParticleCount = 1500;
      const bgGeometry = new THREE.BufferGeometry();
      const bgPositions = new Float32Array(bgParticleCount * 3);
      
      for (let i = 0; i < bgParticleCount; i++) {
        bgPositions[i * 3] = (Math.random() - 0.5) * 3000;
        bgPositions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
        bgPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000 - 500; 
      }
      
      bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
      const bgMaterial = new THREE.PointsMaterial({
        color: 0x4466aa,
        size: 2.0,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      });
      const bgParticles = new THREE.Points(bgGeometry, bgMaterial);
      backgroundGroup.add(bgParticles);

      // 4. Shader Material
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0.0 }
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
          uniform float time;
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            
            float pulse = sin(time * 3.0) * 0.2 + 0.8; 
            vec3 animatedColor = vColor * 2.5 * pulse;
            
            gl_FragColor = vec4(animatedColor, 1.0 - (dist * 2.0));
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      // 5. Core Sphere Construction
      const radius = 130;
      const particleCount = 2800; 
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
          mixedColor = colorArticNavy;
          sizes[i] = Math.random() * 4.0 + 2.0; 
        } else if (noiseVal < -0.3) {
          mixedColor = colorBlue;
          sizes[i] = Math.random() * 3.5 + 1.5;
        } else {
          mixedColor = colorWhite;
          sizes[i] = Math.random() * 2.5 + 1.0;
        }

        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const particleSystem = new THREE.Points(geometry, shaderMaterial);
      coreGroup.add(particleSystem);

      // 6. Floating Orbit Particles
      const floatParticleCount = 500;
      const floatGeometry = new THREE.BufferGeometry();
      const floatPositions = new Float32Array(floatParticleCount * 3);
      const floatColors = new Float32Array(floatParticleCount * 3);
      const floatSizes = new Float32Array(floatParticleCount);

      for (let i = 0; i < floatParticleCount; i++) {
        const r = 160 + Math.random() * 160; 
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos((Math.random() * 2) - 1);

        floatPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        floatPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        floatPositions[i * 3 + 2] = r * Math.cos(phi);

        let fCol = colorWhite.clone();
        const randColor = Math.random();
        if (randColor > 0.6) fCol = colorArticNavy;
        else if (randColor > 0.3) fCol = colorBlue;

        floatColors[i * 3] = fCol.r;
        floatColors[i * 3 + 1] = fCol.g;
        floatColors[i * 3 + 2] = fCol.b;
        floatSizes[i] = Math.random() * 4.0 + 2.0;
      }

      floatGeometry.setAttribute('position', new THREE.BufferAttribute(floatPositions, 3));
      floatGeometry.setAttribute('color', new THREE.BufferAttribute(floatColors, 3));
      floatGeometry.setAttribute('size', new THREE.BufferAttribute(floatSizes, 1));

      const floatParticleSystem = new THREE.Points(floatGeometry, shaderMaterial);
      floatGroup.add(floatParticleSystem);

      // 7. Connecting Lines (Outer Wireframe)
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x5588ff,
        transparent: true,
        opacity: 0.30,
        blending: THREE.AdditiveBlending
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
      
      let currentHarmonic = 0.0;
      let targetHarmonic = 0.0;
      let shockwaveRadius = -1;

      const mouse = new THREE.Vector2(2, 2);
      const targetMouse = new THREE.Vector2(2, 2);
      const raycaster = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); 
      const mouse3D = new THREE.Vector3(-9999, -9999, 0);

      onMouseMove = (event) => {
        const rect = container.getBoundingClientRect();
        targetMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        targetMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };

      onMouseDown = () => {
        shockwaveRadius = 0; 
        bloomPass.strength = 6.0; 
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mousedown', onMouseDown);

      onWindowResize = () => {
        if (!container) return;
        const w = getWidth();
        const h = getHeight();
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        composer.setSize(w, h);
      };

      window.addEventListener('resize', onWindowResize, false);

      // 9. Render Loop
      function animate() {
        animationFrameId = requestAnimationFrame(animate);
        time += 0.015; 
        shaderMaterial.uniforms.time.value = time;

        mouse.lerp(targetMouse, 0.1);

        const distFromCenter = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
        const hoverThreshold = 0.3; 

        if (distFromCenter < hoverThreshold) {
          targetScale = 3.6;
          targetRotationSpeed = 0.004;
          targetHarmonic = 1.0;
          if (shockwaveRadius < 0) bloomPass.strength = 3.6; 
        } else {
          targetScale = 1.0; 
          targetRotationSpeed = 0.002;
          targetHarmonic = 0.0;
          if (shockwaveRadius < 0) bloomPass.strength = 2.8; 
        }

        currentScale += (targetScale - currentScale) * 0.05;
        currentRotationSpeed += (targetRotationSpeed - currentRotationSpeed) * 0.05;
        currentHarmonic += (targetHarmonic - currentHarmonic) * 0.05;

        if (shockwaveRadius >= 0) {
          shockwaveRadius += 18.0; 
          bloomPass.strength += ((distFromCenter < hoverThreshold ? 3.6 : 2.8) - bloomPass.strength) * 0.05;
          if (shockwaveRadius > 800) {
            shockwaveRadius = -1; 
          }
        }

        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, mouse3D);

        wrapperGroup.rotation.x += (mouse.y * 0.4 - wrapperGroup.rotation.x) * 0.05;
        wrapperGroup.rotation.y += (mouse.x * 0.4 - wrapperGroup.rotation.y) * 0.05;

        coreGroup.scale.set(currentScale, currentScale, currentScale);
        floatGroup.scale.set(currentScale, currentScale, currentScale);
        
        coreGroup.rotation.y += currentRotationSpeed;
        coreGroup.rotation.x += currentRotationSpeed * 0.5;
        
        floatGroup.rotation.y -= currentRotationSpeed * 0.8;
        floatGroup.rotation.z += currentRotationSpeed * 0.4;
        floatGroup.rotation.x -= currentRotationSpeed * 0.2;

        backgroundGroup.rotation.z += 0.0005;
        backgroundGroup.rotation.y -= 0.0005;

        const posAttribute = geometry.attributes.position;
        const positionsArray = posAttribute.array;
        
        const displacementStrength = currentScale > 1.2 ? 15.0 : 6.0;
        const speed = 1.2;
        
        const localMouse = mouse3D.clone();
        coreGroup.worldToLocal(localMouse);

        for (let i = 0; i < particleCount; i++) {
          const ix = i * 3;
          const iy = i * 3 + 1;
          const iz = i * 3 + 2;

          const ox = originalPositions[ix];
          const oy = originalPositions[iy];
          const oz = originalPositions[iz];

          const chaoticNoise = Math.sin(time * speed + (ox * 0.02)) * Math.cos(time * speed + (oy * 0.02));
          const harmonicWave = Math.sin(oy * 0.08 - time * 4.0) * 1.5;
          const noise = (chaoticNoise * (1.0 - currentHarmonic)) + (harmonicWave * currentHarmonic);
          
          const distanceCenter = Math.sqrt(ox*ox + oy*oy + oz*oz);
          const nx = ox / distanceCenter;
          const ny = oy / distanceCenter;
          const nz = oz / distanceCenter;

          const dx = ox - localMouse.x;
          const dy = oy - localMouse.y;
          const dz = oz - localMouse.z;
          const distToMouse = Math.sqrt(dx*dx + dy*dy + dz*dz);
          
          let repulseX = 0, repulseY = 0, repulseZ = 0;
          const repulseRadius = 150.0; 
          
          if (distToMouse < repulseRadius && distToMouse > 0) {
            const force = Math.pow(1.0 - (distToMouse / repulseRadius), 2.5) * 140.0; 
            repulseX = (dx / distToMouse) * force;
            repulseY = (dy / distToMouse) * force;
            repulseZ = (dz / distToMouse) * force;
          }

          let shockX = 0, shockY = 0, shockZ = 0;
          if (shockwaveRadius >= 0) {
            const distFromWave = Math.abs(distanceCenter - shockwaveRadius);
            if (distFromWave < 40) { 
              const shockForce = Math.pow(1.0 - (distFromWave / 40), 2.0) * 120.0; 
              shockX = nx * shockForce;
              shockY = ny * shockForce;
              shockZ = nz * shockForce;
            }
          }

          positionsArray[ix] = ox + (nx * noise * displacementStrength) + repulseX + shockX;
          positionsArray[iy] = oy + (ny * noise * displacementStrength) + repulseY + shockY;
          positionsArray[iz] = oz + (nz * noise * displacementStrength) + repulseZ + shockZ;
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
      if (onMouseDown) window.removeEventListener("mousedown", onMouseDown);
      if (onWindowResize) window.removeEventListener("resize", onWindowResize);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      className="absolute inset-0 w-full h-full z-0 overflow-hidden cursor-crosshair bg-[#020308]"
    />
  );
};

export default ThreeHeroBackground;
