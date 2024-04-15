import {useEffect, useState} from 'react';

export enum WeatherConditionAnimationPath {
  ConditionIcons = './iconsAnimationData',
}

export const useAnimationData = (fileName: string, filepath: WeatherConditionAnimationPath) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [animation, setAnimation] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (filepath === WeatherConditionAnimationPath.ConditionIcons) {
          const response = await import(`./iconsAnimationData/${fileName}.json`);
          setAnimation(response.default);
        }
      } catch (err) {
        console.error(err);
        throw new Error('Error in useImage hook.');
      } finally {
        setLoading(false);
      }
    };

    // tslint:disable-next-line: no-floating-promises
    fetchImage();
  }, [fileName]);

  return {
    loading,
    animation,
  };
};
