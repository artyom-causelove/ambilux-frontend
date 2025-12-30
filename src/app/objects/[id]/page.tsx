'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { useMediaQuery } from 'usehooks-ts';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function Object() {
  const params = useParams();
  
  const match = useMediaQuery('(max-width: 925px)');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://158.160.34.62:3001/objects/${params.id}`)
      .then(response => response.json())
      .then(parsed => setData(parsed));
  }, []);

  return (
    <div className={styles.wrapper}>
      {data?.files.map((file: any) => 
        <div className={styles.imageWrapper} key={file.id} style={match
          ? { width: '100%', aspectRatio: `${file.width} / ${file.height}` }
          : { width: file.width, height: file.height }
        }>
          <Image
            className={styles.image}
            alt='Object picture'
            src={`http://158.160.34.62:3001/${file.path}`}
            fill
          />
        </div>
      )}
    </div>
  );
}
