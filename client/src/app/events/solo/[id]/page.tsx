type Props = {
  params: { id: string };
};

const SoloEventDetail = ({ params }: Props) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default SoloEventDetail;
