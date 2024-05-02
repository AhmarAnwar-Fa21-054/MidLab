import { useState } from "react"

import prayerContext from "./PrayerContext"
 function PrayerInfo({children}){
let [prayerHistory,setPrayerHistory] = useState({})
return(
    <prayerContext.Provider value={{prayerHistory,setPrayerHistory}}>
{children}
    </prayerContext.Provider>
)
 }
 export default PrayerInfo