import React from 'react';
import { memo } from 'react';



const Header = ({resim}) => {
  console.log('HEADER COMPONENT RENDERED');
  return (
    <div className="header">
      <img
        src={resim}
        alt="cw_logo"
        style={{ margin: '1rem', maxHeight: '200px' }}
      />
    </div>
  );
};

// React.memo sarmallayıcısı sayesinde header componentinde değişiklik olmadığı sürece yeni bir render gerçekleşmez, eğer bu comp.te bir değişiklik yaparsanız, o zaman tekrar render olur
export default memo(Header);

