import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full rounded-tr-4 max-sm:w-full max-sm:items-center max-sm:pt-10 max-sm:pb-10 transition ease-in-out delay-0 hover:-translate-y-1 hover:shadow-3xl">
        <button>
          <img
              src={imgURL}
              alt={name}
              className="w-[280px] h-[280px] p-5 hover:scale-110"
          />
        </button>
        <div className="px-3">
          <div className="mt-8 flex justify-start gap-2.5">
              <img src={star} alt="rating" width={24} height={24} />
              <p className="font-montserrat text-xl leading-normal text-slate-gray">{rating}</p>
          </div>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
          <p className=" mb-2 mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>

        </div>
    </div>
  )
}

export default PopularProductCard