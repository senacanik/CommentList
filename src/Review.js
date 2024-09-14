import React, { useState } from 'react';
// React ve useState hook'unu import ediyoruz.
import people from './data';
// Data dosyasından 'people' verisini import ediyoruz.
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
// React Icons'dan gerekli ikonları import ediyoruz.

const Review = () => {
  // Review fonksiyonel bileşenini tanımlıyoruz.
  const [index, setIndex] = useState(0);
  // İndeks değerini ve setter fonksiyonunu tanımlıyoruz, başlangıç değeri 0.
  const { name, job, image, text } = people[index];
  // Şu anki kişinin bilgilerini 'people' dizisinden alıyoruz.

  const checkNumber = (number) => {
    // Verilen numarayı kontrol eden yardımcı fonksiyon.
    if (number > people.length - 1) {
      return 0; // Eğer numara dizinin sınırından büyükse, sıfıra dön.
    }
    if (number < 0) {
      return people.length - 1; // Eğer numara sıfırdan küçükse, son elemana dön.
    }
    return number; // Geçerli numarayı döndür.
  };

  const nextPerson = () => {
    // Bir sonraki kişiyi gösteren fonksiyon.
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex); // Yeni indeks geçerli sınırlar içinde mi kontrol et.
    });
  };

  const prevPerson = () => {
    // Bir önceki kişiyi gösteren fonksiyon.
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex); // Yeni indeks geçerli sınırlar içinde mi kontrol et.
    });
  };

  const randomPerson = () => {
    // Rastgele bir kişiyi seçen fonksiyon.
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1; // Eğer rastgele numara mevcut indekse eşitse, bir artır.
    }
    setIndex(checkNumber(randomNumber)); // Yeni rastgele indeksi kontrol et ve ayarla.
  };

  return (
    <article className='review'>
      {/* Yorumları ve kişinin bilgilerini içeren ana bölüm */}
      <div className='img-container'>
        {/* Kişinin resmini ve alıntı simgesini içeren kapsayıcı */}
        <img src={image} alt={name} className='person-img' />
        {/* Kişinin resmini göster */}
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
        {/* Alıntı simgesini göster */}
      </div>
      <h4 className='author'>{name}</h4>
      {/* Kişinin adını göster */}
      <p className='job'>{job}</p>
      {/* Kişinin işini veya pozisyonunu göster */}
      <p className='info'>{text}</p>
      {/* Kişinin yorumunu veya bilgilerini göster */}
      <div className='button-container'>
        {/* Önceki ve sonraki düğmeleri içeren kapsayıcı */}
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        {/* Önceki kişiye geçmek için düğme */}
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        {/* Sonraki kişiye geçmek için düğme */}
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
      {/* Rastgele bir kişiyi göstermek için düğme */}
    </article>
  );
};

export default Review;
// Review bileşenini dışa aktar
