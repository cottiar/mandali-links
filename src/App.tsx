import { Globe } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { type ElementType } from "react";

// TypeScript definition for our links
type SocialLink = {
  id: number;
  title: string;
  url: string;
  icon: ElementType;
  bgColor: string;
  hoverColor: string;
  iconColor: string;
};

// Profile configuration
const profileInfo = {
  name: "Sri Sathya Chandi Mandali",
  description: "Connect with us across our official channels",
  // Automatically grabs the high-res icon from the website
  logoUrl:
    "https://www.google.com/s2/favicons?domain=www.srisathyachandimandali.com&sz=128",
};

// Social links configuration
const socialLinks: SocialLink[] = [
  {
    id: 1,
    title: "Official Website",
    url: "https://srisathyachandimandali.com/",
    icon: Globe,
    bgColor: "bg-amber-500/10",
    hoverColor: "hover:bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    id: 2,
    title: "YouTube",
    url: "https://www.youtube.com/c/srisathyachandimandali",
    icon: FaYoutube,
    bgColor: "bg-red-500/10",
    hoverColor: "hover:bg-red-500/20",
    iconColor: "text-red-500",
  },
  {
    id: 3,
    title: "Instagram",
    url: "https://www.instagram.com/sri_sathya_chandi_mandali_2013/?igsh=MXIzYTI0bWN1d2ZtaA%3D%3D#",
    icon: FaInstagram,
    bgColor: "bg-pink-500/10",
    hoverColor: "hover:bg-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    id: 4,
    title: "Facebook",
    url: "https://www.facebook.com/p/Sri-Sathya-Chandi-Mandali-100080447644312/",
    icon: FaFacebook,
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: 5,
    title: "X (Twitter)",
    url: "https://x.com/SSCM_2013",
    icon: FaXTwitter,
    bgColor: "bg-slate-300/10",
    hoverColor: "hover:bg-slate-300/20",
    iconColor: "text-slate-200",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center py-12 px-4 relative overflow-hidden font-sans">
      {/* Warm Ambient Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-900/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md z-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-28 h-28 mb-4 rounded-full border-4 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] overflow-hidden bg-white flex items-center justify-center">
            <img
              src={profileInfo.logoUrl}
              alt={profileInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if the logo fails to load
                e.currentTarget.src =
                  "https://ui-avatars.com/api/?name=SC&background=b45309&color=fff&size=128";
              }}
            />
          </div>
          <h1 className="text-2xl font-serif font-bold text-amber-50 mb-2 tracking-wide">
            {profileInfo.name}
          </h1>
          <p className="text-stone-400 text-sm">{profileInfo.description}</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-4 rounded-xl backdrop-blur-md border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.bgColor} ${link.hoverColor}`}
            >
              <div className={`flex-shrink-0 mr-4 ${link.iconColor}`}>
                <link.icon className="w-6 h-6" />
              </div>
              <span className="text-amber-50 font-medium w-full text-center pr-6">
                {link.title}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} {profileInfo.name}
          </p>
        </div>
      </div>
    </div>
  );
}
