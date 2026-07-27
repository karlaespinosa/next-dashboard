"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Counter"
        title={count}
        subTitle="Products in Cart"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
      />
    </div>
  );
};
