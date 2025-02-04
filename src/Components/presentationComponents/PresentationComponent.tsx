

const PresentationComponent = () => {
  return (
    <div className="h-100 mb-5">
      <div>
        <img className="absolute w-full h-100 object-cover -z-50 opacity-75" src="imagenes/DSC_1089.jpeg" alt="" />
      </div>
      <div className=" flex flex-row h-full items-center">
        <div className="flex flex-col w-2/3 m-2 p-2 *:m-2 h-2/4">
          <div className=" text-2xl">nombre</div>
          <div className=" w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat aspernatur corrupti consequuntur, alias laudantium hic dolorem quam molestiae distinctio soluta vero odio. Quidem, recusandae laboriosam corrupti non ratione odio.</div>
        </div>
        <div className="m-2 p-2 flex justify-center w-1/3 h-2/4">
          <div className="w-60 h-60 ">
            <img className="object-cover w-full h-full rounded-full shadow-black shadow-md" src="imagenes/DSC_0214.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PresentationComponent