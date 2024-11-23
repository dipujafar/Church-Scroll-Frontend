const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  return (
    <div className="text-center space-y-2">
      <h1 className="md:text-5xl text-2xl font-semibold">{title}</h1>
      {subTitle && (
        <p className="text-black/60 text-xl lg:max-w-[80%] 2xl:w-[70%] mx-auto">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
