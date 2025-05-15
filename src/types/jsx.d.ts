
import { JSX as ReactJSX } from 'react';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements extends ReactJSX.IntrinsicElements {
      // R3F elements
      mesh: any;
      boxGeometry: any;
      sphereGeometry: any;
      torusGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
      perspectiveCamera: any;
      scene: any;
      primitive: any;
      orbitControls: any;
    }
  }
}
