import { Activity } from "../types";

export type CardProps = {
  activity: Activity;
};

export default function Card({ activity }: CardProps) {
  return (
    <div className="text-xl text-center font-bold bg-white shadow overflow-hidden sm:rounded-lg p-3 mb-10">
      <h1 className="py-2">{activity.activity}</h1>
      <h3 className="text-sm font-normal leading-tight text-gray-900 mb-4">
       Participate in a {activity.type} activity {activity.participants === 1 ? "by yourself" : "with " + (activity.participants - 1) + " others"}
      </h3>
    </div>
  );
};