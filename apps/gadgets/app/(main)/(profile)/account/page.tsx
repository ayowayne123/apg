"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function MyAccountPage() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    firstName: "Ayomide",
    lastName: "Johnson",
    email: "ayomidejohnson@email.com",
    phone: "+234 812 345 6789",
    password: "********",
    houseNumber: "12B",
    street: "Adeola Odeku Street",
    city: "Lagos",
    state: "Lagos State",
    landmark: "Eko Hotel Roundabout",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

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
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              First name
            </label>
            <input
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Last name
            </label>
            <input
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Email address
            </label>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Phone number
            </label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>
        </div>
      </section>

      {/* Security details */}
      <section>
        <h4 className="text-xl font-semibold mb-4">Security details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm mb-1 text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>
        </div>
      </section>

      {/* Billing details */}
      <section>
        <h4 className="text-xl font-semibold mb-4">Billing details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              House Number
            </label>
            <input
              name="houseNumber"
              value={user.houseNumber}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Street</label>
            <input
              name="street"
              value={user.street}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">City</label>
            <input
              name="city"
              value={user.city}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">State</label>
            <input
              name="state"
              value={user.state}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Closest landmark
            </label>
            <input
              name="landmark"
              value={user.landmark}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>
        </div>
      </section>

      {/* Button */}
      <button
        type={isEditing ? "submit" : "button"}
        onClick={!isEditing ? toggleEdit : undefined}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
      >
        {isEditing ? "Update profile" : "Edit profile"}
      </button>
    </form>
  );
}
