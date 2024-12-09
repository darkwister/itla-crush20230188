    export function insertSession(value) {
        if (typeof value !== 'boolean') {
            window.localStorage.setItem('sesion', JSON.stringify(value));
            setTimeout(() => {
                window.location.replace('/profile');
            }, 1000);
        } else {
            return false;
        }

        return true;
    }

    export function getSession()
    {
        const value =  window.localStorage.getItem('sesion');
        return value ? JSON.parse(value) : false;
    }

    export function destroySession()
    {
        window.localStorage.removeItem('sesion');
        window.location.replace('/login');
    }