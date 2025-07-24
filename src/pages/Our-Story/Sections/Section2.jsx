// Section2.jsx
import '../ourStory.css';
import { useRef } from 'react';
import { journeyData } from '../jorneyData';
import useJourneyAnimation from '../SectionAnimations/useSection2Animation';

const Section2 = () => {
  const sectionRef = useRef(null);
  useJourneyAnimation(sectionRef);

  return (
    <div className="ourStory-section2" ref={sectionRef}>
      <div className="sec2-top">
        <h1>my journey</h1>
        <h3>From uploading the first video to launching startups and hitting 12M+ subs—here's the story.</h3>
      </div>
      <div className='sec2-jurney'>
        <div className='line'></div>
        {journeyData.map((item, i) => (
          <div className='jorney-cart' key={i}>
            <div className='jorCart-top'>
              <i className={item.iconClass}></i>
              <div className='jorCartTop-right'>
                <h3>{item.year}</h3>
                <h1>{item.title}</h1>
              </div>
            </div>
            <div className='jorCart-bottom'>
              <h3>{item.description}</h3>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
