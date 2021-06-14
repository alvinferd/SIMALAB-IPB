import LabLoading from "@/components/feedback/LabLoading";
import SimalabLayout from "@/layouts/default";

function TestingPageIndex() {
  return (
    <>
      <LabLoading />
    </>
  );
}

TestingPageIndex.title = "Testing";
TestingPageIndex.Layout = SimalabLayout;

export default TestingPageIndex;
