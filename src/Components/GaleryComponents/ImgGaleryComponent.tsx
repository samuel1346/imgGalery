import data from "./data/data"

const ImgGaleryComponent = () => {
  return (
    <div>
        {
            data.map((i:any)=>{
                return(
                    <div key={i.id} className={`imgGalery ${i.box} flex-row overflow-hidden h-150 w-full`}>
                        <div className="imgDiv h-120 w-2/4 flex  items-center justify-center overflow-hidden">
                            <img src={i.img} alt=""  className={`img ${i.className}`}/>
                        </div>
                        <div className="mx-2 w-2/4">
                            {i.descriptions}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ImgGaleryComponent