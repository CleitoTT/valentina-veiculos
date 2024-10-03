export default function Inputs({ padrao, valores = [], onChange, value }) {
    return (
        <div className="mb-4">
            <select
                className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10"
                value={value} // Muda de defaultValue para value
                onChange={onChange}
            >
                <option value="">{`Todos os ${padrao}`}</option>
                {valores.map((valor, index) => (
                    <option key={index} value={valor}>{valor}</option>
                ))}
            </select>
        </div>
    );
}
