import { ArrowUpRight } from "lucide-react";
import Button from "../Button";

const ViewAll = () => {
  return (
    <section>
      <a
        href="https://github.com/abbasbayat0/"
        target="_blank"
        rel="noopener, noreferrer"
      >
        <Button
          size="lg"
          className="mt-10 flex items-center justify-center gap-2 border border-gray-800 bg-transparent text-lg hover:border-[#20B2A6] hover:bg-[#20B2A6]/20 md:mt-14"
        >
          View All Project <ArrowUpRight />
        </Button>
      </a>
    </section>
  );
};

export default ViewAll;
