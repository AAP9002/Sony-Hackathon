import { useEffect, useRef, useState } from 'react';

function CameraDropdown(props) {
    const [isListOpen, setIsListOpen] = useState(false);
    const [toggleList, setToggleList] = useState(false);
    const [headerTitle, setHeaderTitle] = useState(props.name);

    toggleList = () => {
        setIsListOpen(!isListOpen);
     }

    return (
        // <div className="dd-wrapper">
        //   <button
        //     type="button"
        //     className="dd-header"
        //     onClick={this.toggleList}
        //   >
        //     <div className="dd-header-title">{headerTitle}</div>
        //     {isListOpen
        //       ? <p> hi </p>
        //       : <p> hi </p>}
        //   </button>
        //   {isListOpen && (
        //     <div
        //       role="list"
        //       className="dd-list"
        //     >
        //     <button
        //           type="button"
        //           className="dd-list-item"
        //         >
        //         </button>
        //     </div>
        //   )}
        // </div>
        <p>fds</p>
      )
}

export default CameraDropdown;