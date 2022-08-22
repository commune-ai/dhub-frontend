import {useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import {FaSun, FaMoon} from 'react-icons/fa'

const ThemeIcon = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true);
    }, []);

    const renderThemeChanger = () =>{
        if (!mounted) return null;
        const currentTheme = theme == 'system' ? systemTheme : theme;

        if (currentTheme == 'dark'){
            return (
                <FaSun onClick={()=>setTheme('light')} className="cursor-pointer w-4 h-4"/>

            )
        } else {
            return(
                <FaMoon onClick={() => setTheme('dark')} className="cursor-pointer w-4 h-4 fill-gray-900"/>
            )
        }

    }
    return (
        <>
        {renderThemeChanger()}
        </>
    )

}

export default ThemeIcon