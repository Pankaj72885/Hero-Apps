import Container from "../Layout/Container";

const Loading = () => {
  return (
    <Container className={`bg-[#F5F5F5]`}>
      <div className="flex justify-center items-center gap-2 h-full">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    </Container>
  );
};

export default Loading;
