import { useState, useEffect } from "react";

export default function InactivityDetector() {
    const [isInactive, setIsInactive] = useState(false);
    
    useEffect(() => {
        let timerId;

        const startTimer = () => {
            clearTimeout(timerId);

            timerId = setTimeout(() =>{
                setIsInactive(true);
            }, 30000);
        };

        const resetActivity = () => {
            setIsInactive(false);
            startTimer();
        };

        startTimer();

        window.addEventListener("mousemove", resetActivity);
        window.addEventListener("keydown", resetActivity);
        window.addEventListener("click", resetActivity);
        window.addEventListener("scroll", resetActivity);

        return () => {
            clearTimeout(timerId);
            window.removeEventListener("mousemove", resetActivity);
            window.removeEventListener("keydown", resetActivity);
            window.removeEventListener("click", resetActivity);
            window.removeEventListener("scroll", resetActivity);
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            {!isInactive &&(
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-success">
                        You are active 
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Click on this or that button to continue
                    </p>
                </div>
            )}

            {isInactive && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold text-error">
                                You are inactive
                            </h2>
                            <p className="text-gray-500">
                                You have been inactive for 30 seconds
                            </p>

                            <div className="card-actions justify-center mt-4">
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => setIsInactive(false)}
                                >
                                    I'm back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}