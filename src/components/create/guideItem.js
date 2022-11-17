export default function GuideItem(props){
    const {photo, text} = props;
    return(
        <div className="text-center">
            <div>
                <img src = {photo} alt = "guide icon" width = "70px" />
            </div>
            <div className='x-font11 mt-4'>
                {text}
            </div>
        </div>
    )
}