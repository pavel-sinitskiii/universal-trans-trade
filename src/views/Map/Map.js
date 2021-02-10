import {useEffect, createRef} from 'react';

import './Map.css';

const Map = () => {
  const wrapperRef = createRef();

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acff40df89b07007da32d2c44e63ff892dee23acc84ff77ad06f7aee3c58b8a4d&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=false";
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
