import './anarchWatch.css';
import { lazy, Suspense } from 'react';
const AnarcSection1 = lazy(() => import('./sections/AnarcSection1'));
const AnarcSection2 = lazy(() => import('./sections/AnarcSection2'));
const AnarcSection3 = lazy(() => import('./sections/AnarcSection3'));
const AnarcSection4 = lazy(() => import('./sections/AnarcSection4'));

const AnarcWatch = () => {
  return (
    <div className="anarch-Main">
      <Suspense fallback={<div className="loader">Loading Section 1...</div>}>
        <AnarcSection1 />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Section 2...</div>}>
        <AnarcSection2 />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Section 3...</div>}>
        <AnarcSection3 />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Section 4...</div>}>
        <AnarcSection4 />
      </Suspense>
    </div>
  );
};

export default AnarcWatch;
