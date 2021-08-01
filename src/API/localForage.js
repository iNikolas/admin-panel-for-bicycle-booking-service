import * as localforage from "localforage";

const storageAPI = {
    get: async function () {
        let bicycleList = await localforage.getItem('bicycles')
        if (!bicycleList) bicycleList = []
        return bicycleList
    },
    post: async function (bicycle) {
        let bicycleList = await this.get()
        bicycleList.push(bicycle)
        return await localforage.setItem('bicycles', bicycleList)
    },
    patch: async function (status, id) {
        let bicycleList = await this.get()
        bicycleList = bicycleList.map(bicycle => (+bicycle.id === +id) ? {
            ...bicycle,
            status: status
        } : bicycle)
        return await localforage.setItem('bicycles', bicycleList)
    },
    delete: async function (bicycleId) {
        let bicycleList = await this.get()
        bicycleList = bicycleList.filter((entry) => +entry.id !== +bicycleId)
        return await localforage.setItem('bicycles', bicycleList)
    }
}

export default storageAPI