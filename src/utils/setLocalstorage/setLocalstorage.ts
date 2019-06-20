export default class setLocalstorage {
    private _data: any;
    private _name: any;
    constructor(data: any,name: any) {
        this._data = data;
        this._name = name;
    }

    public localstorage():void {
        localStorage.setItem(this._name,this._data)
    }

    public removelocalstorage(): void {
        localStorage.removeItem(this._name)
    }
}

/**
 * 存入本地
 * @param name 存入本地的键值
 * @param data 存入本地的数据
 */
const localstorage = (name: string,data: any):void => {
    try {
        sessionStorage.setItem(name,data)
    } catch (error) {
        console.log(error)
    }
    
}

/**
 * 从本地数据中删除
 * @param name 存入本地的键值
 */
const removelocalstorage = (name: string): void => {
    sessionStorage.removeItem(name)
}

export {
    localstorage,
    removelocalstorage
}
 
