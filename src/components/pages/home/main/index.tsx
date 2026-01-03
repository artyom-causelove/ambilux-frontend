'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Image from 'next/image';

import styles from '@/components/pages/home/main/home-main.module.scss';
import ContactUs from '@/components/contact-us';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export default function HomeMain() {
  const router = useTransitionRouter();
  const [data, setData] = useState([]);
  const match = useMediaQuery('(max-width: 925px)');

  useEffect(() => {
    fetch('https://ambilux.com/api/objects')
      .then(response => response.json())
      .then(parsed => setData(parsed));
  }, []);

  const slideInOut = () => {
    document.documentElement.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-100%)' }
    ], {
      pseudoElement: '::view-transition-old(body)',
      easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
      fill: 'forwards',
      duration: 700
    });

    document.documentElement.animate([
      { transform: 'translateX(100%)' },
      { transform: 'translateX(0)' }
    ], {
      pseudoElement: '::view-transition-new(body)',
      easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
      fill: 'forwards',
      duration: 700
    });
  };

  const getLink = (item: any, className: any, child: any) => {
    if (item.page === 'page') return <a
      onClick={(e) => {
        e.preventDefault();
        router.push(`objects/${encodeURIComponent(item.path)}`, {
          onTransitionReady: slideInOut
        });
      }}
      className={className}>
        {child}
    </a>;

    if (item.page === 'file') return <a className={className} href={`https://ambilux.com/api/${item.files[0].path}`} target='_blank'>{child}</a>;

    return <a className={className} href={item.link} target='_blank'>{child}</a>;
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        {data.map((item: any) => 
          <div className={`${styles.item} ${item.reverse && styles.reverse}`} key={item.id}>
            <div className={styles.itemInfo}>
              {item.type && getLink(item, styles.itemType, <span>{item.type}</span>)}
              {item.title && getLink(item, styles.itemTitle, <span>{item.title}</span>)}
              {item.address && getLink(item, styles.itemAddress, <span>{item.address}</span>)}
              <div className={styles.itemSeparator}></div>
              {item.timeline && <span className={styles.itemTimeline}>{item.timeline}</span>}
              {item.description && <span className={styles.itemDescription}>{item.description}</span>}
              {item.size && <span className={styles.itemSize}>{item.size}</span>}
              {item.capacity && <span className={styles.itemCapacity}>{item.capacity}</span>}
              {item.square && <span className={styles.itemSquare}>{item.square}</span>}
            </div>
            <div
              className={styles.itemPictureWrapper}
              style={match ? {
                width: '100%',
                aspectRatio: `${item.picture.width} / ${item.picture.height}`
              }: {
                width: item.picture.width,
                minHeight: item.picture.height
              }}
            >
              {
                getLink(
                  item,
                  null,
                  <Image
                    className={styles.itemPicture}
                    src={`https://ambilux.com/api/${item.picture.path}`}
                    alt={item.title}
                    fill
                  />
                )
              }
            </div>
          </div>
        )}
      </div>
      <ContactUs/>
    </main>
  );
}