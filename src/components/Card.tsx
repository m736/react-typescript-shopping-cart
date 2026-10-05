
type cardProps = {
  title: string;
  description: string;
};
const Card = ({ title, description }: cardProps) => {
  return (
    <div className="border rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-grey-600">{description}</p>
    </div>
  );
};

export default Card;
