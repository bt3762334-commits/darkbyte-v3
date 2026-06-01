"use client";

export default function CopyPhone() {

  const copyPhone = () => {

    navigator.clipboard.writeText(
      "+201091291823"
    );

    alert("Phone Copied");
  };

  return (
    <button
      onClick={copyPhone}
      className="bg-cyan-500 px-6 py-3 rounded-xl"
    >
      Copy Phone Number
    </button>
  );
}
