import { Component, ElementRef, Input, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-gltf-viewer',
  template: `
    @if (isLoading) {
      <div class="loading">
        <div>Carregando...</div>
      </div>
    }
    <div #rendererContainer class="renderer-container"></div>
  `,
  styles: `
    .loading {
      position: absolute;
      top: 65px;
      width: 100%;
    }
    .loading > div {
      color: white;
      background-color: #a3a3a3;
      text-align: center;
      margin: 12px;
      padding: 12px;
      border-radius: 12px;
    }
    .renderer-container {
      display: block;
      width: 100vw;
      height: 100vh;
    }
  `,
  standalone: true,
})
export class GltfViewerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true }) container!: ElementRef;
  @Input() modelPath!: string;

  isLoading: boolean = true;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private loader!: GLTFLoader;
  private animationFrameId!: number;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initScene();
      this.loadModel();
      this.animate();
    }, 100);
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 1, 3);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.container.nativeElement.clientWidth, this.container.nativeElement.clientHeight);
    this.container.nativeElement.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    this.loader = new GLTFLoader();

    this.scene.add(new THREE.AmbientLight(0xffffff, 1));
  }

  private loadModel(): void {
    if (!this.modelPath) return;

    this.loader.load(this.modelPath, (gltf: GLTF) => {
      this.isLoading = false;
      this.scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error('Error loading model:', error);
    });
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    this.renderer.dispose();
  }
}
