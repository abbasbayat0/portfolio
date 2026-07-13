import { Mail, MapPin, Phone } from "lucide-react";

const information = [
  {
    icon: <Mail className="text-green" size={20} />,
    key: "Email",
    value: "abbas0bayat@gmail.com",
  },
  {
    icon: <Phone className="text-green" size={20} />,
    key: "Phone",
    value: "+98 939 905 3410",
  },
  {
    icon: <MapPin className="text-green" size={20} />,
    key: "Location",
    value: "Iran, Hamedan, Nahavand",
  },
];

const ContactInformation = () => {
  return (
    <div>
      <div className="flex w-full flex-col gap-8 rounded-3xl border border-gray-700/20 bg-[#151C21] px-5 py-8 sm:px-8 sm:py-10">
        <p className="text-lg font-bold tracking-wide text-white sm:text-xl">
          Contact Information
        </p>
        <div className="ml-2 flex flex-col gap-6 sm:gap-10">
          {information.map((info) => {
            const { icon, key, value } = info;
            return (
              <div key={key} className="flex items-center justify-start gap-3">
                <div className="rounded-2xl bg-[#192D2F]/80 p-3 sm:p-4">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-white/50 sm:text-sm">{key}</p>
                  <p className="text-sm text-nowrap text-white/90 sm:text-base">
                    {value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* currently available */}
      <div className="border-green/40 mt-5 w-full rounded-3xl border bg-[#151E23] px-5 py-8 sm:mt-8">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
          <p className="text-md tracking-wide text-white">
            Currently Available
          </p>
        </div>
        <p className="mt-5 px-1 text-sm tracking-wider text-white/50">
          I'm currently open to new opportunities and exciting projects. Whether
          you need a full-time engineer or a freelance consultant, let's talk!
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
