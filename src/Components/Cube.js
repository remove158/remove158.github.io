import React from "react";
import { useBox } from "use-cannon";
import * as textures from "../texture.js";
export const Cube = ({ position, type, ...props }) => {
	const [ref] = useBox(() => ({
		type: "Static",
		position,
		...props,
	}));
	return (
		<mesh castShadow ref={ref}>
			{[...Array(6)].map((_, index) => (
				<meshStandardMaterial
					attachArray="material"
					map={textures[type]}
					key={index}
					opacity={type === "glass" ? 0.7 : 1}
					transparent={true}
				/>
			))}
			<boxBufferGeometry attach="geometry" />
		</mesh>
	);
};
