"use client";
import { useRef, useState } from "react";

const SoundCheck = () => {
  const buttonSoundRef = useRef<HTMLAudioElement | null>(null);
  const otherButtonSoundRef = useRef<HTMLAudioElement | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const playButtonSound = (index: number) => {
    try {
      buttonSoundRef.current?.play();
    } catch (e) {
      console.warn("sound play failed", e);
    }
    setActiveRow(index);
  };

  const playOtherButtonSound = (index: number) => {
    try {
      otherButtonSoundRef.current?.play();
    } catch (e) {
      console.warn("sound play failed", e);
    }
    setActiveRow(index);
  };

  return (
    <section className="bg-gray-100 px-4 md:px-24 py-6">
      <h1 className="text-center text-xl font-bold mb-4 pt-2">
        मंगरूळपीर नगर परिषद सार्वत्रिक निवडणूक-२०२५ डमी मतदान यंत्र
      </h1>

      <div className="text-center mb-4 pt-2">
        <span className="bg-blue-700 font-bold text-white px-4 py-2 inline-block rounded-full">
          डेमो मतदानासाठी कमळ निशाणी समोरील निळे बटन दबावे
        </span>
      </div>

      <div className="text-center mb-4 pt-2">
        <span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded">
          प्रभाग क्र. १५ (अ) चे अधिकृत उमेदवार
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-2 px-3 py-2 text-center">क्रमांक</th>
              <th className="border-2 px-3 py-2 text-center">उमेदवाराचे नाव</th>
              <th className="border-2 px-3 py-2 text-center">उमेदवार फोटो</th>
              <th className="border-2 px-3 py-2 text-center">निशाणी</th>
              <th className="border-2 px-3 py-2 text-center">बत्ती</th>
              <th className="border-2 px-3 py-2 text-center">मतदान बटन</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(9)].map((_, index) => (
              <tr key={index}>
                {/* Serial No */}
                <td className="border-2 px-4 py-3 text-center font-bold">
                  {index + 1}
                </td>

                {/* Candidate Name */}
                <td className="border-2 px-4 py-3 text-center font-bold">
                  {index === 4 ? "अर्जुन सिंह गौड" : index === 8 ? "नोटा" : ""}
                </td>

                {/* Photo */}
                <td className="border-2 px-4 py-2 text-center">
                  {index === 4 ? (
                    <img
                      src="/user.png"
                      className="w-12 h-12 mx-auto object-cover"
                      alt="candidate"
                    />
                  ) : (
                    <div className="w-12 h-12 mx-auto" />
                  )}
                </td>

                {/* Symbol */}
                <td className="border-2 px-4 py-3 text-center">
                  {index === 4 ? (
                    <img
                      src="/symbol-bartan.png"
                      className="w-12 h-12 mx-auto object-contain"
                      alt="symbol"
                    />
                  ) : (
                    <div className="w-12 h-12 mx-auto" />
                  )}
                </td>

                {/* Bulb */}
                <td className="border-2 px-4 py-3 text-center">
                  <div
                    className={`w-6 h-6 rounded-full mx-auto ${
                      activeRow === index ? "bg-red-600" : "bg-gray-300"
                    }`}
                  ></div>
                </td>

                {/* Button */}
                <td className="border-2 px-4 py-3 text-center">
                  <button
                    onClick={() =>
                      index === 4 || index === 8
                        ? playButtonSound(index)
                        : playOtherButtonSound(index)
                    }
                    className={`w-16 h-8 rounded-full ${
                      index === 4 ? "bg-green-500" : "bg-blue-700"
                    }`}
                    aria-label={
                      index === 4
                        ? "Vote for अर्जुन"
                        : index === 8
                        ? "Vote for NOTA"
                        : `Vote for candidate ${index + 1}`
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-center text-xl font-bold mb-4 mt-6">
        कमळ या निशाणी समोरील बटन दाबून अर्जुन सिंह गौड यांना प्रचंड बहुमतांनी
        विजय करा.
      </h1>

      <div className="text-center mb-4 pt-2">
        <span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded">
          मतदान - मंगळवार दि. २ डिसेंबर २०२५ रोजी सकाळी ७ ते सायं ६ वाजे पर्यंत.
        </span>
      </div>

      {/* Audio */}
      <audio ref={buttonSoundRef} src="/sound1.mp3" />
      <audio ref={otherButtonSoundRef} src="/sound2.mp3" />
    </section>
  );
};

export default SoundCheck;
