// components/PriceList.tsx

interface PriceListProps {
    medidas: string[]
    precios: number[]
  }
  
  const PriceList = ({ medidas, precios }: PriceListProps) => (
    <div className="mt-4 bg-blue-100 rounded-lg p-4 max-h-60 overflow-y-auto">
      <h4 className="font-semibold mb-2 text-blue-800">Precios por medida:</h4>
      <ul className="space-y-1">
        {medidas.map((medida, index) => (
          <li key={index} className="flex justify-between text-sm">
            <span className="text-black">{medida}</span>
            <span className="font-semibold text-black">${precios[index].toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
  
  export default PriceList
  