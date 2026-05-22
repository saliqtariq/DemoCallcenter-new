'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function createLine(i: number) {
  const points: THREE.Vector3[] = [];
  const length = 20;

  for (let j = 0; j < length; j++) {
    points.push(
      new THREE.Vector3(j - length / 2, Math.sin(j * 0.5 + i) * 2, 0)
    );
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: i % 3 === 0 ? '#00ff99' : i % 3 === 1 ? '#ff0066' : '#3399ff',
    transparent: true,
    opacity: 0.4,
  });

  return new THREE.Line(geometry, material);
}

const LINES = Array.from({ length: 40 }, (_, i) => createLine(i));

export function FlowingLines() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={group}>
      {LINES.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </group>
  );
}
