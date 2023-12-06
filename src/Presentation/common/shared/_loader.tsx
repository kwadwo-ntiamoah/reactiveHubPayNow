import { loader } from "@/assets/svgs";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-transparent">loader</p>
      <div className="absolute flex items-center justify-center">
        <img src={loader} alt="loader" className="h-12 w-auto p-0" />
      </div>
    </div>
  );
};
