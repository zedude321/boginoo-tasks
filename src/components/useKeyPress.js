import { useState, useEffect } from 'react'

export const useKeyPress = (key) => {
    const [state, setState] = useState(false)

    const handleKeyDown = (e) => {
        if (e.keyCode === key || e.key === key) {
            setState(true);
        }
    }

    const handleKeyUp = (e) => {
        setState(false);
    }

    useEffect(() => {
        const thing = () => {
            document.addEventListener('keydown', handleKeyDown)
            document.addEventListener('keyup', handleKeyUp)
            return () => {
                document.removeEventListener('keydown', handleKeyDown)
                document.removeEventListener('keyup', handleKeyUp)
            }
        }
        thing()
    }, [key])

    return state
}