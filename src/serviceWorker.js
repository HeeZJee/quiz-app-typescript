const serviceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(data => console.log('Registered', data))
            .catch(error => console.err('Registeration failed', error))
    }
}

export default serviceWorker;