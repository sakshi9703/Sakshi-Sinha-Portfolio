import { FaGithub } from "react-icons/fa";
import MagneticButton from "../MagneticButton";

interface Props {
  github: string;
  live: string;
}

export default function ProjectActions({
  github,
  live,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
      <MagneticButton
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-white
          px-6
          py-3
          text-black
          font-semibold
        "
      >
        
        Live Demo
      </MagneticButton>

      <MagneticButton
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/5
          px-6
          py-3
          text-white
        "
      >
        <FaGithub className="text-lg" />
        GitHub
      </MagneticButton>
    </div>
  );
}