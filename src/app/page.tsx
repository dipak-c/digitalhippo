import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
          Your Market Place For High Quality{" "}
          <span className="text-blue-600">Digital Assets</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
