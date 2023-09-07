import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full"  />
      </div>
    </section>
  );
};

export default SpecialOffer;
