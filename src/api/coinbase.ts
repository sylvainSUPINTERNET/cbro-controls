import { endpoints } from "./conf"


export const getCoinsPairs = (): Promise<any> => {
    return fetch(`${endpoints.coinsPairs}`)
}