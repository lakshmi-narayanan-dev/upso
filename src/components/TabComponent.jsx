import React, { useState } from 'react';

const TabContent = ({ tabNumber, images }) => (
  <div className={`section-012-content-div ${tabNumber === 1 ? 'active' : ''}`} data-tab={tabNumber}>
    {images.map((image, index) => (
      <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
        <img src={image.src} alt="Image content" title="Image title" />
      </a>
    ))}
  </div>
);

const TabButtons = ({ tabs, activeTab, onTabClick }) => (
  <div className="tab-buttons">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
        onClick={() => onTabClick(tab.id)}
        data-tab={tab.id}
      >
        <span>{tab.label}</span>
      </button>
    ))}
  </div>
);

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1, label: 'FEATURED PRODUCTS', images: [
        { link: 'https://www.bazilapearls.com/products/bzsp0002', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab1-1.jpg' },
        { link: 'https://www.bazilapearls.com/products/bzsr0018', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab1-2.jpg' },
        { link: 'https://www.bazilapearls.com/products/bzsp0004', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab1-3.jpg' },
      ]
    },
    {
      id: 2, label: 'ELITE EARRINGS', images: [
        { link: 'https://www.bazilapearls.com/products/bzse0002', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab2-1.jpg?v=1729936191' },
        { link: 'https://www.bazilapearls.com/products/bzse0010', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab2-2.jpg?v=1729936191' },
        { link: 'https://www.bazilapearls.com/products/bzse0003', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab2-3.jpg?v=1729936190' },
      ]
    },
    {
      id: 3, label: 'ROYAL PEARLS', images: [
        { link: 'https://www.bazilapearls.com/products/bzsn0002', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab3-1.jpg?v=1729936468' },
        { link: 'https://www.bazilapearls.com/products/bzsn0006', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab3-2.jpg?v=1729936468' },
        { link: 'https://www.bazilapearls.com/products/bzsn0008', src: 'https://cdn.shopify.com/s/files/1/0662/0948/0893/files/tab3-3.jpg?v=1729936468' },
      ]
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="section-012">
      <TabButtons tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="section-012-contents">
        {tabs.map((tab) => (
          <TabContent key={tab.id} tabNumber={tab.id} images={tab.images} />
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
