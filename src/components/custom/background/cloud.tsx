const Cloud = () => {
  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className="-top-40 sm:-top-80 -z-10 absolute inset-x-0 blur-3xl transform-gpu overflow-hidden pointer-events-none"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] sm:left-[calc(50%-30rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 aspect-[1155/678] rotate-[30deg]"
        />
      </div>
    </div>
  );
};

export default Cloud;
