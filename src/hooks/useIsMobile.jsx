import {useEffect,useState} from 'react'
import '../../src/constants.scss'

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)
    const breakpoint = 768
  
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= breakpoint) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return isMobile
 
}

export default useIsMobile