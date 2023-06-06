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
//? React.memo sarmallayicisi sayesinde header componentinde degisiklik olmadigi surece yeni bir render gerceklesmez ,
//? eger bu componente bir degisiklik yaparsaniz tekrar render olur.

export default memo(Header);

