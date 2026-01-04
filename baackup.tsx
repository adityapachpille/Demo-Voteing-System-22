"use client";
import { useRef, useState } from 'react';

const SoundCheck = () => {
  const buttonSoundRef = useRef(null);
  const otherButtonSoundRef = useRef(null);
  const [activeRow, setActiveRow] = useState(null); // Track which row's bulb should be red

  const playButtonSound = (index) => {
    buttonSoundRef.current.play();
    setActiveRow(index); // Set red light for the clicked row
  };

  const playOtherButtonSound = (index) => {
    otherButtonSoundRef.current.play();
    setActiveRow(index); // Set red light for the clicked row
  };

  const handleWhatsAppShare = () => {
    const url = "https://example.com"; // Replace with the URL you want to share
    const message = `Check out this voting system: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className='px-24'>
    <div className="p-4">
      <h1 className="text-center text-xl font-bold mb-4">
        98 - पाथरी विधानसभा सार्वत्रिक निवडणूक 2024 डमी मतदान यंत्र
      </h1>
      <div className="text-center mb-4">
        <button onClick={() => playButtonSound(-1)} className="bg-blue-700 text-white px-4 py-2 rounded-full">
          डेमो मतदानासाठी शिटी निसरणी समोरील निळे बटन दबावे
        </button>
      </div>
      <div className="text-center mb-4">
        <p className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded">
          मतदानाच्या दिवशी सुद्धा शिट्टी समोरील निळे बटण दाबावे
        </p>
        <button
          onClick={handleWhatsAppShare}
          className="bg-green-500 text-white px-4 py-2 ml-4 rounded-full"
        >
          WhatsApp SHARE
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">S.No.</th>
              <th className="border px-4 py-2">Name of Candidate</th>
              <th className="border px-4 py-2">Election Symbol</th>
              <th className="border px-4 py-2">Bulb</th>
              <th className="border px-4 py-2">Button</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(14)].map((_, index) => (
              <tr key={index} className={index === 2 ? "bg-yellow-200" : ""}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">
                  {index === 2 ? (
                    <span className="text-green-600 font-bold">खान सईद (गब्बर)</span>
                  ) : ""}
                </td>
                <td className="border px-4 py-2 text-center">
                  <div
                    className={`w-6 h-6 rounded-full mx-auto ${
                      activeRow === index ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                  ></div>
                </td>
                <td className="border px-4 py-2 text-center">
                  <span>←</span>
                </td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => (index === 2 ? playButtonSound(index) : playOtherButtonSound(index))}
                    className={`${
                      index === 2 ? "bg-green-500" : "bg-blue-700"
                    } text-white px-4 py-2 rounded-full`}
                  >
                    {index === 2 ? "बटन डबा" : ""}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Audio elements for sounds */}
      <audio ref={buttonSoundRef} src="/sound1.wav" />
      <audio ref={otherButtonSoundRef} src="/sound2.wav" />
    </div>

    </section>
  );
};


export default SoundCheck;