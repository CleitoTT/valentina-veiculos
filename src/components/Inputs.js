export default function Inputs({padrao, valor1, valor2, valor3, valor4, valor5}){
    return(
        <>
            <select className="w-4/5 h-10 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-lg font-medium mt-10">
                <option disabled selected hidden>{padrao}</option>
                <option>{valor1}</option>
                <option>{valor2}</option>
                <option>{valor3}</option>
                <option>{valor4}</option>
                <option>{valor5}</option>
            </select>
        </>
    )
}