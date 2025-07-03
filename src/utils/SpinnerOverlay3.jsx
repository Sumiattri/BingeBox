function SpinnerOverlay2() {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 z-10000 flex items-center justify-center">
      <div className="h-12 w-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default SpinnerOverlay2;
