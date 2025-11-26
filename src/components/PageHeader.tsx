type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className=" pt-36 pb-24 text-center max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-6xl  text-brand-primary font-medium font-heading">
        {title}
      </h1>
      <p className="mt-6 text-lg ">{description}</p>
    </div>
  );
}
