import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export const EmptyState = ({ title, description }: Props) => {
  return (
    <div className="py-4 px-8 flex flex-col items-center justify-center gap-y-6">
      {/* Image on top */}
      <Image src="/empty.svg" alt="Empty" width={240} height={240} />

      {/* Text below image */}
      <div className="flex flex-col gap-y-2 text-center max-w-md">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
