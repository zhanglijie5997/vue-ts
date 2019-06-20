

export default {
    log(...msg: any) {
        if (process.env.NODE_ENV === 'development') {
            return console.log(...msg)
        }
        return true;
    }
}