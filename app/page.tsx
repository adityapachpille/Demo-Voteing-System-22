"use client";

import { useRef, useState } from "react";

const SoundCheck = () => {
  const buttonSoundRef = useRef<HTMLAudioElement | null>(null);
  const otherButtonSoundRef = useRef<HTMLAudioElement | null>(null);

  const [activeRow, setActiveRow] = useState<number | null>(null);

  // 👉 Convert English numbers → Marathi numbers
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
    buttonSoundRef.current?.pause();
    buttonSoundRef.current!.currentTime = 0;
    buttonSoundRef.current?.play();
    setActiveRow(index);
  };

  const playOtherButtonSound = (index: number) => {
    otherButtonSoundRef.current?.pause();
    otherButtonSoundRef.current!.currentTime = 0;
    otherButtonSoundRef.current?.play();
    setActiveRow(index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-4 md:px-24 py-6 text-black dark:text-white">
      <h1 className="text-center text-xl font-bold mb-4 pt-2">
        छत्रपती संभाजीनगर महानगरपालिका सार्वत्रिक निवडणूक - २०२६ डमी मतदान यंत्र
      </h1>

      <div className="text-center mb-4 pt-2">
        <span className="bg-blue-700 font-bold text-white px-4 py-2 inline-block rounded-full">
          डेमो मतदानासाठी धनुष्यबाण या निशाणी समोरील बटन दाबावे
        </span>
      </div>

      <div className="text-center mb-4 pt-2">
        <span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded dark:bg-yellow-300">
         शिवसेना (शिंदे गट) पक्षाचे प्रभाग क्र. २ (अ) चे अधिकृत उमेदवार
        </span>
      </div>

      <div className="overflow-x-hidden">
        <table className="w-full border-2 border-gray-400 dark:border-gray-600 table-auto md:table-fixed">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border-2 border-gray-400 w-10 px-2 py-1 text-center text-xs font-bold">
                अनु. क्र.
              </th>
              <th className="border-2 border-gray-400 px-4 py-1 text-center text-xs font-bold min-w-[110px]">
                नाव
              </th>
              <th className="border-2 border-gray-400 px-2 py-1 text-center text-xs font-bold">
                फोटो
              </th>
              <th className="border-2 border-gray-400 px-2 py-1 text-center text-xs font-bold">
                निशाणी
              </th>
              <th className="border-2 border-gray-400 px-2 py-1 text-center text-xs font-bold">
                बत्ती
              </th>
              <th className="border-2 border-gray-400 px-2 py-1 text-center text-xs font-bold">
                बटन
              </th>
            </tr>
          </thead>

          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                <td className="border-2 border-gray-400 text-center font-bold text-sm">
                  {toMarathi(index + 1)}
                </td>

                <td className="border-2 border-gray-400 text-center font-bold text-sm">
                  {index === 4 ? "रेणुका रविकांत पाचुंदे" : ""}
                </td>

                <td className="border-2 border-gray-400 text-center">
                  {index === 4 ? (
                    <img
                      src="/user.png"
                      alt="candidate"
                      className="w-12 h-12 mx-auto object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 mx-auto" />
                  )}
                </td>

                <td className="border-2 border-gray-400 text-center">
                  {index === 4 ? (
                    <img
                      src="/symbol-bartan.png"
                      alt="symbol"
                      className="w-10 h-10 mx-auto object-contain"
                    />
                  ) : (
                    <div className="w-10 h-10 mx-auto" />
                  )}
                </td>

                <td className="border-2 border-gray-400 text-center bg-white dark:bg-gray-800">
                  <div
                    className={`w-5 h-5 rounded-full mx-auto ${
                      activeRow === index
                        ? "bg-red-600"
                        : "bg-gray-300 dark:bg-gray-500"
                    }`}
                  />
                </td>

                <td className="border-2 border-gray-400 text-center bg-white dark:bg-gray-800">
                  <button
                    onClick={() =>
                      index === 4
                        ? playButtonSound(index)
                        : playOtherButtonSound(index)
                    }
                    className={`rounded-full w-10 h-6 md:w-14 md:h-7 ${
                      index === 4 ? "bg-green-500" : "bg-blue-700"
                    }`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-center text-xl font-bold mb-4 mt-6">
        <span className="text-red-600">धनुष्यबाण </span> या निशाणी समोरील बटन दाबून{" "}
        <span className="text-red-600">रेणुका रविकांत पाचुंदे </span> यांना
        प्रचंड बहुमतांनी विजय करा.
      </h1>

      <div className="text-center mb-4 pt-2">
        <span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded">
          मतदान - गुरुवार, दि. १५ जानेवारी २०२६ सकाळी ७:३० ते सायंकाळी ५.३० वाजेपर्यंत.
        </span>
      </div>

      <audio ref={buttonSoundRef} src="/sound1.mp3" />
      <audio ref={otherButtonSoundRef} src="/sound2.mp3" />
    </section>
  );
};

export default SoundCheck;
