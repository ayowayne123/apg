"use client";

import {
  MdSmokeFree,
  MdMusicOff,
  MdChildCare,
  MdPets,
  MdCleaningServices,
  MdPerson,
  MdMoney,
  MdAccessTime,
} from "react-icons/md";

export default function HouseRules({ rules }) {
  if (!rules) return null;

  const ruleDefinitions = {
    no_smoking: {
      icon: MdSmokeFree,
      getText: (val) => (val ? "No Smoking allowed" : null),
    },
    no_parties: {
      icon: MdMusicOff,
      getText: (val) => (val ? "Parties or events are not allowed." : null),
    },
    no_loud_music: {
      icon: MdMusicOff,
      getText: (val) => (val ? "Please keep noise to a minimum." : null),
    },
    quiet_hours: {
      icon: MdMusicOff,
      getText: (val) =>
        val ? `The house should remain quiet from ${val}.` : null,
    },
    pets_allowed: {
      icon: MdPets,
      getText: (val) => (val ? "Pets are allowed" : "Pets are not allowed."),
    },
    children_allowed: {
      icon: MdChildCare,
      getText: (val) =>
        val
          ? "Children are welcome in the property."
          : "Not suitable for children.",
    },
    damage_fee_policy: {
      icon: MdMoney,
      getText: (val) =>
        val ? "Guests will be charged for any damages or broken items." : null,
    },
    clean_before_checkout: {
      icon: MdCleaningServices,
      getText: (val) =>
        val ? "Please tidy up and clean before checkout." : null,
    },
    extra_guest_fee: {
      icon: MdMoney,
      getText: (val) =>
        val
          ? `Each extra guest will incur a fee of ₦${Number(
              val
            ).toLocaleString()}.`
          : null,
    },
    visitors_allowed: {
      icon: MdPerson,
      getText: (val) =>
        val
          ? "Visitors are allowed during your stay."
          : "Visitors are not allowed.",
    },
    check_in: {
      icon: MdAccessTime,
      getText: (val) => (val ? `Check-in starts at ${val}.` : null),
    },
    check_out: {
      icon: MdAccessTime,
      getText: (val) => (val ? `Check-out is by ${val}.` : null),
    },
    max_guests: {
      icon: MdPerson,
      getText: (val) =>
        val ? `Max number of guests allowed is ${val}.` : null,
    },
  };

  return (
    <section className="mt-12">
      <h3 className="text-primary font-bold text-xl lg:text-2xl xl:text-[32px] lg:-tracking-[1.9px] mb-4">
        House Rules
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(rules).map(([key, value]) => {
          const rule = ruleDefinitions[key];
          if (!rule) return null;

          const text = rule.getText(value);
          if (!text) return null;

          const Icon = rule.icon;

          return (
            <div
              key={key}
              className="flex items-center gap-4 bg-secondaryLight p-4 rounded-[15px]"
            >
              <span className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                <Icon size={24} className="text-secondary" />
              </span>
              <span className="text-lg font-medium">{text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
