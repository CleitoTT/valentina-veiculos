export default function Inputs({ padrao, valores = [] }) {
    return (
        <>
            <select className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10" defaultValue={''}>
                <option disabled hidden value={''}>{padrao}</option>
                {valores.map((valor, index) => (
                    <option key={index} value={valor}>{valor}</option>
                ))}
            </select>
        </>
    );
}
