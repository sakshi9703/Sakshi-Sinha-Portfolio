import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Database,
  Server,
  Cpu,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  FolderOpen,
} from "lucide-react";

type Log = {
  text: string;
  icon?: React.ReactNode;
  color?: string;
};

const logs: Log[] = [
  {
    text: "MongoDB Database      Running",
    icon: <Database size={16} />,
    color: "text-emerald-400",
  },
  {
    text: "Express API           Running",
    icon: <Server size={16} />,
    color: "text-emerald-400",
  },
  {
    text: "React Client          Running",
    icon: <Cpu size={16} />,
    color: "text-emerald-400",
  },
  {
    text: "Gemini AI             Connected",
    icon: <BrainCircuit size={16} />,
    color: "text-blue-400",
  },
  {
    text: "Cloudinary Storage    Connected",
    icon: <Cloud size={16} />,
    color: "text-sky-400",
  },

  { text: "" },

  {
    text: "POST /api/auth/login",
    color: "text-yellow-400",
  },

  {
    text: "200 OK (178ms)",
    icon: <CheckCircle2 size={16} />,
    color: "text-emerald-400",
  },

  { text: "" },

  {
    text: "JWT Authentication Successful",
    icon: <ShieldCheck size={16} />,
    color: "text-emerald-400",
  },

  { text: "" },

  {
    text: "POST /api/resume/upload",
    color: "text-yellow-400",
  },

  {
    text: "Uploading resume.pdf...",
    icon: <FolderOpen size={16} />,
    color: "text-neutral-300",
  },

  {
    text: "Cloudinary Upload Complete",
    icon: <Cloud size={16} />,
    color: "text-sky-400",
  },

  {
    text: "200 OK (512ms)",
    icon: <CheckCircle2 size={16} />,
    color: "text-emerald-400",
  },

  { text: "" },

  {
    text: "POST /api/resume/analyze",
    color: "text-yellow-400",
  },

  {
    text: "Gemini AI Processing...",
    icon: <BrainCircuit size={16} />,
    color: "text-violet-400",
  },

  {
    text: "ATS Score Generated",
    icon: <CheckCircle2 size={16} />,
    color: "text-emerald-400",
  },

  {
    text: "Interview Questions Generated",
    icon: <CheckCircle2 size={16} />,
    color: "text-emerald-400",
  },

  { text: "" },

  {
    text: "GET /api/jobs",
    color: "text-yellow-400",
  },

  {
    text: "Dashboard Updated",
    icon: <CheckCircle2 size={16} />,
    color: "text-emerald-400",
  },

  { text: "" },

  {
    text: "Build Successful",
    icon: <CheckCircle2 size={16} />,
    color: "text-emerald-400",
  },

  {
    text: "Application Ready",
    color: "text-blue-400",
  },

  {
    text: "http://localhost:5173",
    color: "text-cyan-400",
  },
];

export default function Terminal() {
  const [visibleLogs, setVisibleLogs] = useState<Log[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let restart: ReturnType<typeof setTimeout>;

    const playAnimation = () => {
      setVisibleLogs([]);

      let index = 0;

      interval = setInterval(() => {
        if (index < logs.length) {
          setVisibleLogs((prev) => [...prev, logs[index]]);

          index++;
        } else {
          clearInterval(interval);

          restart = setTimeout(() => {
            playAnimation();
          }, 2500);
        }
      }, 300);
    };

    playAnimation();

    return () => {
      clearInterval(interval);
      clearTimeout(restart);
    };
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visibleLogs]);
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -8,
        rotateX: 3,
        rotateY: -3,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="relative w-full max-w-[620px]"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[32px] bg-blue-500/10 blur-3xl" />

      {/* Browser / Terminal */}

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0D11]/95 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-neutral-400 font-mono">
            sakshi@portfolio
          </div>

          <div className="text-xs text-neutral-500">Docker Environment</div>
        </div>

        {/* Body */}

        <div
          ref={scrollRef}
          className="h-[360px] overflow-y-auto p-6 font-mono text-sm scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          <div className="mb-6 text-blue-400">
            <span className="text-emerald-400">sakshi@portfolio</span>
            :~$ docker compose up
          </div>

          {visibleLogs.map(
            (log, index) =>
              log && (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`mb-2 flex items-center gap-3 ${log.color}`}
                >
                  {log.icon}

                  <span>{log.text}</span>
                </motion.div>
              ),
          )}

          {/* Cursor */}

          <motion.div
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="mt-4 flex items-center gap-2 text-blue-400"
          >
            <span>▋</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
