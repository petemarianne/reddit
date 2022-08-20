import { useState, useCallback, useEffect } from 'react'

const storageName = 'token'

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null)

    const login = useCallback((jwtToken: string) => {
        setToken(jwtToken)
        localStorage.setItem(storageName, jwtToken)
    }, [])


    const logout = useCallback(() => {
        setToken(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const token = localStorage.getItem(storageName) as string

        if (token) {
            login(token)
        }
    }, [login])


    return { login, logout, token }
}
