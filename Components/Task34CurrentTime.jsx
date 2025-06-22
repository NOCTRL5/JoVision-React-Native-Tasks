import { useEffect, useState } from "react"

export default function useCurrentTime() {
    const [currentTime, setCurrentTIme] = useState(new Date());
    function handleEffect() {
        function handleSetInterval() {
            setCurrentTIme(new Date());
        }
        function handleReturn() {
            return clearInterval(interval);
        }
        const interval = setInterval(handleSetInterval, 1000);
        return handleReturn;
    }
    useEffect(handleEffect);
    return currentTime;
}