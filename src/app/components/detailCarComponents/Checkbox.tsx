import React from "react";

export default function Checkbox({
  name,
  count,
  checked,
}: {
  name: string;
  count: number;
  checked: boolean;
}) {
  return (
    <div className="flex gap-1">
      <input type="checkbox" name="type" value="type" checked={checked} />
      <label className="text-gray-500 ">{name}</label>
      <span className="text-gray-400">({count})</span>
    </div>
  );
}
