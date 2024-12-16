import React from 'react';
import { useTheme } from '../../utility/TjemeContext';
import './writerone.css';
interface WriterOne {
  children: React.ReactNode;
}

const Writerone: React.FC<WriterOne> = ({ children }) => {
 const {isDarkMode} = useTheme()
  return (
    <>
<div className = "container">
  <h1 className='little'>Group group = New Group( ); presentano</h1>
  <h1 className='great'>{children}</h1>
</div>

<div>

</div>
    </>
  );
};



export default Writerone;