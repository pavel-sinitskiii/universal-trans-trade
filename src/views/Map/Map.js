import {useEffect, createRef} from 'react';

import './Map.css';

const Map = () => {
  const wrapperRef = createRef();

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad81d4b011147dfa44b395ce09036aebd791e5ec4c5a32a7fa1d800ce4f10e891&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false";
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
  
    wrapperRef.current.appendChild(script);
  }, []);

  return (
    <section className='map'>
      <div className='wrap__map' ref={wrapperRef} />
    </section>
  );
};

export default Map;
