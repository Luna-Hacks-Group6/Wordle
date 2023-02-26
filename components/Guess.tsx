export default function Guess( {word,guess,isGuessed}){
    return (
    <div className="grid grid-cols-5 gap-2">
    {new Array(5).fill(0).map((_,i)=>{
        const bgColor = !isGuessed 
        ? "bg-black" 
        : guess[i]===word[i] 
        ? "bg-green-400" 
        : word.includes(guess[i]) 
        ? "bg-yellow-400" 
        : "bg-black"
        return (
        <div className={`w-16 h-20 border border-gray-400 text-white uppercase flex items-center justify-center mb-2 ${bgColor}`}>{guess[i]}</div>
        )
    })}
</div>
  );
        
}