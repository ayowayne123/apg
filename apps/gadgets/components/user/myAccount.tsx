"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { getUserProfile, updateUserProfile } from "@calls/userCalls";

export default function MyAccountForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [originalUser, setOriginalUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getUserProfile();
        const formatted = {
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          email: data.email || "",
          phone: data.phone || "",
          password: "********",
          houseNumber: data.billing_house_number || "",
          street: data.billing_street || "",
          city: data.billing_city || "",
          state: data.billing_state || "",
          landmark: data.billing_landmark || "",
        };
        setUser(formatted);
        setOriginalUser(formatted);
      } catch (err: any) {
        toast.error(err.message || "Failed to load user info");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserProfile({
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        phone: user.phone,
        billing_house_number: user.houseNumber,
        billing_street: user.street,
        billing_city: user.city,
        billing_state: user.state,
        billing_landmark: user.landmark,
      });
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (err: any) {
      toast.error(err.message || "Failed to update profile");
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (!user) return <p className="text-center text-red-500">No user found.</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Banner */}
      <div className="h-[200px] w-full bg-primary rounded-2xl relative ">
        <div className="absolute -bottom-16 left-12 bg-apgLightYellow rounded-3xl flex items-center justify-center h-[170px] w-[160px] shadow-md">
          <div className="relative h-[120px] w-[120px]">
            <Image
              src="/images/vrMan.png"
              alt="Profile picture"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Personal details */}
      <section>
        <h4 className="text-xl font-semibold mb-4">Personal details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: "First name", name: "firstName" },
            { label: "Last name", name: "lastName" },
            { label: "Email address", name: "email" },
            { label: "Phone number", name: "phone" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-sm mb-1 text-gray-700">
                {label}
              </label>
              <input
                name={name}
                value={user[name] || ""}
                onChange={handleChange}
                disabled={!isEditing}
                className="input"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Billing details */}
      <section>
        <h4 className="text-xl font-semibold mb-4">Billing details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: "House Number", name: "houseNumber" },
            { label: "Street", name: "street" },
            { label: "City", name: "city" },
            { label: "State", name: "state" },
            { label: "Closest landmark", name: "landmark" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-sm mb-1 text-gray-700">
                {label}
              </label>
              <input
                name={name}
                value={user[name] || ""}
                onChange={handleChange}
                disabled={!isEditing}
                className="input"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      {!isEditing ? (
        <div
          onClick={() => setIsEditing(true)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full transition-all duration-300 w-40 flex items-center justify-center hover:cursor-pointer"
        >
          Edit profile
        </div>
      ) : (
        <>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition-all duration-300 w-40 flex items-center justify-center hover:cursor-pointer"
          >
            Update profile
          </button>

          <div
            onClick={() => {
              setUser(originalUser);
              setIsEditing(false);
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 rounded-full transition-all duration-300 w-40 flex items-center justify-center hover:cursor-pointer"
          >
            Cancel
          </div>
        </>
      )}
    </form>
  );
}
