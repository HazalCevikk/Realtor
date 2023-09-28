import dynamic from "next/dynamic";


const OpenStreetMap = dynamic(()=> import('./OpenStreetMap'),{
    ssr:false
})

export default OpenStreetMap