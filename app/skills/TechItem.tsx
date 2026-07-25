interface TechItemProps {
  name: string;
  icon: string;
}

const TechItem = ({ name, icon }: TechItemProps) => {
  return (
    <div
      className="
        border border-gray-200
        rounded-md
        p-5
        flex flex-col
        items-center
        justify-center
        gap-3
        hover:bg-gray-50
        transition-all
        duration-200
      "
    >
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain"
      />

      <p className="text-sm text-gray-700 text-center font-mono">
        {name}
      </p>
    </div>
  );
};

export default TechItem;