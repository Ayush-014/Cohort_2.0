export function VideoCard(props:any) {
    return <div className="p-3">
        <div>
            <img className="rounded-xl cursor-pointer" src={props.src}></img>
        </div>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-2">
                <img className="rounded-full w-12 h-12" src={props.src}></img>

            </div>
            <div className="col-span-10 pl-2">
                <div className="">
                    {props.title}
                </div>
                <div className="col-span-10 text-gray-400 text-base">
                    {props.channel}
                </div>
                <div className="flex col-span-10 text-gray-400 text-base gap-2">
                    <div>{props.views} | </div>
                    <div>{props.days} days ago</div>
                </div>
            </div>

        </div>
    </div>
}

// function VideoCard2() {
//     return <div>

//     </div>
// }