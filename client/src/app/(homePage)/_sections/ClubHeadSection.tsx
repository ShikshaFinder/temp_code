import ClubHead from "@/components/ClubHead";

const ClubHeadSection = () => {
  return (
    <>
      <div className="m-auto p-[5rem] text-center select-none py-[250px]">
        <h1 className="text-[50px] font-bold mb-[2rem]">Club Heads</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-1">
          <ClubHead url="/Club-Heads/dummy.jpg" name="Het" position="Head" />
          <ClubHead url="/Club-Heads/dummy.jpg" name="Het" position="Head" />
          <ClubHead url="/Club-Heads/dummy.jpg" name="Het" position="Head" />
          <ClubHead url="/Club-Heads/dummy.jpg" name="Het" position="Head" />
          <ClubHead url="/Club-Heads/dummy.jpg" name="Het" position="Head" />
          <ClubHead url="/Club-Heads/dummy.jpg" name="Het" position="Head" />
          <ClubHead url="/Club-Heads/dummy.jpg" name="Het" position="Head" />
          <ClubHead url="/Club-Heads/dummy.jpg" name="Het" position="Head" />
        </div>
      </div>
    </>
  );
};

export default ClubHeadSection;
