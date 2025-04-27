import { Suspense } from "react";
import Spline from "@splinetool/react-spline";

const Planet = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Spline
                    scene="/assets/hero.splinecode"
                    // style={{ height: "100vh" }} 
                    className="absolute top-0 right-0 w-[130%] h-[130%]"
                />
            </Suspense>
        </>
    );
};

export default Planet;
