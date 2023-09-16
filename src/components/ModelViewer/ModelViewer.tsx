import { Canvas } from "@react-three/fiber"
import { useGLTF, Stage, PresentationControls } from "@react-three/drei"

interface ModelViewerType {
    path: string
}

const ModelViewer: React.FC<ModelViewerType> = ({ path }) => {
    const { scene } = useGLTF(path);

    return (
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ width: "500px", height: "500px", borderRadius: ".6rem" }}>
            <color attach="background" args={["#101010"]} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={"night"}>
                    <primitive object={scene} scale={0.01} />
                </Stage>
            </PresentationControls>
        </Canvas>
    )
}

export default ModelViewer