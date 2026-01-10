"use client";
import { useRef, useState } from "react";

const SoundCheck = () => {
  const buttonSoundRef = useRef<HTMLAudioElement | null>(null);
  const otherButtonSoundRef = useRef<HTMLAudioElement | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const toMarathi = (num: number) =>
    num
      .toString()
      .replace(/0/g, "०")
      .replace(/1/g, "१")
      .replace(/2/g, "२")
      .replace(/3/g, "३")
      .replace(/4/g, "४")
      .replace(/5/g, "५")
      .replace(/6/g, "६")
      .replace(/7/g, "७")
      .replace(/8/g, "८")
      .replace(/9/g, "९");

  const playButtonSound = (index: number) => {
    buttonSoundRef.current?.play();
    setActiveRow(index);
  };

  const playOtherButtonSound = (index: number) => {
    otherButtonSoundRef.current?.play();
    setActiveRow(index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-4 md:px-24 py-6 text-black dark:text-white">
      <h1 className="text-center text-xl font-bold mb-4 pt-2">
        छत्रपती संभाजीनगर महानगरपालिका सार्वत्रिक निवडणूक - २०२६ डमी मतदान यंत्र
      </h1>

      <div className="overflow-x-hidden">
        <table className="w-full border-2 border-gray-400 table-auto md:table-fixed">
          <thead>
            <tr>
              <th className="border px-2 py-1 text-xs">अनु. क्र.</th>
              <th className="border px-2 py-1 text-xs min-w-[110px]">नाव</th>
              <th className="border px-2 py-1 text-xs">फोटो</th>
              <th className="border px-2 py-1 text-xs">निशाणी</th>
              <th className="border px-2 py-1 text-xs">बत्ती</th>
              <th className="border px-2 py-1 text-xs">बटन</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="bg-[#9fdaeb]">
                <td className="border text-center font-bold">
                  {toMarathi(index + 1)}
                </td>

                <td className="border text-center font-bold min-w-[110px] break-words">
                  {index === 3 ? "रेणुका रविकांत पाचुंदे" : ""}
                </td>

                <td className="border text-center">
                  {index === 3 && (
                    <img src="/user.png" className="w-12 h-12 mx-auto" />
                  )}
                </td>

                <td className="border text-center">
                  {index === 3 && (
                    <img
                      src="/symbol-bartan.png"
                      className="w-10 h-10 mx-auto"
                    />
                  )}
                </td>

                <td className="border text-center bg-white">
                  <div
                    className={`w-5 h-5 rounded-full mx-auto ${
                      activeRow === index ? "bg-red-600" : "bg-gray-300"
                    }`}
                  />
                </td>

                <td className="border text-center bg-white">
                  <button
                    onClick={() =>
                      index === 3
                        ? playButtonSound(index)
                        : playOtherButtonSound(index)
                    }
                    className={`rounded-full w-14 h-7 ${
                      index === 3 ? "bg-green-500" : "bg-blue-700"
                    }`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <audio ref={buttonSoundRef} src="/sound1.mp3" />
      <audio ref={otherButtonSoundRef} src="/sound2.mp3" />
    </section>
  );
};

export default SoundCheck;
