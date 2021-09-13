import React, { useEffect, useState } from 'react';
import { getCoinsPairs } from '../api/coinbase';
import { ICoinsPairs } from '../api/types/ICoinsPairs';

function CoinsList({ lang } : any) {    
    const USD_NAME = "USD";
    const EUR_NAME = "EUR";

    const [coinsPairs, setCoinsPairs] : [any, any]= useState([]);
    const [coinsPairsUsd, setCoinsPairsUsd] : [any, any] = useState([]);
    const [coinsPairsEuros, setCoinsPairsEuros] : [any, any] = useState([]);

    const initList = async () => {
       const resp = await getCoinsPairs();
       const json = await resp.json();
       setCoinsPairs(json);



       let arrTmpUsd:any = [];
       let arrTmpEur:any = [];
       json.map( (pair: ICoinsPairs) => {
           if ( pair.base_currency === USD_NAME || pair.quote_currency === USD_NAME ) {
                arrTmpUsd.push(pair);
           }
           if ( pair.base_currency === EUR_NAME || pair.quote_currency === EUR_NAME ) {
            arrTmpEur.push(pair);
       }
        })
        setCoinsPairsUsd(arrTmpUsd)
        setCoinsPairsEuros(arrTmpEur)

    }

    useEffect( () => {
        initList();
    }, [])


        
    if ( lang === EUR_NAME ) {
        return (
            <div>
                <select className="select-pair-eur m-4" defaultValue={""}>
                {
                    coinsPairsEuros.sort().map( (coinPair:ICoinsPairs, i:number) => {
                        if ( i === 0 ) {
                            return <option value="" key={"no-value"}>--Please choose your coins pair--</option>
                        } else {
                            return <option key={coinPair.id} value={coinPair.id}> {coinPair.display_name} </option>
                        }
                    })
                }
            </select>
            </div>
            );
    } else {
        return (
            <div>
                <select className="select-pair-usd m-4" defaultValue={""}>
                    {
                        coinsPairsUsd.sort().map( (coinPair:ICoinsPairs, i:number) => {
                            if ( i === 0 ) {
                                return <option value="" key={"no-value"}>--Please choose your coins pair--</option>
                            } else {
                                return <option key={coinPair.id} value={coinPair.id}> {coinPair.display_name} </option>
                            }
                        })
                    }
                </select>
            </div>
          );
    }

export default CoinsList;
