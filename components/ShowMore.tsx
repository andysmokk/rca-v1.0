"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const newLimit = (pageNumber + 1) * 10;

  const handleNavigation = () => {
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show more"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white btn-hover-focus"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
