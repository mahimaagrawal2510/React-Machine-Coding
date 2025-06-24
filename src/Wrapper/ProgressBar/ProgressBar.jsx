export default function ProgressBar({percent=0}){
    return <>
    <div className="relative">
        <div className="h-8 border border-black w-full rounded-md">
        <div className={`h-8 bg-black rounded-md text-white flex justify-center items-center`} style={{width: `${percent}%`}}>{percent}%</div>
        </div>
        
    </div>
    </>
}