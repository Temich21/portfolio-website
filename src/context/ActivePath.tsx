import { createContext, useState } from 'react'

interface props {
    children: JSX.Element | JSX.Element[]
}

interface ActiveContextType {
    activePath: string
    setActivePath?: (path: string) => void
}

const defaultState = {
    activePath: 'home',
};

export const ActivePathContext = createContext<ActiveContextType>(defaultState)

export const ActivePathProvider = ({ children }: props) => {
    const [activePath, setActivePath] = useState<string>(defaultState.activePath)

    // function toggleActivePath(path: string): void {
    //     setActivePath(path)
    // }

    return (
        <ActivePathContext.Provider value={{ activePath, setActivePath }}>
            {children}
        </ActivePathContext.Provider>
    )
}
